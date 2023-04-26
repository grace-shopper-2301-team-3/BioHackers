const { expect } = require('chai')
const request = require('supertest')
const { db, models: { User } } = require('../db')
const seed = require('../../script/seed');
const app = require('../app')
const bcrypt = require('bcrypt');

describe('User routes', () => {
  beforeEach(async () => {
    await seed();
  })

  describe('/api/users/', () => {

    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(200)

      expect(res.body).to.be.an('array');
      expect(res.body.length).to.equal(5);
    });

    it('GET /api/users/:id', async () => {
      const res = await request(app)
        .get('/api/users/1')
        .expect(200)

      expect(res.body).to.be.an('object');
      expect(res.body.id).to.equal(1);

    });

    it('POST /api/users', async () => {
      const user = {
        username: 'test',
        password: 'password',
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        isAdmin: true
      };

      //makes sure the password is hashed before saving
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;

      const res = await request(app)
        .post('/api/users')
        .send(user)
        .expect(200);
      expect(res.body).to.be.an('object');
      expect(res.body.username).to.equal(user.username);
      expect(res.body.firstName).to.equal(user.firstName);
      expect(res.body.lastName).to.equal(user.lastName);
      expect(res.body.email).to.equal(user.email);
      expect(res.body.isAdmin).to.equal(user.isAdmin);

      //this will compare the hashed password with the password in the database
      const isPasswordValid = await bcrypt.compare(user.password, res.body.password);
      expect(isPasswordValid).to.be.true;

    });

    it('PUT /api/users/:id', async () => {
      const user = await User.findOne();
      const updatedUser = {
        username: 'lucy',
        password: 'loo',
        firstName: 'Lucy',
        lastName: 'Loo',
        email: 'lucyloo123@gmail.com',
        isAdmin: true,
      }

      const res = await request(app)
        .put(`/api/users/${user.id}`)
        .send(updatedUser)
        .expect(200);

      expect(res.body).to.be.an('object');
      expect(res.body.id).to.equal(user.id);
      expect(res.body.username).to.equal(updatedUser.username);
      expect(res.body.firstName).to.equal(updatedUser.firstName);
      expect(res.body.lastName).to.equal(updatedUser.lastName);
      expect(res.body.email).to.equal(updatedUser.email);
      expect(res.body.isAdmin).to.equal(updatedUser.isAdmin);
    });

    it('DELETE /api/users/:id', async () => {
      const user = await User.findOne();
      const res = await request(app)
        .delete(`/api/users/${user.id}`)
        .expect(204);
      const deletedUser = await User.findByPk(user.id);
      expect(deletedUser).to.be.null;
    })

  })
}) 
