var naruto = document.getElementById("naruto");
var dead = document.getElementById("dead");
var attack = document.getElementById("attack");

var fire = document.getElementById("fire");
var shuriken = document.getElementById("shuriken");
var shuriken2 = document.getElementById("shuriken2");

var music = document.getElementById("music");

document.addEventListener('keydown', hit, true);

var score=0;

// var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

// if (isChrome){
//     music.style.display = "none";
// }

window.onload = function changeDiv(){
    setInterval(function (){
        var randomNumber = Math.floor(Math.random()*3+1);
        console.log(randomNumber);
        if (randomNumber == 1) {
            shuriken.style.display = "none";
            fire.style.display = "block";
            fire.style.animation = "fire 2s infinite linear";
        }
        if (randomNumber == 2) {
            shuriken.style.display = "block";
            fire.style.display = "none";
            shuriken.style.animation = "fire 2s infinite linear";
        }
    },2000);
    if (dead) {
        window.clearInterval();
        // changeDiv.reset();
    }
}

function hit(e) {
  if (e.keyCode == 32 && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {

    // if(shuriken.style.animation <= '0.5s'){
    setTimeout(function(){
        shuriken.style.display = "none";
    },150);
        // shuriken.style.delay = "1s";
        fire.style.display = "block";     
    // }
        naruto.style.display = "none";
        attack.style.display = "block";
        shuriken2.style.display = "block";
    setTimeout(function(){
        naruto.style.display = "block";
        shuriken.style.display = "block";
        attack.style.display = "none";
    },400);
    setTimeout(function(){
        shuriken2.style.display = "none";
    },600);
  }
}


function jump(){
    // if(hit()){
        if(naruto.classList == "animate"){return}
        naruto.classList.add("animate");
        setTimeout(function(){
            naruto.classList.remove("animate");
        },300);
    // }
}
// console.log(Math.random());
// randomNumber = Math.floor(Math.random()*3+1);


// var random = Math.floor(Math.random() * $('#shuriken').length) * $('#fire').length);
// $('.game').hide().eq(random).show();



// function is_gif_image(i) {
//   return /^(?!data:).*\.gif/i.test(i.src);
// }

// function freeze_gif(i) {
//   var c = document.createElement('canvas');
//   var w = c.width = i.width;
//   var h = c.height = i.height;
//   c.getContext('2d').drawImage(i, 0, 0, w, h);
//   try {
//     i.src = c.toDataURL("image/gif"); // if possible, retain all css aspects
//   } catch(e) { // cross-domain -- mimic original with all its tag attributes
//     for (var j = 0, a; a = i.attributes[j]; j++)
//       c.setAttribute(a.name, a.value);
//     i.parentNode.replaceChild(c, i);
//   }
// }



 // function deadStyle(){
 //    shuriken.style.animation = "none";
 //    naruto.style.display = "none";
 //    dead.style.display = "block";
 // }

 function deadStyle() {
    var alerted = localStorage.getItem('alerted') || '';
    shuriken.style.animation = "none";
    fire.style.animation = "none";
    naruto.style.display = "none";
    dead.style.display = "block";
    setTimeout(function() {
        if (alerted != 'yes') {
        alert("Game Over. Your Score: "+Math.floor(score/100));
     // alert("My alert.");
         localStorage.setItem('alerted','yes');
        }
        score=0;
        shuriken.style.animation = "shuriken 2s infinite linear";
        fire.style.animation = "fire 2s infinite linear";
        naruto.style.display = "block";
    },1)
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(naruto).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(shuriken).getPropertyValue("left"));
    let fireLeft = parseInt(window.getComputedStyle(fire).getPropertyValue("left"));
    
    if(blockLeft<20 && blockLeft>-20 && characterTop>=125){
        var deadCheck = true;
        console.log(deadCheck);
        deadStyle();


    }
    else if(fireLeft<20 && fireLeft>-20 && characterTop>=125){
        var deadCheck = true;
        console.log(deadCheck);
        deadStyle();

    }
    else{
        localStorage.setItem('alerted','no');

        dead.style.display = "none";
        score++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(score/100);
    }
}, 20);


// var checkDead = setInterval(function() {
//     let characterTop = parseInt(window.getComputedStyle(naruto).getPropertyValue("top"));
//     let fireLeft = parseInt(window.getComputedStyle(fire).getPropertyValue("left"));
//     if(fireLeft<20 && fireLeft>-20 && characterTop>=125){
//         deadStyle();
//         score=0;
//         fire.style.animation = "fire 2s infinite linear";

//     }else{
//         score++;
//         document.getElementById("scoreSpan").innerHTML = Math.floor(score/100);
//     }
// }, 20);

// function freeze_gifs_on_escape(e) {
//   if (e.keyCode == 27 && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
//     [].slice.apply(document.images).filter(is_gif_image).map(freeze_gif);
//   }
// }