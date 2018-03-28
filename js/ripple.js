var parent = document.getElementById('ripple-container');
//parent.addEventListener('click',createRipple);

function createRipple(event){
    var ripple = document.createElement('div');
    var x = event.clientX;
    var y = event.clientY;
    var d = Math.max(this.clientWidth,this.clientHeight);
   
    ripple.style.left = x +"px";
    ripple.style.top = y +"px";
    // ripple.style.left = x - this.offsetLeft - d / 2 +"px";
    // ripple.style.top = y - this.offsetTop - d / 2 +"px";
    ripple.setAttribute('id',"myripple");
    ripple.classList.add('ripple');
    parent.appendChild(ripple);
    //console.log(event.clientX,event.clientY);
}
function createRipple2(event){

    addElement("ripple-container","div");
    var inter = setInterval(()=>{removeElement("myripple");},2000);
    setTimeout(function(){
        clearInterval(inter);
    },3000);
}

setInterval(createRipple2,1500);

function addElement(parentId,elementTag) {
    
    var p = document.getElementById(parentId);
    var ripple = document.createElement(elementTag);
    var x = Math.floor((Math.random() * parent.clientWidth) + 1);
    var y = Math.floor((Math.random() * parent.clientHeight) + 1); 
    ripple.style.left = x +"px";
    ripple.style.top = y +"px";
    ripple.setAttribute('id',"myripple");
    ripple.classList.add('ripple');
    p.appendChild(ripple);
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}