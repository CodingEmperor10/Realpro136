object = "";
Status = "";

function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects"; 
 object =  document.getElementById("superstar").value;
}

function modelLoaded()
{
    console.log(" It is working again!! ");
    Status = true;
}

function draw()
{
    image(video, 0, 0, 380, 380);
}