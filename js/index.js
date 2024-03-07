var subtitle = document.getElementById('subtitle');

console.log(subtitle)
var context = "Fake it until you make it";
var i = 0;
var subtitledirection = 0;

setInterval(changesubtitle,150);

subtitle.addEventListener('click',function(){
	alert(AAA);
});

function changesubtitle(){
	subtitle.innerText = context.substr(0,i)+"|";
	// console.log(subtitle.innerText);
	if (subtitledirection ==0 ){
		i++;
		if (i == context.length) subtitledirection =1 ;
	}
	else{
		i--;
		if (i == 0) subtitledirection = 0 ,subtitle.style.color = "white";
	}
	
}

var boxleft = document.getElementById('box-left')
var boxright = document.getElementById('box-right')

var target = document.getElementById('screen-box1')

var target1 = document.getElementById('screen-1')
var target2 = document.getElementById('screen-2')
var target3 = document.getElementById('screen-3')

var k=1

console.log(target)
var boxright = document.getElementById('box-right')

function changescreen1(){
	
	// alert("点击")
	// target.style.opacity = 0;
	// console.log(target1.style.backgroundImage)
	
	k = k-3
	var st1 = "num"+k+".jpg"
	var st2 = "num"+(k+1)+".jpg"
	var st3 = "num"+(k+2)+".jpg"
	
	var ima1 = "url(Image/"+st1+")"
	var ima2 = "url(Image/"+st2+")"
	var ima3 = "url(Image/"+st3+")"
	
	// console.log(ima)
	target1.style.backgroundImage = ima1;
	target2.style.backgroundImage = ima2;
	target3.style.backgroundImage = ima3;
}

boxleft.onclick = changescreen1

boxright.onclick = changescreen2

function changescreen2(){
	
	// alert("点击")
	// target.style.opacity = 0;
	// console.log(target1.style.backgroundImage)
	
	k = k+3
	var st1 = "num"+k+".jpg"
	var st2 = "num"+(k+1)+".jpg"
	var st3 = "num"+(k+2)+".jpg"
	
	var ima1 = "url(Image/"+st1+")"
	var ima2 = "url(Image/"+st2+")"
	var ima3 = "url(Image/"+st3+")"
	
	// console.log(ima)
	target1.style.backgroundImage = ima1;
	target2.style.backgroundImage = ima2;
	target3.style.backgroundImage = ima3;
}
