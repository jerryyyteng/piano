var c = new Audio("notes/C.mp3");
var d = new Audio("notes/D.mp3");
var e = new Audio("notes/E.mp3");
var f = new Audio("notes/F.mp3");
var g = new Audio("notes/G.mp3");
var a = new Audio("notes/A.mp3");
var b = new Audio("notes/B.mp3");
// var c1 = new Audio("notes/Cup.mp3");
var music = false; 

document.onkeyup=function(event){
     var i =keys.indexOf(parsInt(event.keyCode))
       
}
document.onkeydown=function(event){
        var i =keys.indexOf(parsInt(event.keyCode))

}

// Piano Sound (press)
document.onkeydown=function(event){

    // Do
    if (event.keyCode===49){
        c.play();
        document.querySelector(".C").classList.add("key-hover");
    }
    // Re 
    if (event.keyCode===50){
        d.play();
        document.querySelector(".D").classList.add("key-hover");
    }
    // Mi
    if (event.keyCode===51){
        e.play();
        document.querySelector(".E").classList.add("key-hover");
    }
    // Fa
    if (event.keyCode===52){
        f.play();
        document.querySelector(".F").classList.add("key-hover");
    }
    // So
    if (event.keyCode===53){
        g.play();
        document.querySelector(".G").classList.add("key-hover");
    }
    // La 
    if (event.keyCode===54){
        a.play();
        document.querySelector(".A").classList.add("key-hover");
    }
    // Si
    if (event.keyCode===55){
        b.play();
        document.querySelector(".B").classList.add("key-hover");
    }
//     // Do
//     if (event.keyCode===56){
//         c1.play();
//         document.querySelector(".C").classList.add("key-hover");
//     }
}

// Piano Sound (lift)
document.onkeyup=function(event){

// Do
if (event.keyCode===49){
        c.play();
        document.querySelector(".C").classList.remove("key-hover");
}
// Re 
if (event.keyCode===50){
        d.play();
        document.querySelector(".D").classList.remove("key-hover");
}
// Mi
if (event.keyCode===51){
        e.play();
        document.querySelector(".E").classList.remove("key-hover");
}
// Fa
if (event.keyCode===52){
        f.play();
        document.querySelector(".F").classList.remove("key-hover");
}
// So
if (event.keyCode===53){
        g.play();
        document.querySelector(".G").classList.remove("key-hover");
}
// La 
if (event.keyCode===54){
        a.play();
        document.querySelector(".A").classList.remove("key-hover");
}
// Si
if (event.keyCode===55){
        b.play();
        document.querySelector(".B").classList.remove("key-hover");
}
// // Do
// if (event.keyCode===56){
//     c1.play();
//     document.querySelector(".C").classList.remove("key-hover");
// }
    }