import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className="footer-container">
       
        <div className="footer-links">
            <div className="footer-link-wripper">
                <div className="footer-link-item">
                    <Link to='/home'>Home 
                    <span className='span-icon'></span>
                    </Link>
                    
                </div>

                <div className="footer-link-item">
                    <Link to='/'>Term and Condition 
                    <span className='span-icon'></span>
                    </Link>
                    
                </div>

                <div className="footer-link-item">
                    <Link to='/'>Privacy Policy
                    <span className='span-icon'></span>
                    </Link>
                   
                </div>

                <div className="footer-link-item">
                    <Link to='/'>Collection Statement
                    <span className='span-icon'></span>
                    </Link>
                  
                </div>

                <div className="footer-link-item">
                    <Link to='/'>Help
                    <span className='span-icon'></span>
                    </Link>

                </div>

                <div className="footer-link-item">
                    <Link to='/'>Manage Account
                    </Link>
                   
                </div>
            </div>
            
        </div>
        <Link className="copyright">Copyright @ 2016 DEMO Streaming All Right Reserved</Link>
{/* 
        <section className="social-media">
            <div className="social-media-wrip ">
                <div className="social-icons">
                    <Link 
                    className="social-icon-link facebook"
                    to="/"
                    target="_blank"
                    aria-label="facebook">
                        <img src="./src/images/facebook.png" alt='facebook' />
                    </Link>

                    <Link 
                    className="social-icon-link twitter"
                    to="/"
                    target="_blank"
                    aria-label="twitter">
                        <img src="./src/images/twitter.png" alt='twitter' />
                    </Link>

                    <Link 
                    className="social-icon-link instegram"
                    to="/"
                    target="_blank"
                    aria-label="instegram">
                        <img src="./src/images/instegram.png" alt='instegram' />
                    </Link>                   
                </div>

                <div className="social-icons-2">
                    <Link 
                    className="social-icon-link facebook"
                    to="/"
                    target="_blank"
                    aria-label="applestore">
                        <img src="./src/images/applestore.png" alt='applestore' />
                    </Link>

                    <Link 
                    className="social-icon-link twitter"
                    to="/"
                    target="_blank"
                    aria-label="microstore">
                        <img src="./src/images/googlestore.png" alt='microstore' />
                    </Link>
                    
                    <Link 
                    className="social-icon-link instegram"
                    to="/"
                    target="_blank"
                    aria-label="microstore">
                        <img src="./src/images/microstore.png" alt='microstore' />
                    </Link>                   
                </div>
            </div> 
            <div className="all">
                <div className="one">

                </div>
                <div className="two">

                </div>
            </div>


           <div className="footer-botton"> </div>
           
        </section> */}

           <div className="all">
                <div className="one">
                    <Link 
                    className="social-icon-link facebook"
                    to="/"
                    target="_blank"
                    aria-label="facebook">
                        <img src="./src/images/facebook.png" alt='facebook' />
                    </Link>


                    <Link 
                    className="social-icon-link twitter"
                    to="/"
                    target="_blank"
                    aria-label="twitter">
                        <img src="./src/images/twitter.png" alt='twitter' />
                    </Link>

                    <Link 
                    className="social-icon-link instegram"
                    to="/"
                    target="_blank"
                    aria-label="instegram">
                        <img src="./src/images/instegram.png" alt='instegram' />
                    </Link>                   




                </div>
                <div className="two">
                <Link 
                    className="social-icon-link facebook"
                    to="/"
                    target="_blank"
                    aria-label="applestore">
                        <img src="./src/images/applestore.png" alt='applestore' className="footer-icon" />
                    </Link>


                    <Link 
                    className="social-icon-link twitter"
                    to="/"
                    target="_blank"
                    aria-label="microstore">
                        <img src="./src/images/googlestore.png" alt='microstore' className='footer-icon' />
                    </Link>

                    <Link 
                    className="social-icon-link instegram"
                    to="/"
                    target="_blank"
                    aria-label="microstore">
                        <img src="./src/images/microstore.png" alt='microstore' className="footer-icon" />
                    </Link>                   


                </div>
            </div>


      <div className="footer-botton"> </div>

       
    </div>
      
    </>
  )
}

export default Footer
