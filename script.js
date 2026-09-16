// Lógica do Quiz Interativo
function checkAnswer(isCorrect) {
    const resultElement = document.getElementById('quiz-result');
    if (isCorrect) {
        resultElement.style.color = '#38A169'; 
        resultElement.innerText = '✨ Correto! Ada Lovelace escreveu o primeiro algoritmo para a Máquina Analítica!';
    } else {
        resultElement.style.color = '#E53E3E'; 
        resultElement.innerText = '❌ Tente novamente! Dica: Ela trabalhou com Charles Babbage no século XIX.';
    }
}


function addIdea() {
    const nameInput = document.getElementById('authorName');
    const ideaInput = document.getElementById('ideaText');
    const ideasList = document.getElementById('ideasList');

    if (nameInput.value.trim() === '' || ideaInput.value.trim() === '') {
        alert('Por favor, preencha o seu nome e a ideia antes de enviar!');
        return;
    }

    const newIdea = document.createElement('div');
    newIdea.className = 'idea-item';
    newIdea.innerHTML = `<strong>${nameInput.value}:</strong> ${ideaInput.value}`;


    ideasList.appendChild(newIdea);

   
    nameInput.value = '';
    ideaInput.value = '';
    
    alert('Ideia enviada com sucesso!');
}
