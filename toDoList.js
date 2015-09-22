$(document).ready(function(){
  var globalRowCount = 0;

  $("#create").keypress(function(event){
    var rowCount = globalRowCount;
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13') {
      var toDoInput = $("#create").val();
      $("#wholeToDo").after('<div id="list'+rowCount +'"class="row">'+'<div class= "col-md-4">'+'<output id="toDoItem'+rowCount +'" type="text" class="form-group">'+toDoInput+'</output>' + '<button id="doneButton'+rowCount +'"type="button" name="data">&#10004;</button>' + '<button id="removeButton'+rowCount +'"type="button">&#10008;</button>' + '</div>' + '</div>' + "<p></p>");
      globalRowCount++;
      $("#create").val("");
      
      event.preventDefault();
    } //if keycode

    $("#doneButton"+rowCount).click(function(){
      $("#toDoItem"+rowCount).addClass('completed');
    }) //doneButton Function

    $("#removeButton"+rowCount).click(function(){
      $("#list"+rowCount).remove();


    })

  }) //keypress Function

}); //ready function
