function addToList(element) {
    // button disabled after click
    element.disabled = true;
    // here we get the player names when the button is clicked 
    const playerName = element.parentNode.parentNode.children[0].innerText;
    // add li to the list 
    const placeList = document.getElementById('place-list');

    if (placeList.childElementCount > 4) {
        // alert message here 
        alert('cannot add more than 5 players')
    }
    else {
        const li = document.createElement('li')
        li.innerText = playerName;
        placeList.appendChild(li);
        // done adding li to the list 
    }
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    // get the input field value 
    const playerValue = document.getElementById('per-player-value').value;
    // gotten the input value 

    // got the player number 
   let counter = document.getElementById('place-list').childElementCount;
// player money here 
   const playerTotal = counter * playerValue;
//  got the money 
// got the total player field 
const previousPlayerMoneyELement = document.getElementById('player-expense');
const previousPlayerMoney = previousPlayerMoneyELement.innerText;
previousPlayerMoneyELement.innerText = playerTotal;
// set the new player total here 
})