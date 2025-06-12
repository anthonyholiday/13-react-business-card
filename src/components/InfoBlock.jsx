import React from "react"

function InfoBlock(props)    {
    return <div className="info-block-wrapper flex flex-col">
        <h3 className="font-bold text-lg">{props.heading}</h3>
        <p className="text-md text-left">{props.paragraph}</p>
    </div>
}

export default InfoBlock