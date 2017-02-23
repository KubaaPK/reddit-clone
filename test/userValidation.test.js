
import assert from 'assert';
import chai from 'chai';

const should = chai.should();

import userValidation from './../server/helpers/userValidation';


const passedUser = {
    username: "Username",
    password: "Password"
};
const failedUser = {
    username: "Usn",
    password: "Pwd"
}


describe('New user validation', () => {
  describe('Complete validation', () => {
    it('Should pass the test if username and password are correct.', () => {
      userValidation.validate(passedUser.username, passedUser.password).should.be.equal(true);
    });
  });
});

