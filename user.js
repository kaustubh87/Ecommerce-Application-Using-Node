var mongoose = require('mongoose');
var UserSchema = require('./UserSchema');


mongoose.connect('mongodb://localhost:27017/ecommerce');

var User = mongoose.model('User', UserSchema, 'users');

var user = new User({
  name: 'John Smith',
  email: 'john@smith.io'
});

user.save(function(error){
  if(error){
    console.log(error);
    process.exit(1);
  }

User.find({email:'john@smith.io'}, function(error, docs){
    if(error){
      console.log(error);
      process.exit(1);
    }
    console.log(docs);
});

});
