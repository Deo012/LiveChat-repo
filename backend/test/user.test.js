//test/user.test.js 

const mongoose = require("mongoose");
const chai = require("chai");
const chaiHttp = require("chai-http");
const index = require("../index.js");
const User = require("../models/userModels");
const should = chai.should();

chai.use(chaiHttp);