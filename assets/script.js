$(document).ready(function() {
    var container = $(".container");
    var hour = $(".hour");
    var now = dayjs();
    var rows = 9
    var columns = 3
    var dataHour = 9
    var present =  parseInt(now.format('H'))

    $("#currentDay").text(now.format('dddd, MMMM D'));
    
    function setInput() {
        var time = $(this).siblings(".hour").text();
        var input = $(this).siblings(".userInput").val();
        localStorage.setItem(time, input);
     };

     function save(){
        $(".hour").each(function(){
          var currentTime = $(this).text();
          var storedInput = localStorage.getItem(currentTime);
          if (storedInput !== null) {
            $(this).siblings(".userInput").val(storedInput);
          }
        })
      }
     
    for(i=0; i < rows; i++){
      var newRow = $('<div class="row time-block">')
      container.append(newRow)
      for(j=0; j < columns; j++){
        if(j === 0){
          var newColumn0 = $(`<div id=${dataHour} class="hour col-1">`)
          newColumn0.text(now.hour(dataHour).format('h A'))
          newRow.append(newColumn0)
        }else if(j === 1){
          var newColumn1 = $('<textarea class="description userInput col-10" name="userInput">')
          console.log(dataHour, present)
          if(dataHour < present){
            newColumn1.addClass("past")
        }else if(dataHour == present){
            newColumn1.addClass("present")
        }else {
            newColumn1.addClass("future")
        }
          newRow.append(newColumn1)
        }else if(j === 2){
          var newColumn2 = $('<button class="saveBtn btn fas fa-save col-1"> input=')
           newColumn2.on("click", setInput)
           newRow.append(newColumn2)
           dataHour++
        }
      }
    }
    
    save();
    
    })