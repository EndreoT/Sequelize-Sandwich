# Sequelize-Sandwich

Deployed Link: https://sequelize-sandwich.herokuapp.com/

## Description
A full stack application burger logger that lets users create a burger and then choose a customer to 'eat' it. Burgers can also be deleted.

## Results
Users can create a burger with a name. Upon submitting this information, an AJAX call is issued to an Node.js server which receives the request, and then submits the request information to a database for burger storage. Users can then choose a customer to consume a burger, which modifies the burger's devoured and customer fields. This app uses Sequelize for the database ORM, an Express.js server for route handling, and handlebars for the template engine.

### Future Improvements
- [ ] Allow modification of burgers after creation
- [ ] Improve UI

