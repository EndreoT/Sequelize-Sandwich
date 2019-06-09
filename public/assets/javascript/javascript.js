
$(function () {

  const customerSelect = $('.customer-select');

  // Get all customers on page load
  getCustomers();

  function getCustomers() {
    $.get("/api/customers", renderCustomerList)
  }

  // Adds customer html option elements to DOM
  function renderCustomerList(data) {

    const rowsToAdd = [];
    for (let i = 0; i < data.length; i++) {
      rowsToAdd.push(createCustomerRow(data[i]));
    }
    customerSelect.append(rowsToAdd);
  }

  // Creates an html option element with customer information
  function createCustomerRow(customer) {
    const listOption = $("<option>");
    listOption
      .attr("value", customer.id)
      .text(customer.name);
    return listOption;
  }

  // Updates devoured state and customer id of burger
  $(".change-devoured").click(function(event) {
    const id = $(this).data("id");
    const CustomerId = $(this)
      .siblings(".form-group")
      .children(".customer-select")
      .children("option:selected")
      .val();
    const devouredBurger = {
      devoured: true,
      CustomerId,
    };
    
    $.ajax("/api/burgers/devour/" + id, {
      type: "PUT",
      data: devouredBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });

  // Create a burger
  $("#submit-burger").click(function (event) {
    event.preventDefault();
    
    const burger = {
      name: $("#burger-name").val().trim(),
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

  // Delete a burger
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
