import React from 'react'

const footer = () => {
  return (
    <div>
        <footer>
        <div className="footer-flex">

            <div className="footer-payment">
                <h2>PAYMENT</h2>
                <div className="footer-payment-methods">
                    <div className="payment-visa">
                    </div>
                    <div className="payment-master-card">
                    </div>
                    <div className="payment-apple-pay">
                    </div>
                    <div className="payment-google-pay">
                    </div>
                    <div className="payment-pay-pal">
                    </div>
                    <div className="payment-stripe">
                    </div>
                </div>
                <div className="warrenty">
                    <div className="warrenty-image"></div>
                    <div className="warrenty-information">
                        <h3>OUR WARRANTY</h3>
                        <p>IF YOU ARE NOT 100% SATUSFIED WE
                            WILL <br/>
                            REFUND YOU 100% OF YOUR ORDER.
                        </p>
                    </div>
                </div>
                <div className="terms-conditions">
                    <div className="term-and-condition">
                        <h4>ArtsDot.com</h4>
                        <p>Privacy Policies</p>
                        <p>Terms of service</p>
                        <p>Contact@ArtsDot.com</p>
                    </div>
                    <div className="copyright">
                        <p className="copy">Copyright 2007-2024</p>
                        <p className="return">Return policies</p>
                        <p>F.A.Q 1/2 F.A.Q 2/2</p>
                    </div>
                </div>
            </div>

            <div className="footer-social-media">
                <h2>SOCIAL MEDIA</h2>
                <div className="social-images">
                    <div className="soc-img social-facebook"></div>
                    <div className="soc-img social-twitter"></div>
                    <div className="soc-img social-pintrest"></div>
                    <div className="soc-img social-youtube"></div>
                    <div className="soc-img social-instagram"></div>
                </div>
                <div className="partners">
                    <h2>PARTNERS</h2>
                    <div><img className="d-edit" src="images/3d-edit.png" alt="" /></div>
                    <div> <img className="f-edit" src="images/foot-reveiw.png" alt="" /></div>
                </div>
            </div>

        </div>
    </footer>
    </div>
  )
}

export default footer
