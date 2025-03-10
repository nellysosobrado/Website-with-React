import React from 'react'

const ToggleSwitch = ({id, text, currentState, currentStateCallback}) => {
  return (
    <div className="btn btn-toggle-switch">
        <label htmlFor={id}>{text}</label>
        <label className="switch">
            <input id={id} type="checkbox" checked={currentState} onChange={currentStateCallback} />
            <span className="slider round"></span>
        </label>
    </div>
  )
}

export default ToggleSwitch
