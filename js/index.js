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
var target = document.getElementById('screen-box1')
var target2 = document.getElementById('screen-1')

var k=1

console.log(target)
var boxright = document.getElementById('box-right')

function changescreen(){
	alert("点击")
	// target.style.opacity = 0;
	console.log(target2.style.backgroundImage)
	var st = "num"+k+".jpg"
	var ima = "url(Image/"+st+")"
	// console.log(ima)
	target2.style.backgroundImage = ima;
}

boxleft.onclick = changescreen

boxright.onclick = function(){
	// alert("点击")
	target.style.opacity = 1;
}


