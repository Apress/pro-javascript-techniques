// Look for thickboxes when the DOM is ready
$(document).ready(function(){

    // add thickbox to href elements that have a class of .thickbox
    $("a.thickbox").click(function(){
        // Figure out the caption for the thickbox
        var t = this.title || this.name || this.href || null;

        // Display the thickbox
        TB_show(t,this.href);

        // Remove the focus from the link
        this.blur();

        // Make sure that the link doesn't work as normal
        return false;
    });

});

