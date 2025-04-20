# JavaScript DOM Manipulation

A comprehensive guide to DOM manipulation techniques in JavaScript.

## Table of Contents
- [Introduction to DOM](#introduction-to-dom)
- [Selecting Elements](#selecting-elements)
  - [getElementById](#getelementbyid)
  - [querySelector](#queryselector)
  - [querySelectorAll](#queryselectorall)
  - [getElementsByClassName](#getelementsbyclassname)
- [Manipulating Elements](#manipulating-elements)
  - [Attributes](#attributes)
  - [Styling](#styling)
  - [Content](#content)
- [Creating & Adding Elements](#creating--adding-elements)
  - [createElement](#createelement)
  - [createTextNode](#createtextnode)
  - [appendChild](#appendchild)
- [Converting Collections to Arrays](#converting-collections-to-arrays)
- [HTML Examples](#html-examples)

## Introduction to DOM

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

## Selecting Elements

### getElementById

Selects an element by its ID attribute.

```javascript
// Basic selection
document.getElementById('title');
// Returns: <h1 id="title" class="heading">DOM learning on Chai aur code <span>...</span></h1>

// Accessing properties
document.getElementById('title').id;        // Returns: 'title'
document.getElementById('title').className; // Returns: 'heading'
```

### querySelector

Selects the first element that matches a specified CSS selector.

```javascript
// Select by tag name
document.querySelector('h2');
// Returns: <h2>Lorem ipsum dolor sit.</h2>

// Select by ID
document.querySelector('#title');
// Returns: <h1 id="title" class="heading">...</h1>

// Select by class
document.querySelector('.heading');
// Returns: <h1 id="title" class="heading">...</h1>

// Nested selections
const myul = document.querySelector('ul');
myul.querySelector('li');
// Returns: first <li> element inside the selected <ul>
```

### querySelectorAll

Selects all elements that match a specified CSS selector.

```javascript
const tempLiList = document.querySelectorAll('li');
// Returns: NodeList(4) [li.list-item, li.list-item, li.list-item, li.list-item]

// Accessing elements by index
tempLiList[0].style.color = "green";

// Iterating through NodeList with forEach
tempLiList.forEach((li) => {
    li.style.backgroundColor = "green";
});
```

### getElementsByClassName

Selects all elements with a specific class name.

```javascript
document.getElementsByClassName('list-item');
// Returns: HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
```

## Manipulating Elements

### Attributes

```javascript
// Getting attribute value
document.getElementById('title').getAttribute('class');
// Returns: 'heading'

// Setting attribute value
document.getElementById('title').setAttribute('class', 'test');
// Changes the class from 'heading' to 'test'
```

### Styling

```javascript
const title = document.getElementById('title');

// Change background color
title.style.backgroundColor = 'green';

// Add border radius
title.style.borderRadius = '15px';
```

### Content

JavaScript provides three properties to access or modify the content of an element:

```javascript
const title = document.getElementById('title');

// innerHTML - includes HTML tags
title.innerHTML;
// Returns: 'DOM learning on Chai aur code <span style="display: none;">test text</span>'

// innerText - only visible text
title.innerText;
// Returns: 'DOM learning on Chai aur code'

// textContent - all text, including hidden
title.textContent;
// Returns: 'DOM learning on Chai aur code test text'
```

#### Key Differences:
- **innerHTML**: Returns HTML content, including tags
- **innerText**: Returns only the visible text content
- **textContent**: Returns all text content, even if hidden with CSS

## Creating & Adding Elements

JavaScript allows you to dynamically create and add new elements to the DOM.

### createElement

Creates a new element of the specified type.

```javascript
// Create a new div element
const div = document.createElement('div');
```

### createTextNode

Creates a new text node with the specified text.

```javascript
// Create a text node
const addText = document.createTextNode("Chai aur code");
```

### appendChild

Adds a child node to the end of the list of children of a specified parent node.

```javascript
// Add text node to div
div.appendChild(addText);

// Add div to document body
document.body.appendChild(div);
```

### Complete Example

Here's a complete example of creating and adding a new element to the page:

```javascript
// Create new div element
const div = document.createElement('div');

// Add class and ID
div.className = "main";
div.id = Math.round(Math.random() * 10 + 1); // Random ID between 1-11

// Set attributes and style
div.setAttribute("title", "generated title");
div.style.backgroundColor = "green";
div.style.padding = "12px";

// Method 1: Add text using innerText
// div.innerText = "Chai aur code";

// Method 2: Add text using text node (preferred for better compatibility)
const addText = document.createTextNode("Chai aur code");
div.appendChild(addText);

// Add the div to the document body
document.body.appendChild(div);
```

## Converting Collections to Arrays

HTML Collections and NodeLists are array-like objects but lack many array methods. You can convert them to arrays:

```javascript
const tempClassList = document.getElementsByClassName('list-item');
// Returns: HTMLCollection

// Convert to array
const myArrayList = Array.from(tempClassList);
// Now you can use array methods like map, filter, etc.
```

## HTML Examples

### Example 1: DOM Selection

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM learning</title>
    <style>
        .bg-black{
            background-color: #212121;
            color: #fff;
        }
    </style>
</head>
<body class="bg-black">
    <div>
        <h1 id="title" class="heading">DOM learning on Chai aur code <span style="display: none;">test text</span></h1>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <input type="password" name="" id="">

        <ul>
            <li class="list-item">one</li>
            <li class="list-item">two</li>
            <li class="list-item">three</li>
            <li class="list-item">four</li>
        </ul>
    </div>
</body>
</html>
```

### Example 2: DOM Creation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chai aur code</title>
</head>
<body style="background-color: #212121; color: #fff;">
    
</body>
<script>
    const div = document.createElement('div')
    console.log(div);
    div.className = "main"
    div.id = Math.round(Math.random() * 10 + 1)
    div.setAttribute("title", "generated title")
    div.style.backgroundColor = "green"
    div.style.padding = "12px"
    // div.innerText = "Chai aur code"
    const addText = document.createTextNode("Chai aur code")
    div.appendChild(addText)

    document.body.appendChild(div)
</script>
</html>
```

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)