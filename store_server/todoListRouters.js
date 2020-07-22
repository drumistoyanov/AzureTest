module.exports = function(app) {
    var todoList = require('./toDoListController');
  
    // todoList Routes
    app.route('/products')
      .get(todoList.list_all_products)
var a=null;
    app.route('/sell')
    .post(todoList.make_sell)
  
  
    // app.route('/tasks/:taskId')
    //   .get(todoList.read_a_task)
    //   .put(todoList.update_a_task)
    //   .delete(todoList.delete_a_task);
  };