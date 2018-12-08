import React from "react";
import * as styles from "../../styles/landing_styles";
import white_logo from '../../assets/white_logo.png';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isTop: true,
          hover: {
              'Home':false, 
              'Events':false, 
              'Membership':false, 
              'Jobs':false, 
              'Blog':false,
              'Signup':false, 
              'Login':false
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
        var buttons = ["Home", "Events", "Membership", "Jobs", "Blog", "Signup", "Login"];
        for (let i = 0; i < 7; i++) {
            navButton[buttons[i]] = this.state.hover[buttons[i]]? styles.navButtonHover :styles.navButton;
        };
        return navButton;
    }

    render() {
        var navStyle = (this.state.isTop) ? null : styles.navbarScroll;
        var navButton = this.getbuttonStyle();
        return (
            <div className="container">
                <nav className="navbar fixed-top navbar-light navbar-expand-md navbar-burger" style={navStyle}> 
                <div className="container-fluid">
                    <a className="navbar-brand ml-5" href="/"><img src={white_logo} style={styles.whiteLogo} alt="white-logo" /></a>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-auto">
                        <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Home")} 
                            onMouseLeave={()=>this.handleHover("Home")} style={navButton["Home"]} href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Events")} 
                            onMouseLeave={()=>this.handleHover("Events")} style={navButton["Events"]} href="/event">Events</a></li>
                        <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Membership")} 
                            onMouseLeave={()=>this.handleHover("Membership")} style={navButton["Membership"]} href="/">Membership</a></li>
                        <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Jobs")} 
                            onMouseLeave={()=>this.handleHover("Jobs")} style={navButton["Jobs"]} href="/">Jobs</a></li>
                        <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Blog")} 
                            onMouseLeave={()=>this.handleHover("Blog")} style={navButton["Blog"]} href="/">Blog</a></li>
                    </ul>
                    <ul className="navbar-nav pull-right">
                        <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Signup")} 
                            onMouseLeave={()=>this.handleHover("Signup")} style={navButton["Signup"]} href="/">Signup</a></li>
                        <li className="nav-item"><a className="nav-link" onMouseEnter={()=>this.handleHover("Login")} 
                            onMouseLeave={()=>this.handleHover("Login")} style={navButton["Login"]} href="/">Login</a></li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;


