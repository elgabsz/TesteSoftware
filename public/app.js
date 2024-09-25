// public/app.js

let counter = 0;
let shoppingList = [];

// Função para incrementar o contador
function incrementCounter() {
    counter++;
    document.getElementById('counter').textContent = counter;
}

// Função para adicionar um item à lista de compras
function addItem() {
    const itemInput = document.getElementById('item-input');
    const item = itemInput.value.trim();
    if (item) {
        shoppingList.push(item);
        const li = document.createElement('li');
        li.textContent = item;
        document.getElementById('shopping-list').appendChild(li);
        itemInput.value = ''; // Limpar o input
    }
}

// Função para converter Celsius para Fahrenheit
function convertTemperature() {
    const celsiusInput = document.getElementById('celsius-input');
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit-result').textContent = fahrenheit.toFixed(2);
    }
}

// Inicializa os event listeners
function init() {
    document.getElementById('increment-btn').onclick = incrementCounter;
    document.getElementById('add-item-btn').onclick = addItem;
    document.getElementById('convert-btn').onclick = convertTemperature;
}

// Chama init quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);

// Exportando as funções para testes
module.exports = {
    incrementCounter,
    addItem,
    convertTemperature
};
