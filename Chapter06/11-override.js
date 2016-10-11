// Bind your initial load handler
window.onload = myFirstHandler;

// somewhere, in another library that you’ve included, your first handler is overwritten
// only ‘mySecondHandler’ is called when the page finishes loading
window.onload = mySecondHandler;
