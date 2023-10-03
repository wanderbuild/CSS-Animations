let gender = true;

let genderSymbol = document.getElementById("container");
let head = document.getElementById('head');
let rightarm = document.getElementById('rightarm');
let leftarm = document.getElementById('leftarm');
let body = document.getElementById('body');

genderSymbol.addEventListener('click', () => {

    gender ? maleToFemale() : femaleToMale();

    gender = !gender;
})

function femaleToMale() {

        genderSymbol.style.transform = "rotate(-135deg)";
        
        head.style.borderColor = "#89CFF0";

        leftarm.style.transform = "translateX(20px) translateY(125px) rotate(45deg)";
        leftarm.style.width = "100px";
        leftarm.style.backgroundColor = "#89CFF0";

        rightarm.style.transform = "translateX(-20px) translateY(125px) rotate(-45deg)";
        rightarm.style.width = "100px";
        rightarm.style.backgroundColor = "#89CFF0";

        body.style.backgroundColor = "#89CFF0";
        body.style.height = "290px";
}

function maleToFemale(){

        genderSymbol.style.transform = "rotate(0deg)";

        head.style.borderColor = null;
        
        leftarm.style.transform = "translate(0) rotate(0deg)";
        leftarm.style.backgroundColor = null;
        
        rightarm.style.transform = "translate(0) rotate(0deg)";
        rightarm.style.backgroundColor = null;

        body.style.backgroundColor = null;
        body.style.height = null;
}
