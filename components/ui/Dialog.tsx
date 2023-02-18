import React from "react"
import Modal from "./Modal"

interface DialogProps {
    id: string,
    children: any,
    width?: string

}

class Dialog extends React.Component<DialogProps> {
    render() {
        return (
            <Modal
                id={this.props.id}
            >
                <div className="absolute w-screen h-screen">
                    <div className="w-full h-full bg-black opacity-50"></div>
                    <div className="absolute h-full w-full  opacity-100 top-0 left-0 flex items-center">
                        <div style={{width:this.props.width}} className="bg-white m-auto h-auto rounded-lg">
                        {this.props.children}
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default Dialog;