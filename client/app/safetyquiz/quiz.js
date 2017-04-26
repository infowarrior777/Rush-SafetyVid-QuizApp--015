var score = 0;
var text2display = "";
var answers = new Array(12);
	answers[0] = "1. Wrong! A is the correct answer.\n";
	answers[1] = "2. Wrong! A is the correct answer.\n";
	answers[2] = "3. Wrong! A is the correct answer.\n";
	answers[3] = "4. Wrong! A is the correct answer.\n";
	answers[4] = "5. Wrong! A is the correct answer.\n";
	answers[5] = "6. Wrong! A is the correct answer.\n";
	answers[6] = "7. Wrong! A is the correct answer.\n";
	answers[7] = "8. Wrong! A is the correct answer.\n";
	answers[8] = "9. Wrong! A is the correct answer.\n";
	answers[9] = "10. Wrong! A is the correct answer.\n";
	answers[10] = "11. Wrong! A is the correct answer.\n";
	answers[11] = "12. Wrong! A is the correct answer.\n";

var questions = new Array(12);
	questions[0] = "q1";
	questions[1] = "q2";
	questions[2] = "q3";
	questions[3] = "q4";
	questions[4] = "q5";
	questions[5] = "q6";
	questions[6] = "q7";
	questions[7] = "q8";
	questions[8] = "q9";
	questions[9] = "q10";
	questions[10] = "q11";
	questions[11] = "q12";

function test() {
	alert("this is only a test!");
}

function checkQs(s) {
	var qs = document.getElementsByName(s);
	var noOfRadios = qs.length;

	for (var i = 0; i < noOfRadios; i++) {
		if (qs[i].checked) {
			if (qs[i].value == "correct") {
				text2display = text2display + "* Correct!\n";
				score++;
			}
			else text2display = text2display + answers[questions.indexOf(s)];
			break;
		}
	}
}

function checkAll() {
	for (var i = 0; i < questions.length; i++) {
		checkQs(questions[i]);
	}
	quiz.answersBox.value = text2display + "\n\nResults: " + score + " out of 12 correct";
}



