// input: string representing a number
// output: string with a list of values starting from 0 up to and including the user's input number, with the following substitutions: if the number contains a 3, all digits should be replaced with "Won't you be my neighbor?", if the number contains a 2, all digits should be replaced with "Boop!" and if the number contains a 1, all digits should be replaced with "Beep!". The values in the ouput string should be separated by commas.

function beepBoop(input) {
  input = input.trim();
  regex = new RegExp("\\D");
  if(input.length === 0 || input.search(regex) >= 0) {
    return "";
  }
  const array = new Array(parseInt(input) + 1);
  for(let i = 0; i < array.length; i++) {
    const element = i.toString();
    if(element.includes("3")) {
      array[i] = "Won't you be my neighbor?";
    } else if(element.includes("2")) {
      array[i] = "Boop!"
    } else if(element.includes("1")) {
      array[i] = "Beep!";
    } else {
      array[i] = element;
    }
  }
  return array.join(", ")
}
