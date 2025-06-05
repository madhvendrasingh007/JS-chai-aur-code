# 📖 JavaScript DOM Manipulation — Complete Guide

A comprehensive, beginner-to-pro-level guide on JavaScript DOM manipulation techniques with preserved comments and detailed explanations.

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
* [🔄 Converting Collections to Arrays](#-converting-collections-to-arrays)
* [📃 Complete HTML Example](#-complete-html-example)
* [⚡ Key Differences Between Methods](#-key-differences-between-methods)
* [📚 Additional Resources](#-additional-resources)

---

## 📌 Introduction to DOM

The **Document Object Model (DOM)** is a programming interface for web documents.
It represents your entire web page as a structured tree of **nodes (HTML elements)** and allows programs to dynamically access and modify the document's structure, style, and content.

**Why DOM Manipulation?**

* Dynamically update content without reloading the page
* Add interactivity like animations, form validations, and UI feedback
* Handle events (clicks, hover, input)
* Change element styles on the fly

---

## 🎯 Selecting Elements

### 📍 getElementById

**Selects an element by its unique `id` attribute.**

```javascript
// Basic selection
document.getElementById('title'); 
// Returns: <h1 id="title" class="heading">DOM learning on Chai aur code <span>...</span></h1>

// Accessing properties
document.getElementById('title').id;        // Returns: 'title'
document.getElementById('title').className; // Returns: 'heading'
```

**Why use it?**
✔ Fastest method for selecting a single unique element
❌ Limited to one element (IDs are unique)

---

### 📍 querySelector

**Selects the first element that matches a CSS selector.**

```javascript
// Select by tag name
document.querySelector('h2');

// Select by ID
document.querySelector('#title');

// Select by class
document.querySelector('.heading');

// Nested selections
const myul = document.querySelector('ul');
myul.querySelector('li'); 
// Returns: first <li> inside selected <ul>
```

**Why use it?**
✔ Flexible — can select using any valid CSS selector
✔ Can chain selections
❌ Returns only the **first match**

---

### 📍 querySelectorAll

**Selects all elements matching a CSS selector and returns a NodeList.**

```javascript
const tempLiList = document.querySelectorAll('li');
// Returns: NodeList(4) [li.list-item, li.list-item, li.list-item, li.list-item]

// Accessing elements by index
tempLiList[0].style.color = "green";

// Iterating through NodeList
tempLiList.forEach((li) => {
    li.style.backgroundColor = "green";
});
```

**Why use it?**
✔ Fetch multiple matching elements
✔ Can iterate with `forEach()`
❌ NodeList — not a full Array, but array-like

---

### 📍 getElementsByClassName

**Selects all elements with a specific class name.**

```javascript
document.getElementsByClassName('list-item');
// Returns: HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
```

**Why use it?**
✔ Quick class-based selection
❌ Returns HTMLCollection (not array, not chainable, no forEach)

---

## 📝 Manipulating Elements

### ✏️ Attributes

```javascript
// Getting attribute value
document.getElementById('title').getAttribute('class');
// Returns: 'heading'

// Setting attribute value
document.getElementById('title').setAttribute('class', 'test');
// Changes the class from 'heading' to 'test'
```

---

### 🎨 Styling

```javascript
const title = document.getElementById('title');

// Change background color
title.style.backgroundColor = 'green';

// Add border radius
title.style.borderRadius = '15px';
```

**Why use it?**
✔ Dynamically style elements based on logic/events

---

### 📝 Content Access & Modification

```javascript
const title = document.getElementById('title');

// innerHTML - includes HTML tags
title.innerHTML;

// innerText - only visible text
title.innerText;

// textContent - all text, including hidden
title.textContent;
```

#### 🔍 Key Differences:

| Property      | What it gets/sets                                  |
| :------------ | :------------------------------------------------- |
| `innerHTML`   | Full HTML content including tags                   |
| `innerText`   | Visible text only                                  |
| `textContent` | All text including hidden text (CSS display\:none) |

---

## 🔄 Converting Collections to Arrays

**Why convert?**
HTMLCollection & NodeList don’t support array methods like `.map()`, `.filter()`

```javascript
const tempClassList = document.getElementsByClassName('list-item'); 
// Returns: HTMLCollection

// Convert to array
const myArrayList = Array.from(tempClassList);
```

---

## 📃 Complete HTML Example

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

---

## ⚡ Key Differences Between Methods

| Method                   | Returns        | Multiple Elements | Supports forEach | CSS Selectors | Type                |
| :----------------------- | :------------- | :---------------- | :--------------- | :------------ | :------------------ |
| `getElementById`         | Single Element | ❌                 | ❌                | ❌             | Element             |
| `getElementsByClassName` | HTMLCollection | ✅                 | ❌                | ❌             | Live HTMLCollection |
| `querySelector`          | First Match    | ❌                 | ❌                | ✅             | Element             |
| `querySelectorAll`       | NodeList       | ✅                 | ✅                | ✅             | Static NodeList     |

---

## 📚 Additional Resources

* 📖 [MDN Web Docs - DOM Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
* 📖 [JavaScript.info - DOM](https://javascript.info/dom-nodes)
* 📖 [MDN getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
* 📖 [MDN querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
* 📖 [MDN querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

---

## 🎨 Author

**Madhvendra Singh**
🌐 [GitHub](https://github.com/madhvendrasingh007)
