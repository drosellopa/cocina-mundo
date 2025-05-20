document.addEventListener('DOMContentLoaded', function(){
    const mainMenu = document.querySelector('.main-menu');
    const barsMenu = document.querySelector('.icon_menu');
    const headerContainer = document.querySelector('.header-container');
    const arrowUp = document.querySelector('.fa-arrow-up');
    let menuOpen = false;
    barsMenu.addEventListener('click', ()=>{        
        menuOpen ? mainMenu.style.right =  '-100%' :  mainMenu.style.right = 0;
        menuOpen = !menuOpen; 
                
    });
    document.addEventListener('scroll', (e)=>{        
        if(menuOpen){
            mainMenu.style.right = '-100%';
            menuOpen = false;
        }
        if(window.scrollY > 200){
            headerContainer.style.backgroundColor = "#000d";
            arrowUp.style.display = 'initial';
        }else{
            headerContainer.style.backgroundColor = "#0002";
            arrowUp.style.display = 'none';
        }
        
          
    });

    //Animación Espiral
    const spiral = document.querySelector('.spiral');    
    let spiralScale = 50;
    let randomX;
    let randomY;
    setInterval(()=>{
        randomX = parseInt(Math.random()*80);
        randomY = parseInt(Math.random()*80);        
        spiral.style.left = `${randomX}%`;
        spiral.style.top = `${randomY}%`;       
    },5000);
 


    
    
    
 

});