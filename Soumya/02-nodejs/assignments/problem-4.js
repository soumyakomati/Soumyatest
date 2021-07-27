/*
4. Create a json-utilities module (file) that supports the following APIs
* Search for a particular key in a JSON file with a set of properties at the top-level, and get its
value.
* Set the key to a particular value in a file similar to the one just above.
* Search for an item with a particular key-value pair in a JSON with an array of objects (items).
* Add/remove/edit items in a file similar to the one just above.
Use this module’s APIs in another module. Also use this to make the solution to question 3
simpler.
*/

const fs = require("fs");
fs.readFile("./customer.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const customer = JSON.parse(jsonString);
    console.log("Customer address is:", customer.address); 
    // => "Customer address is: Infinity Loop Drive"
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});

fs.readFile("./customer.json", "utf8", (err, jsonString) => {
    const customer = JSON.parse(jsonString);
    fs.writeFile("./customer.json", JSON.stringify(customer), err => {
    if (err) {
        console.log("Error writing file:", err); return;
    }
        try {
        // const customer = JSON.parse(jsonString);
        customer.order_count += 1;
        console.log("Customer order_count is:", customer.order_count);
        customer.nickname.push("test");
        console.log("Customer order_count is:", customer.nickname);
        } catch (err) {
        console.log("Error parsing JSON string:", err);
        }
  });
});
