//generate 6 random colors
	//empty array
var colorDisplay = document.getElementById("colorDisplay"); 		
var squares = document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var res=document.getElementById("result");
var colors=generateColors();
	//for loop to assign random number
function generateColors(){
	var color=[];
	for(var j=0;j<6;j++){
		var r=Math.floor(Math.random() * 256);
		var g=Math.floor(Math.random() * 256);
		var b=Math.floor(Math.random() * 256);
		var str="rgb("+r+", "+g+", "+b+")";
		color.push(str);
	}
 //assign Colors to squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor =color[i];
	}
	return color;
}

//create another random number between 0-5
//assign that index of color from colors Array to guess value
var colorGenerated = colorGenerate();

function colorGenerate(){
	var randomNumber = Math.floor(Math.random()*6);
	colorDisplay.textContent=colors[randomNumber];
	colorDisplay.style.color= "orange";
	return colors[randomNumber];
}

//add event listeners and check if the color picked math with the guess value
var btn1=document.querySelector("button");
btn1.addEventListener("click",function(){
	colors=generateColors();
	colorGenerated=colorGenerate();
	this.textContent="Play Again!";
	h1.style.backgroundColor="#232323";
});

for(var j=0;j<squares.length;j++){
	squares[j].addEventListener("click",function(){
		if(this.style.backgroundColor == colorGenerated){
		 //all boxes same color
		    for(var j=0;j<squares.length;j++){
			    squares[j].style.backgroundColor= colorGenerated;
	    	}
	    	
	    	h1.style.backgroundColor=colorGenerated;
	    	res.textContent="Correct!";
	    }
	    else{
		    this.style.backgroundColor="#232323";
		    res.textContent="Wrong! Select another";
	    }  
	});
}