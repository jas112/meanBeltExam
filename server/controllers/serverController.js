// Server Controller___

console.log('Starting MEAN Discussion Board Server Controller!!');

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {

  // Site Functions__

  registerUser: function(req, res){
    console.log('registering user!');
    console.log(req.body);
    var user = new User(req.body);
    user.save(function(err, user){
      if(err){
        res.status(400).send("User was not added to database.")
      }
      else{
        req.session.user = user;
        res.sendStatus(200);
      }
    })
  },

  loginUser: function(req, res){
    User.findOne({name: req.body.name}, function(err, data){
      if(data ==null){
        res.status(400).send("Login Failed!!! User not found!!!")
      }
      else{
        req.session.user = data;
        res.sendStatus(200);
      }
    })
  },

    logoutUser: function(req, res){
      console.log("Logging out!!! Bye, bye!!!")
      req.session.destroy();
      res.redirect('/');
  },

  sessionUser: function(req,res){
    if(req.session.user){
      res.json(req.session.user);
    }
    else{
      res.status(401).send("Session user not present.")
    }
  },

  // User Functions___

  getUsers: function(req,res){
    Customer.find({}, function(err, data){
      if(err){
        res.status(400).send("Operation Failed.")
      }
      else{
      res.json(data);
      }
    })
  },

  updateUser: function(req,res){
    User.update({_id:req.params.id}, req.body, function(err, data){
      if(err){
        res.status(400).send("Record was not updated.")
      }
      else{
        res.json(data);
      }
    })
  },

  deleteUser: function(req,res){
    User.findOne({_id:req.params.id}, function(err, data){
      if(data == null){
        res.status(400).send("No corresponding record found");
      }
      else{
        data.remove();
        res.sendStatus(200);
      }
    })
  },

  showUser: function(req,res){
    console.log('server controller ', req.params.id);
    User.findOne({_id:req.params.id}, function(err, data){
      if(data == null){
        res.status(400).send("No corresponding record found");
      }
      else{
        res.json(data);
      }
    })
  },

  // Question Functions___

  getQuestions: function(req,res){
    Question.find({}).populate('_user').exec(function(err, data){
      if(err){
        res.status(400).send("Operation Failed.")
      }
      else{
        res.json(data);
      }
    })
  },

  createQuestion: function(req,res){
    console.log(req.body);
    var question = new Question(req.body);
    question._user = req.session.user._id;
    question.save(function(err, data){
      if(err){
        res.status(400).send("New question not added to database.")
      }
      else{
        User.findOne({_id: req.session.user._id}, function(err,user){
          if(err){
            console.log(err);
          }
          else{
            console.log("question creation testing user.....pushing to user.");
            user.responses.push(finalRes);
            user.save(function(err,data){
              if(err){
                console.log(err);
              }
              else{
                res.sendStatus(200);
              }
            })
          }
        })
      }
    })
  },

  showQuestion: function(req,res){
    Question.findOne({_id:req.params.id}).populate('_user').populate({path: 'answers', populate: {path: '_user'}}).exec(function(err, data){
      if(data == null){
        res.status(400).send("No corresponding record found");
      }
      else{
      res.json(data);
      }
    })
  },

  // Answer Functions___

  getAnswers: function(req,res){
    Answer.find({}, function(err, data){
      if(err){
        res.status(400).send("Operation Failed.")
      }
      else{
      res.json(data);
      }
    })
  },

  createAnswer: function(req,res){
    Question.findOne({_id: req.params.postId}, function(err, post){
      if(err){
        res.status(400).send("Question not Found!!")
      }
      else{
      var answer = new Answer(req.body)
      answer._user = req.session.user._id;
      answer._question = question._id
      answer.save(function(err, answer){
        if(err){
          console.log("Create Answer Operation Failed");
        }
        else{
          console.log("answer creation testing question.....pushing to question.");
          question.answers.push(answer);
          question.save(function(err, updatedQuestion){
            if(err){
              res.status(400).send("Answer not saved to question")
                }
                else{
                User.findOne({_id: req.session.user._id}, function(err,user){
                  if(err){
                    console.log(err);
                  }
                  else{
                    console.log("answer creation testing user.....pushing to user.");
                    user.responses.push(finalRes);
                    user.save(function(err,data){
                      if(err){
                        console.log(err);
                      }
                      else{
                        res.sendStatus(200);
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
    })
  },

  likeAnswer: function(req,res){
    Answer.findOne({_id: req.params.answer_id}, function(err, answer){
      if(err){
        console.log(err);
      }
      else{
        answer.likes = answer.likes + 1;
        answer.save(function(err, updatedAnswer){
          if(err){
            console.log("Like function was not executed...");
          }
          else{
            res.sendStatus(200);
          }
        })
      }
    })
  }
}
