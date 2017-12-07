// db/seed.js
const request = require('superagent')
const user = require('./fixtures/user.json')
const recipes = require('./fixtures/recipes.json')

const createUrl = (path) => {
  return `${process.env.HOST || `http://localhost:${process.env.PORT || 3030}`}${path}`
}

<<<<<<< HEAD
//create all recipes
=======
>>>>>>> da2c80bfa24b49d51f6aabaf6f0b7ff814fdcff7
const createRecipes = (token) => {
  return recipes.map((recipe) => {
    return request
      .post(createUrl('/recipes'))
      .set('Authorization', `Bearer ${token}`)
      .send(recipe)
      .then((res) => {
        console.log('Recipe seeded...', res.body.title)
      })
      .catch((err) => {
        console.error('Error seeding recipe!', err)
      })
  })
}
<<<<<<< HEAD
//authenticate new user
=======

>>>>>>> da2c80bfa24b49d51f6aabaf6f0b7ff814fdcff7
const authenticate = (email, password) => {
  request
    .post(createUrl('/sessions'))
    .send({ email, password })
    .then((res) => {
      console.log('Authenticated!')
      return createRecipes(res.body.token)
    })
    .catch((err) => {
      console.error('Failed to authenticate!', err.message)
    })
}
<<<<<<< HEAD
//sign up users
request
  .post(createUrl('/users'))
  .send(user)
  .then((res) => {
=======

request
  .post(createUrl('/users'))
  .send(user)
  .then(() => {
>>>>>>> da2c80bfa24b49d51f6aabaf6f0b7ff814fdcff7
    console.log('User created!')
    return authenticate(user.email, user.password)
  })
  .catch((err) => {
    console.error('Could not create user', err.message)
    console.log('Trying to continue...')
    authenticate(user.email, user.password)
  })
