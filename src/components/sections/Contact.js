import React, { Component } from 'react'
import ContactStyle from '../styles/ContactStyle'



export default class contact extends Component {
    render() {
        return (
            <ContactStyle>
                <div className="TriangleRed"/>
                <h3>contact with me</h3>
                <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" method="post" action="https://formspree.io/eug.zolotarenko@gmail.com">
                  <fieldset id="fs-frm-inputs">
                    <div>
                      <div>
                        <label htmlFor="full-name">name</label>
                        <input type="text" name="name" id="full-name" placeholder="your name" required="required"/>
                      </div>
                      <div>
                        <label htmlFor="email-address">email</label>
                        <input type="email" name="_replyto" id="email-address" placeholder="email@domain.com" required="required"/>
                      </div>
                    </div>
                    <div>
                       <div className="textarea-wrapper">
                          <label htmlFor="message">additional details</label>
                          <textarea rows="5" name="message" id="message" placeholder="write something" required="required"></textarea>
                       </div>
                       <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                       <input className="submit-form" type="submit" value=""/>
                    </div>
                  </fieldset>
                </form>
                <h5>or find me on</h5>
                <div className="social">
                  <a target="_blank" href="https://github.com/eugeneZolotarenko" rel="noopener noreferrer">GitHub</a>
                  <a target="_blank" href="https://www.linkedin.com/in/eugenezolotarenko/" rel="noopener noreferrer">LinkedIn</a>
                  <a target="_blank" href="https://www.facebook.com/profile.php?id=100014069172679" rel="noopener noreferrer">Facebook</a>
                </div>
                <div className="OrangeWave"/>
            </ContactStyle>
        )
    }
}
