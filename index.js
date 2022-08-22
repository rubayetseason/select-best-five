function addToList (element){
// here we get the player names when the button is clicked 
const playerName = element.parentNode.parentNode.children[0].innerText;
// add li to the list 
const placeList = document.getElementById('place-list');

if (placeList.childElementCount > 4){
    // alert message here 
    alert('cannot add more than 5 players')
}
else{
    const li =  document.createElement('li')
    li.innerText = playerName;
    placeList.appendChild(li);
    console.log(placeList.childElementCount);
    // done adding li to the list 
}
}