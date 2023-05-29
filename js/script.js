// Controllo funzionamento javascript

console.log(`JS OK`);

// DATI PRELIMINARI

const user = document.getElementById(`user`);

const askUser = document.getElementById(`ask-name`);

const base = document.getElementById(`base-ticket`);

const kilometers = document.getElementById(`kilometers`);

const age = document.getElementById(`age`);

const button = document.querySelector(`button`)

const result = document.getElementById(`result`);

const priceTicket = document.getElementById(`price`);

const noDiscount = document.getElementById(`no-discount`);

const display = document.querySelector(`.d-none`);

// DATI CONCRETI

button.addEventListener(`click` , function(){
    
    // display biglietto

    display.classList.add(`d-block`)
    display.classList.remove(`d-none`)
    
    // valore nome

    let userName = user.value

    // valore ticket

    let baseTicket = `Biglietto standard`

    const askKilometers = parseInt(kilometers.value);

    console.log(askKilometers);

    const askAge = parseInt(age.value);

    console.log(askAge);

    const ticket = 0.21;

    console.log(ticket);

    let totalPrice = (askKilometers * ticket).toFixed(2);

    const underDiscount = 0.8;
    
    console.log(underDiscount);
    
    const overDiscount = 0.6;
    
    console.log(overDiscount);
    
    // under and over

    let discount = totalPrice;
    console.log("sono adulto");
    
    if(askAge < 18){
       discount = (totalPrice * underDiscount).toFixed(2);
       baseTicket = `Biglietto under`;
       console.log("sono minorenne");
    }else if(askAge > 65){
       discount = (totalPrice * overDiscount).toFixed(2);
       baseTicket = `Biglietto over`;
       console.log("sono anziano");
    }
    
    // controllo discount

    console.log(discount); 
    
    // elementi inseriti nel DOM

    result.innerHTML = discount ;

    askUser.innerHTML = userName;

    base.innerHTML = baseTicket;
});




