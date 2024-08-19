let questions = []

// Fonction pour charger dynamiquement le bon module selon le thème
 function menu(){
    const displayStartApp = document.getElementById("displayApp")
    displayStartApp.style.display="none"
    const menuDisplay = document.getElementById("menu")
    menuDisplay.style.display="block"
    async function loadQuestions(theme) {
        switch(theme) {
            case 'phrasal-verbs':
                questions = await import('./phraseVerbaleDATA.js').then(module => module.default);
                break;
            case 'pisu':
                questions = await import('./pisuLvl.js').then(module => module.default);
                break;    
            case 'daily-words':
                questions = await import('./dailyWordsDATA.js').then(module => module.default);
                break;
            default:
                console.error("Thème inconnu : " + theme);
                questions = [];
        }
        
        const mixQuestions = melangerQuestion(questions)
        console.log(questions); // Vous pouvez vérifier si les questions sont bien chargées
        melangerQuestion(mixQuestions)
         menuDisplay.style.display="none"
         displayStartApp.style.display="block"
         startQuiz(); // Démarrer le jeu avec les questions chargées
    }
    
    document.getElementById('start-btn').addEventListener('click', () => {
        const theme = document.getElementById('theme-select').value;
        loadQuestions(theme);
    });
  }




let currentQuestionIndex = 0
let score = 0

const questionElement = document.getElementById("question")

const check = document.getElementById("check-btn")
const nextButton = document.getElementById("next")


const correctAudio = document.getElementById('correct-audio');
const incorrectAudio = document.getElementById('incorrect-audio');

const progressBar = document.getElementById('progress-bar')

function melangerQuestion(tableau){
    for (let i= tableau.length -1 ;  i>0  ;  i--){
        let j = Math.floor(Math.random()*(i+1));
        [tableau[i],tableau[j]] = [tableau[j],tableau[i]]
    }
    return tableau
}


function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    showQuestion()
    console.log("le jeu commence avec le theme selectionné!")
    console.log(`questions ${questions}`)
    console.log(`questions ${mixQuestions}`)
}

function updateProgressBar(){
    // Calcul du pourcentage de progression basé sur la taille du tableau
    const totalQuestions = questions.length
    const progressPercentage = ((currentQuestionIndex+1) / totalQuestions) * 100;
    progressBar.style.width = progressPercentage + '%';
    console.log(totalQuestions)
    console.log(`Progression: ${progressPercentage.toFixed(2)}%`);
}


function resetState(){
    nextButton.style.display = "none"
}

function resetStateCheck(){
    check.style.display = "block"
    questionElement.classList.add('neutre');
}

function clearAnswer(target){
    if(target.value)
        {
            target.value= "";
        }
}

function handleEnterKey(event){
    if(event.key === "Enter"){
        checkAnswer()
    }
}


function normalizeResponse(response) {
    return response.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

function showQuestion(){
    resetState()
    resetStateCheck()
    clearAnswer(answer)
    answer.disabled = false 
    nextButton.innerHTML = "Next"
    let questionNo = currentQuestionIndex + 1
    let currentQuestion = questions [currentQuestionIndex] 
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.question
    check.addEventListener("click",checkAnswer)
    document.addEventListener("keydown",handleEnterKey)
 }

    function checkAnswer (){ 
        resetStateCheck()
        const ansUser = document.getElementById("answer").value
        let filtreAnsUser = ansUser.toLowerCase().replace(/[A-Z]/g)
        let currentQuestion = questions [currentQuestionIndex]
        
        console.log(questionElement)
        if(Array.isArray(currentQuestion.answer)){
            if(currentQuestion.answer.length>1){
                let severalResponse = questions [currentQuestionIndex].answer

                if(checkResponse(filtreAnsUser,severalResponse)){
                    console.log("1.Boucle plusieurs réponses VRAI \n");
                    correctAudio.play();
                    questionElement.classList.add('correct');
                    questionElement.classList.remove('incorrect');
                    document.getElementById("question").textContent =`[[TRUE]] other answer → ${currentQuestion.answer}`
                    score++
                    }
                else{
                    console.log("2.Boucle plusieurs réponses FAUX \n");
                    incorrectAudio.play();
                    questionElement.classList.add('incorrect');
                    questionElement.classList.remove('correct');
                    document.getElementById("question").textContent = `[[FALSE]] ${currentQuestion.QR} → ${currentQuestion.answer}`
                }
            }
            }else{
                if( (normalizeResponse(filtreAnsUser))!==(normalizeResponse(currentQuestion.answer))){
                    console.log("3.Boucle simple réponses FAUX \n");
                    incorrectAudio.play();
                    questionElement.classList.add('incorrect');
                    questionElement.classList.remove('correct');
                    document.getElementById("question").textContent = `[[FALSE]] ${currentQuestion.QR} → ${currentQuestion.answer}`
                }else{
                    console.log("4.Boucle simple réponses VRAI \n");
                    correctAudio.play();
                    questionElement.classList.add('correct');
                    questionElement.classList.remove('incorrect');
                    document.getElementById("question").textContent = `[[TRUE]]`
                    score++
                    }
            }
            updateProgressBar()
            answer.disabled = true 
            nextButton.style.display = "block"
            check.style.display = "none"   
        }  
    
    function checkResponse(userResponse, frenchOptions) {
        let filtreAnsUser = userResponse.toLowerCase().replace(/[A-Z]/g)
        const normalizedUserResponse = normalizeResponse(filtreAnsUser);
        for (const frenchOption of frenchOptions) {
          const normalizedFrenchOption = normalizeResponse(frenchOption);
          if (normalizedUserResponse === normalizedFrenchOption) {
            console.log("ALL TRUE");
            return true; // Réponse correcte
          }
        }
        console.log("ALL FALSE");
        return false; // Réponse incorrecte
      }

    
    function showScore(){
        resetState();
        questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`
        nextButton.innerHTML = "Main Menu"
        nextButton.style.display = "block"
    }


    function handleNextButton(){
        currentQuestionIndex++
        if(currentQuestionIndex < questions.length){
            showQuestion()
        }else{
            progressBar.style.width = 0;
            showScore()
        }
    }

    nextButton.addEventListener("click",()=>{
        questionElement.classList.add('neutre');
        questionElement.classList.remove('correct');
        questionElement.classList.remove('incorrect');
        if(currentQuestionIndex < questions.length){
            handleNextButton()
        }else{
            menu()
        }
    })

    menu()



