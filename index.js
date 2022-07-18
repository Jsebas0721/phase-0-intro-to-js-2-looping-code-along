// Code your solutions in this file
/*for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}*/

const names =["Guadalupe", "Ollie", "Aki"];

const messages =[];

function writeCards(names, evenName){

    for(let i = 0; i< names.length; i++ ){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${evenName} gift!`);
        
    }

    return messages;
}

//writeCards(names,"surprise");
console.log(messages);

function countDown(){

    let i = 10;
    while(i >= 0){
        console.log(i);
        i--;
    }
}

countDown();
