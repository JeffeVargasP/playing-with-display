// Selecionando os elementos do DOM
const box = document.querySelector('.box');
const div = document.querySelector('.div');
const buttons = document.querySelectorAll('li');
const option = document.querySelector('.option');

// Função para atualizar o texto da div e aplicar estilos ao box
function updateBox(button) {
    // Removendo o conteúdo anterior da div
    if (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
    // Adicionando o texto do botão à div
    div.appendChild(document.createTextNode(button.textContent));
    // Exibindo a caixa
    box.style.display = 'flex';
}

// Função para aplicar estilos de justifyContent ao box
function applyJustifyContentStyle(buttonValue) {
    if (buttonValue === 'Align Left') {
        box.style.justifyContent = 'flex-start';
    } else if (buttonValue === 'Align Center') {
        box.style.justifyContent = 'center';
    } else if (buttonValue === 'Align Right') {
        box.style.justifyContent = 'flex-end';
    } else {
        box.style.justifyContent = 'space-between';
    }
}

// Função para aplicar estilos de alignItems ao box
function applyAlignItemsStyle(buttonValue) {
    if (buttonValue === 'Align Top') {
        box.style.alignItems = 'flex-start';
    } else if (buttonValue === 'Align Center') {
        box.style.alignItems = 'center';
    } else {
        box.style.alignItems = 'flex-end';
    }
}

// Iterando sobre os botões e adicionando eventos de clique
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Atualizando o texto da div
        updateBox(button);
        // Obtendo o texto do botão pai do botão clicado
        const buttonValue = button.textContent;
        // Verificando se a opção é para justificar conteúdo ou alinhar itens
        const optionType = button.parentElement.parentElement.querySelector('h2').textContent.replace(/\s/g, '');

        // Aplicando estilos dependendo do tipo de opção selecionada
        if (optionType === 'JustifyContent') {
            applyJustifyContentStyle(buttonValue);
        } else {
            applyAlignItemsStyle(buttonValue);
        }
    });
});
