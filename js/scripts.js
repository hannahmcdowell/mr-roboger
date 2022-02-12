function beepBoop(input) {
  const regex = new RegExp("\\D");
  if(input.length === 0 || input.search(regex) >= 0) {
    return "";
  }
  let array = new Array(parseInt(input) + 1);
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

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userName = $("#name").val().trim();
    const userNum = $("#number").val().trim();
    $("input[id=name]").val("");
    $("input[id=number]").val("");
    const output = beepBoop(userNum);
    $("span[id=greeting]").text(userName);
    $("p[id=beepBoopOutput").text(output);
    $("#output-card").show();
  });
});