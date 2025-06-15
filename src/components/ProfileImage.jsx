import React from "react"

function ProfileImage(props) {
    return <img className="h-112 object-cover w-full" src={props.image} alt={props.alt} />
}

export default ProfileImage