//<!--
//Name: Andrew Jeans
//Filename: Script.js
//-->



// #2 Your page should have a window.onloadevent listener
window.onload = (initPage);


//7 Display dates
var currentDate = new Date();

//#12 named function
function initPage(){

    var pages = ["Index", "News", "Logix", "Contact"];
    
    for(var i = 0; i < pages.length; i++){
        var column = document.createElement("li");
        column.innerHTML = "<a href='" + pages[i] + ".html'>" + pages[i] + "</a>"; 

        //#3.1 document.getElementById
        document.getElementById("nav").appendChild(column);
        }

        // #3.2 quaeryselector/ Create Additional HTML content
        var h1 = document.createElement("h1");

            //#12 anonymous function/function Expression
            var a = function(){

            //#3 Append child  
            if(window.location.pathname == "/Logix.html"){document.querySelector(".header_logix").appendChild(h1);
            }}
            heading = a();

     //#12 arrow Function
     const logixHeader = () => (h1.innerHTML = "LogiX, the heartbeat of Neos");
     if(window.location.pathname == "/Logix.html"){logixHeader();}
            
            
            

    var gridText = ["<a href='img/logix_1.png'> <img id='sideimage' src='img/logix_1.png' alt='NeosLogo' /></a>Collision Based Logix Script", "<a href='img/logix_2.png'> <img id='sideimage' src='img/logix_2.png' alt='NeosLogo' /></a>Exmaple of Dynamic Impulse Scripting", "<a href='img/logix_3.png'> <img id='sideimage' src='img/logix_3.png' alt='NeosLogo' /></a>Tracking of position of limbs to simulate muscle movement"];
    
    //#3.3 queryselectorall
    if(window.location.pathname == "/Logix.html"){
        
        var list = document.querySelectorAll(".grid-item");
    for(var i = 0; i < gridText.length; i++) {

        //#12 self invoking function/ Modify existing content in DOM
        (function () {list[i].innerHTML = gridText[i] ;}) ();
    }}
        //#4.1 Adding a mouseover event to intiate the sequence
        (function () {document.getElementById("footnote").innerHTML = ("<button id = 'hoverButton' onmouseover = 'keyPress()'>What am I?</button><button id = 'removeButton' ondblclick='buttonRemove()'>Doublcick to remove other button for 3 seconds</button><button id = 'colorButton' onmouseover='buttonColor()'>Hover to change text color</button>");
        })();

        
        document.getElementById("pageheader").querySelector("p").innerHTML = currentDate.toDateString();
       
        //7 set Date and time
        document.getElementById("time").innerHTML = currentDate.toLocaleString();
        styleChange();
        
}

//4.2 Timer for game

 
function buttonRemove(){
    
    setTimeout(function(){ document.getElementById("footnote").innerHTML = ("<button id = 'hoverButton'>What am I?</button><button id = 'removeButton' ondblclick='buttonRemove()'>Doublcick to remove other button for 3 seconds</button><button id = 'colorButton' onmouseover='buttonColor()'>Hover to change text color</button>");}, 3000);
    
    var list = document.getElementById("footnote");
    //5 remove child
    list.removeChild(list.childNodes[0]);

}

function buttonColor(){
    //11 
    //6 added class to an existing Node in DOM tree
    document.getElementById("colorButton").setAttribute("class", "color");


}


function setTime(){

    setInterval(time(),1000);

}
function time(){

        var mili = currentDate.getTime();

        var ms = mili % 1000;

        mili = (mili - ms) / 1000;

        var secs = mili % 60
        ;
        mili = (mili - secs) / 60;

        var mins = mili % 60;

        var hrs = (mili - mins) / 60;

        var time = hrs + ':' + mins + ':' + secs;
    }

    function styleChange(){ 
    var link = document.createElement("link");

    document.querySelector("head").appendChild(link);
    //11 Create/modify stylesheet and set attributes
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "color.css");
    
    }

    function createTable(){
        console.log("")
        
        var table = document.createElement("table");
        for(var i = 0; i < 4; i++){
            var row = document.createElement("tr");
            table.appendChild(row);
            for(var j = 0; j < 4; j++){
                var header = document.createElement("th");
                header.innerHTML = "O";
                row.appendChild(header);

            }
        }
        var row1 = Math.floor(Math.random() * 4);
        var row2 = Math.floor(Math.random() * 4);
        document.getElementById("game").appendChild(table);
        document.getElementById("game").querySelectorAll("tr")[row1].querySelectorAll("th")[row2].innerHTML = "X";
    }

    
function keyPress(e){
    document.getElementById("hoverButton").innerHTML = String.fromCharCode(e.keyCode);

}

