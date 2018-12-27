import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar"
import * as styles from "../styles/auth_styles";


class Signup extends React.Component {
    render() {
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <div style={styles.signupForm}>
                    <form id="signup" name="signup" method="post" action="/signup">
                        <label for="email">Email Address</label>
                        <input class="text" name="email" type="email" />
                        <label for="firstname">Firstname</label>
                        <input name="firstname" type="text" />
                        <label for="lastname">Lastname</label>
                        <input name="lastname" type="text" />
                        <label for="password">Password</label>
                        <input name="password" type="password" />
                        <input class="btn" type="submit" value="Sign Up" />
                    </form>
                </div>

            </div>
        );
    }
}

export default Signup;