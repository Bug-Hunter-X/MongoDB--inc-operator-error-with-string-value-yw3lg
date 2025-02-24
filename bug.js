```javascript
// Incorrect use of $inc operator with a string value
db.collection.updateOne({ _id: 1 }, { $inc: { field: "1" } });
```