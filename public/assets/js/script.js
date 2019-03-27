/* eslint-disable no-unused-vars */
$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this).find(".burger_id").val();
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      // reload page 
      location.reload();
    });

  });
});
