$('Document').ready(function () {



    var info1 = document.getElementById('ltd');
    var info2 = document.getElementById('ltv');
    var info3 = document.getElementById('pcng');
    var info4 = document.getElementById('hrvol');
    var info5 = document.getElementById('hrhigh');
    var info6 = document.getElementById('hrlow');
    var info7 = document.getElementById('ath');
    var info8 = document.getElementById('atl');

    var IdArray = [info1, info2, info3, info4, info5, info6, info7, info8];
    
    setInterval(rc,1000);

    setInterval(function () {
        for (var i = 0; i < IdArray.length; i++) {
            var rndi = ((Math.random() * 6) + 1);
            var sim = String.fromCharCode(9650);
            var sim2 = String.fromCharCode(9660);
            var rnd = rndi.toString().substring(0,7);
            elem = IdArray[i];
            if(rnd>5){
                if(i==2){
                    IdArray[i].textContent = "% "+rnd+" "+sim;
                }else{
                    IdArray[i].textContent = rnd+" "+sim;
                }
                if(i==0){
                addClass(IdArray[i],'green-text animated zoomIn');
                }else{
                addClass(IdArray[i],'green-text');
                }
            }
            else if(rnd<4){
                if(i==2){
                    IdArray[i].textContent = "% "+rnd+" "+sim2;
                }else{
                    IdArray[i].textContent = rnd+" "+sim2;
                }
                if(i==0){
                    addClass(IdArray[i],'red-text animated slideInDown'); 
                }else{
                
               addClass(IdArray[i],'red-text'); 
                }
            }
        }
    }, 1000);


    function addClass(element, className) {
        var currentClassName = element.getAttribute("class");
        if (typeof currentClassName !== "undefined" && currentClassName) {
            element.setAttribute("class", currentClassName + " " + className);
        } else {
            element.setAttribute("class", className);
        }
    }

    function removeClass(element, className) {
        var currentClassName = element.getAttribute("class");
        if (typeof currentClassName !== "undefined" && currentClassName) {

            var class2RemoveIndex = currentClassName.indexOf(className);
            if (class2RemoveIndex != -1) {
                var class2Remove = currentClassName.substr(class2RemoveIndex, className.length);
                var updatedClassName = currentClassName.replace(class2Remove, "").trim();
                element.setAttribute("class", updatedClassName);
            }
        } else {
            element.removeAttribute("class");
        }
    }
    
    function rc(){
        removeClass(info1,'red-text animated slideInDown');
        removeClass(info2,'red-text');
        removeClass(info3,'red-text');
        removeClass(info4,'red-text');
        removeClass(info5,'red-text');
        removeClass(info6,'red-text');
        removeClass(info7,'red-text');
        removeClass(info8,'red-text');
        removeClass(info1,'green-text animated zoomIn');
        removeClass(info2,'green-text');
        removeClass(info3,'green-text');
        removeClass(info4,'green-text');
        removeClass(info5,'green-text');
        removeClass(info6,'green-text');
        removeClass(info7,'green-text');
        removeClass(info8,'green-text');
        
    }

});
