import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar"
import * as styles from "../styles/auth_styles";
import signupImage from '../assets/signup-image.jpg'


class Signup extends React.Component {
    render() {
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <div class="container" style={styles.signupForm}>
                    <div class="row">
                        <div class="col-sm-6 m-0 px-5">
                            <h2 class="form-title" style={styles.signupHeader} >Sign up</h2>
                            <form class="form-group" id="signup" name="signup" method="post" action="/signup">
                                <div class="row">
                                    <div class="form-group col-lg-6">
                                        <label for="firstname">First Name</label>
                                        <input name="firstname" type="text" class="form-control" style={styles.signupInput}/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label for="lastname">Last Name</label>
                                        <input name="lastname" type="text" class="form-control" style={styles.signupInput}/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="email"><i class="zmdi zmdi-email"></i> Email</label>
                                    <input name="email" type="email" class="form-control" style={styles.signupInput}/>
                                </div>
                                <div class="form-group">
                                    <label for="password"><i class="zmdi zmdi-lock"></i> Password</label>
                                    <input name="password" type="password" class="form-control" style={styles.signupInput}/>
                                </div>
                                <input class="btn btn-primary" style={styles.submitBtn}type="submit" value="Register" />
                            </form>
                        </div>
                        <div class="col-sm-6 m-0 p-0">
                            <img src={signupImage} alt="signup image" style={styles.signupImage}/>
                            <div style={styles.redirectLink}><a href="/login" >I am already a member</a></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Signup;