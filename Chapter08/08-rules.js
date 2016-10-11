var errMsg = {
    // Checks for when a specified field is required
    required: {
        msg: "This field is required.",
        test: function(obj,load) {
            // Make sure that something was not entered and that this
            // isn't on page load (showing 'field required' messages
            // would be annoying on page load)
            return obj.value || load || obj.value == obj.defaultValue;
        }
    },
	
    // Makes sure that the field s a valid email address
    email: {
        msg: "Not a valid email address.",
        test: function(obj) {
            // Make sure that something was entered and that it looks like
            // an email address
            return !obj.value || 
                /^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i.test( obj.value );
        }
    },
	
    // Makes sure the field is a phone number and
    // auto-formats the number if it is one
    phone: {
        msg: "Not a valid phone number.",
        test: function(obj) {
            // Check to see if we have something that looks like
            // a valid phone number
            var m = /(\d{3}).*(\d{3}).*(\d{4})/.exec( obj.value );
			
            // If it is, seemingly, valid - force it into the specific
            // format that we desire: (123) 456-7890
            if ( m ) obj.value = "(" + m[1] + ") " + m[2] + "-" + m[3];
				
            return !obj.value || m;
        }
    },
	
    // Makes sure that the field is a valid MM/DD/YYYY date
    date: {
        msg: "Not a valid date.",
        test: function(obj) {
            // Make sure that something is entered, and that it
            // looks like a valid MM/DD/YYYY date
            return !obj.value || /^\d{2}\/\d{2}\/\d{2,4}$/.test(obj.value);
        }
    },
	
    // Makes sure that the field is a valid URL
    url: {
        msg: "Not a valid URL.",
        test: function(obj) {
            // Make sure that some text was entered, and that it's
            // not the default http:// text
                return !obj.value || obj.value == 'http://' ||
                    // Make sure that it looks like a valid URL
                    /^https?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/.test( obj.value );
        }
    }
};

