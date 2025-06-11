import React from "react"

function InfoBlock(props)    {
    return <div className="info-block-wrapper flex flex-col">
        <h3 className="font-bold text-xl">{props.heading}</h3>
        <p className="text-lg text-left">{props.paragraph}</p>
    </div>
}

export default InfoBlock