// Request all the revisions for the current wiki page
// Once loaded, return the data to the ‘loaded’ function.
sqlExec("SELECT * FROM wiki WHERE title=? ORDER BY date DESC;", [$s], loaded);

// Handle the SQL results coming back from the server
function loaded(sql) {
    // If revisions exist for this wiki
    if ( sql.length > 0 ) {
        // Show the wiki page
        showContent();

        // Render the revision, using textile
        $("#content").html(textile(sql[0].content));

        // Make the revision contents editable
        $("textarea").val( sql[0].content );

    // Otherwise, if no revisions exist, show a ‘create me’ form
    } else {
        // Show the default editing form instead
        showForm();
    }
}
