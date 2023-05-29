// Controllo funzionamento javascript

console.log(`JS OK`);

// DATI PRELIMINARI

const name = document.getElementById(`user`)

const kilometers = document.getElementById(`kilometers`);

const age = document.getElementById(`age`);

const button = document.querySelector(`button`)

const result = document.getElementById(`result`);

const priceTicket = document.getElementById(`price`);

const noDiscount = document.getElementById(`no-discount`);

// DATI CONCRETI

button.addEventListener(`click` , function(){

    const askname = `Andrea `

    console.log(askname)

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
    
    console.log(overDiscount)
    
    let discount = totalPrice;
    console.log("sono adulto");
    
    if(askAge < 18){
       discount = (totalPrice * underDiscount).toFixed(2);
       console.log("sono minorenne");
    }else if(askAge > 65){
       discount = (totalPrice * overDiscount).toFixed(2);
       console.log("sono anziano");
    }
    
    console.log(discount); 
    
    result.innerHTML = `${askname} ${askAge} ${discount}`
})




