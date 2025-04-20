# JavaScript: `for...of` Loop & Working with Maps

The `for...of` loop is a modern and simple way to iterate over **iterables** like arrays, strings, maps, sets, etc.

---

## 🔁 Looping over Arrays

```javascript
const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
    console.log(i); // 1 to 5
}
```

---

## 🔤 Looping over Strings

```javascript
const greetings = "Hello world!";

for (const char of greetings) {
    console.log(`Each char is ${char}`);
}
```

---

## 🗺️ Working with Maps

Maps store **key-value pairs** and **do not allow duplicates**. Great for storing structured data.

```javascript
const map = new Map();

map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // Duplicate key, ignored

console.log(map);
```

### Looping through a Map

```javascript
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
```

---

## ⚠️ Using `for...of` on Objects

Regular JavaScript objects are **not iterable** with `for...of`. This will throw an error:

```javascript
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// ❌ Will not work:
// for (const [key, value] of myObject) { ... }
```

Instead, use `Object.entries()`, `Object.keys()`, or `Object.values()` with `for...of` or `forEach`.

---

## 📚 Resources

1. [MDN - for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
2. [MDN - Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
3. [W3Schools - JS Maps](https://www.w3schools.com/js/js_maps.asp)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)
