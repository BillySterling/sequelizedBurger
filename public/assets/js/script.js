$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this).find(".burger_id").val();
    console.log("BURGER ID = " + burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      // reload page 
      location.reload();
    });

  });
});
