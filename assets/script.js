$(document).ready(function() {

    var container = $(".container");
    var hour = $(".hour");
    var saveBtn = $(".saveBtn");
    var description = $(".description");
    var now = dayjs();
    var rows = 9
    var columns = 3
    var dataHour = 9
    
    $("#currentDay").text(now.format('dddd, MMMM D'));
     
    for(i=0; i < rows; i++){
      var newRow = $('<div class="row time-block">')
      container.append(newRow)
      for(j=0; j < columns; j++){
        if(j === 0){
          var newColumn0 = $(`<div id=${dataHour} class="hour col-1">`)
          newColumn0.text(now.hour(dataHour).format('h A'))
          dataHour++
          newRow.append(newColumn0)
        }else if(j === 1){
          var newColumn1 = $('<textarea class="description col-10" name="userInput">')
            newRow.append(newColumn1)
        }else if(j === 2){
          var newColumn2 = $('<button class="saveBtn btn fas fa-save col-1"> input=')
           newRow.append(newColumn2)
        }
      }
    }
    
        
   /*  function pastpresentfuture() {
      if(parseInt(dataHour) > parseInt(now.format('h'))){
        description.addClass("past");
        
      } else if (parseInt(hour.text()) === parseInt(now.format('h'))){
        description.addClass("present");
      } else {
        description.addClass("future");
      }     
    } */

    console.log(parseInt($(hour).attr("id")))

    function pastpresentfuture() {
        var blockHour = parseInt($(this).attr("id"))
        var present =  parseInt(now.format('h'))
        $(".description").each(function(){
          if(blockHour < present){
            $(this).addClass("past")
          }else if(blockHour == present){
            $(this).removeClass("past")
            $(this).addClass("present")
          }else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
          }
        })
        }

    pastpresentfuture();  
    /* */
    
    
    saveBtn.on("click", function() {
       var time = $(this).siblings(".hour").text();
       var input = $(this).siblings(".userInput").val();
       localStorage.setItem(time, input);
    });
    
    function save(){
      $(".hour").each(function(){
        var currentTime = $(this).text();
        var storedInput = localStorage.getItem(currentTime);
    
        if (storedInput !== null) {
          $(this).siblings(".userInput").val(storedInput);
        }
      })
    }
    
    
    pastpresentfuture();
    save();
    
    
    
    
    
    /* 
    - color-code for Past, Present, Future
         
    -Can write into each time-block
    -Save button save's what's written into local storage
    -input is still there on page refresh 
    
    
    
    
    --------------------------
    the current day is displayed at the top of the calendar
    WHEN I scroll down
    THEN I am presented with time blocks for standard business hours
    WHEN I view the time blocks for that day
    THEN each time block is color-coded to indicate whether it is in the past, present, or future
    WHEN I click into a time block
    THEN I can enter an event
    WHEN I click the save button for that time block
    THEN the text for that event is saved in local storage
    WHEN I refresh the page
    THEN the saved events persist */
    
    })