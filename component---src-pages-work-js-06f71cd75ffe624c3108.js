(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{215:function(t,e,n){"use strict";n.r(e),function(t){var i=n(6),r=n.n(i),o=n(0),a=n.n(o),s=n(219),c=n(223),p=n(224),d=n(289),l=n.n(d),f=n(226),u=n(228),m=n(227),h=n(218),g=(n(209),function(e){function i(t){var n;return(n=e.call(this,t)||this).state={isActive:!0},n}r()(i,e);var o=i.prototype;return o.componentDidMount=function(){var t=n(222);this.aos=t,this.aos.init()},o.componentDidUpdate=function(){this.aos.refresh()},o.render=function(){return t.createElement("div",{css:{display:"flex",background:"url("+l.a+")",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundSize:"1100px 738px",backgroundPosition:"-240px 0px","@media(min-width:700px)":{backgroundSize:"cover",backgroundPosition:"0px 0px"},width:"100%",height:"2000px"}},t.createElement(s.a,{title:"Work - 1240 Greene St"}),t.createElement("div",{css:{width:"50%"}},t.createElement(c.a,{title:"1240 Greene St",color:h.a}),t.createElement("div",{"data-aos":"fade-right","data-aos-delay":"300","data-aos-easing":"ease-in-sine","data-aos-duration":"500"},t.createElement(u.a,{header:m.g.header,decscription:m.g.description,color:h.c,width:"350px",mobileMarginTop:"20%"}))),t.createElement("div",{css:{zIndex:"100",marginLeft:"auto",justifyContent:"flex-end"}},t.createElement(p.a,{isActive:this.state.isActive}),t.createElement("div",{css:{position:"fixed",bottom:"-117px",left:"-70%",transform:"scale(.37)","@media(min-width:700px)":{bottom:"-67px",transform:"scale(1)",left:"40%"}}},t.createElement("div",{"data-aos":"fade-left","data-aos-delay":"350","data-aos-easing":"ease-in-sine","data-aos-duration":"500"},t.createElement(f.a,{text:"Work",color:"#fff",opacity:".4",stroke:"1px #000"})))))},i}(a.a.Component));e.default=g}.call(this,n(42))},218:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"e",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s});var i="#252324",r="#ffffff",o=i,a="#252324",s="#ffffff"},219:function(t,e,n){"use strict";(function(t){var i=n(220),r=(n(0),n(1)),o=n.n(r),a=n(231),s=n.n(a);function c(e){var n=e.description,r=e.lang,o=e.meta,a=e.keywords,c=e.title,p=i.data.site,d=n||p.siteMetadata.description;return t.createElement(s.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+p.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:p.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(o)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=c}).call(this,n(42))},220:function(t){t.exports={data:{site:{siteMetadata:{title:"1240 GREENE ST",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},223:function(t,e,n){"use strict";(function(t){n(0);var i=n(221),r=n.n(i),o=n(1),a=n.n(o),s=n(218),c=function(e){var n=e.title,i=e.color;return t.createElement("div",null,t.createElement(r.a,{fade:!0,to:"/",duration:.5},t.createElement("header",{css:{fontFamily:"Open Sans",fontWeight:"300",fontSize:"18px",textTransform:"uppercase",color:i,paddingTop:"30px",marginLeft:"8%",width:"120%","@media(min-width:700px)":{fontSize:"50px",marginLeft:"8%",width:"100%"}}},n)))};c.propTypes={title:a.a.string},c.defaultProps={color:s.a},e.a=c}).call(this,n(42))},224:function(t,e,n){"use strict";(function(t){var i=n(6),r=n.n(i),o=n(0),a=n.n(o),s=n(225),c=function(e){function n(t){var n;return n=e.call(this,t)||this,console.log(t.isActive),n}return r()(n,e),n.prototype.render=function(){return t.createElement("div",{css:{justifyContent:"justify-end",width:"10%",marginTop:"22%",marginLeft:"0%",textAlign:"right","@media(min-width:700px)":{marginTop:"10%",marginLeft:"-10%"}}},t.createElement(s.a,{btntext:"live",btnlink:"/live",isActive:this.props.isActive}),t.createElement(s.a,{btntext:"work",btnlink:"/work",isActive:this.props.isActive}),t.createElement(s.a,{btntext:"relax",btnlink:"/relax",isActive:this.props.isActive}),t.createElement(s.a,{btntext:"play",btnlink:"/play",isActive:this.props.isActive}))},n}(a.a.Component);e.a=c}).call(this,n(42))},225:function(t,e,n){"use strict";(function(t){var i=n(6),r=n.n(i),o=n(1),a=n.n(o),s=n(0),c=n.n(s),p=n(221),d=n.n(p),l=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){return t.createElement("div",{style:{width:"200px",height:"auto",cursor:"pointer",marginBottom:"10px"}},t.createElement(d.a,{fade:!0,to:""+this.props.btnlink,duration:.5,css:{fontFamily:"Open Sans",fontWeight:"700",fontSize:"20px",color:"black",transition:"all .2s",background:"transparent",webKitTransition:"all .2s",textAlign:"right",textTransform:"uppercase",WebkitTextStroke:"1px #fff",paddingLeft:this.props.paddingLeft,marginLeft:"27%",width:"300px",height:"auto",":hover":{color:"#fff",WebkitTextStroke:"1px #000"},"@media(min-width:700px)":{fontSize:"45px",marginLeft:this.props.marginLeft}}},this.props.btntext))},n}(c.a.Component);l.propTypes={btntext:a.a.string},l.defaultProps={paddingLeft:"0px",marginLeft:"0px"},e.a=l}).call(this,n(42))},226:function(t,e,n){"use strict";(function(t){n(233);var i=n(6),r=n.n(i),o=n(0),a=n.n(o),s=n(1),c=n.n(s),p=(n(209),function(e){function i(){return e.apply(this,arguments)||this}r()(i,e);var o=i.prototype;return o.componentDidMount=function(){var t=n(222);this.aos=t,this.aos.init()},o.componentDidUpdate=function(){this.aos.refresh()},o.render=function(){return t.createElement("h1",{css:{fontFamily:"Open Sans",fontWeight:"700",fontSize:this.props.fontsize,textTransform:"uppercase",WebkitTextStroke:this.props.stroke,textStroke:this.props.stroke,color:this.props.color,opacity:this.props.opacity,textShadow:"1px 3px 2px rgba(0,0,0,.75)"}},this.props.text)},i}(a.a.Component));p.propTypes={text:c.a.string},p.defaultProps={fontsize:"250px"},e.a=p}).call(this,n(42))},227:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"g",function(){return o}),n.d(e,"a",function(){return a}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return c}),n.d(e,"f",function(){return p});var i={header:"Relax",description:"Lounge at our olympic-sized swimming pool."},r={header:"Play",description:"Host amazing events in our exclusive event spaces."},o={header:"Work",description:"Get access to our high-end conference rooms or private working spaces for your business needs."},a={header:"Live",description:"Our amenities at 1240 Greene St are simply the best. We have the finest appliances and exquisite styling."},s={tooltip:"Viking professional grade stainless steel ranges."},c={tooltip:"Kohler extra-deep sunken insinkerator."},p={tooltip:"The finest Italian marble is used for countertops."}},228:function(t,e,n){"use strict";(function(t){n(0);var i=n(1),r=n.n(i),o=n(229),a=n(230),s=function(e){var n=e.header,i=e.decscription,r=e.color,s=e.marginTop,c=e.width,p=e.mobileMarginTop;e.mobileWidth;return t.createElement("div",{css:{marginTop:s,marginLeft:"10%",width:c,"@media(max-width:400px)":{marginTop:p,width:"200px"}}},t.createElement(o.a,{header:n,color:r}),t.createElement(a.a,{decscription:i,color:r}))};s.propTypes={header:r.a.string,decscription:r.a.string},s.defaultProps={color:"#ffff",marginTop:"21%",mobileMarginTop:"71%",mobileWidth:"200px",width:"255px"},e.a=s}).call(this,n(42))},229:function(t,e,n){"use strict";(function(t){n(0);e.a=function(e){var n=e.header,i=e.color;return t.createElement("div",null,t.createElement("h1",{css:{fontFamily:"Open Sans",fontWeight:"300",fontSize:"53px",color:i,textTransform:"uppercase"}},n))}}).call(this,n(42))},230:function(t,e,n){"use strict";(function(t){n(0);e.a=function(e){var n=e.decscription,i=e.color;return t.createElement("div",null,t.createElement("p",{css:{fontFamily:"Open Sans",fontWeight:"300",fontSize:"17px",color:i,marginTop:"-25px",marginLeft:"1%"}},n))}}).call(this,n(42))},289:function(t,e,n){t.exports=n.p+"static/work-image-e0dd52493d2f2e420f1f5552610884d6.jpg"}}]);
//# sourceMappingURL=component---src-pages-work-js-06f71cd75ffe624c3108.js.map