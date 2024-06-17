import React from 'react'
import './Footer.css'
import footer_img from '../../assets/footer-logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-left">
                <img src={footer_img} alt=''/> 
                <h3>Tourism Hotline</h3>
                <p>1912</p>
                <h3>Ambulance Service</h3>
                <p>1990</p>
            </div>
            <div className="footer-center">
                <h3>Quick links</h3>
                <p>Terms of Use</p>
                <p>Site Map</p>
                <p>Subscribe</p>
                <p>Contact Us</p>
                <p>Investor Relations Unit</p>
                <p>Complaints</p>
                <p>Tenders</p>
                <p>Important Notices</p>
                <p>How to Fly Your Drone Ligitimately</p>
                <p>SLTPB Progress report</p>
            </div>
            <div className="footer-right">
            <h3>OTHER SITES</h3>
                <p>Sri Lanka Tourism Development Authority</p>
                <p>Sri Lanka Tourism Convention Bureau</p>
                <p>Sri Lanka Institute of Tourism & Hotel Management</p>
                <p>Ministry of Tourism</p>
                <p>SriLankan Airlines</p>
                <p>Sri Lanka Airport & Aviation Services</p>
                <p>Department of Immigration and Emigration</p>
                <p>Electronic Travel Authorization System</p>
                <p>Tourist Hotels Association of Sri Lanka</p>
                <p>Sri Lanka Pavilion at EXPO 2020 in Dubai</p>
            </div>
        </div>
        <hr/>

        <div className="footer-bottom">
            <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-tiktok"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-pinterest"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-blogger"></i></a>
            </div>
            <div className="footer-bottom-text">
                <p>© 2024 All Rights Reserved by Sri Lanka Tourism</p>
            </div>
            <div className="footer-bottom-privacy">
                <a href="">Privacy Policy</a>
                <a href="">Terms & Condition</a>

            </div>
        </div>
    </div>
  )
}

export default Footer