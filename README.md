## Tests:

#### Describe: beepBoop()

- Test: "It should return an empty string if the user enters an empty string or whitespace."
- Code: `beepBoop("    ");`
- Expected Output: `""`
---
- Test: "It should return an empty string if the user enters a string that includes characters other than digits."
- Code: `beepBoop("4.8st!");`
- Expected Output: `""`
___
- Test: "It should return a string of a list of numbers from 0 to the user's inputted number, separated by commas."
- Code: `beepBoop("6");`
- Expected Output: `"0, 1, 2, 3, 4, 5, 6"`
---
- Test: "It should return a string of a list of numbers from 0 to the user's inputted number, separated by commas. If a number contains a 1 as a digit, it should replace that number with "Beep!"."
- Code: `beepBoop("6");`
- Expected Output: `"0, Beep!, 2, 3, 4, 5, 6"`
---
- Test: "It should return a string of a list of numbers from 0 to the user's inputted number, separated by commas, with the following substitutions (in order from most to least important): numbers that contain a 3 should be replaced with "Won't you be my neighbor?", numbers that contain a 2 should be replaced with "Boop!" and numbers that contain a 1 should be replaced with "Beep!"."
- Code: `beepBoop("13");`
- Expected Ouput: `"0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?"`