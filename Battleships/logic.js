// intialisalise game array// 
let ships = [
    [0, 0 ,0],
    [0,0],
    [0,0,0,0,0],
    [0,0],
    [0,0,0],
]

let board_size = 8;
let boundaries = [];

// calculate board boundaries
function bounds_calc(boundaries){
let counter = 1;
    while(counter < board_size){
        boundaries.push((counter*board_size)-board_size+1); // left edge
        boundaries.push(1+counter);                         //top edge
        boundaries.push((1+counter)*board_size);            // right edge
        boundaries.push(Math.pow(board_size,2)-(counter))   //bottom edge
        counter+=1;
    }
    return boundaries;
}



// calculate the starting location of the ships and use to populate ships array
function starting_location (ships, boundaries, indicator){
    let keep_track = [];
    let starting = 0;
    let i = 0;
    let j = 0;
    let operator = 0;
    
        while(keep_track.length < 5){
        starting = Math.floor((Math.random() * (56 - 10) + 10))
               //prevent the starting location from being a boundary 
            while(boundaries.indexOf(starting) != -1){
                starting = Math.floor((Math.random() * (56 - 10) + 10))
            }
            // check to ensure that two ships do not have the same starting location
            if(keep_track.indexOf(starting) === -1){
                keep_track.push(starting);
                ships[i][0] = starting;
                i+=1;
            }
        }
    
    //if(indicator !== null){
    //    ships[indicator][0] = Math.floor((Math.random() * (56 - 10) + 10));
    //}

        return ships
    }


//function decision_maker
function decisions(){
let decision_maker = Math.floor((Math.random() * (5 - 1) + 1));
    switch(decision_maker){
        case 1: 
           operator = 1;
           break;
        case 2: 
           operator = board_size;  
           break;
        case 3: 
           operator = board_size + 1;
           break;
        case 4: 
           operator = board_size - 1; 
           break;
    }
}



// BODY
        bounds_calc(boundaries)
        starting_location(ships,boundaries, null)
        
        let tracking_arr = [];
        for(let row in ships){
            tracking_arr.push(ships[row][0]);
        }

        console.log(tracking_arr)
        


        //loop through the ships array
        for(i = 0; i < 5; i++){
            decisions();

            for(j = 1; j < ships[i].length; j++){

                if(boundaries.indexOf(ships[i][j-1] + operator) != -1 && j != (ships[i].length -1)){
                    ships[i][j] = (ships[i][j-1] + operator)
                    operator = -operator;
                    ships[i][j+1] = (ships[i][j] + (j+1)*operator);
                    tracking_arr.push(ships[i][j+1])
                    j+=1;
                 }
                else{
                    ships[i][j] = (ships[i][j-1] + operator)
                }
                }
        }
    //console.log(tracking_arr);

    


// main body to check whether the grid selected contains a ship
const guess = document.querySelectorAll('.grid-item')
guess.forEach(each => {
    each.addEventListener('click', function handleClick(event) {
      console.log('box clicked', each);

      // begin for loop to check if guess is in ships
      let i = 0;
      while(i < 5){
        
        if(ships[i].includes(Number(each.textContent))){
            each.setAttribute('style', 'background-color: red;');
            break
        }  else{
            each.setAttribute('style', 'background-color: yellow;')
        }
        i+=1;
    }
        });
    })

    console.log(ships)






 
