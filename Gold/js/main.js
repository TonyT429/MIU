// MIU 1207 Week 3
// Anthony Torrez



// JQuery file

var parseBookform = function(data){
	// uses the form data here:
	console.log(data);
};

$(document).bind('pageinit', function(){

	var rbform = $('#recordbooksform'),
		rberrorslink = $('#rberrorslink')
	;
	
	rbform.validate({
		invalidHandler: function(form, validator){
			rberrorslink.click();
			var html = '';
			//console.log(validator.submitted);
			for(var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');  // error with a label except those generated.
				//console.log(label.text());
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');  
				var fieldName = legend.length ? legend.text() : label.text();
				console.log(fieldName);
				html += '<li>'+ fieldName +'</li>';
			};
			$("#recordbookserrors ul").html(html);
		},
		submitHandler: function() {
			var data = rbform.serializeArray();
			localStorage.setItem('rbform', data);
			parseBookform(data);
		}
	});
	
	$('#additem').submit(function(){
		var newDate = new Date();
		var item
	}
	
	function getLib() {
		var bookShelf = "";  
		var b = 0;
		// get the number of items in storage starting at 0
		var storeLength = localStorage.length-1;
		for (b = 0; b < storeLength; b++) {
			var bookKey = localStorage.key(b);
			var values = localStorage.getItem(bookKey);
			values = values.split(";");
			var v1 = values[0];
			var v2 = values[1];
			var v3 = values[2];
			var v4 = values[3];
			var v5 = values[4];
			var v6 = values[5];
			var v7 = values[6];
			var v8 = values[7];
			
			bookShelf += '<li>Book Title:'+v1+' Author: '+v2+' ? '+v3+' ? '+v4+' ? '+v5+' ? '+v6+' ? '+v7+' ? '+v8;
		}   
		
		// if there are no items in storage
		if(bookShelf === "") {
			bookShelf = '<li class="empty">No books in storage</li>';
		
		$("theLibrary").html(bookShelf);
		}
	}
		
		
	
	getLib();
	
	//reset type=date inputs to text
	$( document ).bind( "mobileinit", function(){
    		$.mobile.page.prototype.options.degradeInputs.date = true;
  	});	
});



