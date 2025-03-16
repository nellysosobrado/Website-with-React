import React from 'react'
import SubscribeForm from '../forms/SubscribeForm'

// Subscribe section
const Subscribe = () => {

  return (
    <section id="subscribe">
        <div className="container">
            <div className="headline">
                <img src="/images/icons/notification-bell.svg" alt="subscribe notification bell" />
                <h2 className="desktop-only">
                    Subscribe to our newsletter 
                    <span> to stay informed about latest updates</span>
                </h2>
                <h2 className="hide-desktop">
                    <span>Subscribe to our newsletter</span>
                </h2>

            </div>
            {/* this is the subscribe form */}
            <div className="subscribe-to-newsletter mobile-stack">
                <SubscribeForm />
            </div>
        </div>
    </section>
  )
}

export default Subscribe