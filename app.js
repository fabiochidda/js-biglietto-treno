// Alert di benvenuto
alert("Benvenuto")

// Prompt per inserire il numero di chilometri

let userKm = prompt("Inserisci qui i chilometri che vuoi percorrere");

console.log(userKm);

// Prompt per inserire l'età del passeggero

let passengerAge = prompt("Inserisci qui l'età del passeggero");

console.log(passengerAge);

// Calcolo prezzo biglietto

let ticketPrice = userKm * 0.21;

console.log(ticketPrice);

// Controllo età per gli sconti

if (passengerAge < 18) {

    let ticketPriceDiscount = (ticketPrice * 20) / 100;

    let ticketDiscounted = ticketPrice - ticketPriceDiscount; 

    console.log(ticketDiscounted);

} else if (passengerAge >= 60) {

    let ticketPriceDiscount = (ticketPrice * 40) / 100;

    let ticketDiscounted = ticketPrice - ticketPriceDiscount;

    console.log(ticketDiscounted);
    
}


