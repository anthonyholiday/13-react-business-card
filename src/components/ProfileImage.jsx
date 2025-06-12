import React from "react"

function ProfileImage(props) {
    return <img className="h-80 object-cover" src={props.image} alt={props.alt} />
}

export default ProfileImage