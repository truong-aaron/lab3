'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
			$('.jumbotron h1').text("Javascript has been activated");
			$(".jumbotron p").addClass("active");
			$("#testjs").text("Ask your own heart");
	});
	$("a.thumbnail").click(projectClick);
}

function projectClick(e) {  
    e.preventDefault();   
    $(".project-description").fadeOut();
    $(this).css("background-color", "#7fff00");
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}