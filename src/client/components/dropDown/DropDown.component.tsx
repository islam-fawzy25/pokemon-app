import React from "react";
import "./dropDown.css"

interface Props {
    children:any
    visible:boolean
    onClick:()=>void
    title:string
}

export default function DropDown(props:Props) {
    const { children, visible, onClick, title } = props;
    return (
        <div className="dropdown-container">
            <div className="dropdown-button-container">
                <button
                    type="button"
                    className={`dropdown-button`}
                    onClick={onClick}
                >
                    {title}
                </button>
            </div>
            {visible && (
                <div className={`options-container`}>{children}</div>
            )}
        </div>
    );
}


