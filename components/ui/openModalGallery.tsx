import React from "react"
import ReactDOM from "react-dom"
import openModal from "./openModal"
import ModalGallery from "./ModalGallery"

const openModalGallery = (src: Array<string>, currentSlider?: number) => {
    let y = document.createElement("div")
    y.setAttribute("id", "lightbox-gallery-container")
    let x = document.getElementById("root") || document.getElementById("__next")
    if (document.getElementById("lightbox-Gallery")) {
        let j = document.getElementById("lightbox-gallery-container")
        j?.remove()
    }
    x?.appendChild(y)
    ReactDOM.render(<ModalGallery src={src} currentSlide={currentSlider} />, y)
    openModal("lightbox-Gallery")

}
export default openModalGallery