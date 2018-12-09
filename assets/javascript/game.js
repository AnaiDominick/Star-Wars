$(document).ready(function() {

// //Declaro las variables
var characters = ["Darth Maul", "Darth Vader", "Master Yoda", "Qui Gon Jinn"];
var images = ["assets/images/darth_maul.jpg", "assets/images/vader.jpg", "assets/images/yoda.jpg", "assets/images/qui_gon_jinn.jpg"];
var hp = ["100", "150", "180", "120"];

hp = parseInt(hp);
    
var hpMaul = 100;
var hpVader = 150;
var hpYoda = 180;
var hpQui = 120;
var hasBeenClicked = false;

//Declaro las variables ligadas a un ID
var hpMaulText = $("#hpMaul-text");
var hpVaderText = $("#hpVader-text");
var hpYodaText = $("#hpYoda-text");
var hpQuiText = $("#hpQuiGon-text");

//Display en el HTML
hpMaulText.text(hpMaul);
hpVaderText.text(hpVader);
hpYodaText.text(hpYoda);
hpQuiText.text(hpQui);

//Seleccionar personaje
$(".col-lg-3").on("click", function() {
    hasBeenClicked = true;
    var butonCharactersId = $(this).attr("id");
    console.log(butonCharactersId);
    var butonCharacter = $(`#${butonCharactersId}`); // $("#" + butonCharactersId);
    $(".col-lg-4").html($(".col-lg-3").not(this));
   
});

    
    

        








});

// //DYNAMICALLY CREATE BUTTONS
// // ========================================================
// // Create a for-loop to iterate through the characters array.
// for (var i = 0; i <characters.length; i++) {
//     var characterBtn  = $("<button>");
//         characterBtn.addClass("col-lg-3");
//         characterBtn.val(characters[i]);
//         $("#buttons").append(characterBtn);
//         // $(".col-md-3").each();

// }


// $(".col-lg-3").each(function() {
//     var imagesBtn = $("<div>");
//     imagesBtn.addClass("image-style");
//     imagesBtn. html("<img src=" + images[i] + "width='165' height='175'>");
//     $("#image-holder").append(imagesBtn);
// })

// $(".col-lg-3").each(function() {
//     var hp = $("<div>");
//     hpBtn.addClass("hp-style");
//     hpBtn.html("<p>" + hp[i] + "</p>");
//     $("#hp-holder").append(hpBtn);
// })


//Pseudocode
//1.0 Tienes 4 personajes:
//1.1 Al darle click a un personjea se convierte en tu character.
    //1.1.1 Each character in the game has 3 attributes: `Health Points`, `Attack Power` and `Counter Attack Power`.
//1.2 El resto se convierten en enemigos que hay que eliminar

//2.0 Objetivo del juego es eliminar a todos los enemigos al pelear contra ellos:
//2.1 Reducir su HP a cero o below para venverlos
//2.2 Si mi HP se reduce a cero o below, pierdo.

//3.0 Click en alguno de los enemigos para moverlo al defender area:
//3.1 Click en attack button despliega:
    //3.1.1 You attacked "your enemy" for x damage. Their character's Attack Power increases by its base Attack Power, each time you press the attack button. 
        //3.1.1.1 El attack power se sigue sumando mientras no pierdas, aunque ya estes combatiendo nuevos enemigos.
    //3.1.2 "Your enemy" attacked you back for x damage. El enemigo solo tiene coungter attack. es decir, que su damage se queda constante.
    //3.1.3 `Attack Points`, `Counter Attack Power` never changes.
    //3.1.4 Se refresca el valor de HP de tu character y del defender.


//4.0 Si pierdes 
    //4.1 Se despliega el mensaje You've been defeated. Game over!!
   // 4.2 Aparece el restart button
        

//5.0 Si ganas
    //5.1 Desaparece la imagen del enemigo que venciste
    //5.2 Se despliega el mensaje: You've defeated "x character". You can choose to fight another enemy.
        //5.2.1 Si le das click al buton attack sin haber elegido otro character, aparece el mensaje: No enemy here.
        //5.2.2 El attack power se sigue sumando mientras no pierdas, aunque ya estes combatiendo nuevos enemigos.
    //5.3 Una vez que vences a todos los enemigos se despliega el mensaje: You won. Game over!!
    //5.4 Aparece el boton restart

// var characters = ["Sith Marauder", "First Order Stormtrooper", "Darth Maul", "Darth Vader", "Master Yoda", "Luke Skywalker", "Ahsoka Tano", "Qui Gon Jinn"];
// var images = ["assets/images/marauder.jpg", "assets/images/stormtrooper.jpg", "assets/images/darth_maul.jpg", "assets/images/vader.jpg", "assets/images/yoda.jpg", "assets/images/luke.jpg", "assets/images/ahsoka.png", "assets/images/qui_gon_jinn.jpg"];


