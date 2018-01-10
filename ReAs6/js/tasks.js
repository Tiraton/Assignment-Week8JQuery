//task#1
$(function() {
    $(window).resize(function() {
        $('#widthLocation').html($(window).innerWidth());
        $('#heightLocation').html($(window).innerHeight());
    })

    $('#locate').html(location.pathname);

    $('#re').click(function() {
        location.reload(true);
    })
})
// var width = document.getElementById('widthLocation');
// var height = document.getElementById('heightLocation');
// function onresize(){
// 	var w = window.innerWidth;
// 	var h = window.innerHeight;
// 	this.width.innerHTML = w;
// 	this.height.innerHTML = h;
// }

// window.addEventListener("resize", onresize);

// document.getElementById('locate').innerHTML = window.location.pathname;

// document.getElementById('re').onclick = function(event) {
//     window.location.reload(true);
// };

//task#2
$(function() {
    $('#changeColor').click(function() {
        $('#pThree').css("color","yellow");
    })

    $('#hello').click(function() {
        $('#greet').html("Hello World!!!");
    })

    $('#showAndHide').click(function() {
        $('#pTwo').toggle(200);        // $(selector).toggle(speed,callback);
    })
})

// document.getElementById('changeColor').onclick = function(event){
//  	document.getElementById('pThree').style.color = "yellow";
// };

// document.getElementById('hello').onclick = function(event) {
// 	document.getElementById('greet').innerHTML = "Hello World!!";
// };

// document.getElementById('showAndHide').onclick = function myFunction() {
//     var x = document.getElementById("pTwo");
    
//     if (x.style.display == "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

//task#3
$(function() {
    $('#link').mouseover(function() {
        $(this).text("On Mouse Over");
    })

    $('#link').mouseout(function() {
        $(this).text("On Mouse Out");
    })

    $('#link').mouseup(function() {
        $(this).text("On Mouse Up");
    })

    $('#link').mousedown(function() {
        $(this).text("On Mouse Down");
    })

    $('#link').dblclick(function() {
        $(this).text("On Double Click");
    })

    $('#link').click(function() {
        $(this).text("On Click");
    })
})