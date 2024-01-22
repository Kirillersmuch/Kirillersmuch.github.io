function slider_rules(){
    var images = new Array();
    var i = 0;
               
images[0] = 'source/rule1.png';
images[1] = 'source/rule2.png';
images[2] = 'source/rule3.png';
images[3] = 'source/rule4.png';
images[4] = 'source/rule5.png';
images[5] = 'source/rule6.png';
images[6] = 'source/rule7.png';

point_h = "source/pointh.png";
point_f = "source/point.png";

document.getElementById('slider-item').src = images[i];
var up = document.getElementById('arrowUp');
var down = document.getElementById('arrowDown');

down.onclick=function(){
    if((i+1)<images.length){i++}
    else{i=0}
    document.getElementById("slider-item").src = images[i];
    document.getElementById(`point${i+1}`).src = point_f;
    if(i==0){
        document.getElementById(`point${7}`).src = point_h;
    }
    else{
        document.getElementById(`point${i}`).src = point_h;
    }
}

up.onclick=function(){
    if(i==0){i=(images.length-1)}
    else{i--}
    document.getElementById("slider-item").src = images[i];
    document.getElementById(`point${i+1}`).src = point_f;
    if(i==6){
        document.getElementById(`point${1}`).src = point_h;
    }
    else{
        document.getElementById(`point${i+2}`).src = point_h;
    }
}

}