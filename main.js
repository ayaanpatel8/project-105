Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90

});
camera = document.getElementById("camera")

webcam.attach('#camera')


function captureimg(){
    webcam.snap(function(data_uri){

        document.getElementById("captured_img").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version')




classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XU7W802Nx/model.json', modelLoaded);
function check(){
img = document.getElementById("selfie_image")
classifier.classify(img, gotResult);
}
function gotResult(){
    if(error){
        console.error(error);

    }
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML = result[0].label;
        document.getElementById("result_object_name").innerHTML = result[0].confidence.toFixed(3);

    }
   
}