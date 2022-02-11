## Tests:

#### Describe: beepBoop()

- Test: "It should return an empty string if the user enters an empty string or whitespace."
- Code: `beepBoop("    ");`
- Expected Output: `""`
---
- Test: "It should return an empty string if the user enters a string that includes characters other than digits."
- Code: `beepBoop("4.8st!");`
- Expected Output: `""`