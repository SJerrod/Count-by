$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    
    let countTo = $("input#countTo").val();
    let countBy = $("input#countBy").val();
    console.log(typeof countTo);
    let arrayCountTo = []
    
    function divide(countTo, countBy) {
      return countTo / countBy;
    }
    
    // for ( let i=0; i<countTo.length; i +=1) {
      
      // }
      
      let result = divide(countTo, countBy);
      $("#output").show(result);
  });
});