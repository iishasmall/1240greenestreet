(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{212:function(t,e,n){"use strict";n.r(e),function(t){var i=n(6),r=n.n(i),o=n(0),a=n.n(o),s=n(223),c=n(224),p=n(219),l=n(282),u=n(228),d=n(226),f=n(227),m=n(218),h=(n(209),function(e){function i(t){var n;return(n=e.call(this,t)||this).state={isActive:!0},n}r()(i,e);var o=i.prototype;return o.componentDidMount=function(){var t=n(222);this.aos=t,this.aos.init()},o.componentDidUpdate=function(){this.aos.refresh()},o.render=function(){return t.createElement("div",{style:{display:"flex",maxWidth:"100%",height:"2000px"}},t.createElement(p.a,{title:"Live - 1240 Greene St"}),t.createElement("div",{css:{zIndex:"10",width:"50%"}},t.createElement(s.a,{title:"1240 Greene St",color:m.a}),t.createElement("div",{"data-aos":"fade-right","data-aos-delay":"300","data-aos-easing":"ease-in-sine","data-aos-duration":"500"},t.createElement(u.a,{header:f.a.header,decscription:f.a.description,color:m.c,marginTop:"18%"}))),t.createElement("div",{css:{zIndex:"100",marginLeft:"auto",justifyContent:"flex-end"}},t.createElement("div",null,t.createElement(c.a,{isActive:this.state.isActive})),t.createElement("div",{css:{position:"fixed",bottom:"-119px",left:"-41%",transform:"scale(.45)","@media(min-width:700px)":{bottom:"-67px",transform:"scale(1)",left:"60%"}}},t.createElement("div",{"data-aos":"fade-left","data-aos-delay":"350","data-aos-duration":"500"},t.createElement(d.a,{text:"Live",color:"#fff",opacity:".4",stroke:"1px #000"})))),t.createElement("div",{css:{position:"absolute",top:"0",left:"0",width:"100%",height:"2000px"}},t.createElement(l.a,null)))},i}(a.a.Component));e.default=h}.call(this,n(42))},218:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"e",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s});var i="#252324",r="#ffffff",o=i,a="#252324",s="#ffffff"},219:function(t,e,n){"use strict";(function(t){var i=n(220),r=(n(0),n(1)),o=n.n(r),a=n(231),s=n.n(a);function c(e){var n=e.description,r=e.lang,o=e.meta,a=e.keywords,c=e.title,p=i.data.site,l=n||p.siteMetadata.description;return t.createElement(s.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+p.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:p.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(o)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=c}).call(this,n(42))},220:function(t){t.exports={data:{site:{siteMetadata:{title:"1240 GREENE ST",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},223:function(t,e,n){"use strict";(function(t){n(0);var i=n(221),r=n.n(i),o=n(1),a=n.n(o),s=n(218),c=function(e){var n=e.title,i=e.color;return t.createElement("div",null,t.createElement(r.a,{fade:!0,to:"/",duration:.5},t.createElement("header",{css:{fontFamily:"Open Sans",fontWeight:"300",fontSize:"18px",textTransform:"uppercase",color:i,paddingTop:"30px",marginLeft:"8%",width:"120%","@media(min-width:700px)":{fontSize:"50px",marginLeft:"8%",width:"100%"}}},n)))};c.propTypes={title:a.a.string},c.defaultProps={color:s.a},e.a=c}).call(this,n(42))},224:function(t,e,n){"use strict";(function(t){var i=n(6),r=n.n(i),o=n(0),a=n.n(o),s=n(225),c=function(e){function n(t){var n;return n=e.call(this,t)||this,console.log(t.isActive),n}return r()(n,e),n.prototype.render=function(){return t.createElement("div",{css:{justifyContent:"justify-end",width:"10%",marginTop:"22%",marginLeft:"0%",textAlign:"right","@media(min-width:700px)":{marginTop:"10%",marginLeft:"-10%"}}},t.createElement(s.a,{btntext:"live",btnlink:"/live",isActive:this.props.isActive}),t.createElement(s.a,{btntext:"work",btnlink:"/work",isActive:this.props.isActive}),t.createElement(s.a,{btntext:"relax",btnlink:"/relax",isActive:this.props.isActive}),t.createElement(s.a,{btntext:"play",btnlink:"/play",isActive:this.props.isActive}))},n}(a.a.Component);e.a=c}).call(this,n(42))},225:function(t,e,n){"use strict";(function(t){var i=n(6),r=n.n(i),o=n(1),a=n.n(o),s=n(0),c=n.n(s),p=n(221),l=n.n(p),u=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){return t.createElement("div",{style:{width:"200px",height:"auto",cursor:"pointer",marginBottom:"10px"}},t.createElement(l.a,{fade:!0,to:""+this.props.btnlink,duration:.5,css:{fontFamily:"Open Sans",fontWeight:"700",fontSize:"20px",color:"black",transition:"all .2s",background:"transparent",webKitTransition:"all .2s",textAlign:"right",textTransform:"uppercase",WebkitTextStroke:"1px #fff",paddingLeft:this.props.paddingLeft,marginLeft:"27%",width:"300px",height:"auto",":hover":{color:"#fff",WebkitTextStroke:"1px #000"},"@media(min-width:700px)":{fontSize:"45px",marginLeft:this.props.marginLeft}}},this.props.btntext))},n}(c.a.Component);u.propTypes={btntext:a.a.string},u.defaultProps={paddingLeft:"0px",marginLeft:"0px"},e.a=u}).call(this,n(42))},226:function(t,e,n){"use strict";(function(t){n(233);var i=n(6),r=n.n(i),o=n(0),a=n.n(o),s=n(1),c=n.n(s),p=(n(209),function(e){function i(){return e.apply(this,arguments)||this}r()(i,e);var o=i.prototype;return o.componentDidMount=function(){var t=n(222);this.aos=t,this.aos.init()},o.componentDidUpdate=function(){this.aos.refresh()},o.render=function(){return t.createElement("h1",{css:{fontFamily:"Open Sans",fontWeight:"700",fontSize:this.props.fontsize,textTransform:"uppercase",WebkitTextStroke:this.props.stroke,textStroke:this.props.stroke,color:this.props.color,opacity:this.props.opacity,textShadow:"1px 3px 2px rgba(0,0,0,.75)"}},this.props.text)},i}(a.a.Component));p.propTypes={text:c.a.string},p.defaultProps={fontsize:"250px"},e.a=p}).call(this,n(42))},227:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"g",function(){return o}),n.d(e,"a",function(){return a}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return c}),n.d(e,"f",function(){return p});var i={header:"Relax",description:"Lounge at our olympic-sized swimming pool."},r={header:"Play",description:"Host amazing events in our exclusive event spaces."},o={header:"Work",description:"Get access to our high-end conference rooms or private working spaces for your business needs."},a={header:"Live",description:"Our amenities at 1240 Greene St are simply the best. We have the finest appliances and exquisite styling."},s={tooltip:"Viking professional grade stainless steel ranges."},c={tooltip:"Kohler extra-deep sunken insinkerator."},p={tooltip:"The finest Italian marble is used for countertops."}},228:function(t,e,n){"use strict";(function(t){n(0);var i=n(1),r=n.n(i),o=n(229),a=n(230),s=function(e){var n=e.header,i=e.decscription,r=e.color,s=e.marginTop,c=e.width,p=e.mobileMarginTop;e.mobileWidth;return t.createElement("div",{css:{marginTop:s,marginLeft:"10%",width:c,"@media(max-width:400px)":{marginTop:p,width:"200px"}}},t.createElement(o.a,{header:n,color:r}),t.createElement(a.a,{decscription:i,color:r}))};s.propTypes={header:r.a.string,decscription:r.a.string},s.defaultProps={color:"#ffff",marginTop:"21%",mobileMarginTop:"71%",mobileWidth:"200px",width:"255px"},e.a=s}).call(this,n(42))},229:function(t,e,n){"use strict";(function(t){n(0);e.a=function(e){var n=e.header,i=e.color;return t.createElement("div",null,t.createElement("h1",{css:{fontFamily:"Open Sans",fontWeight:"300",fontSize:"53px",color:i,textTransform:"uppercase"}},n))}}).call(this,n(42))},230:function(t,e,n){"use strict";(function(t){n(0);e.a=function(e){var n=e.decscription,i=e.color;return t.createElement("div",null,t.createElement("p",{css:{fontFamily:"Open Sans",fontWeight:"300",fontSize:"17px",color:i,marginTop:"-25px",marginLeft:"1%"}},n))}}).call(this,n(42))},282:function(t,e,n){"use strict";(function(t){n(0);var i=n(283),r=n.n(i),o=n(284),a=n.n(o),s=n(285);e.a=function(){return t.createElement("div",{style:{display:"flex",width:"100%",height:"100%",background:"url("+r.a+")","@media(maxWidth:400px)":{background:"url("+a.a+")"},backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed"}},t.createElement("div",{css:{marginTop:"30%",marginLeft:"30%",width:"30%",height:"auto",zIndex:"100"}},t.createElement(s.a,null)))}}).call(this,n(42))},283:function(t,e,n){t.exports=n.p+"static/kitchen-image-f049baab8daaf6225931720841f8f6c8.jpg"},284:function(t,e,n){t.exports=n.p+"static/mobile-kitchen-image-2beb8ba6f37963851072dd2218e64480.jpg"},285:function(t,e,n){"use strict";(function(t){n(0);var i=n(286),r=n(227);e.a=function(){return t.createElement("div",null,t.createElement("div",{css:{marginLeft:"-9%"}},t.createElement(i.a,{content:r.d.tooltip})),t.createElement("div",{css:{marginLeft:"65%",marginTop:"-15%"}},t.createElement(i.a,{content:r.e.tooltip})),t.createElement("div",{css:{marginLeft:"120%"}},t.createElement(i.a,{content:r.f.tooltip})))}}).call(this,n(42))},286:function(t,e,n){"use strict";(function(t){var i=n(30),r=n.n(i),o=n(6),a=n.n(o),s=n(0),c=n.n(s),p=n(287),l=function(e){function n(t){var n;return(n=e.call(this,t)||this).state={showTip:!1,position:void 0,content:void 0},n.mouseOverHandler=n.mouseOverHandler.bind(r()(n)),n.mouseOutHandler=n.mouseOutHandler.bind(r()(n)),n}a()(n,e);var i=n.prototype;return i.mouseOverHandler=function(t){this.setState({showTip:!0}),this.setState({position:t.pageY-100}),console.log(this.state.position)},i.mouseOutHandler=function(){this.setState({showTip:!1})},i.render=function(){var e=this;return t.createElement("div",null,t.createElement("div",{style:{width:"30px",height:"30px",background:"#000",borderRadius:"50%",textAlign:"center",fontFamily:"Open Sans",fontWeight:"400",fontSize:"35px",color:"#fff",paddingTop:"1px",margin:"0",cursor:"pointer",":hover":{color:"#000",background:"#fff"}},onMouseOver:function(t){e.mouseOverHandler(t)},onMouseOut:function(t){e.mouseOutHandler()}},t.createElement("p",{css:{margin:"0"}},"+")),t.createElement("div",null,t.createElement(p.a,{showTip:this.state.showTip,position:this.state.position,content:this.props.content})))},n}(c.a.Component);e.a=l}).call(this,n(42))},287:function(t,e,n){"use strict";(function(t){var i=n(6),r=n.n(i),o=n(0),a=n.n(o),s=n(1),c=n.n(s),p=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){return!1===this.props.showTip?null:t.createElement("div",{css:{position:"absolute",top:this.props.position,width:this.props.width,height:"auto",background:"#666666",borderRadius:"6px"}},t.createElement("p",{css:{fontFamily:"Open Sans",fontWeight:"300",fontSize:"12px",color:"#fff",margin:"0",lineHeight:"1.5em",padding:"10px"}},this.props.content))},n}(a.a.Component);p.propTypes={content:c.a.string},p.defaultProps={width:"200px",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},e.a=p}).call(this,n(42))}}]);
//# sourceMappingURL=component---src-pages-live-js-7b6428f60bddc4ad775e.js.map