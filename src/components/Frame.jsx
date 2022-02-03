import React from "react";
import QRCode from "./QRCode.jsx";
import Header from "./Header.jsx";
import Paragraph from "./Paragraph.jsx";


function Frame() {
    return (
        <div className="frame">
            <QRCode />
            <Header />
            <Paragraph />
        </div>
    );
}

export default Frame;