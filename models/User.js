// TODO Add _id
// TODO Add Room model
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

// Read a User by username
async function findUserByUsername(username) {
  return await User.findOne({ username: username });
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
  findUserByUsername,
  updateUserPassword,
  deleteUser,
};