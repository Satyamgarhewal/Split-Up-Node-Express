const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const bcryptjs = require('bcryptjs');
const userSchema = new Schema({
  userId: {
    type: Number,
    required: true,
    default: Number(new Date())
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        return validator.isEmail(value);
      },
      message: function() {
        return 'Invalid email format';
      }
    }
  },
  mobile: {
    type: Number,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Number,
    default: Number(new Date())
  },
  tokens: [
    {
      token: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Number(new Date())
      }
    }
  ]
});

userSchema.pre('save', function(next) {
  const user = this;
  if (user.isNew) {
    bcryptjs
      .genSalt(10)
      .then(function(salt) {
        bcryptjs.hash(user.password, salt).then(function(encrytedPassword) {
          user.password = encrytedPassword;
          next();
        });
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    next();
  }
});

const User = mongoose.model('User', userSchema);
module.exports = { User };
