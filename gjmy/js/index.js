(function(){
    document.querySelector('.come img').onclick = function(){
        document.querySelector('.mc').style.display = 'block';
        document.querySelector('.plan').style.display = 'block';
        let i = 1;
        let count = 0;
        let id = setInterval(()=>{
            document.querySelector('.plan').style.backgroundImage=`url(../images/load/${i}.png)`;
            if(i == 8){
                i=0;
                count++;
            }
            if(count == 3){
                clearInterval(id);
                window.location = './map.html'
            }
            i++;
        },60);
        
    }
    document.querySelector('.title a').onclick = function(){
        document.querySelector('.mc').style.display = 'block';
        document.querySelector('.title-img').style.display = 'block';
        document.querySelector('.title-img').style.top = -getStyle(document.querySelector('.title-img'),'height') + 'px';
        starMove(0,document.querySelector('.title-img'));
        document.querySelector('.mc').mc = true;
        document.querySelector('.mc').onclick = function(){
            if(this.mc){
                document.querySelector('.mc').style.display = 'none';
                this.mc = false;
            }
            starMove(-parseInt(getStyle(document.querySelector('.title-img'),'height')),document.querySelector('.title-img'));
        }
    }

    let starMove = function(iTarget,obj){
        clearInterval(obj.timer);
        obj.timer = setInterval(()=>{
            let speed = (iTarget - obj.offsetTop) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if(obj.offsetTop == iTarget){
                obj.style.display = iTarget<0?'none':'block';
                clearInterval(obj.timer);
            }else{
                obj.style.top = (obj.offsetTop + speed)+ 'px';
            }

        },30);
    }

    function getStyle(obj,sty){
        return window.getComputedStyle(obj,null)[sty].replace(/px/,"");
    }

})()