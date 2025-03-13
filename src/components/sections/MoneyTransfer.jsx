import React from 'react'
import LinkButton from '../elements/LinkButton'

// MoneyTransfer section
const MoneyTransfer = () => {
    return (
        <section id="money-transfer">
            <div className="container">
                <div className="column left">
                    <div className="content">
                        <div className="section-title">
                            <h2>Make your money transfer simple and clear</h2>
                        </div>
                    {/* create a list of features */}
                        <div className="section-body">
                            <ul>
                                <li><i className="fa-regular fa-circle-check"></i>Banking transactions are free for you</li>
                                <li><i className="fa-regular fa-circle-check"></i>No monthly cash commission</li>
                                <li><i className="fa-regular fa-circle-check"></i>Manage payments and transactions online</li>
                            </ul>
                            <div className="learn-more-link">
                                <LinkButton to="/underconstruction" color="purple" text="Learn more" icon="bi bi-arrow-right" iconAfter={true} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* image */}
                <div className="column right">
                    <img src="/images/transfer-statisitcs.svg" alt="statistics" />
                </div>
            </div>
        </section>
    )
}

export default MoneyTransfer