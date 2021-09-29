function pcabout(){

    
    setTimeout(function () {
        document.getElementById("main").style.opacity = "0";

    }, 800);


    setTimeout(function () {
        document.getElementById("menupc").style.opacity = "1";
    
              }, 1000);
            document.getElementById("menupc").style.display = "flex";
    
    



    setTimeout(function () {
    document.getElementById("main").style.opacity = "0";

          }, 700);
        document.getElementById("main").style.display = "none";




    document.getElementById("srvc").style.opacity = "0";
 
        document.getElementById("srvc").style.display = "none";


    document.getElementById("con").style.opacity = "0";
   
        document.getElementById("con").style.display = "none";

        
        document.getElementById("about").style.display = "flex";
        setTimeout(function () {

            document.getElementById("about").style.opacity = "1";
        }, 700);
}


function pcskill(){

    document.getElementById("main").style.opacity = "0";
   
        document.getElementById("main").style.display = "none";




    document.getElementById("about").style.opacity = "0";
 
        document.getElementById("about").style.display = "none";


    document.getElementById("con").style.opacity = "0";
   
        document.getElementById("con").style.display = "none";

        
        document.getElementById("srvc").style.display = "flex";
        setTimeout(function () {

            document.getElementById("srvc").style.opacity = "1";
        }, 700);
}




