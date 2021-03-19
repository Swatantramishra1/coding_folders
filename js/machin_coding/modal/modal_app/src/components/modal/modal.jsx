
import { useEffect, useState } from "react";
import "./modal.css";

export const Modal = ({handleClose, show, children}) => {


    const [cssClass, setCssClass] = useState("modal-hide")


    function addClass() {
        if(show) {
            setCssClass("modal-show")
        } else {
            setCssClass("modal-hide")
        }
    }

    function handleOutSide(e) {
        const id = e.target.id;
        if(id === "modal") {
            handleClose();
        }
        
    }

    useEffect(() => {
        addClass();
    })


    

   

    return (
        <div className={`modal ${cssClass}`} id="modal" onClick={(e) => handleOutSide(e)}>
            <div className="modal-main">
                <div className="modal-header"></div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    <button className="modal-close-button"onClick={handleClose}>
                        <div className="close">
                            
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
