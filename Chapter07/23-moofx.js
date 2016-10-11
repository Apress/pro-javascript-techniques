// A simple animation where an element’s hide is expanded, then
// when completed, contracted again

// moo.fx’s implementation of that particular animation
new fx.Height( “side”, {
    duration: 1000,
    onComplete: function() {
        new fx.Height( “side”, { duration: 1000 } ).hide();
    }
}).show();

// jQuery’s  implementation
$(“#side”).slideDown( 1000, function(){
    $(this).slideUp( 1000 );
});

// Another simple animation where the height, width, and opacity of
// an element are all shrunk (or diminished) together, resulting in a cool
// hiding effect

// moo.fx’s implemention of this animation
new fx.Combo( “body”, {
    height: true,
    width: true,
    opacity: true
}).hide();

// jQuery’s implementation of the animation
$(“#body”).hide( “fast” );

