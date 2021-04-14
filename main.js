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

    //Adding random images to the goals by fetching images from the 'lorem Picsum' API of random images 

   //Counting number of list items
    let numberOfTasks = document.getElementById('list1').childElementCount; 
//function to add images
   function image(){

        let randomImage = document.createElement('img');
        
    randomImage.src = "https://picsum.photos/100/?random&rnd"+new Date().getTime()+")";

    newLi.appendChild(randomImage);
 
}
image();
    
 //audio function 
 let playAudio = new Audio('mario.wav')
 function a (){
     playAudio.play();
 }
//Using speech synthesis of the web speech API we make the browser read aloud the number of tasks we have to complete. 
// let numberOfTasks = document.getElementById('list1').childElementCount; 
function speechTasks(){
    let speechVar;
    if(numberOfTasks === 1){
        // Speech var is the speech request which is populated with the content to the read aloud or spoken
        speechVar = new SpeechSynthesisUtterance('you have ' + numberOfTasks + 'task today.')
        //this is the entry point for the Speech API and the .speak method makes or calls the speech request 
        window.speechSynthesis.speak(speechVar);
    }
    else if(numberOfTasks > 1){
        speechVar = new SpeechSynthesisUtterance('you have ' + numberOfTasks + 'tasks today.')
        window.speechSynthesis.speak(speechVar);
       
    }

    
}
speechTasks();
 

// a();
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
        a();

    }
//function for deleting goals 
    deleteButton.onclick = function()
    {
        list1.removeChild(newLi);
        a(); 
    }


    
   
}
//adding onclick event 
button1.onclick = addGoal; 


