# JavaScript `switch` Statement

The `switch` statement is used to perform different actions based on different conditions — it’s an alternative to multiple `if...else if` statements.

---

## 🧠 Syntax

```javascript
switch (key) {
    case value1:
        // Code block
        break;
    case value2:
        // Code block
        break;
    default:
        // Default code block
}
```

- `key`: the value you're evaluating.
- `case`: each value you want to compare against.
- `break`: stops the execution of more cases; otherwise, JavaScript continues with the next case (known as “fall-through”).
- `default`: optional fallback when no case matches.

---

## 📦 Example

```javascript
const month = "march";

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    default:
        console.log("No matching month found");
        break;
}
```

✅ Output:
```
March
```

---

## ⚠️ Notes

- If you forget to use `break`, the code will continue executing the next cases even if a match is found. This is called **fall-through** behavior.
- Always include a `default` case to handle unexpected values.

---

## 📚 Resources to Learn More

1. [MDN Docs – switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
2. [W3Schools – JavaScript Switch Statement](https://www.w3schools.com/js/js_switch.asp)

---

© 2025 Madhvendra Singh | [GitHub](https://github.com/madhvendrasingh007)
