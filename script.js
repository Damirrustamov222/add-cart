import { todos } from "./lib/db.js";

function Item(todo) {
    const cont_two = document.querySelector('.cont_two');
    const cart = document.createElement('div');
    const first = document.createElement('div');
    const second = document.createElement('div');
    const img = document.createElement('img');

    const h1 = document.createElement('h1');
    const span = document.createElement('span');
    img.src = './img/x.svg';

    h1.innerText = todo.title;
    span.innerText = todo.time;

    cart.classList.add('cart');
    first.classList.add('first');
    second.classList.add('second');
    h1.classList.add('h1');
    span.classList.add('span');

    img.onclick = () => {
        cart.remove();
    };

    first.append(h1, span);
    second.append( img);
    cart.append(first, second);
    cont_two.append(cart);
}

todos.forEach(todo => Item(todo));


const newCart = document.querySelector('.add');

newCart.onclick = function (e) {
    e.preventDefault(); 

    const input = document.querySelector('.inp');

    if (input.value.toLowerCase() !== '') {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();

        const newTodo = {
            title: input.value,
            time: `${hours}:${minutes}`
        };
        Item(newTodo);
        input.value = '';
    }
}