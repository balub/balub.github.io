const form = document.querySelector('.quiz-form');
const question = [document.querySelector('.question1a'),document.querySelector('.question1b'),document.querySelector('.question1c')];
console.log(question);

const correctAnswers = ['2','2','4'];
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const selectedAnswers = [form.q1a.value,form.q1b.value,form.q1c.value];
    selectedAnswers.forEach((answer,index)=>{
        if(answer === correctAnswers[index]){
            question[index].classList.add('correctAnswer');
        }else{
            question[index].classList.add('incorrectAnswer');
        }
    });
});


