
const chiButton = document.getElementById('chiButton');


chiButton.onclick = (function (){
    let noDisplay = document.getElementsByClassName('noDisplay');
    let englishText = document.getElementsByClassName('english');
    let chineseText = document.getElementsByClassName('chinese');

    for (let i = 0; i <= englishText.length; i++){
        chineseText[i].classList.toggle('noDisplay');
        englishText[i].classList.toggle('noDisplay');
        if( chiButton.innerHTML === "Chinese"){
            chiButton.innerHTML = 'English';
        }else {
            chiButton.innerHTML = 'Chinese'
        };
    } 
});

// engButton.onclick = (function (){
//     let noDisplay = document.getElementsByClassName('noDisplay');

//     for (let i = 0; i <= chineseText.length; i++){
//         console.log(chineseText[i].classList)
//         noDisplay[i].classList.remove('noDisplay'); 
//         chineseText[i].classList.add('noDisplay');
//     }
// });

