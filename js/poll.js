$(document).ready(function () {
           
            var answer1;
            var templabel ;
            var pollObj = [];

            var l1 = $("#l1");
            var l2 = $("#l2");
            var l3 = $("#l3");
            var l4 = $("#l4");

            var i1 = $("#i1");
            var i2 = $("#i2");
            var i3 = $("#i3");
            var i4 = $("#i4");


            l1.on('click',function(){
                var  element = $(this);
                answer1 = 'btc';
                if(templabel==null){
                    templabel = i1;
                    i1.addClass('z-depth-2 light-blue');
                }
                else{
                    templabel.removeClass('z-depth-2 light-blue');
                    i1.addClass('z-depth-2 light-blue');
                    templabel = i1;
                }
                pollObj[0] = answer1;
                console.log(element,answer1,pollObj);

            });
            l2.on('click',function(){
                var  element = $(this);
                answer1 = 'neo';
                if(templabel==null){
                    templabel = i2;
                    i2.addClass('z-depth-2 light-blue');
                }
                else{
                    templabel.removeClass('z-depth-2 light-blue');
                    i2.addClass('z-depth-2 light-blue');
                    templabel = i2;
                }
                pollObj[0] = answer1;
                console.log(element,answer1,pollObj);

            });
            l3.on('click',function(){
                var  element = $(this);
                answer1 = 'eth';
                if(templabel==null){
                    templabel = i3;
                    i3.addClass('z-depth-2 light-blue');
                }
                else{
                    templabel.removeClass('z-depth-2 light-blue');
                    i3.addClass('z-depth-2 light-blue');
                    templabel = i3;
                }
            
                pollObj[0] = answer1;
                console.log(element,answer1,pollObj);
            });
            l4.on('click',function(){
                var  element = $(this);
                answer1 = 'rep';
                if(templabel==null){
                    templabel = i4;
                    i4.addClass('z-depth-2 light-blue');
                }
                else{
                    templabel.removeClass('z-depth-2 light-blue');
                    i4.addClass('z-depth-2 light-blue');
                    templabel = i4;
                }
                pollObj[0] = answer1;
                console.log(element,answer1,pollObj);
            });
            
 });