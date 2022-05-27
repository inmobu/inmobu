import React, { Suspense } from "react"
import openModalGallery from "./openModalGallery"
const Image = React.lazy(() => import("./Image"))

interface GalleryProps {
    src: Array<string>,
    i18n: string
}

const Skeleton = () => {
    return (
        <div className="bg-gray-400 animate-pulse w-full h-full"></div>
    )
}

class Gallery extends React.Component<GalleryProps>{
    onClick(currentSlider: number) {
        openModalGallery(this.props.src, currentSlider)
    }
    render() {
        return (
            <>
                <div className="relative w-full h-full flex gap-2 overflow-hidden">
                    <div className="relative flex gap-2" style={{ width: "80%" }}>
                        <div className="h-full w-full">
                            <Suspense fallback={<Skeleton />}>
                                <Image  className="h-full w-full object-cover rounded-l-xl" src={this.props.src[0]} alt="" />
                            </Suspense>
                        </div>
                        <button style={{ width: "calc(50% - 0.25rem)" }} onClick={this.onClick.bind(this, 0)} className="absolute top-0 left-0 h-full z-10 hover:bg-black hover:opacity-30  transition duration-500 ease-in-out"></button>
                        <div className="h-full w-full">
                            <Suspense fallback={<Skeleton />}>
                                <Image className="h-full w-full object-cover" src={this.props.src[1]} alt="" />
                            </Suspense>
                        </div>
                        <button style={{ width: "calc(50% - 0.25rem)" }} onClick={this.onClick.bind(this, 1)} className="absolute top-0 right-0 h-full z-10 hover:bg-black hover:opacity-30 transition duration-500 ease-in-out"></button>
                    </div>
                    <div className="relative flex flex-col" style={{ width: "20%" }}>
                        <Suspense fallback={<Skeleton />}>
                            <Image  className="absolute w-full h-1/2 object-cover pb-2 rounded-tr-xl" src={this.props.src[2]} alt="" />
                        </Suspense>
                        <button onClick={this.onClick.bind(this, 2)} style={{ height: "calc(50% - 0.5rem)" }} className="absolute w-full top-0 z-10 mb-2 hover:bg-black hover:opacity-30 transition duration-500 ease-in-out"></button>
                        <Suspense fallback={<Skeleton />}>
                            <Image  className="absolute w-full h-1/2 object-cover bottom-0 rounded-br-xl" src={this.props.src[3]} alt="" />
                        </Suspense>
                        <button className="absolute w-full h-1/2 bottom-0 bg-black z-10 opacity-20 hover:opacity-40 transition duration-500 ease-in-out "></button>
                    </div>
                    <div className="absolute bottom-0 p-5 right-0 z-10 w-1/5 ">
                        <button onClick={this.onClick.bind(this, 3)} className="font-bold hover:underline text-white text-xl grid leading-5 rounded-br-xl">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 40 40"
                                    className="text-white h-6"
                                    fill="currentColor"

                                >
                                    <path d="M24 21a6 6 0 11-12 0 6 6 0 0112 0zm12-9v17c0 2-2 4-4 4H4c-2 0-4-2-4-4V12c0-2 2-4 4-4h5V7c0-2 1-4 3-4h12c2 0 3 2 3 4v1h5c2 0 4 2 4 4zm-9 9a9 9 0 10-18 0 9 9 0 0018 0z" />
                                </svg>
                            </div>
                            <p className="text-left">{this.props.i18n}</p>
                            <p className="text-left">({this.props.src.length})</p>
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default Gallery;