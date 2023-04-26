let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
minValue = '' || 1;
maxValue = '' || 100;
minValue > 999 ? minValue++ : maxValue;
maxValue > 999 ? maxValue++ : maxValue;
minValue < -999 ? minValue-- : maxValue;
maxValue < -999 ? maxValue-- : maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;




const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random());
            answerField.innerText = (phraseRandom === 1) ?
                `Проще простого, это - ${answerNumber }?` :
                `Я точно знаю, что это ${answerNumber }!`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Что-то Вы путаете меня!\n\u{1F644}` :
                `А Вы уверены?..\n\u{1F61C}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    switch (orderNumber) {
        case 1:
            answerField.innerText = `Кто молодец? Я молодец!\n\u{1F60E}`;
            break;
        case 2:
            answerField.innerText = `Я люблю выигрывать!\n\u{1F60E}`;
            break; 
        case 3:
            answerField.innerText = `Угадал! Аплодисменты!\n\u{1F60E}`;
                break;
        case 4:
            answerField.innerText = `Это было легче простого!\n\u{1F60E}`;
                break; 
        default:
            answerField.innerText = `Давай еще раз сыграем?\n\u{1F60E}`;
                break; 
            gameRun = false;
    }
    
})



document.getElementById('btnRetry').addEventListener('click', function () {
   minValue = 0;
   maxValue = 100;
   orderNumber = 1;
   minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
   maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
   minValue > 999 ? minValue++ : maxValue;
   maxValue > 999 ? maxValue++ : maxValue;
   minValue < -999 ? minValue-- : maxValue;
   maxValue < -999 ? maxValue-- : maxValue;
   alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`); 
   answerNumber  = Math.floor((minValue + maxValue) / 2);
   orderNumberField.innerText = orderNumber
   answerField.innerText = `Предполагаю, что это число ${answerNumber }?`;
   gameRun = true;
})

 


