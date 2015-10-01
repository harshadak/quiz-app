$(document).ready(function(){

	// On page load, hide quiz section and result section
	$('.quiz-section').hide();
	$('.result-section').hide();

	// Quiz Questions
	var questions = [
	
		// Question 1
			{
				question: 'Which of these was not considered as the title for "F.R.I.E.N.D.S"?',
				options: ['Friends Like Us', 'Central Perk Guys', 'Six Of One', 'Across The Hall'],
				answer: 1
			},

		// Question 2
			{
				question: 'Chandler was stuck with whom in the ATM vestibule?',
				options: ['Jasmine Tookes', 'Martha Hunt', 'Jill Goodacre', 'Julia Stegner'],
				answer: 2
			},

		// Question 3
			{
				question: "Who were stuck in the closet during Carol's childbirth?",
				options: ['Ross and Phoebe', 'Ross, Susan and Phoebe', 'Ross, Monica and Phoebe', 'Ross and Susan'],
				answer: 1
			},

		// Question 4
			{
				question: "What was the only wrong guess by Chandler and Joey in Rachel's shopping bag?",
				options: ['Diet Soda', 'Apples', 'Yogurt', 'Orange Juice'],
				answer: 3
			},

		// Question 5
			{
				question: 'Who were originally supposed to be the love interests of the show?',
				options: ['Rachel and Joey', 'Joey and Monica', 'Chandler and Phoebe', 'Ross and Phoebe'],
				answer: 1
			},

		// Question 6
			{
				question: 'Where were Ross and Emily supposed to go for their honeymoon?',
				options: ['Greece', 'Venice', 'Paris', 'Aruba'],
				answer: 0
			},

		// Question 7
			{
				question: "What was Joey's middle name?",
				options: ['Eustace', 'Francis', 'Muriel', 'Francois'],
				answer: 1
			},

		// Question 8
			{
				question: "During Chandler and Monica's wedding, Joey showed up as?",
				options: ['Groomsman', 'Priest', 'Minister', 'World War soldier'],
				answer: 3
			},	

		// Question 9
			{
				question: 'Ross and Rachel got married at?',
				options: ['The Fairmont Chateau', 'Chapel of Love', 'The Fountain Chapel', 'Little White Chapel'],
				answer: 3
			},

		// Question 10
			{
				question: 'What does Ross turn into for the Halloween Party?',
				options: ['Spudnik', 'Armadillo', 'Dinosaur', 'Bunny Rabbit'],
				answer: 0
			},
	];

	// Variables
	var questionNum = 0;
	var questionTotal = questions.length;
	var correctAnswerTotal = 0;

	$('#startQuiz').on('click', function(){
		$('.intro-section').hide();
		$('.result-section').hide();
		$('.quiz-section').show();
		displayQuestion();
	});

	$('#submit-answer').on('click', function() {
		var userAnswer = $('input[id="choices"]:checked').val();
		console.log(userAnswer);
		var correctAnswer = questions[questionNum].answer;
		// Function to calculate total number of correct answers(score)
		if (typeof userAnswer != 'undefined') {
			if (userAnswer == correctAnswer) {
				correctAnswerTotal++;	
			}
			// Function to check if last question is being attempted
			if ((questionNum+1) == questionTotal) {
				$('.result-section').show();
				$('#show-score').text('Your score is ' + correctAnswerTotal + ' out of ' + questionTotal + '.');
				$('#startQuiz').show();
				$('.quiz-section').hide();
				$('.intro-section').hide();
			} else {
				questionNum++;
				displayQuestion();
			}
		} else {
			alert("Please select an answer");
			return false;
		}
	});

	// Function to display quiz questions
	function displayQuestion() {
		$('#question-num').text('Question ' + (questionNum+1) + ' of ' + questionTotal);
		$('#question').text(questions[questionNum].question);
		$('.quiz-options').empty();
		var optionsTotal = questions[questionNum].options.length;
		for (var i = 0; i < optionsTotal; i++) {
			$('.quiz-options').append('<input type="radio" id="choices" class="choices" name="choices" value=' + i + '>' + questions[questionNum].options[i] + '<br>');
		}
	}

	// Function to navigate back from the result screen to intro screen
	$('.result-section').on('click', '#startQuiz', function(){
		$('.intro-section').show();
		$('.quiz-section').hide();
		$('.result-section').hide();
		questionNum = 0;
		correctAnswerTotal = 0;
	});
});

