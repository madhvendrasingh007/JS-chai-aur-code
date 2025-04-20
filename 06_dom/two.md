# DOM Node Relationships & Traversal

A guide to understanding parent-child relationships and traversing DOM nodes in JavaScript.

## Table of Contents
- [Introduction](#introduction)
- [Parent-Child Relationships](#parent-child-relationships)
  - [Accessing Children](#accessing-children)
  - [Accessing First & Last Children](#accessing-first--last-children)
  - [Styling Child Elements](#styling-child-elements)
- [Traversing the DOM](#traversing-the-dom)
  - [Parent Element](#parent-element)
  - [Sibling Elements](#sibling-elements)
- [Nodes vs Elements](#nodes-vs-elements)
- [HTML Structure Example](#html-structure-example)
- [Code Examples](#code-examples)

## Introduction

DOM traversal is the process of navigating through the Document Object Model (DOM) structure to access different elements based on their relationships. This README explains how to traverse through parent-child relationships and access sibling elements.

## Parent-Child Relationships

### Accessing Children

The `children` property returns a live HTMLCollection of child elements:

```javascript
const parent = document.querySelector('.parent');

// Get all children of the parent element
console.log(parent.children);
// Returns: HTMLCollection(4) [div.day, div.day, div.day, div.day]

// Access a specific child by index
console.log(parent.children[1].innerHTML);
// Returns: "Tuesday"

// Loop through all children
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}
// Returns: "Monday", "Tuesday", "Wednesday", "Thursday"
```

### Accessing First & Last Children

```javascript
// Get the first child element
console.log(parent.firstElementChild);
// Returns: <div class="day">Monday</div>

// Get the last child element
console.log(parent.lastElementChild);
// Returns: <div class="day">Thursday</div>
```

### Styling Child Elements

You can directly modify styles of child elements:

```javascript
// Change the color of the second child element
parent.children[1].style.color = "orange";
// This will change "Tuesday" to orange color
```

## Traversing the DOM

### Parent Element

Access the parent of an element:

```javascript
const dayOne = document.querySelector('.day');

// Get the parent element
console.log(dayOne.parentElement);
// Returns: <div class="parent">...</div>
```

### Sibling Elements

Navigate between siblings:

```javascript
// Get the next sibling element
console.log(dayOne.nextElementSibling);
// Returns: <div class="day">Tuesday</div>

// Get the previous sibling element (if any)
console.log(dayOne.previousElementSibling);
// Returns: null (for first element) or the previous element
```

## Nodes vs Elements

It's important to understand the difference between nodes and elements:

- **Elements** are one specific type of node
- **Nodes** include elements, text nodes, comment nodes, etc.

```javascript
// Get all child nodes (elements, text nodes, comments, etc.)
console.log("NODES: ", parent.childNodes);
// Returns: NodeList(9) [text, comment, text, div.day, text, div.day, text, div.day, ...]

// Notice the text nodes (whitespace) and comment nodes in the output
```

Key differences between node-specific and element-specific properties:

| Node Properties/Methods | Element Properties/Methods |
|------------------------|---------------------------|
| `childNodes` | `children` |
| `firstChild` | `firstElementChild` |
| `lastChild` | `lastElementChild` |
| `nextSibling` | `nextElementSibling` |
| `previousSibling` | `previousElementSibling` |

Element-specific properties filter out text nodes and comment nodes, returning only element nodes.

## HTML Structure Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM | Chai aur code</title>
</head>
<body style="background-color: #212121; color: #fff;">
    <div class="parent">
        <!-- this is a comment -->
        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
        <div class="day">Wednesday</div>
        <div class="day">Thursday</div>
    </div>
</body>
</html>
```

## Code Examples

Complete JavaScript code for DOM traversal:

```javascript
// Select the parent element
const parent = document.querySelector('.parent');
console.log(parent);

// Display all children
console.log(parent.children);

// Access specific child element
console.log(parent.children[1].innerHTML);

// Loop through all children
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}

// Style a specific child
parent.children[1].style.color = "orange";

// Access first and last child
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

// Select a specific day
const dayOne = document.querySelector('.day');

// Access the parent
console.log(dayOne.parentElement);

// Access the next sibling
console.log(dayOne.nextElementSibling);

// Show all nodes (including text and comments)
console.log("NODES: ", parent.childNodes);
```

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)