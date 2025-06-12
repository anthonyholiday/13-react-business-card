import React from "react"

function SocialIcon(props)  {
    return <>
        <a className="h-10 w-10 flex items-center justify-center rounded bg-[#918E9B]" href={props.url}>
            <img src={props.icon} />
        </a>
    </>
}

export default SocialIcon