import React from "react";
import './layoutMain.css'

const LayoutMain = ({children}) => {
    return (
        <div className="wrapper" >
            {children}
        </div>
    )
}

export default LayoutMain