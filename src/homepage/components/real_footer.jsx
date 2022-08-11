import React from 'react';
import './real_footer.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Real_footer() {
  return (
    <div className="footerContainer">
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/LuminousLiquorCarstairs/' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f"  />
          </a>
          
          <a href='https://www.google.com/maps/uv?pb=!1s0x5373ffdcb7f7ad39%3A0xf5e7800785b9bd98!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPLDcynRECPeKW_aHOqsrNibEJCQBOu4BTm8lqK%3Dw426-h320-k-no!5sluminous%20liquor%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipPLDcynRECPeKW_aHOqsrNibEJCQBOu4BTm8lqK&hl=en&sa=X&ved=2ahUKEwjR58mR_7f5AhV7HjQIHUz6BksQoip6BAhSEAM' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon className="me-3" />
                Luminous Liquor
              </h6>
              <p>
                We have the best collection of liquor drinks.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/' className='text-reset'>
                 Homepage
                </a>
              </p>
              <p>
                <a href='/questions' className='text-reset'>
                  FAQ
                </a>
              </p>
              <p>
                <a href='/request' className='text-reset'>
                  Feedback
                </a>
              </p>
              <p>
                <a href='/about' className='text-reset'>
                  About Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                507 10th Ave Bay A, Carstairs, AB T0M 0N0
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                luminousliquorstore@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> (825) 733-0362
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
       
          Luminous Liquor
        
      </div>
    </MDBFooter>
    </div>
  );
}