(function(){
    document.querySelector('.look>a:nth-of-type(1)').onclick = function(){
        document.querySelector('.mc').style.display = 'block';
        document.querySelector('.one').style.display = 'block';
        document.querySelector('.one').style.top = -getStyle(document.querySelector('.one'),'height') + 'px';
        starMove(0,document.querySelector('.one'));
        document.querySelector('.mc').onclick = function(){
            starMove(-parseInt(getStyle(document.querySelector('.one'),'height')),document.querySelector('.one'));
            this.style.display = 'none';
        }
    }

    document.querySelector('.look>a:nth-of-type(2)').onclick = function(){
        document.querySelector('.mc').style.display = 'block';
        document.querySelector('.two').style.display = 'block';
        document.querySelector('.two').style.top = -getStyle(document.querySelector('.two'),'height') + 'px';
        starMove(-100,document.querySelector('.two'));
        document.querySelector('.mc').onclick = function(){
            starMove(-parseInt(getStyle(document.querySelector('.two'),'height')),document.querySelector('.two'));
            this.style.display = 'none';
        }
    }



    let starMove = function(iTarget,obj){
        clearInterval(obj.timer);
        obj.timer = setInterval(()=>{
            let speed = (iTarget - obj.offsetTop) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if(obj.offsetTop == iTarget){
                obj.style.display = iTarget<-100?'none':'block';
                clearInterval(obj.timer);
            }else{
                obj.style.top = (obj.offsetTop + speed)+ 'px';
            }

        },30);
    }

    function getStyle(obj,sty){
        return window.getComputedStyle(obj,null)[sty].replace(/px/,"");
    }

    function star(num=0){
        for(let i = 0;i<num;i++){
            var img = document.createElement('img');
            img.setAttribute('src','./images/star1.png');
        }
    }

    function innfor(num){
        switch(num){
            case 1:
            case 2:
                document.querySelector('.day .three').style.backgroundColor = 'red';
                document.querySelector('.day .three').style.backgroundImage = 'linear-gradient(135deg, transparent 25%, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 50%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.1) 0)';
                document.querySelectorAll('.map div')[3].style.backgroundImage = 'url(./images/eurasia_active.png)';
            ;break;
            case 3:
                document.querySelector('.day .two').style.backgroundColor = 'rgb(0,220,0)';
                document.querySelector('.day .two').style.backgroundImage = 'linear-gradient(135deg, transparent 25%, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 50%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.1) 0)';  
                document.querySelectorAll('.map div')[4].style.backgroundImage = 'url(./images/oceania_active.png)';
            ;break;
            case 4:
                document.querySelector('.day .one').style.backgroundColor = 'rgb(200,100,200)';
                document.querySelector('.day .one').style.backgroundImage = 'linear-gradient(135deg, transparent 25%, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 50%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.1) 0)';   
                document.querySelectorAll('.map div')[2].style.backgroundImage = 'url(./images/africa_active.png)';
            ;break;
            case 5:
                document.querySelector('.day .four').style.backgroundColor = 'rgb(0,100,200)';
                document.querySelector('.day .four').style.backgroundImage = 'linear-gradient(135deg, transparent 25%, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 50%, transparent 0, transparent 75%, rgba(0, 0, 0, 0.1) 0)';    
                document.querySelectorAll('.map div')[1].style.backgroundImage = 'url(./images/south_active.png)';
            ;break;
        }
        if(num>1){
            document.querySelector('.cost input').style.backgroundImage = 'url(./images/red_btn.png)';
            document.querySelector('.cost input').value = '去办理';
            document.querySelector('.cost input').onclick = function(){
                document.querySelector('.cost input').style.backgroundImage = 'url(./images/orange_btn1.png)';
                document.querySelector('.cost input').value = '领取20元话费';
            }
        }
        document.querySelector('.name img').setAttribute('src',`./images/img_${num}a.png`)
        document.querySelector('.head-img img').setAttribute('src',`./images/head${num}.png`)
        document.querySelector('.star').innerHTML = '';
        for(let i = 0;i<num;i++){
            let img = document.createElement('img');
            img.setAttribute('src','./images/star1.png');
            document.querySelector('.star').appendChild(img);
        }
    }

    innfor(2);

})()