// Add additional methods to the String prototype
Object.extend(String.prototype, {
    // A new Strip Tags function that removes all HTML tags from the string
    stripTags: function() {
        return this.replace(/<\/?[^>]+>/gi, '');
    },

    // Converts a string to an array of characters
    toArray: function() {
        return this.split('');
    },

    // Converts "foo-bar" text to "fooBar" 'camel' text
    camelize: function() {
        // Break up the string on dashes
        var oStringList = this.split('-');

        // Return early if there are no dashes
        if (oStringList.length == 1)
            return oStringList[0];

        // Optionally camelize the start of the string
        var camelizedString = this.indexOf('-') == 0
            ? oStringList[0].charAt(0).toUpperCase() + oStringList[0].substring(1)
            : oStringList[0];

        // Capitalize each subsequent portion
        for (var i = 1, len = oStringList.length; i < len; i++) {
            var s = oStringList[i];
            camelizedString += s.charAt(0).toUpperCase() + s.substring(1);
        }

        // and return the modified string
        return camelizedString;
    }
});

// An example of the stripTags() method
// You can see that it removes all the HTML from the string
// and leaves us with a clean text-only string
"<b><i>Hello</i>, world!".stripTags() == "Hello, world!"

// An example of toArray() method
// We get the fourth character in the string
"abcdefg".toArray()[3] == "d"

// An example of the camelize() method
// It converts the old string to the new format.
"background-color".camelize() == "backgroundColor"

