// Hide the next link if we're at the end of the slideshow
if ( !next(cur) )
     hide( id("gallery_next") );
				
// Otherwise, make sure that it's visible
else
     show( id("gallery_next") );
		
// Hide the previous link if we're at the start of the slideshow
if ( !prev(cur) )
    hide( id("gallery_prev") );
				
// Otherwise, we need to be sure that it's visible
else
    show( id("gallery_prev") );

