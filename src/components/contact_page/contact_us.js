import React from "react";
import axios from "axios";
import MediaQuery from 'react-responsive';
import * as styles from '../../styles/contactus_styles';
import bg from '../../assets/contact_us_bg.png';
import mobile_bg from '../../assets/contact_us_mobile.png';

class ContactUs extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            subject: "",
            text: "",
            messageSent: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        if (name === "name") {
            this.setState({name: value});
        } else if (name === "email") {
            this.setState({email: value});
        } else if (name === "subject") {
            this.setState({subject: value});
        } else {
            this.setState({text: value});
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const message = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            text: this.state.text
        }

        axios.post("/contact", {message}).then(res => {
            this.setState({messageSent: res.data});
        }) 
    }

    render() {
        return (
            <div>
                <div class="container mt-3 mt-md-5 pt-5 d-flex justify-content-end">
                    <div class="row justify-content-end">
                        <div class="col-12 col-md-8 mr-5">
                            <div class="mt-md-5 mb-5">
                                <h3>Contact Us</h3>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div class="row">
                                    <div class="col-md-6 mx-0 mb-3 px-3">
                                        <input type="text" class="form-control border-0" name="name" placeholder="Name" onChange={this.handleChange} required=""/>
                                    </div>
                                    <div class="col-md-6 mx-0 mb-3 px-3">
                                        <input type="email" class= "form-control border-0" name="email" placeholder="Email" onChange={this.handleChange} required=""/>
                                    </div>
                                </div>
                            <input type="text" class="form-control mb-3 border-0" name="subject" placeholder="Subject" onChange={this.handleChange} required=""/>
                            <textarea type="text" rows="6" class="form-control mb-4 border-0" name="message" placeholder="Message" onChange={this.handleChange} required=""/>
                                <button type="submit" class="btn btn-lg btn-primary" style={styles.submitBtn}>Submit</button>
                                <div>{this.state.messageSent}</div>
                            </form>
                        </div>
                        <div class="col-12 col-md-3">
                            <div class="mt-5 mb-5">
                                <h3>Follow Us</h3>
                            </div>
                            <div class="container">
                                <div class="mb-1 row">
                                    <i class="fab fa-lg fa-facebook-square"></i> 
                                    <div class="px-2">
                                        <h6>
                                            <a style={styles.linkStyle} href="https://www.facebook.com/Build312/">Facebook</a>
                                        </h6>
                                    </div>
                                </div>
                                <div class="mb-1 row">
                                    <i class="fab fa-lg fa-meetup"></i> 
                                    <div class="px-2">
                                        <h6>
                                            <a style={styles.linkStyle} href="https://www.meetup.com/Chicago-Entrepreneur-Sharing-Platform-Build312/">Meetup</a>
                                        </h6>
                                    </div>
                                </div>
                                <div class="mb-1 row">
                                    <i class="far fa-lg fa-envelope"></i>
                                    <div class="px-2">
                                        <h6>
                                            <a  style={styles.linkStyle}href="mailto:info@build312.co">Email</a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MediaQuery query='(min-width: 769px)'>
                    <img src={bg} alt='contact us bg' style={styles.bg}/>
                </MediaQuery>
                <MediaQuery query='(max-width: 768px)'>
                    <img src={mobile_bg} alt="contact us mobile bg" style={styles.mobile_bg}/>
                </MediaQuery>
            </div>
        )
    }
}
export default ContactUs;

