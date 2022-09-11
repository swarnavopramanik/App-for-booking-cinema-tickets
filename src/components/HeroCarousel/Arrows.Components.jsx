import React from "react";

export function NextArrow (props){
    return (
        <>
        <div className={props.className} 
        style={{...props}} 
        onClick={props.onClick}

        />
        </>
    );
}

export function PrevArrow (props){
    return (
        <>
        <div className={props.className} style={{...props}} onClick={props.onClick}
        />
        </>
    );
}
