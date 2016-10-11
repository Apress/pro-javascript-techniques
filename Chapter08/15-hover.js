// Find all input elements that are after labels that have a class of hover
$("label.hover+input")

    // Wrap a div (with a class of hover-wrap) around the input element,
    // resulting in HTML that looks like:
    // <div class='hover-wrap'><input type="text" …/></div>
    .wrap("<div class='hover-wrap'></div>")
    
    // Whenever the input element is focused upon (either through a click
    // or by keyboard), hide the label 
    .focus(function(){
        $(this).prev().hide();
    })

    // Whenever the user has left the input element (and no text has been
    //  entered into it) reveal the label again.
    .blur(function(){
        if ( !this.value ) $(this).prev().show()
    })

    // Go through each of the input elements individually
    .each(function(){
        // Move the label to go inside of the <div class='hover-wrap'></div>
        $(this).before( $(this).parent().prev() );

        // Make sure that if a value is already in the form, that the label is
        //  automatically hidden
        if ( this.value ) $(this).prev().hide();
    });

