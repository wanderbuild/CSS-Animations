let gender = false;

let container = document.getElementById("container");
let head = document.getElementById('head');
let rightarm = document.getElementById('rightarm');
let leftarm = document.getElementById('leftarm');
let body = document.getElementById('body');

container.addEventListener('click', () => {

        gender ? maleToFemale() : femaleToMale();
        gender = !gender;

})

function femaleToMale() {

        container.style.transform = "rotate(-135deg)";
        
        head.style.borderColor = "#89CFF0";

        leftarm.style.transform = "translateX(20px) translateY(135px) rotate(45deg)";
        leftarm.style.width = "100px";
        leftarm.style.backgroundColor = "#89CFF0";

        rightarm.style.transform = "translateX(-20px) translateY(135px) rotate(-45deg)";
        rightarm.style.width = "100px";
        rightarm.style.backgroundColor = "#89CFF0";

        body.style.backgroundColor = "#89CFF0";
}

function maleToFemale(){

        container.removeAttribute('style');
        head.removeAttribute('style');
        leftarm.removeAttribute('style');
        rightarm.removeAttribute('style');
        body.removeAttribute('style');
}
