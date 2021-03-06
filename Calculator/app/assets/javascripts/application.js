// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function () {
	$(".CalcButtons").on("click", function(){
		var content = this.firstChild.innerHTML;
		// debugger;
		switch(content){			
			case "=":
			PerformOperations();
			break;
			default:
			Addtoinput(content);
			break;
		}	
	})
})

function PerformOperations () {
	var total = eval($('#Calculations').val().replace('x', '*'));
	// total.replace('x', '*');
	// debugger; 

	$('#Calculations').val(total);
}

function Addtoinput (content) {
	// debugger;
	
	if (content.toLowerCase === 'x') {
		debugger; 
		content = '*'
	};
	var originalContent = $("#Calculations").val();
	var newContent = originalContent + content;
	$("#Calculations").val(newContent);
}