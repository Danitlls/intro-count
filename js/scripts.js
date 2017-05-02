$(function() {
  $("#sentence").submit(function(event) {
    event.preventDefault();

    var userInput = $(".form-control").val();


    for (var i = 0; i < userInput.length; i += 1) {
      if (userInput[i] === "a" || userInput[i] === "e" || userInput[i] === "i" || userInput[i] === "o" || userInput[i] === "u") {

        var a = userInput[i];
          //console.log(a);
      }
      userInput = userInput.replace(a, "-");
      $(".output").text(userInput);
      //console.log(output);
      // var output = userInput[i];
    }

    // console.log(output);
    // var inputArray = userInput.toArray();
    // console.log(inputArray);

  });
});
