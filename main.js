video="";
status="";
object=[];






function preload(){

    video=createVideo('VIDEO_20221023_224.mp4');
    video.hide();
}

function setup(){

    canvas=createCanvas(480,380);
    canvas.center();
}

function draw(){

    image (video,0,0,480,380);
    if(status!="")
    {
        objectDetector.detect(video,gotresult);

        for (i=0;i<object.length;i++){
            document.getElementById("status").innerHTML="status:objects detected";
            document.getElementById("objects").innerHTML=" no of object detected are"+object.length;
            

        
            fill("#FF0000");
            persent=floor(objects[i].confidence*100);
            text(objects[i].label+""+persent+"%",object[i].x+15,object[i].y+15)
            noFill();
            stroke("FF0000");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        
        }

    }

}

function start()
{

    objectDetector=ml5.objectDetector('cocossd',modleloded);
    document.getElementById("status").innerHTML="Status : Detecting Objects"


   
}

function modleloded(){

    console.log("Model loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotresult(error,results)

{
    if (error){
        console.log(error);
    }
    console.log(results);
    object=results;
}