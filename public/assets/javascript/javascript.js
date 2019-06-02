
$(function () {
  const toppings = {
    '0': 'Cow',
    '1': 'Tomatoes',
    '2': 'Lettuce',
    '3': 'Fried Egg',
    '4': 'Avocado',
    '5': 'Bacon'
  }

  $(".change-devoured").click(function(event) {
    const id = $(this).data("id");

    const devouredBurger = {
      burgerName: $(this).data("name"),
      topping: $(this).data("topping"),
      devoured: true
    };
    
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $("#submit-burger").click(function (event) {
    event.preventDefault();
    const toppingId = $("[name=topping]:checked").val().trim();
    
    const burger = {
      burgerName: $("#burger-name").val().trim(),
      topping: toppings[toppingId],
      devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: burger
    }).then(
      function () {
        location.reload();
      }
    );
  });

  $(".delete-burger").click(function(event) {
    event.preventDefault();
    const id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
