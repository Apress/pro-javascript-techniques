<script type="text/javascript;e4x=1">
    // Create an HTML element and store it in a variable
    var html = <html/>;

    // Set the contents of the title element to a string of text
    // E4X automatically creates all missing elements and takes care
    // of text nodes appropriately
    html.head.title = "My Page Title";

    // Set the background color property of the body element
    // The body element is created automatically
    html.body.@bgcolor = "#e4e4e4";

    // Add some properties to a form element inside the body
    html.body.form.@name = "myform";
    html.body.form.@action = "someurl.cgi";
    html.body.form.@method = "post";
    html.body.form.@onclick = "return somejs();";

    // Create an empty input element with a specified name
    html.body.form.input[0] = "";
    html.body.form.input[0].@name = "test";
</script>

