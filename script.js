console.log('good luck!');

const addButton = document.querySelector('.add-order');
const innerModal = document.querySelector('.inner-modal');
const outerModal = document.querySelector('.outer-modal');
const submitButton = document.querySelector('.submitOrder');
const form = document.getElementsByTagName('form');
const orderList = document.querySelector('.order-list');

const handleButton = () => {
    outerModal.classList.add('open');
}

addButton.addEventListener('click', handleButton);

const createElement = () => {
    const span = document.querySelector('#name').value;
    return `
        <div class="order" data-dish="koba" data-size="large" data-amount="1">
            <span class="title">${span}</span>
            <button class="details">Details</button>
            <button class="served">Delete order</button>
        </div>
    `;
}

const handleModal = event => {
    if (event.target.matches('button.submitOrder')) {
        const newOrder = createElement();
        orderList.innerHTML = newOrder;
    } 
};

submitButton.addEventListener('click', handleModal);

// const inputForm = (event) => {
//     event.preventDefault;



//     form.reset();
// }

// window.addEventListener('click', handleModal);
