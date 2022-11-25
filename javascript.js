const Form = document.getElementById('form');
const username  = document.getElementById('nom');
const lastname  = document.getElementById('prenom');
const email  = document.getElementById('email');
const numtele  = document.getElementById('tele');
const masc  = document.getElementById('Masculin');
const femin  = document.getElementById('Féminin');
const w1  = document.getElementById('DW1');
const w2  = document.getElementById('DW2');
const w3  = document.getElementById('DW3');
const w4  = document.getElementById('DW4');
const w5  = document.getElementById('DW5');



Form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    checkinputs();
    window.open(href = 'valid.html', target = '_blank');

    
});

function checkinputs(){
    const usernameValue = username.value.trim();
    const prenomValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const telephoneValue = numtele.value.trim();



    if (usernameValue === '') {
        // console.log('invalid');
        document.querySelector('#message').innerText = 'invalid';

    }else if(usernameValue.length <= 3 || usernameValue.length > 30 ){
        document.querySelector('#message').innerText = 'min 3 max 30';
        
    }else if (!novalid(usernameValue)){
        document.querySelector('#message').innerText = 'sauf les alphabets';
    }else{
        document.querySelector('#message').innerText = '';
        
    }
    // valider prénom
    if (prenomValue === '') {
        // console.log('invalid');
        document.querySelector('#msg').innerText = 'invalid';

    }else if(prenomValue.length <= 3 || prenomValue.length > 30 ){
        document.querySelector('#msg').innerText = 'min 3 max 30';
        
    }else if (!novalid(prenomValue)){
        document.querySelector('#msg').innerText = 'sauf les alphabets';
    }else{
        document.querySelector('#msg').innerText = '';
        
    }
     // valider Email
     if (emailValue === '') {
        // console.log('invalid');
        document.querySelector('#error').innerText = 'invalid';
    }
     else if (!emailvalid(emailValue)){
        document.querySelector('#error').innerText = 'gmail invalid';
    }else{
        document.querySelector('#error').innerText = '';
        
    }

      // valider Telephone
    if (telephoneValue === '') {
        // console.log('invalid');
        document.querySelector('#mg').innerText = 'invalid';
    }
     else if (!televalid(telephoneValue)){
        document.querySelector('#mg').innerText = 'commence par 05 ou 06 ou 07';
    }else{
        document.querySelector('#mg').innerText = '';
        
    }
    // valid check
    if(masc.checked == true || femin.checked == true){
        document.querySelector('#err').innerText = '';
    }else{
        document.querySelector('#err').innerText = 'please check';
    }
     // valid check Groupe
     if(w1.checked == true || w2.checked == true || w3.checked == true || w4.checked == true || w5.checked == true){
        document.querySelector('#er').innerText = '';
    }else{
        document.querySelector('#er').innerText = 'please check';
    }
    // valid check Clubs
       
    const arr = [] ;
    let resultClub = document.querySelector("#resultClub");

    if(sel.selectedOptions.length === 0){
    resultClub.innerHTML="s'il vous plaît check Club"

    } else if(sel.selectedOptions.length > 3){
    resultClub.innerHTML="maximum 3 Club"
    }else {
        resultClub.innerHTML=" " ;
        arr.push(true);
    } 
    

}
     
const novalid = (username) =>{
    const re =  /^[a-zA-Z-\s]+$/;
    return re.test(username);
}

const emailvalid = (email) =>{
    const re =  /^[a-zA-Z]+[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]/;
    return re.test(email);
}

const televalid = (numtele) =>{
    const re =  /(07|06|05)\d{8}/;
    return re.test(numtele);
}