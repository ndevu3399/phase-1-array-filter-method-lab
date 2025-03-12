// Code your solution here
// Function to find matching drivers (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function to find drivers whose names begin with the provided letters
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

// Function to find drivers whose name property matches the provided string
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

// Example usage:
const drivers = [
    { name: "Sam", hometown: "New York" },
    { name: "Sarah", hometown: "Los Angeles" },
    { name: "Sandy", hometown: "Chicago" }
];

console.log(findMatching(["Sam", "Sarah", "Sandy"], "sam")); // ["Sam"]
console.log(fuzzyMatch(["Sam", "Sarah", "Sandy"], "Sa")); // ["Sam", "Sarah", "Sandy"]
console.log(matchName(drivers, "Sam")); // [{ name: "Sam", hometown: "New York" }]
