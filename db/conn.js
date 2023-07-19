const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/mydatabase'; // Replace with your actual connection string

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB!');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
