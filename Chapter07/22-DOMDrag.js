var Drag = {

    // The current element being dragged
    obj: null,

    // The initalization function for the drag object
    // o = The element to act as the drag handle
    // oRoot = The element to be dragged, if not specified, 
    //               the handle will be the element dragged.
    // minX, maxX, minY, maxY = The min and max coordinates allowed for the element
    // bSwapHorzRef = Toggle the horizontal coordinate system
    // bSwapVertRef = Toggle the vertical coordinate system
    // fxMapper, fyMapper =  Functions for mapping x and y coordinates to others
    init: function(o, oRoot, minX, maxX, minY, 
            maxY, bSwapHorzRef, bSwapVertRef, fXMapper, fYMapper) {

        // Watch for the drag event to start
        o.onmousedown = Drag.start;

        // Figure out which coordinate system is being used
        o.hmode = bSwapHorzRef ? false : true ;
        o.vmode = bSwapVertRef ? false : true ;

        // Figure out which element is acting as the draggable ‘handle’
        o.root = oRoot && oRoot != null ? oRoot : o ;

        // Initalize the specified coordinate system
        if (o.hmode && isNaN(parseInt(o.root.style.left ))) o.root.style.left   = "0px";
        if (o.vmode && isNaN(parseInt(o.root.style.top ))) o.root.style.top    = "0px";
        if (!o.hmode && isNaN(parseInt(o.root.style.right ))) o.root.style.right  = "0px";
        if (!o.vmode && isNaN(parseInt(o.root.style.bottom))) o.root.style.bottom = "0px";

        // Look to see if the user provided min/max x/y coordinates
        o.minX = typeof minX != 'undefined' ? minX : null;
        o.minY = typeof minY != 'undefined' ? minY : null;
        o.maxX = typeof maxX != 'undefined' ? maxX : null;
        o.maxY = typeof maxY != 'undefined' ? maxY : null;

        // Check for any specified x and y coordinate mappers
        o.xMapper = fXMapper ? fXMapper : null;
        o.yMapper = fYMapper ? fYMapper : null;

        // Add shells for all the user-defined functions
        o.root.onDragStart = new Function();
        o.root.onDragEnd  = new Function();
        o.root.onDrag = new Function();

    },

    start: function(e) {
        // Figure out the object that’s being dragged
        var o = Drag.obj = this;

        // Normalize the event object
        e = Drag.fixE(e);

        // Get the current x and y coordinates
        var y = parseInt(o.vmode ? o.root.style.top  : o.root.style.bottom);
        var x = parseInt(o.hmode ? o.root.style.left : o.root.style.right );

        // Call the user’s function with the current x and y coordinates
        o.root.onDragStart(x, y);

        // Remember the starting mouse position
        o.lastMouseX = e.clientX;
        o.lastMouseY = e.clientY;

        // If we’re using the CSS coordinate system
        if (o.hmode) {
            // set the min and max coordiantes, where applicable
            if (o.minX != null) o.minMouseX    = e.clientX - x + o.minX;
            if (o.maxX != null) o.maxMouseX    = o.minMouseX + o.maxX - o.minX;

        // Otherwise, we’re using a traditional mathematical coordinate system
        } else {
            if (o.minX != null) o.maxMouseX = -o.minX + e.clientX + x;
            if (o.maxX != null) o.minMouseX = -o.maxX + e.clientX + x;
        }

        // If we’re using the CSS coordinate system
        if (o.vmode) {
            // set the min and max coordiantes, where applicable
            if (o.minY != null) o.minMouseY    = e.clientY - y + o.minY;
            if (o.maxY != null) o.maxMouseY    = o.minMouseY + o.maxY - o.minY;

        // Otherwise, we’re using a traditional mathematical coordinate system
        } else {
            if (o.minY != null) o.maxMouseY = -o.minY + e.clientY + y;
            if (o.maxY != null) o.minMouseY = -o.maxY + e.clientY + y;
        }

        // Watch for ‘dragging’ and ‘drag end’ events
        document.onmousemove = Drag.drag;
        document.onmouseup = Drag.end;

        return false;
    },

    // A function to watch for all movements of the mouse during the drag event
    drag: function(e) {
        // Normalize the event object
        e = Drag.fixE(e);

        // Get our reference to the element being dragged
        var o = Drag.obj;

        // Get the position of the mouse within the window
        var ey = e.clientY;
        var ex = e.clientX;

        // Get the current x and y coordinates
        var y = parseInt(o.vmode ? o.root.style.top  : o.root.style.bottom);
        var x = parseInt(o.hmode ? o.root.style.left : o.root.style.right );
        var nx, ny;

        // If a minimum X position was set, make sure it doesn’t go past that
        if (o.minX != null) ex = o.hmode ? 
            Math.max(ex, o.minMouseX) : Math.min(ex, o.maxMouseX);

        // If a maximum X position was set, make sure it doesn’t go past that
        if (o.maxX != null) ex = o.hmode ? 
            Math.min(ex, o.maxMouseX) : Math.max(ex, o.minMouseX);

        // If a minimum Y position was set, make sure it doesn’t go past that
        if (o.minY != null) ey = o.vmode ? 
            Math.max(ey, o.minMouseY) : Math.min(ey, o.maxMouseY);

        // If a maximum Y position was set, make sure it doesn’t go past that
        if (o.maxY != null) ey = o.vmode ? 
            Math.min(ey, o.maxMouseY) : Math.max(ey, o.minMouseY);

        // Figure out the newly translated x and y coordinates
        nx = x + ((ex - o.lastMouseX) * (o.hmode ? 1 : -1));
        ny = y + ((ey - o.lastMouseY) * (o.vmode ? 1 : -1));

        // and translate them using an x or y mapper function (if provided)
        if (o.xMapper) nx = o.xMapper(y)
        else if (o.yMapper) ny = o.yMapper(x)

        // Set the new x and y coordinates onto the element
        Drag.obj.root.style[o.hmode ? "left" : "right"] = nx + "px";
        Drag.obj.root.style[o.vmode ? "top" : "bottom"] = ny + "px";

        // and remember  the last position of the mouse
        Drag.obj.lastMouseX = ex;
        Drag.obj.lastMouseY = ey;

        // Call the user’s onDrag  function with the current x and y coordinates
        Drag.obj.root.onDrag(nx, ny);

        return false;
    },

    // Function that handles the end of a drag event
    end: function() {
        // No longer watch for mouse events (as the drag is done)
        document.onmousemove = null;
        document.onmouseup = null;

        // Call our special onDragEnd function with the x and y coordinates
        // of the element at the end of the drag event
        Drag.obj.root.onDragEnd( 
            parseInt(Drag.obj.root.style[Drag.obj.hmode ? "left" : "right"]), 
            parseInt(Drag.obj.root.style[Drag.obj.vmode ? "top" : "bottom"]));
        // No longer watch the object for drags
        Drag.obj = null;
    },

    // A function for normalizes the event object
    fixE: function(e) {
        // If no event object exists, then this is IE, so provide IE’s event object
        if (typeof e == 'undefined') e = window.event;

        // If the layer properties aren’t set, get the values from the equivalent
        // offset properties
        if (typeof e.layerX == 'undefined') e.layerX = e.offsetX;
        if (typeof e.layerY == 'undefined') e.layerY = e.offsetY;

        return e;
    }
};

