
    var counter,
    count = 0;
    speed = 90,
    delay = 1;

    let iaphContainer = document.querySelector(".iaph-news-container");
    let iaphNewsMain = document.querySelector(".iaph-news-main");
    let iaphNewsInformation = document.querySelector(".iaph-news-information");
    let firstElement = iaphNewsMain.firstElementChild;

    iaphContainer.addEventListener("mouseover",function(){
    clearInterval(counter);
    clearTimeout(start);
    });


    iaphContainer.addEventListener("mouseout",function(){
    counter = setInterval(slide,speed);
    });

    function slide(){
        var height = firstElement.scrollHeight;
        iaphNewsMain.style.top = (iaphNewsMain.offsetTop-1)+"px";
        count++;

        if(count == height)
        {
            iaphNewsMain.appendChild(firstElement);
            iaphNewsMain.style.top = (iaphNewsMain.offsetTop + height) + "px";
            firstElement = iaphNewsMain.firstElementChild;
            count = 0;
        } 
        }

        (function() {
            start = setTimeout(function()
            {
                counter = setInterval(slide,speed);
            },delay);
         
         })();




