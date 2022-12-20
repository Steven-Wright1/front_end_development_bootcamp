
const search_button = document.querySelector('#btn');
const search = document.querySelector('#query');
let performer_id; 
//console.log(search_button)

function event(e){

let clientid = `MzEwOTk2MTJ8MTY3MTQ3MzQ0My4wNzgyMjU`; 
let artist = search.value;
let apirequest = `https://api.seatgeek.com/2/performers?q=${artist}&client_id=${clientid}`;

fetch(apirequest).then(response=>{
    //console.log(response.json())
    return response.json();
})
.then((data) =>{

    let performer_id = data.performers[0].id;
    let apirequest2 = `https://api.seatgeek.com/2/events?performers.id=${performer_id}&client_id=${clientid}`;
    console.log(apirequest2)
    fetch(apirequest2).then(response=>{
        //console.log(response.json())
        console.log( response.json());
    })
    .then((data) => {
        console.log(data.events[0].lo)

    });




});











}

search_button.addEventListener('click', event);
 