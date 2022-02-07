// Alert di benvenuto
alert("Benvenuto");

// Prompt per inserire il numero di chilometri

let userKm = parseInt( prompt("Inserisci qui i chilometri che vuoi percorrere"));

console.log(userKm);

// Controllo dati KM 

if (isNaN(userKm)) {

    alert("Per favore inserisci un numero");

}

// Prompt per inserire l'età del passeggero

let passengerAge = parseInt( prompt("Inserisci qui l'età del passeggero"));

console.log(passengerAge);

// Controllo dati età 

if (isNaN(passengerAge)) {

    alert("Per favore inserisci un numero");

}

// Calcolo prezzo biglietto

let ticketPrice = userKm * 0.21;

console.log(ticketPrice);

// Controllo età per gli sconti

if (passengerAge < 18) {

    let ticketPriceDiscount = (Math.round((ticketPrice * 20) / 100).toFixed(2));

    let ticketDiscounted = ticketPrice - ticketPriceDiscount;
    
    document.getElementById("ticketDiscount").innerHTML = ticketPriceDiscount;

    document.getElementById("ticketDiscounted").innerHTML = ticketDiscounted;

    console.log(ticketDiscounted);

} else if (passengerAge >= 60) {

    let ticketPriceDiscount = (ticketPrice * 40) / 100;

    let ticketDiscounted = ticketPrice - ticketPriceDiscount;
    
    document.getElementById("ticketDiscount").innerHTML = ticketPriceDiscount;

    document.getElementById("ticketDiscounted").innerHTML = ticketDiscounted;

    console.log(ticketDiscounted);
    
} else {

    document.getElementById("ticketDiscount").innerHTML = "0.00";

    document.getElementById("ticketDiscounted").innerHTML = ticketPrice;

}

document.getElementById("ticketPrice").innerHTML = ticketPrice;
