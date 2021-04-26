
function takeshot() {
    let div =
        document.getElementById('screenShotDiv');
    html2canvas(div).then(
        function (canvas) {
           let k= document
                .getElementById('output')
                .appendChild(canvas);
            k.setAttribute('id', 'nkar');
            k.style.display = 'none'
        })
}
function myimg(){
    var canvas = document.getElementById("nkar");
    var img    = canvas.toDataURL("image/png");
    document.getElementById('imageSeeDiv').innerHTML ='<img src="'+img+'"/>'
}