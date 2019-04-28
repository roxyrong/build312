import React from "react";
import { connect } from 'react-redux';
import { userActions } from '../actions/user_action';
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar"
import * as styles from "../styles/auth_styles";
import signupImage from '../assets/signup-image.jpg'


class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        console.log(name, value);
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstname && user.lastname && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;

        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <div class="container" style={styles.signupForm}>
                    <div class="row">
                        <div class="col-sm-6 m-0 px-5">
                            <h2 class="form-title" style={styles.signupHeader} >Sign up</h2>
                            <form class="form-group" id="signup" name="signup" onSubmit={this.handleSubmit}>
                                <div class="row">
                                    <div class="form-group col-lg-6">
                                        <label for="firstname">First Name</label>
                                        <input name="firstname" type="text" class="form-control" style={styles.signupInput} value={user.firstname} onChange={this.handleChange}/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label for="lastname">Last Name</label>
                                        <input name="lastname" type="text" class="form-control" style={styles.signupInput} value={user.lastname} onChange={this.handleChange}/>
                                   </div>
                                   {submitted && !user.firstname &&
                                        <div className="help-block">First name is required</div>
                                    }
                                   {submitted && !user.lastname &&
                                        <div className="help-block">Last name is required</div>
                                    }
                                </div>
                                <div class="form-group">
                                    <label for="email"><i class="zmdi zmdi-email"></i> Email</label>
                                    <input name="email" type="email" class="form-control" style={styles.signupInput} value={user.email} onChange={this.handleChange}/>
                                    {submitted && !user.email &&
                                        <div className="help-block">Email is required</div>
                                    }
                                </div>
                                <div class="form-group">
                                    <label for="password"><i class="zmdi zmdi-lock"></i> Password</label>
                                    <input name="password" type="password" class="form-control" style={styles.signupInput} value={user.password} onChange={this.handleChange}/>
                                    {submitted && !user.password &&
                                        <div className="help-block">Password is required</div>
                                    }
                                </div>
                                <input class="btn btn-primary" style={styles.submitBtn}type="submit" value="Register" />
                                {registering && 
                                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                }
                            </form>
                        </div>
                        <div class="col-sm-6 m-0 p-0">
                            <img src={signupImage} alt="signup" style={styles.signupImage}/>
                            <div style={styles.redirectLink}><a href="/login" >I am already a member</a></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

export default connect(mapStateToProps)(Signup);