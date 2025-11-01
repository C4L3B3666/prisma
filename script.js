document.getElementById("menu_hamburguer").addEventListener("click", ()=> {
    document.querySelector("header").classList.toggle("ativo")

    if (document.querySelector("header").classList.contains("ativo"))
        document.querySelector("html").style.overflow = "hidden"
    else
        document.querySelector("html").style.overflowY = "auto"
})


document.querySelectorAll(".link_menu").forEach(link => {
    link.addEventListener("click", ()=> {
        document.querySelector("header").classList.remove("ativo")
        document.querySelector("html").style.overflowY = "auto"
    })
})