const mongoose = require('mongoose')
const mongoURL = 'mongodb+srv://sanjaypothuraju11:d1Bx94KpkrYaeBlQ@cluster0.ztqpb0u.mongodb.net/MinorProj1?retryWrites=true&w=majority&appName=AtlasApp'
async function mongoDB() {
    try {
      await mongoose.connect(mongoURL);
      console.log('Connected to MongoDB');
      
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
    }
  }
  
  module.exports = mongoDB;