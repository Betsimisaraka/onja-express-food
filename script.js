console.log('good luck!');

const addButton = document.querySelector('.add-order');
const innerModal = document.querySelector('.inner-modal');
const outerModal = document.querySelector('.outer-modal');
const submitButton = document.querySelector('.submitOrder');
const formReset = document.getElementsByTagName('form');
const detailBtn = document.querySelector('.details');
const inputName = document.getElementById('name');
const inputAmount = document.querySelector('#');

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
    console.log(myHTML);

    const orderList = document.querySelector('.order-list');
    orderList.insertAdjacentHTML('beforeend', myHTML);
    console.log(orderList);
    outerModal.classList.remove('open');
    formReset.reset();
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
       const name = event.name.value;
       const amount = event.amount.value;
       const size = event.value.value;
       const dish = event.value.value;
       return `
         <h2>${name}</h2>
         <p>Order: </p>
         <p>${amount} ${size} ${dish}</p>
       `;
    }
}

detailBtn.addEventListener('click', detailButton);



// const inputForm = (event) => {
//     event.preventDefault;



//     form.reset();
// }

// window.addEventListener('click', handleModal);
