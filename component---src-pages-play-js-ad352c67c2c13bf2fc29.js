(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{214:function(t,e,n){"use strict";n.r(e),function(t){var i=n(6),r=n.n(i),a=n(0),o=n.n(a),s=n(220),c=n(224),p=n(225),l=(n(289),n(229)),f=n(228),d=n(219),u=n(227),m=(n(209),n(210),function(e){function i(t){var n;return(n=e.call(this,t)||this).state={isActive:!0},n}r()(i,e);var a=i.prototype;return a.componentDidMount=function(){var t=n(223);this.aos=t,this.aos.init()},a.componentDidUpdate=function(){this.aos.refresh()},a.render=function(){return t.createElement("div",{className:"playbg",style:{display:"flex"}},t.createElement(s.a,{title:"Play - 1240 Greene St"}),t.createElement("div",{css:{width:"50%"}},t.createElement(c.a,{title:"1240 Greene St",color:d.a}),t.createElement("div",{"data-aos":"fade-right","data-aos-delay":"300","data-aos-easing":"ease-in-sine","data-aos-duration":"500"},t.createElement(l.a,{header:f.b.header,decscription:f.b.description,color:d.c,mobileMarginTop:"25%"}))),t.createElement("div",{css:{zIndex:"100",marginLeft:"auto",justifyContent:"flex-end"}},t.createElement(p.a,{isActive:this.state.isActive}),t.createElement("div",{css:{position:"fixed",bottom:"-118px",left:"-51%",transform:"scale(.45)","@media(min-width:700px)":{bottom:"-67px",transform:"scale(1)",left:"51%"}}},t.createElement("div",{"data-aos":"fade-left","data-aos-delay":"350","data-aos-duration":"500"},t.createElement(u.a,{text:"Play",color:d.d,opacity:".3",stroke:"1px #fff"})))))},i}(o.a.Component));e.default=m}.call(this,n(42))},219:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"e",function(){return r}),n.d(e,"d",function(){return a}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s});var i="#252324",r="#ffffff",a=i,o="#252324",s="#ffffff"},220:function(t,e,n){"use strict";(function(t){var i=n(221),r=(n(0),n(1)),a=n.n(r),o=n(232),s=n.n(o);function c(e){var n=e.description,r=e.lang,a=e.meta,o=e.keywords,c=e.title,p=i.data.site,l=n||p.siteMetadata.description;return t.createElement(s.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+p.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:p.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(a)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:a.a.string,lang:a.a.string,meta:a.a.array,keywords:a.a.arrayOf(a.a.string),title:a.a.string.isRequired},e.a=c}).call(this,n(42))},221:function(t){t.exports={data:{site:{siteMetadata:{title:"1240 GREENE ST",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},224:function(t,e,n){"use strict";(function(t){n(0);var i=n(222),r=n.n(i),a=n(1),o=n.n(a),s=n(219),c=function(e){var n=e.title,i=e.color;return t.createElement("div",null,t.createElement(r.a,{fade:!0,to:"/",duration:.5},t.createElement("header",{css:{fontFamily:"Open Sans",fontWeight:"300",fontSize:"18px",textTransform:"uppercase",color:i,paddingTop:"30px",marginLeft:"8%",width:"120%","@media(min-width:700px)":{fontSize:"50px",marginLeft:"8%",width:"100%"}}},n)))};c.propTypes={title:o.a.string},c.defaultProps={color:s.a},e.a=c}).call(this,n(42))},225:function(t,e,n){"use strict";(function(t){var i=n(6),r=n.n(i),a=n(0),o=n.n(a),s=n(226),c=function(e){function n(t){var n;return n=e.call(this,t)||this,console.log(t.isActive),n}return r()(n,e),n.prototype.render=function(){return t.createElement("div",{css:{justifyContent:"justify-end",width:"10%",marginTop:"22%",marginLeft:"0%",textAlign:"right","@media(min-width:700px)":{marginTop:"10%",marginLeft:"-10%"}}},t.createElement(s.a,{btntext:"live",btnlink:"/live",isActive:this.props.isActive}),t.createElement(s.a,{btntext:"work",btnlink:"/work",isActive:this.props.isActive}),t.createElement(s.a,{btntext:"relax",btnlink:"/relax",isActive:this.props.isActive}),t.createElement(s.a,{btntext:"play",btnlink:"/play",isActive:this.props.isActive}))},n}(o.a.Component);e.a=c}).call(this,n(42))},226:function(t,e,n){"use strict";(function(t){var i=n(6),r=n.n(i),a=n(1),o=n.n(a),s=n(0),c=n.n(s),p=n(222),l=n.n(p),f=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){return t.createElement("div",{style:{width:"200px",height:"auto",cursor:"pointer",marginBottom:"10px"}},t.createElement(l.a,{fade:!0,to:""+this.props.btnlink,duration:.5,css:{fontFamily:"Open Sans",fontWeight:"700",fontSize:"20px",color:"black",transition:"all .2s",background:"transparent",webKitTransition:"all .2s",textAlign:"right",textTransform:"uppercase",WebkitTextStroke:"1px #fff",paddingLeft:this.props.paddingLeft,marginLeft:"27%",width:"300px",height:"auto",":hover":{color:"#fff",WebkitTextStroke:"1px #000"},"@media(min-width:700px)":{fontSize:"45px",marginLeft:this.props.marginLeft}}},this.props.btntext))},n}(c.a.Component);f.propTypes={btntext:o.a.string},f.defaultProps={paddingLeft:"0px",marginLeft:"0px"},e.a=f}).call(this,n(42))},227:function(t,e,n){"use strict";(function(t){n(234);var i=n(6),r=n.n(i),a=n(0),o=n.n(a),s=n(1),c=n.n(s),p=(n(209),function(e){function i(){return e.apply(this,arguments)||this}r()(i,e);var a=i.prototype;return a.componentDidMount=function(){var t=n(223);this.aos=t,this.aos.init()},a.componentDidUpdate=function(){this.aos.refresh()},a.render=function(){return t.createElement("h1",{css:{fontFamily:"Open Sans",fontWeight:"300",fontSize:this.props.fontsize,textTransform:"uppercase",WebkitTextStroke:this.props.stroke,textStroke:this.props.stroke,color:this.props.color,opacity:this.props.opacity,textShadow:"1px 3px 2px rgba(0,0,0,.75)"}},this.props.text)},i}(o.a.Component));p.propTypes={text:c.a.string},p.defaultProps={fontsize:"250px"},e.a=p}).call(this,n(42))},228:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"g",function(){return a}),n.d(e,"a",function(){return o}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return c}),n.d(e,"f",function(){return p});var i={header:"Relax",description:"Lounge at our olympic-sized swimming pool."},r={header:"Play",description:"Host amazing events in our exclusive event spaces."},a={header:"Work",description:"Get access to our high-end conference rooms or private working spaces for your business needs."},o={header:"Live",description:"Our amenities at 1240 Greene St are simply the best. We have the finest appliances and exquisite styling."},s={tooltip:"Viking professional grade stainless steel ranges."},c={tooltip:"Kohler extra-deep sunken insinkerator."},p={tooltip:"The finest Italian marble is used for countertops."}},229:function(t,e,n){"use strict";(function(t){n(0);var i=n(1),r=n.n(i),a=n(230),o=n(231),s=function(e){var n=e.header,i=e.decscription,r=e.color,s=e.marginTop,c=e.width,p=e.mobileMarginTop;e.mobileWidth;return t.createElement("div",{css:{marginTop:s,marginLeft:"10%",width:c,"@media(max-width:400px)":{marginTop:p,width:"200px"}}},t.createElement(a.a,{header:n,color:r}),t.createElement(o.a,{decscription:i,color:r}))};s.propTypes={header:r.a.string,decscription:r.a.string},s.defaultProps={color:"#ffff",marginTop:"21%",mobileMarginTop:"71%",mobileWidth:"200px",width:"255px"},e.a=s}).call(this,n(42))},230:function(t,e,n){"use strict";(function(t){n(0);e.a=function(e){var n=e.header,i=e.color;return t.createElement("div",null,t.createElement("h1",{css:{fontFamily:"Open Sans",fontWeight:"300",fontSize:"53px",color:i,textTransform:"uppercase"}},n))}}).call(this,n(42))},231:function(t,e,n){"use strict";(function(t){n(0);e.a=function(e){var n=e.decscription,i=e.color;return t.createElement("div",null,t.createElement("p",{css:{fontFamily:"Open Sans",fontWeight:"300",fontSize:"17px",color:i,marginTop:"-25px",marginLeft:"1%"}},n))}}).call(this,n(42))},289:function(t,e,n){t.exports=n.p+"static/play-image-adcb9e1cb31d67b7da5f49fba737a773.jpg"}}]);
//# sourceMappingURL=component---src-pages-play-js-ad352c67c2c13bf2fc29.js.map