var today = new Date;
    var time=today.getHours()+":"+ today.getMinutes() +":" + today.getSeconds();
    var hours=today.getHours();

    if(hours>=6 && hours<13){
        document.getElementById('abc').style.backgroundImage="url('pexels1.jpeg')";
    }
    else if(hours>=13 && hours< 19){
        document.getElementById('abc').style.backgroundImage="url('pexels4.jpeg')";
    }
    else{
        document.getElementById('abc').style.backgroundImage="url('pexels3.jpeg')";
    }