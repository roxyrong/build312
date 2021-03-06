import React from "react";
import * as styles from "../../styles/nav_styles";
import white_logo from '../../assets/white_logo.png';
import MediaQuery from 'react-responsive';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isTop: true,
          hover: {
              'Home':false, 
              'Events':false, 
              'Membership':false, 
              'Contact':false, 
              'Donate':false
            }

        };
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 200;
          if (isTop !== this.state.isTop) {
            this.onScroll(isTop);
          }
        });
    }

    onScroll(isTop) {
        this.setState({ isTop });
    }

    handleHover(idx) {
        var hoverNew = this.state.hover;
        hoverNew[idx] = !hoverNew[idx];
        this.setState({hover: hoverNew});
    }

    getbuttonStyle() {
        var navButton = {};
        var buttons = ["Home", "Events", "Membership", "Contact", "Donate"];
        for (let i = 0; i < 5; i++) {
            navButton[buttons[i]] = this.state.hover[buttons[i]]? styles.navButtonHover :styles.navButton;
        };
        return navButton;
    }

    render() {
        var navStyle = (this.state.isTop) ? null : styles.navbarScroll;
        var navButton = this.getbuttonStyle();
        return (
            <div>
                <MediaQuery query='(max-width: 768px)'>
                <div class="pos-f-t">
                    <div class="collapse" id="navbarToggleExternalContent">
                        <div class="bg-dark p-4">
                        <ul className="navbar-nav ml-auto mr-auto">
                            <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Home")} 
                                onMouseLeave={()=>this.handleHover("Home")} style={navButton["Home"]} href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Events")} 
                                onMouseLeave={()=>this.handleHover("Events")} style={navButton["Events"]} href="/event">Events</a></li>
                            <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Membership")} 
                                onMouseLeave={()=>this.handleHover("Membership")} style={navButton["Membership"]} href="/membership">Membership</a></li>
                            <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Donate")} 
                                onMouseLeave={()=>this.handleHover("Donate")} style={navButton["Donate"]} href="/donate">Donate</a></li>
                            <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Contact")} 
                                onMouseLeave={()=>this.handleHover("Contact")} style={navButton["Contact"]} href="/contact">Contact</a></li>
                        </ul>
                        </div>
                    </div>
                    <nav class="navbar navbar-dark bg-dark">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                    </div>
                </MediaQuery>

                <MediaQuery query='(min-width: 769px)'>
                <div className="container">
                    <nav className="navbar fixed-top navbar-light navbar-expand-md navbar-burger" style={navStyle}> 
                        <div className="container-fluid">
                            <a className="navbar-brand ml-5" href="/"><img src={white_logo} style={styles.whiteLogo} alt="white-logo" /></a>
                            <ul className="navbar-nav ml-auto mr-auto">
                                <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Home")} 
                                    onMouseLeave={()=>this.handleHover("Home")} style={navButton["Home"]} href="/">Home</a></li>
                                <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Events")} 
                                    onMouseLeave={()=>this.handleHover("Events")} style={navButton["Events"]} href="/event">Events</a></li>
                                <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Membership")} 
                                    onMouseLeave={()=>this.handleHover("Membership")} style={navButton["Membership"]} href="/membership">Membership</a></li>
                                <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Donate")} 
                                    onMouseLeave={()=>this.handleHover("Donate")} style={navButton["Donate"]} href="/donate">Donate</a></li>
                                <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Contact")} 
                                    onMouseLeave={()=>this.handleHover("Contact")} style={navButton["Contact"]} href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                </MediaQuery>
            </div>
        );
    }
}

export default NavBar;



