# Welcome to Mr. Roboger's Neighborhood

by Hannah McDowell  

*Tell Mr. Roboger a number and he will "roboticize" it for you!*

## Description:
This webpage takes the user's name and a postive integer as input. The robot, Mr. Roboger, will give the user back a string of integers from 0 to the user's number with the following replacements (from least important to most important):
1. Any number that contains a 1 will be replaced with "Beep!"
2. Any number that contains a 2 will be replaced with "Boop!"
3. Any number that contains a 3 will be replaced with "Won't you be my neighbor?"

## Technologies/Frameworks Used
* HTML
* CSS
* Bootstrap
* jQuery
* JavaScript

## Setup Instructions
1. Make sure [git is installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your local device
2. Clone this repository onto your local device: `git clone [repo link]`
3. Open the cloned repository
4. Navigate to the top level of the directory
5. Open the `index.html` file using any internet browser to see the webpage

## Known Bugs
When the user leaves fields blank, the website does not highlight the specific fields that they need to complete.

## Link
Click [here](https://hannahmcdowell.github.io/mr-roboger/) to find the website on GitHub pages.

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

## License
[MIT](https://opensource.org/licenses/MIT)

Please contact me via [email](mailto:hannah.mcdowell1@gmail.com) if you run into any issues or have questions, comments or concerns.

*Copyright (c) 02/12/2022 Hannah McDowell*