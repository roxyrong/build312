import React from "react";
import axios from 'axios';
import * as styles from "../../styles/landing_styles";

class Subscribe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubscribe = this.handleSubscribe.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }
 
    handleSubscribe(event) {
        event.preventDefault();
        const { firstname, lastname, email} = this.state;

        if (firstname && lastname && email) {
            axios.get('/mailchimp-member-in-list', {
                params: {email: email}
            })
            .then(res => {
                if (res.data.status !== 200) {
                    alert('subscribed successful.');
                } else {
                    axios.get('/mailchimp-add-subscriber', {
                        params:{
                            email: email,
                            firstname: firstname,
                            lastname: lastname
                        }
                    }).then(res => {
                        if (res.status === 200 & res.data === 'ok')
                        alert('subscribed successful.');
                    })
                }
            })
        }
    }

    render() {
        return (
            <div class='bg-light'>
                <div class="container">
                    <div class="d-lg-flex flex-lg-row align-items-center">
                        <div class="col-lg-3 mx-0 my-3">
                            <h5>Join our Community</h5>
                            <small>Get the latest events, updates and more.</small>
                        </div>
                        <form class="form-inline col-ld-9 mx-0" onSubmit={this.handleSubscribe}>
                            <input type="text" class="bg-light form-control col-lg-2 col-md-6 m-2" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleChange}/>
                            <input type="text" class="bg-light form-control col-lg-2 col-md-6 m-2" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleChange}/>
                            <input type="text" class="bg-light form-control col-lg-4 col-md-6 m-2" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                            <button type="submit" class="btn btn-large btn-primary col-lg-2 col-md-6 m-2" style={styles.subscribeBtn} name="subscribe">Subscribe</button>
                        </form>
                        </div>
                </div>
            </div>
        );
    }
}

export default Subscribe

