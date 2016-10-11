// Find all input fields that have been marked as required	
$("input.required")
    // then locate the previous label
    .prev("label")

    // Change the cursor, over the label, to being more helpful
    .css("cursor", "help")

    // Make it so that when the user hovers their mouse over, a description
    // of the * is explained
    .title( errMsg.required )

    // Finally, add a * at the end of the label, to signify the field as being required
    .append(" <span class='required'>*</span>");

