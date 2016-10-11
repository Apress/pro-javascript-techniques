// Attach to the beforeunload handler
window.onbeforeunload = function(){

    // Return an explanation for why the user should not leave the page.
    return “Your data will not be saved.”;

};
