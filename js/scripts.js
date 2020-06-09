$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();

    let input1 = $("input#countTo").val();
    let input2 = $("input#countBy").val();
    let countTo = parseInt(input1);
    let countBy = parseInt(input2);
    
    let outputArray = []
    
    for (let i = 0; i <= countTo; i += countBy) {
      outputArray.push([i]);
      console.log(outputArray);
    }

    $("#output").after(outputArray +  '<br>');
  });
});