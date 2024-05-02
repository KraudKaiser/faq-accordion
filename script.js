let buttons = document.getElementsByClassName("button")
let answers = document.getElementsByClassName("answer")
let wrappers = document.getElementsByClassName("question-card")
let questions = document.getElementsByClassName("question")


questions[0].children[0].addEventListener("click", () =>{
    if(buttons[0].className.includes("plus")){
        buttons[0].className = "button minus"
        answers[0].className = "answer show"
        wrappers[0].className = "question-card is-open"
    }else{
        buttons[0].className = "button plus"
        answers[0].className = "answer"
        wrappers[0].className = "question-card"

    } 
})
questions[1].children[0].addEventListener("click", () =>{
    if(buttons[1].className.includes("plus")){
        buttons[1].className = "button minus"
        answers[1].className = "answer show"
        wrappers[1].className = "question-card is-open"
    }else{
        buttons[1].className = "button plus"
        answers[1].className = "answer"
        wrappers[1].className = "question-card"

    } 
})
questions[2].children[0].addEventListener("click", () =>{
    if(buttons[2].className.includes("plus")){
        buttons[2].className = "button minus"
        answers[2].className = "answer show"
        wrappers[2].className = "question-card is-open"
    }else{
        buttons[2].className = "button plus"
        answers[2].className = "answer"
        wrappers[2].className = "question-card"

    } 
})
questions[3].children[0].addEventListener("click", () =>{
    if(buttons[3].className.includes("plus")){
        buttons[3].className = "button minus"
        answers[3].className = "answer show"
        wrappers[3].className = "question-card is-open"
    }else{
        buttons[3].className = "button plus"
        answers[3].className = "answer"
        wrappers[3].className = "question-card"

    } 
})

console.log(questions[0].children[0])
buttons[0].addEventListener('click', () =>{
    if(buttons[0].className.includes("plus")){
        buttons[0].className = "button minus"
        answers[0].className = "answer show"
        wrappers[0].className = "question-card is-open"
    }else{
        buttons[0].className = "button plus"
        answers[0].className = "answer"
        wrappers[0].className = "question-card"

    } 
})
buttons[1].addEventListener('click', () =>{
    if(buttons[1].className.includes("plus")){
        buttons[1].className = "button minus"
        answers[1].className = "answer show"
        wrappers[1].className = "question-card is-open"
    }else{
        buttons[1].className = "button plus"
        answers[1].className = "answer"
        wrappers[1].className = "question-card"
    } 
})
buttons[2].addEventListener('click', () =>{
    if(buttons[2].className.includes("plus")){
        buttons[2].className = "button minus"
        answers[2].className = "answer show"
        wrappers[2].className = "question-card is-open"
    }else{
        buttons[2].className = "button plus"
        answers[2].className = "answer"
        wrappers[2].className = "question-card"
    } 
})
buttons[3].addEventListener('click', () =>{
    if(buttons[3].className.includes("plus")){
        buttons[3].className = "button minus"
        answers[3].className = "answer show"
        wrappers[3].className = "question-card is-open"
    }else{
        buttons[3].className = "button plus"
        answers[3].className = "answer"
        wrappers[3].className = "question-card"
    } 
})

