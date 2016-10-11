var obj = {
    yes: function(){
        // this == obj
        this.val = true;
    },
    no: function(){
        this.val = false;
    }
};

// We see that there is no val property in the 'obj' object
alert( obj.val == null );

// We run the yes function and it changes the val property
// associated with the 'obj' object
obj.yes();
alert( obj.val == true );

// However, we now point window.no to the obj.no method and run it
window.no = obj.no;
window.no();

// This results in the obj object staying the same (as the context was
// switched to the window object)
alert( obj.val == true );

// and window val property getting updated.
alert( window.val == false );

