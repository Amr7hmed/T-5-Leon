/* menu nav bar*/
let spannav = document.querySelector('.barmenu'),
    menulest = document.querySelector('.listitem');
    spannav.onclick = function(){
        menulest.classList.toggle('open');   
    };

    document.addEventListener('click',(e)=>{
        if(e.target !== spannav && e.target !== menulest){
            menulest.classList.remove('open');
        }
    })