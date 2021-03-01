import faker from 'faker'

export default (req, res) => {

  let users = []
  for (let id=1; id <= 20; id++) {
    let number = `${faker.random.number()}${faker.random.number()}`
    let avatar = faker.image.image()
    let firstname = faker.name.firstName()
    let lastname = faker.name.lastName()
    let isOnline = faker.random.boolean()
    let lastMessage = faker.random.word()
    
    users.push({
      id: `10000${number}`,
      avatar,
      firstname,
      lastname,
      isOnline,
      lastMessage
    })
  }


  res.status(200).json({ users })
}