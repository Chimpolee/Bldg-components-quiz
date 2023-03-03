const correctAnswers = ['D', 'B', 'D', 'A', 'D'];
const form = document.querySelector('.quiz-form');
const scores = document.querySelector('.score-board');
const answers = document.querySelector('.correct-answers')
form.addEventListener('submit', e =>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value,];
    //correct answers
    userAnswers.forEach((answer, index) =>{
        if(answer === correctAnswers[index]){
            score += 20;
        }
    });
    console.log(score);
 
    scrollTo(0, 0);
    scores.querySelector('span').textContent = `${score}%`;
    scores.classList.remove('d-none');
    answers.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() =>{
        scores.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 30);
});

