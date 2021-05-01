
const question = "What is Superman's real name?"
//declares variable called question and assigns a string
const answer = prompt(question);
//prompt will allow a response to the question to be typed in, stores variable answer
alert (`You answered ${answer}`);
//an alert is used to display the answer

const quiz = [
    ["What is Superman's real name?, Kal-El"],
    ["What is Wonder Woman's real name?, Princess Diana of Themyscira"],
    ["What is Batman's real name?, Bruce Wayne"]
];



function start(quiz){
    let score = 0; 
    //creates a variable called score to keep track of answers 
    
    //main game loop of the quiz
    for(const [question, answer] of quiz){
    const response = ask(question);
    check(response,answer);
}
    gameOver();

//declares functions within the game loop
    function ask(question){
        return prompt(question);
    }   
    function check(response, answer){
        if (response === answer){
        alert('Correct!');
        score++;
        }
        else{
        alert(`Wrong! The correct answer was ${answer}`);
        } 
    }

    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1? 's' : ''}`);
    }
}