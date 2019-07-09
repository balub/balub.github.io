const form = document.querySelector('.quiz-form');
const question = [document.querySelector('.question1a'),document.querySelector('.question1b'),document.querySelector('.question1c'),
                  document.querySelector('.question2a'),document.querySelector('.question2b'),document.querySelector('.question2c'),
                  document.querySelector('.question3a'),document.querySelector('.question3b'),document.querySelector('.question3c')];
console.log(question);

const correctAnswers = ['2','2','4','2','2','4','2','2','4'];
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const selectedAnswers = [   form.q1a.value,form.q1b.value,form.q1c.value,
                                form.q2a.value,form.q2b.value,form.q2c.value,
                                form.q3a.value,form.q3b.value,form.q3c.value    ];
    selectedAnswers.forEach((answer,index)=>{
        if(answer === correctAnswers[index]){
            question[index].classList.add('correctAnswer');
        }else{
            question[index].classList.add('incorrectAnswer');
        }
    });
});


