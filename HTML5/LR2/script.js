var canvas = document.getElementById("myCanvas"),
    context = canvas.getContext("2d");

text = "Гистограмма";
context.fillStyle = "#0e5154";
context.textBaseline = "top";
context.font = "10pt Calibri";
context.lineWidth = 5;
context.beginPath();
context.moveTo(2, 0);
context.lineTo(2, 400);
context.moveTo(0, 150);
context.lineTo(300, 150);
context.strokeStyle = "#062384";
context.fillText(text, 220, 0);
context.stroke();

context.beginPath();
context.rect(35, 147, 30, -50);
context.fill();
context.beginPath();
context.lineWidth = 1;
context.strokeStyle = "black";
context.fillStyle = "black";
context.textBaseline = "top";
context.font = "10pt Calibri";
context.fillText("50%", 4, 63);
context.moveTo(4, 73);
context.lineTo(30, 73);
context.fillText("40%", 4, 75);
context.moveTo(4, 85);
context.lineTo(30, 85);
context.fillText("30%", 4, 87);
context.moveTo(4, 97);
context.lineTo(30, 97);
context.fillText("20%", 4, 110);
context.moveTo(4, 120);
context.lineTo(30, 120);
context.stroke();
context.fill();
context.beginPath();
var gradient = context.createLinearGradient(0, 0, 0, 150);
gradient.addColorStop(0, "blue");
gradient.addColorStop(1, "red");
context.rect(95, 147, 30, -70);
context.fillStyle = gradient;
context.fill();
context.beginPath();
context.rect(155, 147, 30, -60);
context.fill();
context.beginPath();
var img = new Image();
img.src = "img_lamp.jpg";
context.rect(215, 147, 30, -30);
var ptrn = context.createPattern(img, "repeat");
context.fillStyle = ptrn;
context.fill();
////////////////////////////////////////////////////////////////
function drawDiag() {


    var x = myCanvas2.getContext("2d");
    x.shadowColor = "black";
    x.shadowOffsetX = 2;
    x.shadowOffsetY = 2;
    x.shadowBlur = 5;
    x.fillStyle = "red";
    x.beginPath();
    x.arc(200, 200, 100, 0, 2.0 * Math.PI * (60 / 155.0));
    x.lineTo(200, 200);
    x.closePath();
    x.fill();

    x.fillStyle = "blue";
    x.beginPath();
    x.arc(200, 200, 100, 2.0 * Math.PI * (60 / 155.0), 2.0 * Math.PI * (60 / 155.0) + 2.0 * Math.PI * (12 / 155.0));
    x.lineTo(200, 200);
    x.closePath();
    x.fill();

    x.fillStyle = "green";
    x.beginPath();
    x.arc(200, 200, 100, 2.0 * Math.PI * (60 / 155.0 + 12 / 155.0), 2.0 * Math.PI * (60 / 155.0 + 12 / 155.0 + 30 / 155.0));
    x.lineTo(200, 200);
    x.closePath();
    x.fill();

    x.fillStyle = "purple";
    x.beginPath();
    x.arc(200, 200, 100, 2.0 * Math.PI * (60 / 155.0 + 12 / 155.0 + 30 / 155.0), 2.0 * Math.PI * (60 / 155.0 + 12 / 155.0 + 30 / 155.0 + 50 / 155.0));
    x.lineTo(200, 200);
    x.closePath();
    x.fill();

    x.fillStyle = "yellow";
    x.beginPath();
    x.arc(200, 200, 100, 2.0 * Math.PI * (60 / 155.0 + 12 / 155.0 + 30 / 155.0 + 50 / 155.0), 2.0 * Math.PI * (60 / 155.0 + 12 / 155.0 + 30 / 155.0 + 50 / 155.0 + 3 / 155.0));
    x.lineTo(200, 200);
    x.closePath();
    x.fill();

    x.fillStyle = "red";
    x.font = "16px Comic Sans MS";
    x.fillText("Poland 60 days", 310, 100);
    x.fillStyle = "blue";
    x.fillText("Bulgaria 12 days", 310, 150);
    x.fillStyle = "green";
    x.fillText("Turkey 30 days", 310, 200);
    x.fillStyle = "purple";
    x.fillText("Ukraind 50days", 310, 250);
    x.fillStyle = "yellow";
    x.fillText("Lithuania 3days", 310, 300);

    x.beginPath();
    var gradient = x.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(0.3, "red");
    x.fillStyle = gradient;
    x.fillText("Посещение различных стран и количество проведенных в них дней", 20, 15);



}
drawDiag();