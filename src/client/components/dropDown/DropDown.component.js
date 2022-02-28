import React from "react";
import "./dropDown.css"

export default function DropDown(props) {
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


