import React, { useContext } from 'react'
import { SubscribeContext } from '../../contexts/SubscribeContext'

const SubscribeForm = () => {
  const {formData, handleChange, handleSubmit, message, error} = useContext(SubscribeContext)
  
  return (
    <>
    {/* this is where the subscribe form, its a form with an email input and a subscribe button */}
      <form onSubmit={handleSubmit} noValidate>
        <i className="fa-regular fa-envelope"></i>
        <input type="email" placeholder="Your email" value={formData.email} onChange={handleChange} />
        <button className="btn btn-purple" type="submit">Subscribe</button>
      </form>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </>
  )
}

export default SubscribeForm