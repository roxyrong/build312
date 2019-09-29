import React from "react";
import * as styles from "../../styles/privacy_styles";

class Footnote extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div class="container mt-2">
                    <div class='d-lg-flex flex-lg-row align-items-center justify-content-center'>
                        <div class="col-lg-6"><small>Copyright © 2019 BUILD312 Inc. All Rights Reserved.</small></div>
                        <div class="col-lg-3"><small><a href="/term-of-use" style={styles.privacyLink}>Term of Use</a></small></div>
                        <div class="col-lg-3"><small><a href="/privacy-policy" style={styles.privacyLink}>Privacy Policy</a></small></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footnote

