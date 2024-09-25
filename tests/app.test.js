/**
 * @jest-environment jsdom
 */

const {
    incrementCounter,
    addItem,
    convertTemperature
  } = require('../public/app.js'); // Caminho para o seu app.js
  
  describe('Testes de funcionalidades', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <button id="increment-btn">Incrementar</button>
            <p>Contador: <span id="counter">0</span></p>
            <input id="item-input" placeholder="Digite um item">
            <button id="add-item-btn">Adicionar Item</button>
            <ul id="shopping-list"></ul>
            <input id="celsius-input" placeholder="Temperatura em Celsius">
            <button id="convert-btn">Converter</button>
            <p>Fahrenheit: <span id="fahrenheit-result"></span></p>
        `;
    });
  
    test('Deve incrementar o contador', () => {
        const counterElement = document.getElementById('counter');
        expect(counterElement.textContent).toBe('0');
        
        incrementCounter();
        expect(counterElement.textContent).toBe('1');
        
        incrementCounter();
        expect(counterElement.textContent).toBe('2');
    });
  
    test('Deve adicionar um item à lista de compras', () => {
        const itemInput = document.getElementById('item-input');
        
        itemInput.value = 'Maçã';
        addItem();
        expect(document.getElementById('shopping-list').children.length).toBe(1);
        expect(document.getElementById('shopping-list').children[0].textContent).toBe('Maçã');
        
        itemInput.value = 'Banana';
        addItem();
        expect(document.getElementById('shopping-list').children.length).toBe(2);
        expect(document.getElementById('shopping-list').children[1].textContent).toBe('Banana');
    });
  
    test('Deve converter Celsius para Fahrenheit', () => {
        const celsiusInput = document.getElementById('celsius-input');
        
        celsiusInput.value = '0';
        convertTemperature();
        expect(document.getElementById('fahrenheit-result').textContent).toBe('32.00');
        
        celsiusInput.value = '100';
        convertTemperature();
        expect(document.getElementById('fahrenheit-result').textContent).toBe('212.00');
    });
  });
  