// test/user.test.js
import mongoose from "mongoose";
import chai from "chai";
import chaiHttp from "chai-http";
import server from "../index"; 
import User from "../models/userModel";

chai.use(chaiHttp);

describe("Users", () => {
 // Before running tests, connect to the database and add a test user
 before((done) => {
     mongoose.connect("mongodb://localhost:27017/dbLiveChat", { useNewUrlParser: true, useUnifiedTopology: true });
     mongoose.connection.once("open", () => {
         console.log("MongoDB connected successfully");
         done();
     });
 });

 // Clean up the database and disconnect after tests
 after((done) => {
     mongoose.connection.db.dropDatabase(() => {
         mongoose.connection.close(done);
     });
 });

 // Test the GET /users/:username route
 describe("GET /users/:username", () => {
     // Add a user before the test
     before((done) => {
         const user = new User({ username: "testuser", email: "testuser@example.com" });
         user.save(done);
     });

     it("should GET a user by username", (done) => {
         chai.request(server)
             .get("/users/testuser")
             .end((err, res) => {
                 res.should.have.status(200);
                 res.body.should.be.a("object");
                 res.body.should.have.property("username").eql("testuser");
                 done();
             });
     });

     it("should return 404 if user is not found", (done) => {
         chai.request(server)
             .get("/users/nonexistentuser")
             .end((err, res) => {
                 res.should.have.status(404);
                 res.body.should.be.a("object");
                 res.body.should.have.property("message").eql("User not found");
                 done();
             });
     });
 });
});