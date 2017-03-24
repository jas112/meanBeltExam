// MEAN Belt Exam Routes Js File___

console.log('Getting Routes!!');

var serverController = require('./../controllers/serverController.js')

module.exports = function(app){
  // Server Mean Discussion Board Routes____
	app.post('/register', serverController.registerUser);
	app.post('/login', serverController.loginUser);
	app.get('/logout', serverController.logoutUser);
	app.get('/sessionPresence', serverController.sessionUser);
	app.get('/questions', serverController.getQuestions);
	app.post('/questions', serverController.createQuestion);
	app.post('/question/:question_id', serverController.showQuestion);
	app.post('/answer/:question_id', serverController.createAnswer);
	app.get('/like/:answer_id', serverController.likeAnswer);

}
