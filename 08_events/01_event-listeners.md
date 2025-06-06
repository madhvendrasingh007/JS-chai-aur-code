# 🚀 JavaScript Events - Interactive Image Gallery

This project demonstrates fundamental JavaScript event handling concepts through an interactive image gallery with clickable images and event propagation examples.

## 📋 Topics Covered

### 1. 🎯 Event Listeners vs onClick
The code shows the difference between traditional `onclick` property and modern `addEventListener()` method:
- **onclick**: Limited to one handler per element, older approach ❌
- **addEventListener()**: More flexible, allows multiple handlers, better control over event flow ✅

```javascript
// Old way (limited)
document.getElementById('owl').onclick = () => {
    alert("Owl Clicked!!")
}

// Modern way (recommended)
document.getElementById('owl').addEventListener('click', () => {
    alert("Owl Clicked!!", false)
})
```

### 2. 📊 Event Object Properties
Demonstrates various properties available in the event object:
- **`timeStamp`**: When the event occurred ⏰
- **`target`**: The element that triggered the event 🎯
- **`currentTarget`**: The element the event listener is attached to 📍
- **`clientX/clientY`**: Mouse coordinates relative to viewport 🖱️
- **`screenX/screenY`**: Mouse coordinates relative to screen 🖥️
- **`altKey/ctrlKey/shiftKey`**: Modifier key states ⌨️
- **`keyCode`**: Key pressed (for keyboard events) 🔢

### 3. 🌊 Event Propagation
Covers two phases of event propagation:
- **Bubbling**: Events bubble up from target to parent elements (default behavior) ⬆️
- **Capturing**: Events capture down from parent to target elements ⬇️

#### 🛑 Event Control Methods:
- **`stopPropagation()`**: Prevents event from bubbling up to parent elements
- **`preventDefault()`**: Prevents default browser behavior (like following links)

```javascript
document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault();     // Stops default link behavior
    e.stopPropagation();   // Stops event bubbling
    console.log("google clicked")
}, false)
```

### 4. 🎪 Event Delegation
Uses event delegation to handle clicks on multiple child elements efficiently:
- Attach one listener to parent element instead of multiple listeners to children
- Use `e.target` to identify which child was clicked
- More memory efficient and handles dynamically added elements

```javascript
document.querySelector('#images').addEventListener('click', function(e){
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
})
```

### 5. 🔧 DOM Manipulation
Shows how to remove elements from the DOM:
- **Modern way**: `element.remove()` ✅
- **Legacy way**: `parentNode.removeChild(element)` (commented out)

## 🎮 Interactive Features

- **🖼️ Image Gallery**: Click on any image to remove it from the gallery
- **🔗 Link Prevention**: Google link click is prevented and logged instead
- **📝 Event Logging**: Various events log information to console for learning
- **🎨 Styled Interface**: Dark theme with Alice Blue text for better visibility

## 🧠 Key Learning Points

1. **Event Listeners** are more powerful than onclick handlers 💪
2. **Event Propagation** can be controlled with `stopPropagation()` 🛑
3. **Event Delegation** is efficient for handling multiple similar elements 🎯
4. **Event Object** contains useful information about the interaction 📊
5. **preventDefault()** stops default browser behaviors 🚫

## 💻 Complete HTML Code with Detailed Comments

Below is the complete HTML code with detailed explanations in comments. You can copy-paste this code and run it directly in your browser:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Events - Interactive Gallery</title>
</head>
<!-- Dark themed body for better visibility -->
<body style="background-color: #414141; color: aliceblue;">
    <h2>Amazing image</h2>
    <div>
        <!-- Image gallery with different images from Pexels -->
        <ul id="images">
            <li><img width="200px" id="photoshop" src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="photoshop"></li>
            <li><img width="200px" id="japan" src="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="japan"></li>
            <li><img width="200px" id="river" src="https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="river"></li>
            <li><img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="owl"></li>
            <li><img width="200px" id="prayer" src="https://images.pexels.com/photos/2522671/pexels-photo-2522671.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="prayer"></li>
            <li><a style="color: aliceblue;" href="https://google.com" id="google">Google</a></li>
        </ul>
   </div>
</body>
<script>
    // ========== COMPARISON: onclick vs addEventListener ==========
    
    // OLD WAY: Using onclick property (commented out)
    // This approach has limitations - only one handler per element
    // document.getElementById('owl').onclick = () => {
    //     alert("Owl Clicked!!")
    // }
    
    // NEW WAY: Using addEventListener() - More flexible and powerful
    // Allows multiple handlers and better control over event flow
    document.getElementById('owl').addEventListener('click', () => {
        alert("Owl Clicked!!", false) // false = bubbling phase (default)
    })
    
    // Note: attachEvent() was used in old Internet Explorer versions
    // Modern browsers use addEventListener()
    
    // ========== EVENT OBJECT PROPERTIES DEMONSTRATION ==========
    
    // Event listener that logs the timestamp when river image is clicked
    document.getElementById('river').addEventListener('click', function(e){
        console.log('Event timestamp:', e.timeStamp);
        // Other useful event properties available:
        // e.type - event type (click, mouseover, etc.)
        // e.target - element that triggered the event
        // e.currentTarget - element listener is attached to
        // e.clientX, e.clientY - mouse coordinates relative to viewport
        // e.screenX, e.screenY - mouse coordinates relative to screen
        // e.altKey, e.ctrlKey, e.shiftKey - modifier key states
        // e.keyCode - key pressed (for keyboard events)
    }, false) // false = bubbling phase
    
    // ========== EVENT PROPAGATION & BUBBLING ==========
    
    // Event listener on parent UL element
    // This will fire when ANY child element is clicked due to event bubbling
    document.getElementById('images').addEventListener('click', function(e){
        console.log("Clicked inside the UL (parent element)")
        console.log("Actual target:", e.target.tagName) // Shows what was actually clicked
    }, false)
    
    // Event listener on river image that demonstrates stopPropagation()
    document.getElementById('river').addEventListener('click', function(e){
        console.log("River image clicked directly")
        e.stopPropagation(); // Prevents event from bubbling up to parent UL
        // Without stopPropagation(), both this handler and the UL handler would fire
        // With stopPropagation(), only this handler fires
    }, false)
    
    // EVENT PROPAGATION EXPLANATION:
    // When you click on an element, the event can flow in two phases:
    // 1. CAPTURING (true): Event goes from document down to target element
    // 2. BUBBLING (false): Event goes from target element up to document
    // By default, addEventListener uses bubbling (false)
    
    // ========== PREVENTING DEFAULT BROWSER BEHAVIOR ==========
    
    // Google link with preventDefault() to stop default link behavior
    document.getElementById('google').addEventListener('click', function(e){
        e.preventDefault();      // Stops the default action (navigating to Google)
        e.stopPropagation();    // Stops event from bubbling up to parent UL
        console.log("Google link clicked - but navigation prevented!")
        // Without preventDefault(), clicking would navigate to Google
        // With preventDefault(), we can handle the click custom way
    }, false)
    
    // ========== EVENT DELEGATION ==========
    
    // Instead of adding individual listeners to each image,
    // we add ONE listener to the parent and check what was clicked
    // This is more efficient and works with dynamically added elements
    document.querySelector('#images').addEventListener('click', function(e){
        console.log('Target element tag:', e.target.tagName);
        
        // Check if clicked element is an image
        if (e.target.tagName === 'IMG') {
            console.log('Image clicked! ID:', e.target.id);
            
            // Remove the parent LI element (which contains the image)
            let removeIt = e.target.parentNode // Gets the <li> element
            removeIt.remove() // Modern way to remove element
            
            // LEGACY WAY (commented out):
            // removeIt.parentNode.removeChild(removeIt)
            // This older method required accessing the parent of the element to remove it
        }
    })
    
    // EVENT DELEGATION BENEFITS:
    // 1. Memory efficient - one listener instead of multiple
    // 2. Works with dynamically added elements
    // 3. Easier to manage and maintain
    // 4. Better performance with many similar elements
</script>
</html>
```

## 🎯 How to Use This Code

1. **Copy** the complete HTML code above
2. **Paste** it into a new file and save as `events-demo.html`
3. **Open** the file in any modern web browser
4. **Interact** with the elements:
   - Click on images to remove them
   - Click the Google link (won't navigate due to preventDefault)
   - Open browser console (F12) to see logged events
   - Try clicking different elements to see event propagation

## 🔍 What You'll See

- **Image Removal**: Click any image to remove it from the gallery
- **Console Logs**: Various event information logged to browser console
- **Prevented Navigation**: Google link click is intercepted and logged
- **Event Bubbling**: Different behaviors based on stopPropagation() usage

---
© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)