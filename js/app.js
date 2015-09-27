$(document).ready(function(){

	$('.quiz-section').hide();
	$('.result-section').hide();

	// Questions
	var questions = [
	// Question 1
		{
			quest: 'Which of these was not considered as the title for "F.R.I.E.N.D.S"?',
			options: ['Friends Like Us', 'Central Perk Guys', 'Six Of One', 'Across The Hall'],
			answer: 1
		},

	// Question 2
		{
			quest: 'Chandler was stuck with whom in the ATM vestibule?',
			options: ['Jasmine Tookes', 'Martha Hunt', 'Jill Goodacre', 'Julia Stegner'],
			answer: 2
		},

	// Question 3
		{
			quest: "Who were stuck in the closet during Carol's childbirth?",
			options: ['Ross and Phoebe', 'Ross, Susan and Phoebe', 'Ross, Monica and Phoebe', 'Ross and Susan'],
			answer: 1
		},

	// Question 4
		{
			quest: "What was the only wrong guess by Chandler and Joey in Rachel's shopping bag?",
			options: ['Diet Soda', 'Apples', 'Yogurt', 'Orange Juice'],
			answer: 3
		},

	// Question 5
		{
			quest: 'Who were originally supposed to be the love interests of the show?',
			options: ['Rachel and Joey', 'Joey and Monica', 'Chandler and Phoebe', 'Ross and Phoebe'],
			answer: 1
		},

	// Question 6
		{
			quest: 'Where were Ross and Emily supposed to go for their honeymoon?',
			options: ['Greece', 'Venice', 'Paris', 'Aruba'],
			answer: 0
		},

	// Question 7
		{
			quest: "What was Joey's middle name?",
			options: ['Eustace', 'Francis', 'Muriel', 'Francois'],
			answer: 1
		},

	// Question 8
		{
			quest: "During Chandler and Monica's wedding, Joey showed up as?",
			options: ['Groomsman', 'Priest', 'Minister', 'World War soldier'],
			answer: 3
		},	

	// Question 9
		{
			quest: 'Ross and Rachel got married at?',
			options: ['The Fairmont Chateau', 'Chapel of Love', 'The Fountain Chapel', 'Little White Chapel'],
			answer: 3
		},

	// Question 10
		{
			quest: 'What does Ross turn into for the Halloween Party?',
			options: ['Spudnik', 'Armadillo', 'Dinosaur', 'Bunny Rabbit'],
			answer: 0
		},
	];
});