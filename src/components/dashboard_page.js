import React from "react";
import { connect } from 'react-redux';
import * as appStyles from "../styles/app_styles";
import NavBar from "./navbar";
import * as styles from '../styles/dashboard_styles';


class DashboardPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;
        console.log(user);
        return (
            <div className="App" style={appStyles.appStyle}>
                <NavBar />
                <div class="container" style={styles.dashboardContainer}>
                    <div class="row">
                        <div class="col-lg-8 order-lg-2">
                            {/* tabs */}
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a href="" data-target="#profile" data-toggle="tab" class="nav-link active">Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a href="" data-target="#membership" data-toggle="tab" class="nav-link">Membership</a>
                                </li>
                                <li class="nav-item">
                                    <a href="" data-target="#event" data-toggle="tab" class="nav-link">Events</a>
                                </li>
                                <li class="nav-item">
                                    <a href="" data-target="#settings" data-toggle="tab" class="nav-link">Settings</a>
                                </li>
                            </ul>
                            <div class="tab-content py-4">
                            {/* profile tab */}
                                <div class="tab-pane active" id="profile">
                                    <h5 class="mb-3">User Profile</h5>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h6>Name</h6>
                                            <p>{user.firstname + " " + user.lastname}</p>
                                            <h6>Email</h6>
                                            <p>{user.email}</p>
                                            <h6>Title</h6>
                                            <p>Trader @ PEAK6 Investments</p>
                                        </div>
                                        <div class="col-md-6">
                                            <h5>Membership Status</h5>
                                            <h5><span class="badge badge-info badge-pill">Premium Member</span></h5>
                                            <hr />
                                            <p>Joined since 04/01/2019</p>
                                        </div>
                                        <div class="col-md-12">
                                            <h5 class="mt-2"><span class="fa fa-clock-o ion-clock float-right"></span> Recent Activity</h5>
                                            <table class="table table-sm table-hover table-striped">
                                                <tbody>                                    
                                                    <tr>
                                                        <td>
                                                            <strong>Roxy</strong> updated user profile.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Roxy</strong> went to <strong>Women In FinTech</strong> event.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="membership">  
                                    <h5 class="mb-3">Membership Detail</h5>
                                    <h6>Type</h6>
                                    <p>Premium Membership</p>
                                    <h6>Joined</h6>
                                    <p>Apr 1st, 2019</p>
                                    <h6>Expires</h6>
                                    <p>Apr 1st, 2020</p>
                                    <h6>Renewal</h6>
                                    <p>Mar 20th, 2020</p>
                                </div>
                                <div class="tab-pane" id="event">
                                    <table class="table table-hover table-striped">
                                        <tbody>                                    
                                            <tr>
                                                <td>
                                                <span class="float-right font-weight-bold">May 16th, 2019</span> Women in FinTech
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <span class="float-right font-weight-bold">Apr 5th, 2019</span> Build312 2nd Year Anniversary
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                <span class="float-right font-weight-bold">Jan 15th, 2019</span> SoGal x Build312 Wellness
                                                </td>
                                            </tr>
                                        </tbody> 
                                    </table>
                                </div>
                                <div class="tab-pane" id="settings">
                                    <form role="form">
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label">First name</label>
                                            <div class="col-lg-9">
                                                <input class="form-control" type="text" value="Roxy"/>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label">Last name</label>
                                            <div class="col-lg-9">
                                                <input class="form-control" type="text" value="Rong"/>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label">Company</label>
                                            <div class="col-lg-9">
                                                <input class="form-control" type="text" value="PEAK6"/>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label">Website</label>
                                            <div class="col-lg-9">
                                                <input class="form-control" type="url" value=""/>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label">Address</label>
                                            <div class="col-lg-9">
                                                <input class="form-control" type="text" value="" placeholder="Street"/>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label"></label>
                                            <div class="col-lg-6">
                                                <input class="form-control" type="text" value="" placeholder="City"/>
                                            </div>
                                            <div class="col-lg-3">
                                                <input class="form-control" type="text" value="" placeholder="State"/>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label">Email</label>
                                            <div class="col-lg-9">
                                                <input class="form-control" type="email" value="rongxinyun2010@gmail.com"/>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label">Password</label>
                                            <div class="col-lg-9">
                                                <input class="form-control" type="password" value="11111122333"/>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label">Confirm password</label>
                                            <div class="col-lg-9">
                                                <input class="form-control" type="password" value="11111122333"/>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-lg-3 col-form-label form-control-label"></label>
                                            <div class="col-lg-9">
                                                <input type="reset" class="btn btn-secondary" value="Cancel"/>
                                                <input type="button" class="btn btn-primary" value="Save Changes"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> 
                        <div class="col-lg-4 order-lg-1 text-center">
                                <img src="//placehold.it/150" class="mx-auto img-fluid img-circle d-block" alt="avatar" />
                                <h6 class="mt-2">Upload a different photo</h6>
                                <label class="custom-file">
                                    <input type="file" id="file" class="custom-file-input"/>
                                    <span class="btn custom-file-control">Choose file</span>
                                </label>
                                <div>
                                    <button class="btn btn-info">Membership Directory</button>
                                </div>
                                <div>
                                    <button class="btn btn-info">Volunteer Opportunity</button>
                                </div>
                                <div>
                                    <button class="btn btn-info">Job Board</button>
                                </div>   
                        </div>
                </div>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

export default connect(mapStateToProps)(DashboardPage);