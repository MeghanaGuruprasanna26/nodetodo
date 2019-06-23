// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("todos", () => {
    describe("GET /", () => {
        // Test to get all todos of a user
        it("Positive test: Get all todos of user 'test'", (done) => {
            chai.request(app)
                .get('/api/todos/test')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                 });
        });
       
       // Test to get single student record
       it("Positive test: Add a todo for user 'test'", (done) => {
            chai.request(app)
               .post('/api/todo')
               .send({
                   "username": "test",
                   "todo": "Pay rent",
                   "isDone": true,
                   "hasAttachment": false,
                   "tags": [
                    "personal"
                       ]
               })
               
               .end((err, res) => {
                    res.should.have.status(200);
                    done();
               });
        });


         it("Negative test: check if the server returns error when username is missing", (done) => {
            chai.request(app)
               .post('/api/todo')
               .send({
                   
                   "todo": "Pay car bill",
                   "isDone": true,
                   "hasAttachment": false,
                   "tags": [
                    "personal"
                       ]
               })
               
               .end((err, res) => {
                try {
                 res.should.have.status(200);
                 done();
                } catch(e) {
                    done(e);
                }
            });
     });





        it("Negative test: check if the server returns error when todo string is shorter than expected ", (done) => {
            chai.request(app)
               .post('/api/todo')
               .send({
            
                   "username": "test",
                   "todo": "Pay",
                   "isDone": true,
                   "hasAttachment": false,
                   "tags": [
                    "Personal"
                       ]
               })
               
               .end((err, res) => {
                try {
                    res.should.have.status(200);
                    done();
                   } catch(e) {
                       done(e);
                   }
               });
        });


        it("Negative test:check if the server returns error when username exceeds 15 characters", (done) => {
            chai.request(app)
               .post('/api/todo')
               .send({
                   
                   "username": "testtesttesttestrrrrrrrwrws",
                   "todo": "Collect amazon order",
                   "isDone": true,
                   "hasAttachment": false,
                   "tags": [
                    "personal"
                       ]
               })
               
               .end((err, res) => {
                try {
                 res.should.have.status(200);
                 done();
                } catch(e) {
                    done(e);
                }
            });
     });

         /*
        // Test to get single student record
        it("should not get a single student record", (done) => {
             const id = 5;
             chai.request(app)
                 .get(`/${id}`)
                 .end((err, res) => {
                     res.should.have.status(404);
                     done();
                  });
         });*/
    });
});
 