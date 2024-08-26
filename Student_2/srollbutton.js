const goTopButton = document.querySelector('.scrol_top_button');
window.addEventListener('scroll',checkingHeight)
function checkingHeight(){
    if(window.scrollY > 200){
        goTopButton.style.dispaly = "flex"
    }

    else{
        goTopButton.style.dispaly = "none"
    }
}

goTopButton.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
