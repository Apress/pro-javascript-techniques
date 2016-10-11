// UPDATE THIS VARIABLE
// The URL where your Server-Side script is
var apiURL = "api/perl/";

// Some default global variables
var sqlLoaded = function(){}

// Handle a long SQL Submission
// This function is capable of sending large amounts of
// data (e.g. a large INSERT), but is only able to send
// to locations on the same server as the client
function sqlExec(q, p, callback) {

  // This function also handles dynamic arguments, putting
  // a question mark (?) in your code will replace it with
  // an argument, already nicely quoted and formatted

  // Go through each of the dynamic arguments
  for ( var i = 0; i < p.length; i++ ) {
    // Make sure that it's a string
    p[i] = p[i] + "";

    // Escape all question marks in the argument
    // (Otherwise things get wonky)
    p[i] = p[i].replace(/\?/g, "\\?");

    // Double-single-quote all single quotes (escapes them)
    p[i] = p[i].replace(/'/g, "''");

    // And now replace the first question mark in the
    // query with this argument, nicely quoted
    q = q.replace(/([^\\])\?/, "$1'" + p[i] + "'");
  }

  // Go back through the query and un-escape the extra
  // question marks
  q = q.replace(/\\\?/g, "?");

  // Submit the query to the server
  $.post( apiURL, { db: db, sql: q }, function(j) {

    // When the results come back, we have to eval them
    eval("var j = " + j);

    // If a callback was specified by the user, send the data back
    if (callback) callback(j);

  });

}
