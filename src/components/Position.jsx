import React from "react"

function Position(props) {
    return <h2 className={`text-lg mb-4 ${props.color}`}>{props.role}</h2>
}

export default Position