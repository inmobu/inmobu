import React, { Suspense, lazy } from "react"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from "pure-react-carousel";
import openModalGallery from "./openModalGallery";
import SuspenseCarousel from "../ui/SuspenseCarousel";


interface CarouselProps {
    src: Array<string>,
    lightbox?: boolean,
    controls?: boolean
}
type CarouselState = {
    currentSlider: number,
    width: number,
    height: number,
}
class Carousel extends React.Component<CarouselProps, CarouselState> {
    private carouselRef = React.createRef<HTMLDivElement>()
    state: CarouselState = {
        currentSlider: 0,
        width: 100,
        height: 100
    }
    componentDidMount() {
        this.setState({
            width: this.carouselRef.current?.scrollWidth ? this.carouselRef.current?.scrollWidth : 0,
            height: this.carouselRef.current?.scrollHeight ? this.carouselRef.current?.scrollHeight : 0
        })
    }
    onClick(currentSlider: number) {
        this.props.lightbox && openModalGallery(this.props.src, currentSlider)
    }
    render() {

 

        
        return (
            <>
                <div ref={this.carouselRef} className="w-full h-full relative overflow-hidden">
                    <CarouselProvider
                        className="w-full h-full"
                        currentSlide={this.state.currentSlider}
                        naturalSlideWidth={this.state.width}
                        naturalSlideHeight={this.state.height}
                        totalSlides={this.props.src.length}
                        infinite>
                        <Slider
                            className="w-full h-full"
                            classNameAnimation="transition-all ease-in-out duration-1000 p-0 m-0"
                            style={{ listStyle: "none" }}
                        >
               
                            {
                                this.props.src.map((src, i) => {
                                    return (
                                        <Slide  key={i + 1} index={i} className="relative block list-none float-left">
                                            <Image  renderLoading={() => <SuspenseCarousel/>} className="absolute w-full inset-0 object-cover" onClick={this.onClick.bind(this, i)} hasMasterSpinner={false} src={src} style={{ height: `${this.state.height}px` }}>
                                            </Image>
                                        </Slide>)
                                })
                            }

                        </Slider>
                        {
                            this.props.controls &&
                            <>
                                <div className="absolute top-0 left-0 h-full flex items-center pl-4">
                                    <ButtonBack className="outline-none">
                                        <div className="h-8 w-8 bg-white rounded-full flex items-center shadow-lg">
                                            <svg
                                                className="h-2 m-auto pr-0.5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 492 492">
                                                <path d="M198.608 246.104L382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z" />
                                            </svg>
                                        </div>
                                    </ButtonBack>
                                </div>
                                <div className="absolute top-0 right-0 h-full flex items-center pr-4">
                                    <ButtonNext className="outline-none">
                                        <div className="h-8 w-8 bg-white rounded-full flex items-center shadow-lg ">
                                            <svg
                                                className="h-2 m-auto pl-0.5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 492.004 492.004"
                                            >
                                                <path d="M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z" />
                                            </svg>
                                        </div>
                                    </ButtonNext>
                                </div>
                            </>
                        }
                    </CarouselProvider>

                </div>
            </>
        )
    }
}

export default Carousel;