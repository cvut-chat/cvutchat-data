const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Create a User
async function createUser(userData) {
  const user = new User(userData);
  await user.save();
  return user;
}

async function findUser(identifier) {
  // TODO Not ideal
  let query = {};
  
  // First, try to find by _id if the identifier matches the ObjectId pattern
  if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
    query._id = identifier;
    const userById = await User.findOne(query);
    if (userById) {
      return userById;
    }
  }
  
  // If not found by _id or identifier does not match ObjectId pattern, try by username
  query = { username: identifier };
  return await User.findOne(query);
}

// Update a User's password
async function updateUserPassword(username, newPassword) {
  const user = await User.findOne({ username: username });
  user.password = newPassword; // Assume newPassword is hashed if necessary
  await user.save();
  return user;
}

// Delete a User
async function deleteUser(username) {
  return await User.findOneAndDelete({ username: username });
}

module.exports = {
  createUser,
  findUser,
  updateUserPassword,
  deleteUser,
};