$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    
    let input1 = $("input#countTo").val();
    let input2 = $("input#countBy").val();
    let countTo = parseInt(input1);
    let countBy = parseInt(input2);
    let arrayCountTo = []
    
    function divide(countTo, countBy) {
      return countTo / countBy;
    }
    
    // for ( let i=0; i<countTo.length; i +=1) {
    //   dividedArray.push(countTo[index] / countBy);
    //   }
      
      let result = divide(countTo, countBy);
      $("#output").show(result);
  });
});