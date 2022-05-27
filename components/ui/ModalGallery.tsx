import React from "react"
import Modal from "./Modal"
import closeModal from "./closeModal";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';

interface ModalGalleryProps {
    src: Array<string>,
    currentSlide?: number,
}

type ModalGalleryState = {
    width: number,
    height: number,
}

class ModalGallery extends React.Component<ModalGalleryProps, ModalGalleryState> {
    state: ModalGalleryState = {
        width: 100,
        height: 100,
    }
    render() {
        return (
            <Modal id="lightbox-Gallery">
                <div className="relative inset-0 w-screen h-screen">
                    <div className="absolute inset-0 w-full h-full bg-black"></div>
                    <div className="absolute inset-0 h-full w-full inset-0">
                        <CarouselProvider
                            className="h-full w-full"
                            currentSlide={this.props.currentSlide}
                            naturalSlideWidth={1000}
                            naturalSlideHeight={1000}
                            totalSlides={this.props.src.length}
                            infinite
                        >
                            <Slider
                                className="w-full h-full"
                                classNameAnimation="transition-all ease-in-out duration-1000 p-0 m-0"
                                style={{ listStyle: "none" }}

                            >
                                {
                                    this.props.src.map((src, i) => {
                                        return (
                                            <Slide key={i+1} index={i} className="relative block list-none float-left" >
                                                <div className="absolute inset-0 h-screen flex"><Image className="object-contain m-auto" hasMasterSpinner={false} src={src} /></div>
                                                    
                                            </Slide>
                                        )
                                    })
                                }
                            </Slider>
                            <div className="absolute top-0 left-0 h-full flex items-center pl-4">
                                <ButtonBack>
                                    <div className="h-10 w-10 flex items-center">
                                        <svg
                                            className="h-5 m-auto pr-1 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 492 492"
                                            fill="currentColor"
                                        >
                                            <path d="M198.608 246.104L382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z" />
                                        </svg>
                                    </div>
                                </ButtonBack>
                            </div>
                            <div className="absolute top-0 right-0 h-full flex items-center pr-4">
                                <ButtonNext>
                                    <div className="h-10 w-10 flex items-center">
                                        <svg
                                            className="h-5 m-auto pl-1 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 492.004 492.004"
                                            fill="currentColor"
                                        >
                                            <path d="M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z" />
                                        </svg>
                                    </div>
                                </ButtonNext>
                            </div>
                        </CarouselProvider>
                        <div className="absolute top-0 right-0 ">
                            <button onClick={() => { closeModal("lightbox-Gallery") }} className="m-4 lg:m-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512.001 512.001"
                                    className="h-4 lg:h-6 text-white"
                                    fill="currentColor"
                                >
                                    <path d="M294.111 256.001L504.109 46.003c10.523-10.524 10.523-27.586 0-38.109-10.524-10.524-27.587-10.524-38.11 0L256 217.892 46.002 7.894C35.478-2.63 18.416-2.63 7.893 7.894s-10.524 27.586 0 38.109l209.998 209.998L7.893 465.999c-10.524 10.524-10.524 27.586 0 38.109 10.524 10.524 27.586 10.523 38.109 0L256 294.11l209.997 209.998c10.524 10.524 27.587 10.523 38.11 0 10.523-10.524 10.523-27.586 0-38.109L294.111 256.001z" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default ModalGallery
