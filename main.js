// Creating variable for the add goal button 
let button1 = document.getElementById('button1');  


//function to add goals 
 function addGoal() {

    
//getting the list element 
    let list1 = document.getElementById('list1')
//creating a new list item for every goal input
    let newLi = document.createElement('li'); 

    list1.appendChild(newLi); 
    //storing the input text to a variable and appendind it to the list items 
    let goalText = document.createElement('span')
     goalText.innerHTML = document.getElementById('goal').value;
    newLi.appendChild(goalText);

    //creating buttons to complete and delete goals
let completeButton = document.createElement('button'); 
completeButton.innerHTML = 'Goal Completed'; 
completeButton.setAttribute('id', 'completeButton'); 

let deleteButton = document.createElement('button'); 
deleteButton.innerHTML = 'Delete Goal'; 
//appending the buttons to the list items 
    newLi.appendChild(completeButton); 
    newLi.appendChild(deleteButton); 

//function for completing goals
    completeButton.onclick = function()
    {
        let list2 = document.getElementById('list2'); 
        

        let list2Item = document.createElement('li'); 
        goalText.style.setProperty('text-decoration', 'line-through')
        goalText.style.setProperty('color', 'green')
        list2.appendChild(list2Item); 
        list2.appendChild(goalText);
        list1.removeChild(newLi);

    }
//function for deleting goals 
    deleteButton.onclick = function()
    {
        list1.removeChild(newLi);
    }

    
   
}
//adding onclick event 
button1.onclick = addGoal; 


