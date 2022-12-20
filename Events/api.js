
const search_button = document.querySelector('#btn');
const search = document.querySelector('#query');

//console.log(search_button)

function event(e){


let clientid = `MzEwOTk2MTJ8MTY3MTQ3MzczMi43OTQ0ODUz`; 
let artist = search.value;
let apirequest = `https://api.seatgeek.com/2/performers?q=${artist}&client_id=${clientid}`;

console.log(apirequest);

fetch(apirequest).then(response=>{
    console.log(response.json());
});

}

search_button.addEventListener('click', event);
