import React from "react";
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar";
import ContactUs from "../components/contact_page/contact_us";


class ContactPage extends React.Component {
    render() {
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <ContactUs />
            </div>
        );
    }
}

export default ContactPage;
