const openModal = (id:string) => {
    document.getElementById(id)?.setAttribute("style","display:block;z-index:9999;opacity:1")
    document.querySelector('body')?.setAttribute("style","overflow:hidden;")
}

export default openModal;