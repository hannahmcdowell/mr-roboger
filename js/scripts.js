// input: string representing a number
// output: string with a list of values starting from 0 up to and including the user's input number, with the following substitutions: if the number contains a 3, all digits should be replaced with "Won't you be my neighbor?", if the number contains a 2, all digits should be replaced with "Boop!" and if the number contains a 1, all digits should be replaced with "Beep!". The values in the ouput string should be separated by commas.

function beepBoop(input) {
  regex = new RegExp("\\D");
  input = input.trim();
  if(input.search(regex) >= 0 || input.length === 0) {
    return "";
  }
  const array = new Array(parseInt(input) + 1);
  for(let i = 0; i < array.length; i++) {
    array[i] = i;
  }
  return array.join(", ")
}