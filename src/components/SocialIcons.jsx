import React from "react"

function SocialIcon(props)  {
    return <>
        <a href={props.url}>
            <img src={props.icon} />
        </a>
    </>
}

export default SocialIcon