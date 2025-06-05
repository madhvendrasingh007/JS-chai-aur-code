# 📖 JavaScript DOM Manipulation

A comprehensive, beginner-to-pro-level guide to **DOM manipulation techniques in JavaScript**. This guide covers everything from selecting elements to dynamically creating and styling new ones.

---

## 📑 Table of Contents

* [📌 Introduction to DOM](#-introduction-to-dom)
* [🎯 Selecting Elements](#-selecting-elements)

  * [getElementById](#getelementbyid)
  * [querySelector](#queryselector)
  * [querySelectorAll](#queryselectorall)
  * [getElementsByClassName](#getelementsbyclassname)
* [📝 Manipulating Elements](#-manipulating-elements)

  * [Attributes](#attributes)
  * [Styling](#styling)
  * [Content](#content)
* [➕ Creating & Adding Elements](#-creating--adding-elements)

  * [createElement](#createelement)
  * [createTextNode](#createtextnode)
  * [appendChild](#appendchild)
* [🔄 Converting Collections to Arrays](#-converting-collections-to-arrays)
* [📃 HTML Examples](#-html-examples)

---

## 📌 Introduction to DOM

The **Document Object Model (DOM)** is a programming interface for web documents. It represents the page as a **structured tree of nodes and objects**, making it possible for JavaScript to dynamically change the document structure, style, and content.

---

## 🎯 Selecting Elements

### 📍 getElementById

Selects an element by its **unique `id` attribute**.

```javascript
// Basic selection
document.getElementById('title');

// Accessing properties
document.getElementById('title').id;        // 'title'
document.getElementById('title').className; // 'heading'
```

---

### 📍 querySelector

Selects the **first element** that matches a CSS selector.

```javascript
// By tag name
document.querySelector('h2');

// By ID
document.querySelector('#title');

// By class
document.querySelector('.heading');

// Nested selection
const myul = document.querySelector('ul');
myul.querySelector('li'); // First <li> inside <ul>
```

---

### 📍 querySelectorAll

Selects **all matching elements** using a CSS selector.

```javascript
const tempLiList = document.querySelectorAll('li');
// NodeList(4) [li.list-item, li.list-item, li.list-item, li.list-item]

// Styling one element
tempLiList[0].style.color = "green";

// Loop through NodeList
tempLiList.forEach((li) => {
  li.style.backgroundColor = "green";
});
```

---

### 📍 getElementsByClassName

Selects elements by class name.

```javascript
document.getElementsByClassName('list-item');
// HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
```

---

## 📝 Manipulating Elements

### ✏️ Attributes

```javascript
// Get attribute
document.getElementById('title').getAttribute('class'); // 'heading'

// Set attribute
document.getElementById('title').setAttribute('class', 'test');
```

---

### 🎨 Styling

```javascript
const title = document.getElementById('title');

// Background color
title.style.backgroundColor = 'green';

// Border radius
title.style.borderRadius = '15px';
```

---

### 📝 Content

Access or modify the content of an element.

```javascript
const title = document.getElementById('title');

// innerHTML: includes HTML tags
title.innerHTML;

// innerText: visible text only
title.innerText;

// textContent: all text (including hidden)
title.textContent;
```

#### 🔍 Quick Summary

| Property      | What It Returns                      |
| :------------ | :----------------------------------- |
| `innerHTML`   | HTML content (with tags)             |
| `innerText`   | Only visible text                    |
| `textContent` | All text content, visible and hidden |

---

## ➕ Creating & Adding Elements

Create and dynamically insert new elements into the DOM.

### 📦 createElement

```javascript
// Create a <div>
const div = document.createElement('div');
```

---

### 📃 createTextNode

```javascript
// Create a text node
const addText = document.createTextNode("Chai aur code");
```

---

### 📌 appendChild

```javascript
// Append text to div
div.appendChild(addText);

// Append div to body
document.body.appendChild(div);
```

---

### ✅ Complete Example

```javascript
// Create new div
const div = document.createElement('div');

// Add class & ID
div.className = "main";
div.id = Math.round(Math.random() * 10 + 1);

// Set attributes and styling
div.setAttribute("title", "generated title");
div.style.backgroundColor = "green";
div.style.padding = "12px";

// Method 1: using innerText
// div.innerText = "Chai aur code";

// Method 2: using createTextNode (recommended)
const addText = document.createTextNode("Chai aur code");
div.appendChild(addText);

// Add to body
document.body.appendChild(div);
```

---

## 🔄 Converting Collections to Arrays

**HTMLCollection** and **NodeList** aren't true arrays. To use array methods like `map()`, `filter()`, convert them:

```javascript
const tempClassList = document.getElementsByClassName('list-item');
const myArrayList = Array.from(tempClassList);
```

---

## 📃 HTML Examples

### 📄 Example 1: DOM Selection

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM learning</title>
  <style>
    .bg-black {
      background-color: #212121;
      color: #fff;
    }
  </style>
</head>
<body class="bg-black">
  <div>
    <h1 id="title" class="heading">
      DOM learning on Chai aur code 
      <span style="display: none;">test text</span>
    </h1>
    <h2>Lorem ipsum dolor sit.</h2>
    <h2>Lorem ipsum dolor sit.</h2>
    <h2>Lorem ipsum dolor sit.</h2>
    <p>Lorem ipsum dolor sit amet.</p>
    <input type="password" id="">
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

---

### 📄 Example 2: DOM Creation

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
  const div = document.createElement('div');
  console.log(div);
  
  div.className = "main";
  div.id = Math.round(Math.random() * 10 + 1);
  div.setAttribute("title", "generated title");
  div.style.backgroundColor = "green";
  div.style.padding = "12px";

  // Method 1: add text via innerText
  // div.innerText = "Chai aur code";

  // Method 2: create and append text node
  const addText = document.createTextNode("Chai aur code");
  div.appendChild(addText);

  // Append div to document body
  document.body.appendChild(div);
</script>
</html>
```

---

## 📚 Author

**Madhvendra Singh**
🌐 [GitHub Profile](https://github.com/madhvendrasingh007)
