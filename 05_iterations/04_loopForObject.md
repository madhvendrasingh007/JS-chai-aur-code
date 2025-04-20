# JavaScript: `for...in` Loop

The `for...in` loop is primarily used to **iterate over the keys of objects**. While it can technically be used on arrays, it's not recommended due to potential confusion and unexpected behavior.

---

## 🧱 Iterating over an Object

```javascript
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift'
};

// 🔑 Print keys
for (const key in myObject) {
    console.log(`Keys are: ${key}`);
}

// 📦 Print values
for (const key in myObject) {
    console.log(`Objects are: ${myObject[key]}`);
}
```

---

## 🧮 Using `for...in` with Arrays

Although `for...in` works on arrays, it **iterates over the indices**, not the elements themselves:

```javascript
const myArray = ["js", "rb", "py", "java", "cpp"];

for (const key in myArray) {
    console.log(myArray[key]); // Logs: js, rb, py, java, cpp
}
```

> ⚠️ **Note:** It's better to use `for...of` or `.forEach()` with arrays for more intuitive behavior.

---

## 🚫 `for...in` on Maps (Not Recommended)

`Map` is a special object that doesn't work with `for...in`:

```javascript
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");

// ❌ This won't work
for (const key in map) {
    console.log(key); // Nothing happens
}
```

> ✅ Use `for...of` with destructuring for Maps.

---

## 📚 Resources

1. [MDN - for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
2. [MDN - Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
3. [W3Schools - JS Objects](https://www.w3schools.com/js/js_objects.asp)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)
