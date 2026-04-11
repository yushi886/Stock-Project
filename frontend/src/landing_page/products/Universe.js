import React from 'react';

function Universe() {
    return (
        <div className='container mt-5 '>
            <div className='row text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-3 mt-5'>
                    <img src="media/ZerodhaFundhouse.png" />
                    <p className="text-small text-muted">Our asset management venture that is creating simole and transparent index funds to help younsave for your goals.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/sensinullLogo.png" />
                    <p className="text-small text-muted">Options trading platform that lets yoou create strategies,analyze positions,and examine data points like open interest,FII/DII,and more</p>

                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/streakLogo.png" />
                    <p className="text-small text-muted">Systematic trading platform that allows you to create and backtest strategies without coding.</p>

                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/smallcaselogo.png" />
                    <p className="text-small text-muted">Thematic investing platform that helps you invest in divesified basckets of stocks on ETFs</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/smallcaselogo.png" />
                    <p className="text-small text-muted">Investment research platform that offers detailed insights on stocks, sectors,supply chains,and more.</p>

                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/dittoLogo.png" />
                    <p className="text-small text-muted">Personalized advice on life and health insurance.No spam and no mis-selling.</p>

                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "20%", margin: "0 auto" }}>Signup Now</button>

            </div>
        </div>

    );
}

export default Universe;