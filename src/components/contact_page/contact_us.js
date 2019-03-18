import React from "react";
import * as styles from '../../styles/contactus_styles';
import bg from '../../assets/contact_us_bg.png';

class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <div class="container d-flex justify-content-end" style={styles.contactForm}>
                    <div class="col-md-6 mr-5">
                        <div class="mb-5">
                            <h3>Contact Us</h3>
                        </div>
                        <form>
                            <div class="row">
                                <div class="col-md-6 mx-0 mb-3 px-3">
                                    <input type="text" class="form-control border-0" name="name" placeholder="Name" required=""/>
                                </div>
                                <div class="col-md-6 mx-0 mb-3 px-3">
                                    <input type="email" class= "form-control border-0" name="email" placeholder="Email" required=""/>
                                </div>
                            </div>
                           <input type="text" class="form-control mb-3 border-0" name="subject" placeholder="Subject" required=""/>
                           <textarea type="text" rows="6" class="form-control mb-4 border-0" name="message" placeholder="Message" required=""/>
                            <button type="submit" class="btn btn-lg btn-primary" style={styles.submitBtn}>Submit</button>
                        </form>

                    </div>
                </div>
                <img src={bg} alt='donate_bg' style={styles.bg}/>
            </div>
        )
    }
}
export default ContactUs;

