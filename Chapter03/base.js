// The Base object constructor
var Base = function(obj) {
    // Only work if there's something to extend
    if ( obj )
        // If used as Base(), use the prototype of the caller
        if ( this == window )
            Base.prototype.extend.call(obj, arguments.callee.prototype);

        // Otherwise, this is called as new Base(), so extend the object
        else
            this.extend(obj);
};

Base.version = "1.0.2";

Base.prototype = {
    // A function for overriding one object property with another
    extend: function(source, value) {
        var extend = Base.prototype.extend;

        // Check to see if we're overriding a property with a new value
        if (arguments.length == 2) {
            // Remember the original parent property value
            var ancestor = this[source];

            // Check to see if we're overriding a parent method, and that this.base()
            // is actually used by the overrider
            if ((ancestor instanceof Function) && (value instanceof Function) &&
                ancestor.valueOf() != value.valueOf() && /\bbase\b/.test(value)) {

                // Remember the old function
                var method = value;

                // and build a new function wrapper, to have sane 
                value = function() {
                    // Remember the old value of this.base to be restored later
                    var previous = this.base;
                    // Calling this.base() calls the old parent function
                    this.base = ancestor;

                    // Execute the new, overriding, function
                    var returnValue = method.apply(this, arguments);

                    // Restore the this.base() property
                    this.base = previous;

                    // Return the accurate return value
                    return returnValue;
                };

                // valueOf and toString get messed by our modified
                // wrapper function, so make them appear normal
                value.valueOf = function() { return method; };
                value.toString = function() { return String(method); };
            }

            // Attach the new property to the source
            return this[source] = value;

        // If only a source was provided, copy all properties over from
        // the parent class to this new child
        } else if (source) {
            var _prototype = {toSource: null};

            // We modify these two functions later on, so protect them
            var _protected = ["toString", "valueOf"];

            // if we are prototyping then include the constructor
            if (Base._prototyping) _protected[2] = "constructor";

            // Copy over the protected functions indvidually
            for (var i = 0; (name = _protected[i]); i++)
                if (source[name] != _prototype[name])
                    extend.call(this, name, source[name]);

            // Copy each of the source object's properties to this object
            for (var name in source)
                if (!_prototype[name])
                    extend.call(this, name, source[name]);
        }

        return this;
    },

    // The this.base() function which we'll be implementating later on
    base: function() {}
};

// A wrapper function for creating a new object constructor
Base.extend = function(_instance, _static) {
    // Remember the extend function
    var extend = Base.prototype.extend;

    // Lets us do Base.extend() and get a blank object constructor
    if (!_instance) _instance = {};

    // Make sure to include the constructor later
    Base._prototyping = true;

    // Build the prototype
    var _prototype = new this;
    extend.call(_prototype, _instance);

    // Build the constructor
    var constructor = _prototype.constructor;
    _prototype.constructor = this;

    delete Base._prototyping;

    // Create the wrapper for the constructor function
    var klass = function() {
        if (!Base._prototyping) constructor.apply(this, arguments);
        this.constructor = klass;
    };

    // Which inherits from Base
    klass.prototype = _prototype;

    // Add all the extra Base methods
    klass.extend = this.extend;
    klass.implement = this.implement;
    klass.toString = function() {
        return String(constructor);
    };

    // Add in all the extra properties provided by the user
    extend.call(klass, _static);

    // Check for a single instance case
    var object = constructor ? klass : _prototype;

    // Class initialisation
    if (object.init instanceof Function) object.init();

    // Return the new object constructor
    return object;
};

// A simple function that can be used to pull additional object properties
// into a constructor – effectively creating multiple inheritance
Base.implement = function(_interface) {
    // If a constructor was provided, instead of a prototype,
    // get the prototype instead
    if (_interface instanceof Function) _interface = _interface.prototype;

    // Extend the object with the methods from the parent object
    this.prototype.extend(_interface);
};

