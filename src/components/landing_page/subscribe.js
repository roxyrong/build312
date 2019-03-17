import React from "react";
import * as styles from "../../styles/landing_styles";

class Subscribe extends React.Component {
    render() {
        return (
            <div class='bg-light'>
                <div class="container">
                    <div class="d-lg-flex flex-lg-row align-items-center">
                        <div class="col-lg-3 mx-0 my-3">
                            <h5>Join our Community</h5>
                            <small>Get the latest events, updates and more.</small>
                        </div>
                        <form class="form-inline col-ld-9 mx-0">
                            <input type="text" class="bg-light form-control col-lg-2 col-md-6 m-2" name="fname" placeholder="First Name" />
                            <input type="text" class="bg-light form-control col-lg-2 col-md-6 m-2" name="lname" placeholder="Last Name" />
                            <input type="text" class="bg-light form-control col-lg-4 col-md-6 m-2" name="email" placeholder="Email" />
                            <button type="submit" class="btn btn-large btn-primary col-lg-2 col-md-6 m-2" style={styles.subscribeBtn} name="subscribe" >Subscribe</button>
                        </form>
                        </div>
                </div>
            </div>
        );
    }
}

export default Subscribe

