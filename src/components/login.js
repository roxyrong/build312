import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar"
import * as styles from "../styles/auth_styles";


class Login extends React.Component {
    render() {
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <div style={styles.signupForm}>
                    <form id="signin" name="signin" method="post" action="signin">
                        <label for="email">Email Address</label>
                        <input class="text" name="email" type="text" />
                        <label for="password">Password</label>
                        <input name="password" type="password" />
                        <input class="btn" type="submit" value="Sign In" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;