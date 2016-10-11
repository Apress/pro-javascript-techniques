// Insert the revision into the database
sqlExec(
    // A ‘prepared’ SQL statement
    "INSERT INTO wiki VALUES(?,?,?,?);",
    [
        document.title, // The title of the entry
         $(“#author”).val(), // The author value that the user provided
         $(“#text”).val(), // The text of the revision
         (new Date()).getTime() // The exact time of the revision
    ],
    // Reload the revision list, once the query is complete
    reload
);
