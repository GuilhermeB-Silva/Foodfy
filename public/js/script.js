const path = window.location.pathname.replace(/.*\//,'')
console.log(path)

document.querySelectorAll(".header_links a").forEach(tag =>{
    console.log(tag)
    const link = tag.href.replace(/.*\//,'')

    if(link === path){
        tag.style.fontWeight = 'bold'
    }


})



// if(window.location.pathname == '/about'){
//     document.querySelector(".header_links a:nth-child(1)").style.fontWeight = 'bold'
// }

// if(window.location.pathname == '/recipes'){
//     document.querySelector(".header_links a:nth-child(2)").style.fontWeight = 'bold'
// }


if(window.location.pathname == '/recipe/detailed-recipe'){


document.querySelectorAll("div span").forEach(span => span.addEventListener("click",(e)=>{
    if(e.target.textContent == 'ESCONDER'){
        e.target.textContent = 'MOSTRAR'
    } else {
        e.target.textContent = 'ESCONDER'
    }
    e.target.nextElementSibling.classList.toggle("no_display")
}))

}    





