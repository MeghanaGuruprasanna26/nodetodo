// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

// Configure chai
chai.use(chaiHttp);
chai.should();
describe("todos", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("Get all todos of user 'test'", (done) => {
             chai.request(app)
                 .get('/api/todos/test')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
        
        // Test to get single student record
        it("Add a todo for user 'test'", (done) => {
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
 