var parent = document.getElementById('ripple-container');
parent.addEventListener('click',createRipple);

function createRipple(event){
    var ripple = document.createElement('div');
    var x = event.clientX;
    var y = event.clientY;
    var d = Math.max(this.clientWidth,this.clientHeight);
   
    ripple.style.left = x +"px";
    ripple.style.top = y +"px";
    // ripple.style.left = x - this.offsetLeft - d / 2 +"px";
    // ripple.style.top = y - this.offsetTop - d / 2 +"px";
    ripple.classList.add('ripple');
    parent.appendChild(ripple);
    //console.log(event.clientX,event.clientY);
}
function createRipple2(event){
    var bool = parent.hasChildNodes(ripple);
    var ripple = document.createElement('div');
    var x = Math.floor((Math.random() * parent.clientWidth) + 1);//parent.clientWidth;
    var y = Math.floor((Math.random() * parent.clientHeight) + 1);//parent.clientHeight;
    // var d = Math.max(this.clientWidth,this.clientHeight);
   
    ripple.style.left = x +"px";
    ripple.style.top = y +"px";
    // ripple.style.left = x - this.offsetLeft - d / 2 +"px";
    // ripple.style.top = y - this.offsetTop - d / 2 +"px";
    ripple.classList.add('ripple');
    parent.appendChild(ripple);
    

    
   // console.log(x,y);
    //console.log(event.clientX,event.clientY);
}

setInterval(createRipple2,1500);