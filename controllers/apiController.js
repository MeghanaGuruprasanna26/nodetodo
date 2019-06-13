var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app) {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.get('/api/todos/:uname', function(req, res) {
        
        Todos.find({ username: req.params.uname }, function(err, todos) {
            if (err){
                console.log(err.message);
                res.send('Failure');
            } else {
                return res.status(200).json({
                    todos,
                    message: "All the todos of user",
              });
            }            
            
        });
        
    });
    
    app.get('/api/todo/:id', function(req, res) {
       
       Todos.findById({ _id: req.params.id }, function(err, todo) {
        if (err){
            console.log(err.message);
            res.send('Failure');
        } else {
            res.send(todo);
        }
       });
        
    });
    
    app.post('/api/todo', function(req, res) {
        
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, { username: req.body.username, todo: req.body.todo, tags: req.body.tags, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment }, function(err, todo) {
                if (err){
                    console.log(err.message);
                    res.send('Failure');
                } else {
                  res.send('Success');
                }            });           
        }
        
        else {
           
           var newTodo = Todos({
               username: req.body.username,
               todo: req.body.todo,
               tags: req.body.tags,
               isDone: req.body.isDone,
               hasAttachment: req.body.hasAttachment
           });
           newTodo.save(function(err) {
              if (err){
                return res.status(404).json({
                    message: "Failure"
              });
              } else {
                return res.status(200).json({
                    message: "Success"
              });

              }
 
           });
            
        }
        
    });
    
    app.delete('/api/todo', function(req, res) {
        
        Todos.findByIdAndRemove(req.body.id, function(err) {
            if (err){
                console.log(err.message);
                res.send('Failure');
            } else {
              res.send('Success');
            }
        })
        
    });
    
}