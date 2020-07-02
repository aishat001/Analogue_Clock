const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;

setInterval(analogueClock, 1000);

function analogueClock() { 

    getClock();
    clockNum();
    showTime(ctx, radius);

}
function getClock() {
    ctx.strokeStyle = 'black';    
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2, true); // Outer circle
    ctx.stroke(); // draw the path; in this case only the circle
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2, true); // Outer circle
    ctx.fillStyle = 'white';
    ctx.fill();

    // clock face
    ctx.beginPath();
    ctx.arc(0, 0, radius -10, 0, Math.PI * 2, true); // Outer circle
    ctx.fillStyle = '#1c1c3a';
    ctx.fill();

    // clock middle dot
    ctx.beginPath();
    ctx.arc(0, 0, radius -125, 0, Math.PI * 2, true); 
    ctx.fillStyle = 'white';
    ctx.fill();

}

function clockNum() { 
    var num;
    var angle;
ctx.font = "25px sans-serif";
ctx.textBaseline="middle";
ctx.textAlign="center";
ctx.fillStyle = "white";
for(  num = 1; num < 13; num++) {
    angle = num * Math.PI * 2 / 12;
    ctx.rotate(angle);
    ctx.translate(0, -radius*0.75);
    ctx.rotate(-angle);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(angle);
    ctx.translate(0, radius*0.75);
    ctx.rotate(-angle);
    }
    }


function showTime(ctx, radius) {
    const date = new Date();
    var second = date.getSeconds();
    var minute = date.getMinutes();
    var hour = date.getHours();

// HOURS
hour = hour % 12;
hour = (hour*Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
clockHands(ctx, hour, radius*0.5, radius*0.07);   

//  MINUTES  
minute = minute * Math.PI / 30 + second * Math.PI / 30 * 60;
clockHands(ctx, minute, radius*0.8, radius*0.07);   

// SECONDS
        second = second * Math.PI / 30;
        clockHands(ctx, second, radius * 0.9, 3.0);               
     }

    function clockHands(ctx, point, l, w) { 
        ctx.beginPath();
        ctx.lineWidth = w;
        ctx.lineCap = "round";
        ctx.moveTo(0, 0);
        ctx.rotate(point);
        ctx.lineTo(0, -l);
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.rotate(-point);
    }