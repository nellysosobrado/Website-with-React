import React, { useContext } from 'react'
import { SubscribeContext } from '../../contexts/SubscribeContext'

const SubscribeForm = () => {
  const {formData, handleChange, handleSubmit} = useContext(SubscribeContext)
  
  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <i className="fa-regular fa-envelope"></i>
        <input type="email" placeholder="Your email" value={formData.email} onChange={handleChange} />
        <button className="btn btn-purple" type="submit">Subscribe</button>
      </form>
    </>
  )
}

export default SubscribeForm