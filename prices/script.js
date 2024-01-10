function slider_prices(){
    var images = new Array();
               
    images[0] = 'source/img1.png';
    images[1] = 'source/img2.png';
    images[2] = 'source/img3.png';
    images[3] = 'source/img4.png';

    var image = new Array();
    var i = 0;
               
    image[0] = document.querySelector(".image1");
    image[1] = document.querySelector(".image2");
    image[2] = document.querySelector(".image3");
    image[3] = document.querySelector(".image4");

    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var btn4 = document.getElementById('btn4');

    var b1 = document.querySelector(".b1");
    var b2 = document.querySelector(".b2");
    var b3 = document.querySelector(".b3");
    var b4 = document.querySelector(".b4");


    btn1.onclick=function(){
        //image[i].style.animation = "slider1 0.5s ease ";
        //document.getElementById("slider-item").class = "images1";
        document.getElementById("slider-item").src = images[0];
        b1.style.color = "#B2093C";
        b2.style.color = "#1A1A1D";
        b3.style.color = "#1A1A1D";
        b4.style.color = "#1A1A1D";
        //image[0].style.animation = "slider2 0.5s ease 0.5s ";
        //i = 0;
    };
    btn2.onclick=function(){
        //image[i].style.animation = "slider1 0.5s ease ";
        //document.getElementById("slider-item").class = "images2";
        document.getElementById("slider-item").src = images[1];
        b1.style.color = "#1A1A1D";
        b2.style.color = "#B2093C";
        b3.style.color = "#1A1A1D";
        b4.style.color = "#1A1A1D";
        //image[1].style.animation = "slider2 0.5s ease 0.5s ";
        //i = 1;
    };
    btn3.onclick=function(){
        //image[i].style.animation = "slider1 0.5s ease ";
        //document.getElementById("slider-item").class = "images3";
        document.getElementById("slider-item").src = images[2];
        b1.style.color = "#1A1A1D";
        b2.style.color = "#1A1A1D";
        b3.style.color = "#B2093C";
        b4.style.color = "#1A1A1D";
        //image[2].style.animation = "slider2 0.5s ease 0.5s ";
        //i = 2;
    };
    btn4.onclick=function(){
        //image[i].style.animation = "slider1 0.5s ease ";
        //document.getElementById("slider-item").class = "images4";
        document.getElementById("slider-item").src = images[3];
        b1.style.color = "#1A1A1D";
        b2.style.color = "#1A1A1D";
        b3.style.color = "#1A1A1D";
        b4.style.color = "#B2093C";
        //image[3].style.animation = "slider2 0.5s ease 0.5s ";
        //i = 3;
    };

}