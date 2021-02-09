function place(index, obj){
  $("#list").append("<img class='d-block mb-2 w-100' src='"+obj.thumbnail+"'>");
}

function populate(data){
	$("#list").empty();
  $.each(data.results, place);
}

function search(e){

	if (e.which == 13) {
  
  	var keyword = $("#keyword").val();
    
    if (keyword.length < 4) {
    
    	alert("Your keyword is too short!");
      
    } else {
    
    	var url = "https://api.creativecommons.engineering/v1/images?format=json&q="+keyword;
			
      $.ajax({
      	url: url,
        success: populate            
      });
      
    }
    
  }
  
}

$(document).on("keyup", "#keyword", search);