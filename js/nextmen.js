//Přepnutí na stránku o mně
    function about() {
        document.getElementById("menu1").id = "flagged";
        document.getElementById("left").onclick = backmain;
        document.getElementById("right").onclick = skills;
    
        document.getElementById("main").style.opacity = "0";
        setTimeout(function () {
            document.getElementById("main").style.display = "none";

        }, 800);


        document.getElementById("about").style.display = "flex";
        setTimeout(function () {

            document.getElementById("about").style.opacity = "1";
        }, 700);


    }

//Přepnutí zpět na about

function backabout(){
    document.getElementById("menu1").id = "flagged";
    document.getElementById("right").onclick = skills;
    document.getElementById("left").onclick = backmain;

    document.getElementById("srvc").style.opacity = "0";
    setTimeout(function () {
        document.getElementById("srvc").style.display = "none";

    }, 800);


    document.getElementById("about").style.display = "flex";
    setTimeout(function () {

        document.getElementById("about").style.opacity = "1";
    }, 700);


}


//Přepnutí zpátky na main
function backmain(){
    document.getElementById("menu1").id = "none";
    document.getElementById("right").onclick = about;

    document.getElementById("about").style.opacity = "0";
    setTimeout(function () {
        document.getElementById("about").style.display = "none";

    }, 800);


    document.getElementById("main").style.display = "flex";
    setTimeout(function () {

        document.getElementById("main").style.opacity = "1";
    }, 700);


}

//PŘEPNUTÍ NA skills

function skills(){
    document.getElementById("menu2").id = "flagged";
    document.getElementById("flagged").id = "none";
    document.getElementById("right").onclick = contact;
    document.getElementById("left").onclick = backabout;
    
    document.getElementById("about").style.opacity = "0";
    setTimeout(function () {
        document.getElementById("about").style.display = "none";

    }, 800);


    document.getElementById("srvc").style.display = "flex";
    setTimeout(function () {

        document.getElementById("srvc").style.opacity = "1";
    }, 700);





}
//back to skills
function backskill(){
    document.getElementById("menu2").id = "flagged";
    document.getElementById("right").onclick = contact;
    document.getElementById("left").onclick = backabout;
    document.getElementById("con").style.opacity = "0";
    setTimeout(function () {
        document.getElementById("con").style.display = "none";

    }, 800);


    document.getElementById("srvc").style.display = "flex";
    setTimeout(function () {

        document.getElementById("srvc").style.opacity = "1";
    }, 700);




}


//přepnutí na contacts

function contact(){
    document.getElementById("menu3").id = "flagged";
    document.getElementById("flagged").id = "none";
    document.getElementById("left").onclick = backskill;
    
    document.getElementById("srvc").style.opacity = "0";
    setTimeout(function () {
        document.getElementById("srvc").style.display = "none";

    }, 800);


    document.getElementById("con").style.display = "flex";
    setTimeout(function () {

        document.getElementById("con").style.opacity = "1";
    }, 700);



}

