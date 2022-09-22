import React from "react";
import "./Companies.scss";

export function Companies() {
    return (
        <div className="companies">
            <div className="companies__title caption">Trusted by 50,000+ companies</div>
            <div className="companies__logo">
                <img src="img/focusfox.svg" alt="Focusfox"/>
                <img src="img/nowintech.svg" alt="Nowintech"/>
                <img src="img/optimer.svg" alt="Optimer"/>
                <img src="img/carded.svg" alt="Carded"/>
            </div>
        </div>
    );
}