if(window.location.pathname == '/sobre'){
    document.querySelector(".header_links a:nth-child(1)").style.fontWeight = 'bold'
}

if(window.location.pathname == '/receitas'){
    document.querySelector(".header_links a:nth-child(2)").style.fontWeight = 'bold'
}



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





