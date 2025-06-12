import React from "react"

function ProfileImage(props) {
    return <img className="h-96 object-cover" src={props.image} alt={props.alt} />
}

export default ProfileImage