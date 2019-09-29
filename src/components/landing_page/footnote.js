import React from "react";

class Footnote extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div class="container mt-2">
                    <div class='d-lg-flex flex-lg-row'>
                        <div class="col-lg-6"><small>Copyright © 2019 BUILD312 Inc. All Rights Reserved.</small></div>
                        <div class="col-lg-3"><small>Term of Use</small></div>
                        <div class="col-lg-3" href="/privacy-policy"><small>Privacy Policy</small></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footnote

