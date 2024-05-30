// Function to get the viewport width
function getViewportWidth() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
}

// Example usage
var viewportWidth = getViewportWidth();
console.log("Viewport width: " + viewportWidth);
