import React from "react"

function SocialIcon(props)  {
    return <>
        <a className="h-10 w-10 flex items-center justify-center rounded bg-[#918E9B] transition ease-in hover:-translate-y-1 hover:bg-white" href={props.url}>
            <img src={props.icon} />
        </a>
    </>
}

export default SocialIcon