import React from 'react';
// AppFeatures section displays the features of the app
const AppFeatures = () => {
  return (
    <section id="App-features-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="image-column">
            <img src="public/images/appfeatureslogos/phonefeature.svg" alt="statistic" />
          </div>
          <div className="text-column">
            <div className="section-title">
              <h2>App features</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            </div>
            <div className="section-body">
              <div className="appfeatures-info-boxes">
                <div className="column">
                  <div className="appfeatures-info-box">
                    <div className="icon-wrapper">
                      <img src="/images/appfeatureslogos/paymentlogo.svg" alt="Credit Card Icon" />
                    </div>
                    <div className="text-content">
                      <h5>Easy Payments</h5>
                      <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                  </div>
                  <div className="appfeatures-info-box">
                    <img src="/images/appfeatureslogos/staticlogo.svg" alt="Static Logo" />
                    <div className="text-content">
                      <h5>Cost Statistics</h5>
                      <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                    </div>
                  </div>
                  <div className="appfeatures-info-box">
                  <img src="/images/appfeatureslogos/cashbacklogo.svg" alt="Cashback Logo" />
                    <div className="text-content">
                      <h5>Regular Cashback</h5>
                      <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="appfeatures-info-box">
                    <img src="/images/appfeatureslogos/SecurityLogo.svg" alt="Wallet Icon" />
                    <div className="text-content">
                      <h5>Data Security</h5>
                      <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                    </div>
                  </div>
                  <div className="appfeatures-info-box">
                    <img src="/images/appfeatureslogos/supportlogo.svg" alt="Credit Card Icon" />
                    <div className="text-content">
                      <h5>Support 24/7</h5>
                      <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                    </div>
                  </div>
                  <div className="appfeatures-info-box">
                    <img src="/images/appfeatureslogos/standardlogo.svg" alt="Wallet Icon" />
                    <div className="text-content">
                      <h5>Standards</h5>
                      <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures; 