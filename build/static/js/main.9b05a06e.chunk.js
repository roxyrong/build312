(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),l=a(6),o=a(4),i=a(5),c=a(0),s=a.n(c),m=a(14),u=a.n(m),d=a(124),p=a(125),v=a(123),h={fontFamily:"Helvetica"},g=a(10),E={width:"50px"},b={color:"white",fontSize:"18px",marginLeft:"20px",marginRight:"20px",textAlign:"right"},f={color:"#1DCB8B",fontSize:"18px",marginLeft:"20px",marginRight:"20px",textAlign:"right"},y={backgroundColor:"#000000",opacity:"0.8",height:"55px"},x=a(17),N=a.n(x),k=a(15),O=a.n(k),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={isTop:!0,hover:{Home:!1,Events:!1,Membership:!1,Jobs:!1,Blog:!1,Signup:!1,Login:!1}},a.onScroll=a.onScroll.bind(Object(g.a)(Object(g.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("scroll",function(){var t=window.scrollY<200;t!==e.state.isTop&&e.onScroll(t)})}},{key:"onScroll",value:function(e){this.setState({isTop:e})}},{key:"handleHover",value:function(e){var t=this.state.hover;t[e]=!t[e],this.setState({hover:t})}},{key:"getbuttonStyle",value:function(){for(var e={},t=["Home","Events","Membership","Jobs","Blog","Signup","Login"],a=0;a<7;a++)e[t[a]]=this.state.hover[t[a]]?f:b;return e}},{key:"render",value:function(){var e=this,t=this.state.isTop?null:y,a=this.getbuttonStyle();return s.a.createElement("div",null,s.a.createElement(O.a,{query:"(max-width: 768px)"},s.a.createElement("div",{class:"pos-f-t"},s.a.createElement("div",{class:"collapse",id:"navbarToggleExternalContent"},s.a.createElement("div",{class:"bg-dark p-4"},s.a.createElement("ul",{className:"navbar-nav ml-auto mr-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Home")},onMouseLeave:function(){return e.handleHover("Home")},style:a.Home,href:"/"},"Home")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Events")},onMouseLeave:function(){return e.handleHover("Events")},style:a.Events,href:"/event"},"Events")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Membership")},onMouseLeave:function(){return e.handleHover("Membership")},style:a.Membership,href:"/membership"},"Membership")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Jobs")},onMouseLeave:function(){return e.handleHover("Jobs")},style:a.Jobs,href:"/"},"Jobs")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Blog")},onMouseLeave:function(){return e.handleHover("Blog")},style:a.Blog,href:"/"},"Blog"))),s.a.createElement("ul",{className:"navbar-nav pull-right"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Signup")},onMouseLeave:function(){return e.handleHover("Signup")},style:a.Signup,href:"/signup"},"Signup")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Login")},onMouseLeave:function(){return e.handleHover("Login")},style:a.Login,href:"/login"},"Login"))))),s.a.createElement("nav",{class:"navbar navbar-dark bg-dark"},s.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{class:"navbar-toggler-icon"}))))),s.a.createElement(O.a,{query:"(min-width: 769px)"},s.a.createElement("div",{className:"container"},s.a.createElement("nav",{className:"navbar fixed-top navbar-light navbar-expand-md navbar-burger",style:t},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("a",{className:"navbar-brand ml-5",href:"/"},s.a.createElement("img",{src:N.a,style:E,alt:"white-logo"})),s.a.createElement("ul",{className:"navbar-nav ml-auto mr-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Home")},onMouseLeave:function(){return e.handleHover("Home")},style:a.Home,href:"/"},"Home")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Events")},onMouseLeave:function(){return e.handleHover("Events")},style:a.Events,href:"/event"},"Events")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Membership")},onMouseLeave:function(){return e.handleHover("Membership")},style:a.Membership,href:"/membership"},"Membership")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Jobs")},onMouseLeave:function(){return e.handleHover("Jobs")},style:a.Jobs,href:"/"},"Jobs")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Blog")},onMouseLeave:function(){return e.handleHover("Blog")},style:a.Blog,href:"/"},"Blog"))),s.a.createElement("ul",{className:"navbar-nav pull-right"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Signup")},onMouseLeave:function(){return e.handleHover("Signup")},style:a.Signup,href:"/signup"},"Signup")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Login")},onMouseLeave:function(){return e.handleHover("Login")},style:a.Login,href:"/login"},"Login"))))))))}}]),t}(s.a.Component),M={width:"100%",filter:"brightness(60%)",zIndex:"-1",position:"relative",minHeight:"400px"},H={textAlign:"center",marginTop:"-55%",color:"#1DCB8B",textShadow:"2px 2px #000000",letterSpacing:"25px"},w={marginTop:"2%",textAlign:"center",color:"white",fontSize:"40px",letterSpacing:"5px"},C={marginTop:"40%"},B={marginTop:"50px"},L={fontWeight:"200"},S={width:"90%"},T={marginTop:"100px",marginBottom:"100px"},D={backgroundColor:"white",height:"600px"},q={backgroundColor:"black",height:"600px"},A={backgroundColor:"#B8ECD6",height:"600px"},J={marginTop:"100px"},F={color:"#1DCB8B",fontWeight:"bold",marginTop:"50px",paddingLeft:"30%",paddingRight:"30%"},I={marginTop:"10px",paddingLeft:"30%",paddingRight:"30%"},R={width:"40%",marginLeft:"30%",marginRight:"30%",backgroundColor:"#1DCB8B",borderColor:"#1DCB8B",marginTop:"50px"},z={backgroundColor:"white",width:"50px",height:"10px",margin:"100px auto 0 auto"},W={color:"#1DCB8B",textAlign:"center",fontWeight:"bold",marginTop:"100px"},_={color:"white",textAlign:"center",fontWeight:"bold",marginTop:"50px"},P={width:"40%",marginLeft:"30%",marginRight:"30%",color:"white",backgroundColor:"black",marginTop:"20px"},G={width:"100%",padding:"5% 20% 0 20%"},V={marginTop:"100px"},U={padding:"2% 20%",fontWeight:"200"},Y=a(57),$=a.n(Y),Z=a(74),K=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("img",{src:$.a,style:M,alt:"background-pic"}),s.a.createElement("div",{className:"container"},s.a.createElement(Z,{compressor:1.5},s.a.createElement("h1",{style:H},"BUILD312")),s.a.createElement(Z,{compressor:3},s.a.createElement("p",{style:w},"Build \xb7 Connect \xb7 Grow"))))}}]),t}(s.a.Component),Q=a(58),X=a.n(Q),ee=a(59),te=a.n(ee),ae=a(60),ne=a.n(ae),re=a(61),le=(a(96),function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container",style:C},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h3",null," About Us"),s.a.createElement("div",{style:L},"\u201c312\u201d is the telephone area code for downtown Chicago. Founded in 2017, Build312 is a Chicago-based community that aims to bring together young entrepreneurs, interesting perspectives and innovative ideas. Through various online and offline activities and events, we exist to connect entrepreneurs with resources, investors, and each other. Join the movement to build yourself, build your ideas and build a better future."),s.a.createElement("h3",{style:B},"Our Mission"),s.a.createElement("ul",{style:L},s.a.createElement("li",null,"To provide accessible funding and advisory services to early stage startups"),s.a.createElement("li",null,"To build influential online media platform for learning and knowledge sharing"),s.a.createElement("li",null,"To create a close-knitted community for young Entrepreneurs in the Midwest"),s.a.createElement("li",null,"To connect the Midwest with the other global entrepreneurial communities"))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("img",{src:X.a,style:S,alt:"black-logo"}))),s.a.createElement("div",{style:T},s.a.createElement(re.Player,{playsInline:!0,poster:te.a,src:ne.a})))}}]),t}(s.a.Component)),oe=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4",style:D},s.a.createElement("h4",{className:"text-center",style:J},"SoGal Event"),s.a.createElement("p",{style:F},"Time"),s.a.createElement("p",{style:I},"January"),s.a.createElement("p",{style:F},"Location"),s.a.createElement("p",{style:I},"TBD"),s.a.createElement("button",{type:"button",className:"btn btn-lg btn-primary",style:R},"RSVP")),s.a.createElement("div",{className:"col-md-4",style:q},s.a.createElement("div",{style:z}),s.a.createElement("h1",{style:W},"FORUMS"),s.a.createElement("h1",{style:_},"& EVENTS "),s.a.createElement("div",{style:z}),s.a.createElement("button",{type:"button",className:"btn",style:P},"SEE ALL >")),s.a.createElement("div",{className:"col-md-4",style:A},s.a.createElement("h4",{className:"text-center",style:J},"How Am I Building This - Food"),s.a.createElement("p",{style:F},"Time"),s.a.createElement("p",{style:I},"February"),s.a.createElement("p",{style:F},"Location"),s.a.createElement("p",{style:I},"CoGen Coworking"),s.a.createElement("button",{type:"button",className:"bt btn-lg btn-primary",style:R},"RSVP")))}}]),t}(s.a.Component),ie=a(63),ce=a.n(ie),se=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("h3",{style:V},"Team"),s.a.createElement("img",{src:ce.a,style:G,alt:"team-pic"}),s.a.createElement("p",{style:U},"We are a group of people passionate about entrepreneurship and are committed to help create knowledge sharing and innovation in Chicago."))}}]),t}(s.a.Component),me=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App",style:h},s.a.createElement(j,null),s.a.createElement(K,null),s.a.createElement(le,null),s.a.createElement(oe,null),s.a.createElement(se,null))}}]),t}(s.a.Component),ue=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={hover:{Home:!1,Events:!1,Membership:!1,Jobs:!1,Blog:!1,Signup:!1,Login:!1}},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"handleHover",value:function(e){var t=this.state.hover;t[e]=!t[e],this.setState({hover:t})}},{key:"getbuttonStyle",value:function(){for(var e={},t=["Home","Events","Membership","Jobs","Blog","Signup","Login"],a=0;a<7;a++)e[t[a]]=this.state.hover[t[a]]?f:b;return e}},{key:"render",value:function(){var e=this,t=this.getbuttonStyle();return s.a.createElement("div",null,s.a.createElement(O.a,{query:"(max-width: 768px)"},s.a.createElement("div",{class:"pos-f-t"},s.a.createElement("div",{class:"collapse",id:"navbarToggleExternalContent"},s.a.createElement("div",{class:"bg-dark p-4"},s.a.createElement("ul",{className:"navbar-nav ml-auto mr-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Home")},onMouseLeave:function(){return e.handleHover("Home")},style:t.Home,href:"/"},"Home")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Events")},onMouseLeave:function(){return e.handleHover("Events")},style:t.Events,href:"/event"},"Events")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Membership")},onMouseLeave:function(){return e.handleHover("Membership")},style:t.Membership,href:"/membership"},"Membership")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Jobs")},onMouseLeave:function(){return e.handleHover("Jobs")},style:t.Jobs,href:"/"},"Jobs")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Blog")},onMouseLeave:function(){return e.handleHover("Blog")},style:t.Blog,href:"/"},"Blog"))),s.a.createElement("ul",{className:"navbar-nav pull-right"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Signup")},onMouseLeave:function(){return e.handleHover("Signup")},style:t.Signup,href:"/signup"},"Signup")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Login")},onMouseLeave:function(){return e.handleHover("Login")},style:t.Login,href:"/login"},"Login"))))),s.a.createElement("nav",{class:"navbar navbar-dark bg-dark"},s.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{class:"navbar-toggler-icon"}))))),s.a.createElement(O.a,{query:"(min-width: 769px)"},s.a.createElement("div",{className:"container"},s.a.createElement("nav",{className:"navbar fixed-top navbar-light navbar-expand-md navbar-burger",style:y},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("a",{className:"navbar-brand ml-5",href:"/"},s.a.createElement("img",{src:N.a,style:E,alt:"white-logo"})),s.a.createElement("ul",{className:"navbar-nav ml-auto mr-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Home")},onMouseLeave:function(){return e.handleHover("Home")},style:t.Home,href:"/"},"Home")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Events")},onMouseLeave:function(){return e.handleHover("Events")},style:t.Events,href:"/event"},"Events")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Membership")},onMouseLeave:function(){return e.handleHover("Membership")},style:t.Membership,href:"/membership"},"Membership")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Jobs")},onMouseLeave:function(){return e.handleHover("Jobs")},style:t.Jobs,href:"/"},"Jobs")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Blog")},onMouseLeave:function(){return e.handleHover("Blog")},style:t.Blog,href:"/"},"Blog"))),s.a.createElement("ul",{className:"navbar-nav pull-right"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Signup")},onMouseLeave:function(){return e.handleHover("Signup")},style:t.Signup,href:"/signup"},"Signup")),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onMouseEnter:function(){return e.handleHover("Login")},onMouseLeave:function(){return e.handleHover("Login")},style:t.Login,href:"/login"},"Login"))))))))}}]),t}(s.a.Component),de={marginTop:"125px"},pe={marginTop:"50px"},ve={marginBottom:"50px"},he={display:"inline"},ge={display:"inline",float:"right",backgroundColor:"#1DCB8B",borderColor:"#1DCB8B"},Ee=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={eventbriteData:null},a.geteventbriteData=a.getEventbriteData.bind(Object(g.a)(Object(g.a)(a))),a.geteventbriteData(),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"getEventbriteData",value:function(){fetch("/event-data-url").then(function(e){return e.text()}.bind(this)).then(function(e){return fetch(e)}.bind(this)).then(function(e){return e.json()}.bind(this)).then(function(e){this.setState({eventbriteData:e})}.bind(this))}},{key:"render",value:function(){var e=[];null!=this.state.eventbriteData&&(this.state.eventbriteData.events.reverse().map(function(t,a){var n=t.start.local.indexOf("T"),r=t.start.local.substring(0,n);e.push(s.a.createElement("div",{class:"col-lg-4 col-md-6",style:ve},s.a.createElement("div",{class:"card shadow-sm"},s.a.createElement("img",{class:"card-img-top",src:t.logo.url,alt:"Card image cap"}),s.a.createElement("div",{class:"card-body"},s.a.createElement("h5",{class:"card-title"},t.name.text),s.a.createElement("p",{class:"card-text",style:he},s.a.createElement("small",{class:"text-muted"},r)),s.a.createElement("button",{type:"button",class:"btn btn-sm btn-primary",style:ge},"View More")))))}),console.log(e));return s.a.createElement("div",{class:"container",style:de},s.a.createElement("h3",null,"Past Events"),s.a.createElement("div",{class:"card-deck",style:pe},e))}}]),t}(s.a.Component),be=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App",style:h},s.a.createElement(ue,null),s.a.createElement(Ee,null))}}]),t}(s.a.Component),fe={marginTop:"150px",width:"70%"},ye={marginTop:"50px",marginLeft:"25px"},xe={fontWeight:"bold",marginBottom:"50px"},Ne={marginTop:"50px",width:"160px",backgroundColor:"#212529",borderColor:"#212529",letterSpacing:"1px",boxShadow:"#212529"},ke={marginTop:"50px",marginLeft:"25%",color:"#1DCB8B",textDecorationLine:"underline"},Oe={minWidth:"135px"},je={marginTop:"75px",marginLeft:"15%",height:"300px"},Me={marginTop:"75px"},He={width:"100px",marginRight:"10px",color:"#2E77AF",textAlign:"left",paddingLeft:"0",paddingRight:"0"},we={width:"100px",marginRight:"10px",color:"#CE5542",textAlign:"left",paddingLeft:"0",paddingRight:"0"},Ce={width:"100px",marginRight:"10px",color:"#3B5994",textAlign:"left",paddingLeft:"0",paddingRight:"0"},Be=a(64),Le=a.n(Be),Se=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App",style:h},s.a.createElement(ue,null),s.a.createElement("div",{class:"container",style:fe},s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-sm-6 m-0 px-5"},s.a.createElement("h2",{class:"form-title",style:xe},"Sign up"),s.a.createElement("form",{class:"form-group",id:"signup",name:"signup",method:"post",action:"/signup"},s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"form-group col-lg-6"},s.a.createElement("label",{for:"firstname"},"First Name"),s.a.createElement("input",{name:"firstname",type:"text",class:"form-control",style:Oe})),s.a.createElement("div",{class:"form-group col-lg-6"},s.a.createElement("label",{for:"lastname"},"Last Name"),s.a.createElement("input",{name:"lastname",type:"text",class:"form-control",style:Oe}))),s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"email"},s.a.createElement("i",{class:"zmdi zmdi-email"})," Email"),s.a.createElement("input",{name:"email",type:"email",class:"form-control",style:Oe})),s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"password"},s.a.createElement("i",{class:"zmdi zmdi-lock"})," Password"),s.a.createElement("input",{name:"password",type:"password",class:"form-control",style:Oe})),s.a.createElement("input",{class:"btn btn-primary",style:Ne,type:"submit",value:"Register"}))),s.a.createElement("div",{class:"col-sm-6 m-0 p-0"},s.a.createElement("img",{src:Le.a,alt:"signup image",style:ye}),s.a.createElement("div",{style:ke},s.a.createElement("a",{href:"/login"},"I am already a member"))))))}}]),t}(s.a.Component),Te=a(65),De=a.n(Te),qe=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App",style:h},s.a.createElement(ue,null),s.a.createElement("div",{class:"container",style:fe},s.a.createElement("div",{class:"row flex-column-reverse flex-sm-row"},s.a.createElement("div",{class:"col-sm-6 m-0 p-0"},s.a.createElement("img",{src:De.a,alt:"signup image",style:je}),s.a.createElement("div",{style:ke},s.a.createElement("a",{href:"/signup"},"Create an account"))),s.a.createElement("div",{class:"col-sm-6 m-0 px-5"},s.a.createElement("h2",{class:"form-title",style:xe},"Login"),s.a.createElement("form",{class:"form-group",id:"login",name:"login",method:"post",action:"/login"},s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"email"},s.a.createElement("i",{class:"zmdi zmdi-email"})," Email Address"),s.a.createElement("input",{name:"email",type:"email",class:"form-control",style:Oe})),s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"password"},s.a.createElement("i",{class:"zmdi zmdi-lock"})," Password"),s.a.createElement("input",{name:"password",type:"password",class:"form-control",style:Oe})),s.a.createElement("input",{class:"btn btn-primary",style:Ne,type:"submit",value:"Login"})),s.a.createElement("div",{style:Me},s.a.createElement("p",null,"Or login with: "),s.a.createElement("div",null,s.a.createElement("a",{href:"/auth/linkedin"},s.a.createElement("button",{class:"btn btn-small",style:He},s.a.createElement("i",{class:"fab fa-linkedin"})," LinkedIn")),s.a.createElement("a",{href:"/auth/google"},s.a.createElement("button",{class:"btn btn-small",style:we},s.a.createElement("i",{class:"fab fa-google"})," Google")),s.a.createElement("a",{href:"/auth/facebook"},s.a.createElement("button",{class:"btn btn-small",style:Ce},s.a.createElement("i",{class:"fab fa-facebook"})," Facebook"))))))))}}]),t}(s.a.Component),Ae={marginTop:"150px"},Je={marginTop:"-600px",width:"100%",minWidth:"768px",minHeight:"600px",maxHeight:"800px"},Fe={marginLeft:"10%"},Ie={marginBottom:"50px"},Re={letterSpacing:"1px"},ze={fontSize:"48px",color:"#1DCB8B"},We={backgroundColor:"#1DCB8B",borderColor:"#1DCB8B",letterSpacing:"1px",boxShadow:"#1DCB8B",marginTop:"50px",marginBottom:"50px",width:"200px"},_e={fontWeight:"bold",marginTop:"75px",letterSpacing:"2px"},Pe={fontWeight:"bold",marginTop:"75px",marginBottom:"25px",letterSpacing:"2px"},Ge={letterSpacing:"1px"},Ve=a(66),Ue=a.n(Ve),Ye=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"col-md-8",style:Ae},s.a.createElement("div",{className:"container",style:Fe},s.a.createElement("h2",{style:Ie},"Membership"),s.a.createElement("p",{style:Re},s.a.createElement("span",{style:ze},"$49.99")," for $200+ value of unlimited "),s.a.createElement("p",{style:Re},"access to panel discussion and more"),s.a.createElement("button",{className:"btn btn-lg btn-primary",style:We},"Get Started"))),s.a.createElement("div",{className:"m-0 p-0"},s.a.createElement("img",{src:Ue.a,alt:"membership bg",style:Je})),s.a.createElement("div",{className:"d-flex m-0 p-0 flex-column align-items-center"},s.a.createElement("h2",{style:_e},"Benefits"),s.a.createElement("h4",{style:Pe},"Events"),s.a.createElement("p",{style:Ge},"Complimentary access to Build312 monthly panel discussion for you and your guest"),s.a.createElement("p",{style:Ge},"Member price (at least 20% off) to Build312 conferences and forums"),s.a.createElement("p",{style:Ge},"Opportunities to have exclusive discounted / complimentary ticket for Build312 partner events"),s.a.createElement("h4",{style:Pe},"Community"),s.a.createElement("p",{style:Ge},"One-on-one business coaching and mentorship"),s.a.createElement("p",{style:Ge},"Exclusive access to Build312 networking opportunities and ad-hoc training sessions"),s.a.createElement("h4",{style:Pe},"Service"),s.a.createElement("p",{style:Ge},"Access to all other members and in-house service providers"),s.a.createElement("p",{style:Ge},"One complimentary Coworking Day each month at CoGen"),s.a.createElement("p",{style:Ge},"Opportunities to get involved in event coordination")))}}]),t}(s.a.Component),$e=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App",style:h},s.a.createElement(ue,null),s.a.createElement(Ye,null))}}]),t}(s.a.Component),Ze={marginTop:"125px"},Ke={float:"left",textAlign:"center"},Qe={display:"block",float:"right"},Xe={verticalAlign:"top",display:"none",margin:0,border:"none",fontSize:"16px",padding:"16px",color:"#373F4A",backgroundColor:"transparent",lineHeight:"1.15em",placeholderColor:"#000",_webkitFontSmoothing:"antialiased",_mozOsxFontSmoothing:"grayscale"},et={textAlign:"center"},tt=(a(98),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={cardBrand:""},a.requestCardNonce=a.requestCardNonce.bind(Object(g.a)(Object(g.a)(a))),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"requestCardNonce",value:function(){console.log("request card nonce"),this.paymentForm.requestCardNonce()}},{key:"componentDidMount",value:function(){fetch("/sq-payment-cred").then(function(e){return e.json()}.bind(this)).then(function(e){var t=this,a={applicationId:e.applicationId,locationId:e.locationId,inputClass:"sq-input",autoBuild:!1,inputStyles:[{fontSize:"16px",fontFamily:"Helvetica Neue",padding:"16px",color:"#373F4A",backgroundColor:"transparent",lineHeight:"1.15em",placeholderColor:"#000",_webkitFontSmoothing:"antialiased",_mozOsxFontSmoothing:"grayscale"}],cardNumber:{elementId:"sq-card-number",placeholder:"\u2022 \u2022 \u2022 \u2022  \u2022 \u2022 \u2022 \u2022  \u2022 \u2022 \u2022 \u2022  \u2022 \u2022 \u2022 \u2022"},cvv:{elementId:"sq-cvv",placeholder:"CVV"},expirationDate:{elementId:"sq-expiration-date",placeholder:"MM/YY"},postalCode:{elementId:"sq-postal-code",placeholder:"Zip"},callbacks:{cardNonceResponseReceived:function(e,t,a){if(e)return console.log("Encountered errors:"),void e.forEach(function(e){console.log("  "+e.message)});document.getElementById("card-nonce").value=t,document.getElementById("nonce-form").submit()},requestCardNonce:function(e){e.preventDefault(),t.requestCardNonce()},inputEventReceived:function(e){switch(e.eventType){case"errorClassAdded":document.getElementById("error").innerHTML="Please fix card information errors before continuing.";break;case"errorClassRemoved":document.getElementById("error").style.display="none";break;case"cardBrandChanged":"unknown"!==e.cardBrand?t.setState({cardBrand:e.cardBrand}):t.setState({cardBrand:""})}}}};this.paymentForm=new this.props.paymentForm(a),this.paymentForm.build()}.bind(this))}},{key:"render",value:function(){return s.a.createElement("div",{id:"form-container",style:Ze},s.a.createElement("p",null,s.a.createElement("span",{style:Ke},"Enter Card Info Below "),s.a.createElement("span",{style:Qe},this.state.cardBrand.toUpperCase())),s.a.createElement("div",{id:"sq-ccbox"},s.a.createElement("form",{id:"nonce-form",novalidate:!0,action:"process-payment",method:"post"},s.a.createElement("div",{id:"cc-field-wrapper"},s.a.createElement("div",{id:"sq-card-number"}),s.a.createElement("div",{id:"sq-cvv"}),s.a.createElement("div",{id:"sq-expiration-date"})),s.a.createElement("div",{id:"sq-postal-code"}),s.a.createElement("input",{id:"name",style:Xe,type:"text",placeholder:"Name"}),s.a.createElement("button",{className:"sq-button",id:"sq-creditcard",onClick:this.requestCardNonce},"Pay"),s.a.createElement("p",{style:et,id:"error"}),s.a.createElement("input",{type:"hidden",id:"card-nonce",name:"nonce"}))))}}]),t}(s.a.Component)),at=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).state={loaded:!1},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=document.createElement("script");t.src="https://js.squareup.com/v2/paymentform",t.type="text/javascript",t.async=!1,t.onload=function(){e.setState({loaded:!0})},document.getElementsByTagName("head")[0].appendChild(t)}},{key:"render",value:function(){return this.state.loaded&&s.a.createElement("div",{className:"App",style:h},s.a.createElement(ue,null),s.a.createElement(tt,{paymentForm:window.SqPaymentForm}))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(118);var nt=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d.a,null,s.a.createElement(p.a,{exact:!0,path:"/",component:me}),s.a.createElement(p.a,{exact:!0,path:"/event",component:be}),s.a.createElement(p.a,{exact:!0,path:"/signup",component:Se}),s.a.createElement(p.a,{exact:!0,path:"/login",component:qe}),s.a.createElement(p.a,{exact:!0,path:"/membership",component:$e}),s.a.createElement(p.a,{exact:!0,path:"/payment",component:at})))}}]),t}(s.a.Component);u.a.render(s.a.createElement(v.a,null,s.a.createElement(nt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},17:function(e,t,a){e.exports=a.p+"static/media/white_logo.1c6fe84b.png"},57:function(e,t,a){e.exports=a.p+"static/media/background.261c07d6.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/black_logo.521a3426.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/intro_video_screenshot.a5bd8eea.png"},60:function(e,t,a){e.exports=a.p+"static/media/Build312_promo.9a90ea84.mp4"},63:function(e,t,a){e.exports=a.p+"static/media/team_pic.910c0460.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/signup-image.75eb7c4e.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/signin-image.d586706c.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/membership_bg.dc4593f7.png"},69:function(e,t,a){e.exports=a(121)}},[[69,2,1]]]);
//# sourceMappingURL=main.9b05a06e.chunk.js.map