// Submit the query to the server 
$.post( apiURL, { db: db, sql: q }, function(j) {
    // When the results come back evaluate them and remember the result
    eval("var j = " + j);

    // If a callback was specified by the user, send the data back
    if (callback) callback(j);
});
