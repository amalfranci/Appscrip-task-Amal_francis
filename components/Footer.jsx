import React from 'react'
import '../components/footer.css'

const Footer = () => {
  return (
    <>
    
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col2">
              <h2>BE THE FIRST TO KNOW</h2>
              <h4>Sign up for update from metta mouse</h4>
              <input type='text' placeholder='enter your email'></input>
              <button>submit</button>
           
          </div>
         
    
          <div className="footer-col3">
              <h2>CONTACT US</h2>
              <h4>+44 22 133 5360</h4>
              <div className="social-links">
                 <h2>CURRENCY</h2>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
          
            </div>
          </div>
          </div>

          <br></br>
          <br></br>
          <hr></hr>
            <br></br>
           <div className="row">
          <div className="footer-col">
            <h2>metta muse</h2>
            <ul>
              <li><a href="#">about us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
                <li><a href="#">Boutiques</a></li>
                <li><a href="#">Contact Us</a></li>
                  <li><a href="#">EU Compliances Docs</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h2>QUICK lINKS</h2>
            <ul>
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Join/Login as a seller</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Return & Refunds</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Privacy & Refunds</a></li>
                <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
       
          <div className="footer-col">
            <h2>FOLLOW US</h2>
            <div className="social-links">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
               <h2>metta muse ACCEPTS</h2>
          </div>
          </div>
          <div className='Rights'>

            <h4>copyright@2024.all rights are recived</h4>
          </div>
        </div>
        <hr></hr>
      </footer>
      
     
    </>
 
  )
}

export default Footer
