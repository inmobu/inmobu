const closeModal = (id:string) => {
    document.getElementById(id)?.setAttribute("style","display:none;opacity:0")
    document.querySelector("body")?.setAttribute("style","overflow:auto")
}

export default closeModal;