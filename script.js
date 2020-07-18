console.log('good luck!');

const addButton = document.querySelector('.add-order');
const innerModal = document.querySelector('.inner-modal');
const outerModal = document.querySelector('.outer-modal');
const submitButton = document.querySelector('.submitOrder');
const formReset = document.getElementsByTagName('form');
const detailBtn = document.querySelector('.details');
const inputName = document.getElementById('name');
const inputAmount = document.querySelector('#quantity');
const select = document.querySelector('.select-form');

const handleButton = () => {
    outerModal.classList.add('open');
}

addButton.addEventListener('click', handleButton);

submitButton.addEventListener('click', (e) => {
    
    e.preventDefault();

    const myHTML = `
        <div class="order" data-dish="koba" data-size="large" data-amount="1">
            <span class="title">${inputName.value}</span>
            <button class="details">Details</button>
            <button class="served">Delete order</button>
        </div>
    `;

    const orderList = document.querySelector('.order-list');
    orderList.insertAdjacentHTML('beforeend', myHTML);
    outerModal.classList.remove('open');
});

const deleteBtn = (event) => {
    if (event.target.classList.contains('served')) {
        const deleteButton = event.target;
        deleteButton.closest('.order').remove();
    }
}

document.addEventListener('click', deleteBtn);


const detailButton = event => {
    if (event.target.matches('.details')) {
       innerModal.myDetails = `
         <h2>${inputName.value}</h2>
         <p>Order: </p>
         <p>${inputAmount.value} ${inputSize.value} ${select.value}</p>
       `;
       outerModal.classList.add('open');
    }
}



let inputSize = document.getElementsByName('size');
let sizeValue;
for(var i = 0; i < inputSize.length; i++){
    if(inputSize[i].checked){
        sizeValue = inputSize[i].value;
    }
}

detailBtn.addEventListener('click', detailButton);



// const inputForm = (event) => {
//     event.preventDefault;



//     form.reset();
// }

// window.addEventListener('click', handleModal);
