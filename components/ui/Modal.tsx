import React from "react"

interface ModalProps {
    id: string
    children : JSX.Element, 
    ref?: any
}

class Modal extends React.Component <ModalProps>{
    render(){
        return(
            <div id={this.props.id} style={{display:"none"}} ref={this.props.ref}  className="fixed top-0 left-0 w-screen h-screen">
                {this.props.children}
            </div>
        )
    }
}

export default Modal;