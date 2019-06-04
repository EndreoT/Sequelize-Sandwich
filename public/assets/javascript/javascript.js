
$(function () {

  const customerSelect = $('.customer-select');

  getCustomers();

  function getCustomers() {
    $.get("/api/customers", renderCustomerList)
  }

  function renderCustomerList(data) {

    const rowsToAdd = [];
    for (let i = 0; i < data.length; i++) {
      rowsToAdd.push(createAuthorRow(data[i]));
    }
    customerSelect.append(rowsToAdd);
  }

  function createAuthorRow(author) {
    const listOption = $("<option>");
    listOption
      .attr("value", author.id)
      .text(author.name);
    return listOption;
  }

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
