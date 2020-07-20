console.log('good luck!');

const addButton = document.querySelector('.add-order');
const innerModal = document.querySelector('.inner-modal');
const outerModal = document.querySelector('.outer-modal');
const submitButton = document.querySelector('.submitOrder');
const formReset = document.getElementsByTagName('form');
const detailBtn = document.querySelector('.details');
const inputAmount = document.querySelector('#quantity');
const select = document.querySelector('.select-form');

const handleButton = () => {
    innerModal.innerHTML = `
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
    outerModal.classList.add('open');
};

addButton.addEventListener('click', handleButton);

window.addEventListener('click', (event) => {
    //To make the new order appear in the list of the order.
    if (event.target.matches('button.submitOrder')) {
        const inputName = document.getElementById('name');
        const myHTML = `
        <div class="order" data-dish="koba" data-size="large" data-amount="1">
            <span class="title">${inputName.value}</span>
            <button class="details">Details</button>
            <button class="served">Delete order</button>
        </div>
    `;
    event.target = myHTML;
    const orderList = document.querySelector('.order-list');
    orderList.insertAdjacentHTML('beforeend', myHTML);
    outerModal.classList.remove('open');
    }
    else if (event.target.matches('.details')) {
        innerModal.innerHTML = `
          <h2>Anita</h2>
          <p>Order: </p>
          <p>2 small</p>
        `;
        outerModal.classList.add('open');
    }
    // To delete the order
    else if (event.target.classList.contains('served')) {
        const deleteButton = event.target;
        deleteButton.closest('.order').remove();
    }
});

// document.addEventListener('click', deleteBtn);


const detailButton = event => {
    
}



// let inputSize = document.getElementsByName('size');
// let sizeValue;
// for(var i = 0; i < inputSize.length; i++){
//     if(inputSize[i].checked){
//         sizeValue = inputSize[i].value;
//     }
// }

// detailBtn.addEventListener('click', detailButton);



// const inputForm = (event) => {
//     event.preventDefault;



//     form.reset();
// }

// window.addEventListener('click', handleModal);
