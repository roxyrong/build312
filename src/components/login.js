import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar"
import * as styles from "../styles/auth_styles";
import signinImage from "../assets/signin-image.jpg"


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
                            <div>Or login with <i class="zmdi zmdi-facebook-box"></i> <i class="zmdi zmdi-linkedin"></i> <i class="zmdi zmdi-google"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;