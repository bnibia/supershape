


var n, m;
var a, b;
var theta;
var rad;


var AMP = 100;
var call = null, ctx, w, h;

window.onload = function ()
{
    
    var canvas = document.getElementById("canvas");
	
    if(canvas.getContext) 
    {
        ctx = canvas.getContext("2d");
        
		w = canvas.width = innerWidth; 
        h = canvas.height = innerHeight; 
		rad = Math.PI/180;
		
		init_values();
		init_input();
		call = window.requestAnimationFrame(draw);
    }

};



function init_input()
{
	let in_n1 = document.getElementById("n1");
		in_n1.type = "range";
		in_n1.min = "0";
		in_n1.max = "50"; 
		in_n1.step = "0.1";
		in_n1.value = "1";
	
	let in_n2 = document.getElementById("n2");
		in_n2.type = "range";
		in_n2.min = "0";
		in_n2.max = "50"; 
		in_n2.step = "0.1";
		in_n2.value = "1";
	
	let in_n3 = document.getElementById("n3");
		in_n3.type = "range";
		in_n3.min = "0";
		in_n3.max = "50"; 
		in_n3.step = "0.1";
		in_n3.value = "1";
	
	
	let in_m = document.getElementById("m");
		in_m.type = "range";
		in_m.min = "0";
		in_m.max = "50"; 
		in_m.step = "0.01";
		in_m.value = "1";
	
	
	in_n1.oninput = function()
	{	n[0] = Number(this.value);
		recall();
	};	
	
	in_n2.oninput = function()
	{	n[1] = Number(this.value);
		recall();
	};
	
	in_n3.oninput = function()
	{	n[2] = Number(this.value);
		recall();
	};
			
	in_m.oninput = function()
	{	m = Number(this.value);
		recall();
	};	


		
}


function init_values()
{
	n = [];
	n[0] = 0.3;
	n[1] = 0.3;
	n[2] = 0.3;
	m = 1/6;
	a = b = 1;
	theta = 0;
	ctx.save();
	ctx.translate(w/2, h/2);
	ctx.beginPath();
}


function recall()
{
	theta = 0;
	ctx.restore();
	ctx.clearRect(0, 0, w, h);
	ctx.save();
	ctx.translate(w/2, h/2);
	ctx.beginPath();
	clearInterval(call);
	call = window.requestAnimationFrame(draw);
}


r = function(phi)
{
	let alpha = (1/a) * Math.cos(rad * phi * m / 4);
		alpha = Math.abs(alpha);
		alpha = Math.pow(alpha, n[1]);

	let beta = (1/b) * Math.sin(rad * phi * m / 4);
		beta = Math.abs(beta);
		beta = Math.pow(beta, n[2]);	
		
	let aux = Math.pow(alpha + beta, 1/n[0]);
	
	if(aux === 0) return 0;
	
	return (1/aux);
};

function draw()
{
	
	let radius = AMP*r(theta);
	let x = radius*Math.cos(rad * theta);
	let y = radius*Math.sin(rad * theta);
	
	if(!theta) ctx.moveTo(x, y);
	else ctx.lineTo(x, y);
	
	ctx.strokeStyle = "white";
	ctx.lineWidth = 3;
	ctx.stroke();
	
	if(theta < 12*360)
	{
		theta += 0.5;
		call = window.requestAnimationFrame(draw);
	}
        
}






        

 
 

 
 
 
 
