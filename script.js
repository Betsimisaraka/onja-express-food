console.log('good luck!');

const addButton = document.querySelector('.add-order');
const orderList = document.querySelector('.order-list');
const innerModal = document.querySelector('.inner-modal');
const outerModal = document.querySelector('.outer-modal');
const submitButton = document.querySelector('.submitOrder');
const formReset = document.querySelector('form');

//Adding the input form to the modal inner
const handleButton = () => {
    const orderHTML = `
    <form>
    <p>Your name :</p>
    <input
        class="input-form"
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name here"
        required
    />
    <p>Please select your dish :</p>
    <select name="dish" class="select-form" required>
        <option value="romazava">Romazava</option>
        <option value="koba">Koba</option>
        <option value="ravitoto">Ravitoto</option>
        <option value="mokary">Mokary</option>
        <option value="achard">Achard</option>
        <option value="masikita">Masikita</option>
        <option value="sambos">Sambos</option>
        <option value="mofo-baolina">Mofo baolina</option>
        <option value="ranonapango">Ranonapango</option>
    </select>
    <p>Please select the size of your plate :</p>
    <input type="radio" id="small" name="size" value="small" required />
    <label for="small">Small</label><br />
    <input type="radio" id="medium" name="size" value="medium" />
    <label for="medium">Medium</label><br />
    <input type="radio" id="large" name="size" value="large" />
    <label for="large">Large</label><br />
    <p>How many pieces do you want to order?</p>
    <input
        class="input-form"
        type="number"
        id="quantity"
        name="amount"
        placeholder="Enter a number here"
        required
    />
    <button class="submitOrder" type="submit">Add this order</button>
</form>
    `;
    innerModal.innerHTML = orderHTML;
    outerModal.classList.add('open');
};

//Close the modal

const closeModal = () => {
    outerModal.classList.remove('open');
}

// Close the modal with clicking outside

const handleClickOutside = (e) => {
    const outside = !event.target.closest('.inner-modal')
    if (outside) {
        closeModal();
    }
};

//Close the modal with escape key

const HandleEspkey = (event) => {
    if (event.key === 'Escape') {
        closeModal(); 
    }
};

// Event delegation with the submit button
const handleSubmit = (event) => {
    event.preventDefault();//Prevent the page from reloading
    //Check if the form that emit the submit is really our form
    if (event.target.matches("form")) {

        const form = event.target;
        //Destructuring the form to get the inputs value.

        const { name, size, dish, amount } = form;

    //Create a html to make the new order appear in the list of the order.
        const myHTML = `
        <div class="order" data-dish="${dish.value}" data-size="${size.value}" data-amount="${amount.value}">
            <span class="title">${name.value}</span>
            <button class="details">Details</button>
            <button class="served">Delete order</button>
        </div>
    `;
    orderList.insertAdjacentHTML('beforeend', myHTML);
    closeModal();
    form.reset();
    }
};

// Show the detail of the order in the detail button
const detailButton = event => {

    if (event.target.matches('.details')) {
        const details = event.target;
        const orderDetails = details.closest('.order');
        const name = orderDetails.querySelector('.title').textContent;
        const { dish, size, amount } = orderDetails.dataset;

        innerModal.innerHTML = `
          <h2>${name}</h2>
          <h3>Order: </h3>
          <p>${amount} ${size} ${dish}</p>
          <img src="./images/${dish}.jpg" alt="">
        `;
        outerModal.classList.add('open');
    }
};

// To delete the order
const deleteBtn = event => {
    if (event.target.classList.contains('served')) {
        const deleteButton = event.target;
        deleteButton.closest('.order').remove();
    }
};

//Event listeners
addButton.addEventListener('click', handleButton);

outerModal.addEventListener('click', handleClickOutside);

window.addEventListener('click', HandleEspkey);

window.addEventListener('submit', handleSubmit);

window.addEventListener('click', deleteBtn);

window.addEventListener('click', detailButton);
