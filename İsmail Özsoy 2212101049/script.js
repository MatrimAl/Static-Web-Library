function openLogin(){
    var nodes = document.getElementById("dcalc");
    var rent = document.getElementsByClassName("rentButton");
    
    
    for (let r of rent) {
       r.style.pointerEvents = "none";
        
    }

    nodes.style.filter = "opacity(100%) drop-shadow(0vmin 0vmin 3vmin rgba(0,0,0,0.3))";
    nodes.style.pointerEvents = "all"; 
}
function closeLogin(){
    var nodes = document.getElementById("dcalc");
    var button = document.getElementById("buttonId");
    var nameUser = document.getElementById("usr");
    var rent = document.getElementsByClassName("rentButton"); 
    button.textContent = "Welcome " + nameUser.value;

    nodes.style.filter = "opacity(0%) drop-shadow(0vmin 0vmin 3vmin rgba(0,0,0,0.3))";
    nodes.style.pointerEvents = "none"; 
    button.onclick = "";
    
    
    
    for (let r of rent) {
       r.style.pointerEvents = "all";
        
    }
}
 
function rentButton() {  
    
    alert("RENTED!");

}

function listElement(){ 
    const folderPath = '/test/';


    const request = new XMLHttpRequest();
    request.open('GET', folderPath, true);

    request.onload = function() {
        if (request.status === 200) {

            const files = request.responseText.split('\n');
            var F = String(files).replace(" ", "_"); 
            const filenames = [...String(F).matchAll(/title="([^"]+)"/g)].map(match => match[1]).slice(1);
            
            filenames.forEach(function(file) {
                var para = document.createElement("div"); 
                para.classList.add("Book");
                para.style.backgroundImage = "url(test/" + file + ")";
                var x = document.createElement("BUTTON");
                x.classList.add("rentButton"); 
                x.onclick = rentButton;
                var t = document.createTextNode("Rent");
                para.innerText = file.split(".")[0].replaceAll("_", " ");
                x.appendChild(t);
                para.appendChild(x);
                document.getElementById("Books").appendChild(para);
            });
                }  
        else {
            alert('Error');
        }
    };

    request.send();   
}
listElement();

var dropArea = document.getElementById('imageDonation'); 

dropArea.addEventListener('dragover', function(e) {
    e.preventDefault();
});

dropArea.addEventListener('drop', function(event) {
    event.preventDefault();
    var file = event.dataTransfer.files[0];
    
    var reader = new FileReader();
    reader.onload = function(e) { 
        var image = document.getElementById("imageDonation");
        image.style.backgroundImage ='url(' + e.target.result + ')';

        
    }
    reader.readAsDataURL(file);
});

function donateButton(){
    var para = document.createElement("div"); 
    para.classList.add("Book");
    var x = document.createElement("BUTTON");
    x.classList.add("rentButton"); 
    x.onclick = rentButton;
    var t = document.createTextNode("Rent");
    para.innerText = document.getElementById("donateInput").value;
    x.appendChild(t);
    para.appendChild(x);
    document.getElementById("Books").appendChild(para);
    para.style.backgroundImage =  document.getElementById("imageDonation").style.backgroundImage;
    document.getElementById("imageDonation").style.backgroundImage = "black";
    alert(e.target.result);
}
