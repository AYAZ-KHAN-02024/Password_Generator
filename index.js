const iconEl=document.getElementById("icon");
const inputEl=document.getElementById('pas');
const ab='abcdefghijklmnopqrstuvwxyz';
const Cab="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const sp="!*#@?%$&";
let password="";

for (let i=0 ; i < 4 ; i++){

    password += ab.charAt(Math.floor(Math.random()*ab.length)) 
    + Cab.charAt(Math.floor(Math.random()*Cab.length)) 
    + sp.charAt(Math.floor(Math.random()*sp.length)) 
    + (Math.floor(Math.random()* 10))

}
inputEl.value=password;

async function copy() {
    await inputEl.select();
    await inputEl.setSelectionRange(0, inputEl.value.length); 
    await navigator.clipboard.writeText(inputEl.value);
    // alert("Copied - " + inputEl.value);
};

iconEl.addEventListener('click', copy);







  
   
   
