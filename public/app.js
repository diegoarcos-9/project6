// Using selector inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
    const btn = question.querySelector(".question-btn");
    // console.log(btn);
    btn.addEventListener('click', function(){
        question.classList.toggle('show-text')
    })
})