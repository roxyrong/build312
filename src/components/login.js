import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar"
import * as styles from "../styles/auth_styles";
import signinImage from "../assets/signin-image.jpg";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import google from "../assets/google.png"


class Login extends React.Component {
    render() {
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <div class="container" style={styles.signupForm}>
                    <div class="row">
                        <div class="col-sm-6 m-0 p-0">
                            <img src={signinImage} alt="signup image" style={styles.signinImage}/>
                            <div style={styles.redirectLink}><a href="/signup" >Create an account</a></div>
                        </div>
                        <div class="col-sm-6 m-0 px-5">
                            <h2 class="form-title" style={styles.signupHeader} >Login</h2>
                            <form class="form-group" id="login" name="login" method="post" action="/login">
                                <div class="form-group">
                                    <label for="email"><i class="zmdi zmdi-email"></i> Email Address</label>
                                    <input name="email" type="email" class="form-control" style={styles.signupInput}/>
                                </div>
                                <div class="form-group">
                                    <label for="password"><i class="zmdi zmdi-lock"></i> Password</label>
                                    <input name="password" type="password" class="form-control" style={styles.signupInput}/>
                                </div>
                                <input class="btn btn-primary" style={styles.submitBtn}type="submit" value="Login" />
                            </form>
                            <div style={styles.socialLogin}>
                                <p>Or login with: </p>
                                <div>
                                    <a href='/auth/linkedin'><button class="btn btn-small" style={styles.linkedinBtn}><i class="fab fa-linkedin"></i> LinkedIn</button></a>
                                    {/* <a href='/auth/google'><button class="btn btn-small" style={styles.socialBtn}><i class="fab fa-google"></i> Google</button></a> */}
                                    <a href='/auth/facebook'><button class="btn btn-small" style={styles.facebookBtn}><i class="fab fa-facebook"></i> Facebook</button></a>
                                </div>                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;