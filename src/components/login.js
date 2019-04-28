import React from "react";
import { connect } from 'react-redux';
import { userActions } from '../actions/user_action';
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar"
import * as styles from "../styles/auth_styles";
import signinImage from "../assets/signin-image.jpg";


class Login extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        console.log('submit event');
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <div class="container" style={styles.signupForm}>
                    <div class="row flex-column-reverse flex-sm-row">
                        <div class="col-sm-6 m-0 p-0">
                            <img src={signinImage} alt="signin" style={styles.signinImage}/>
                            <div style={styles.redirectLink}><a href="/signup" >Create an account</a></div>
                        </div>
                        <div class="col-sm-6 m-0 px-5">
                            <h2 class="form-title" style={styles.signupHeader} >Login</h2>
                            <form class="form-group" id="login" name="login" onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <label for="email"><i class="zmdi zmdi-email"></i> Email Address</label>
                                    <input name="email" type="email" class="form-control" style={styles.signupInput} value={email} onChange={this.handleChange}/>
                                    {submitted && !email &&
                                        <div className="help-block">Email is required</div>
                                    }
                                </div>
                                <div class="form-group">
                                    <label for="password"><i class="zmdi zmdi-lock"></i> Password</label>
                                    <input name="password" type="password" class="form-control" style={styles.signupInput} value={password} onChange={this.handleChange}/>
                                    {submitted && !password &&
                                        <div className="help-block">Password is required</div>
                                    }
                                </div>
                                <input class="btn btn-primary" style={styles.submitBtn} type="submit" value="Login" />
                                {loggingIn &&
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                            </form>
                            {/* <div style={styles.socialLogin}>
                                <p>Or login with: </p>
                                <div>
                                    <a href='/auth/linkedin'><button class="btn btn-small" style={styles.linkedinBtn}><i class="fab fa-linkedin"></i> LinkedIn</button></a>
                                    <a href='/auth/google'><button class="btn btn-small" style={styles.googleBtn}><i class="fab fa-google"></i> Google</button></a>
                                    <a href='/auth/facebook'><button class="btn btn-small" style={styles.facebookBtn}><i class="fab fa-facebook"></i> Facebook</button></a>
                                </div>                             
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(Login); 
