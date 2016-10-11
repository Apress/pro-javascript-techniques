// Get the name of the current page
var $s = window.location.search;
$s = $s.substr(1,$s.length);

// Determine if a revision number
// was provided - if so, remember it's ID
var $r = false;

// Revisions are provided in the format
// ?Title&RevisionID
var tmp = $s.split("&");
if ( tmp.length > 1 ) {
  $s = tmp[0];
  $r = tmp[1];
}

// Go to the homepage, if no page is provided
if (!$s) window.location = "?HomePage";

// Set the name of the database
var db = "wiki";

// We need to wait for the DOM to finish loading
$(document).ready(function(){

  // Set the title of the page
  document.title = $s;
  $("h1").html($s);

  // Load in all the wiki revisions
  reload();

  // If the 'edit page' link is clicked
  $("#edit").click(showForm);

  // When the user submits a new revision
  $("#post form").submit(function(){
    // Get the author name
    var author = $("#author").val();

    // Get the text
    var text = $("#text").val();

    // Render the contents
    $("#content").html(textile(text));

    // Make the current revision the time
    // (this helps with highlighting)
    $r = (new Date()).getTime();

    // Insert the revision into the database
    sqlExec("INSERT INTO wiki VALUES(?,?,?,?);",
      [$s,author,text,$r], reload);

    return false;
  });

  // If the user clicked the 'cancel' link
  // inside the editing area
  $("#cancel").click(showContent);
});

// Show the current revision
function showContent() {
  // Show the edit link
  $("#edit,#cancel").css("display","inline");

  // Hide the editing area
  $("#post").hide();

  // Show the content
  $("#content").show();

  return false;
}

// Show the form to edit the current revision
function showForm() {
  // Hide the edit link
  $("#edit").hide();

  // Show the editing area
  $("#post").show();

  // Hide the content
  $("#content").hide();

  return false;
}


// Load all of the revisions from the database
function reload(t) {
  // Request all the revisions
  sqlExec("SELECT * FROM wiki WHERE title=? ORDER BY date DESC;", [$s],
    function(sql) {
      // If revisions exist for this wiki
      if ( sql.length > 0 ) {
        if ( !$r ) $r = sql[0].date;

        // Show the wiki page
        showContent();

        // Show all the revisions
        $("#side ul").html('');

        // Go through each of the revisions
        for ( var i = 0; i < sql.length; i++ ) {

          // If this revision is the one currently being displayed
          if ( sql[i].date == $r ) {

            // Render the revision
            $("#content").html(textile(sql[i].content));

            // Make the revision contents editable
            $("textarea").val( sql[i].content );

          }

          // Get a workable date object
          var d = new Date(sql[i].date);

          // Figure out if the revision was made within the last day, or not
          if ( d.getTime() > (new Date()).getTime() - (3600 * 24000) )

            // If it was, make a nice am/pm time
            d = d.getHours() >= 12 ?
              (d.getHours() != 12 ? d.getHours() - 12 : 12 ) + " pm" :
              d.getHours() + " am";

          // Otherwise, display the month and day of the revision
          else {
            var a = d.toUTCString().split(" ");
            d = a[2] + " " + d.getDate();
          }

          // Add the revision to the revision list
          $("#side ul").append("<li class='" + ( $r == sql[i].date ? "cur" : "" )
              + "'><a href='?" + $s + ( i > 0 ? "&" + sql[i].date : "" )
              + "'>" + d + "</a> by " + sql[i].author + "</li>");
        }

      // Otherwise, this page has never been revised
      } else {
        // Say so in the revision panel
        $("#rev").html("<li>No Revisions.</li>");

        // Hide the editing controls
        $("#edit,#cancel").hide();

        // Show the default editing form
        showForm();
      }
    });
}
