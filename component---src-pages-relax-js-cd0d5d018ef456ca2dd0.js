(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{213:function(t,e,n){"use strict";n.r(e),function(t){var i=n(6),r=n.n(i),o=n(0),a=n.n(o),s=n(218),c=n(221),p=n(222),l=n(284),f=n.n(l),u=n(224),d=n(228),m=n(227),h=n(217),g=function(e){function n(t){var n;return(n=e.call(this,t)||this).state={isActive:!0},n}return r()(n,e),n.prototype.render=function(){return t.createElement("div",{style:{display:"flex",background:"url("+f.a+")",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundPosition:"center",width:"100%",height:"2000px"}},t.createElement(s.a,{title:"Relax - 1240 Greene St"}),t.createElement("div",{css:{width:"50%"}},t.createElement(c.a,{title:"1240 Greene St",color:h.b}),t.createElement(u.a,{header:d.c.header,decscription:d.c.description,color:h.e})),t.createElement("div",{css:{zIndex:"100",marginLeft:"auto",justifyContent:"flex-end"}},t.createElement(p.a,{isActive:this.state.isActive}),t.createElement("div",{css:{position:"fixed",bottom:"-89px",left:"-30%",transform:"scale(.5)","@media(min-width:700px)":{bottom:"-68px",transform:"scale(1)",left:"39%"}}},t.createElement(m.a,{text:"Relax",color:"#fff",opacity:".4",stroke:"1px #000"}))))},n}(a.a.Component);e.default=g}.call(this,n(42))},217:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"e",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s});var i="#252324",r="#ffffff",o=i,a="#252324",s="#ffffff"},218:function(t,e,n){"use strict";(function(t){var i=n(219),r=(n(0),n(1)),o=n.n(r),a=n(229),s=n.n(a);function c(e){var n=e.description,r=e.lang,o=e.meta,a=e.keywords,c=e.title,p=i.data.site,l=n||p.siteMetadata.description;return t.createElement(s.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+p.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:p.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(o)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=c}).call(this,n(42))},219:function(t){t.exports={data:{site:{siteMetadata:{title:"1240 GREENE ST",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},221:function(t,e,n){"use strict";(function(t){n(0);var i=n(220),r=n.n(i),o=n(1),a=n.n(o),s=n(217),c=function(e){var n=e.title,i=e.color;return t.createElement("div",null,t.createElement(r.a,{fade:!0,to:"/",duration:.5},t.createElement("header",{css:{fontFamily:"Open Sans",fontWeight:"300",fontSize:"18px",textTransform:"uppercase",color:i,paddingTop:"30px",marginLeft:"8%","@media(min-width:700px)":{fontSize:"50px",marginLeft:"8%"}}},n)))};c.propTypes={title:a.a.string},c.defaultProps={color:s.a},e.a=c}).call(this,n(42))},222:function(t,e,n){"use strict";(function(t){var i=n(6),r=n.n(i),o=n(0),a=n.n(o),s=n(223),c=function(e){function n(t){var n;return n=e.call(this,t)||this,console.log(t.isActive),n}return r()(n,e),n.prototype.render=function(){return t.createElement("div",{css:{display:"flex-column",justifyContent:"justify-end",width:"10%",marginTop:"22%",marginLeft:"-25%",textAlign:"right","@media(min-width:700px)":{marginTop:"10%",marginLeft:"-10%"}}},t.createElement(s.a,{btntext:"live",btnlink:"/live",isActive:this.props.isActive}),t.createElement(s.a,{btntext:"work",btnlink:"/work",isActive:this.props.isActive}),t.createElement(s.a,{btntext:"relax",btnlink:"/relax",isActive:this.props.isActive}),t.createElement(s.a,{btntext:"play",btnlink:"/play",isActive:this.props.isActive}))},n}(a.a.Component);e.a=c}).call(this,n(42))},223:function(t,e,n){"use strict";(function(t){var i=n(6),r=n.n(i),o=n(1),a=n.n(o),s=n(0),c=n.n(s),p=n(220),l=n.n(p),f=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){return t.createElement("div",{style:{width:"200px",height:"auto",cursor:"pointer",marginBottom:"10px"}},t.createElement(l.a,{fade:!0,to:""+this.props.btnlink,duration:.5,css:{fontFamily:"Open Sans",fontWeight:"700",fontSize:"20px",color:"black",transition:"all .2s",background:"transparent",webKitTransition:"all .2s",textAlign:"right",textTransform:"uppercase",WebkitTextStroke:"1px #fff",paddingLeft:this.props.paddingLeft,marginLeft:"27%",width:"300px",height:"auto",":hover":{color:"#fff",WebkitTextStroke:"1px #000"},"@media(min-width:700px)":{fontSize:"45px",marginLeft:this.props.marginLeft}}},this.props.btntext))},n}(c.a.Component);f.propTypes={btntext:a.a.string},f.defaultProps={paddingLeft:"0px",marginLeft:"0px"},e.a=f}).call(this,n(42))},224:function(t,e,n){"use strict";(function(t){n(0);var i=n(1),r=n.n(i),o=n(225),a=n(226),s=function(e){var n=e.header,i=e.decscription,r=e.color,s=e.marginTop,c=e.width,p=e.mobileMarginTop;e.mobileWidth;return t.createElement("div",{css:{marginTop:s,marginLeft:"10%",width:c,"@media(max-width:400px)":{marginTop:p,width:"200px"}}},t.createElement(o.a,{header:n,color:r}),t.createElement(a.a,{decscription:i,color:r}))};s.propTypes={header:r.a.string,decscription:r.a.string},s.defaultProps={color:"#ffff",marginTop:"21%",mobileMarginTop:"71%",mobileWidth:"200px",width:"255px"},e.a=s}).call(this,n(42))},225:function(t,e,n){"use strict";(function(t){n(0);e.a=function(e){var n=e.header,i=e.color;return t.createElement("div",null,t.createElement("h1",{css:{fontFamily:"Open Sans",fontWeight:"300",fontSize:"53px",color:i,textTransform:"uppercase"}},n))}}).call(this,n(42))},226:function(t,e,n){"use strict";(function(t){n(0);e.a=function(e){var n=e.decscription,i=e.color;return t.createElement("div",null,t.createElement("p",{css:{fontFamily:"Open Sans",fontWeight:"300",fontSize:"17px",color:i,marginTop:"-25px",marginLeft:"1%"}},n))}}).call(this,n(42))},227:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return a});var i=n(6),r=n.n(i),o=n(0),a=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){return t.createElement("h1",{css:{fontFamily:"Open Sans",fontWeight:"700",fontSize:"250px",textTransform:"uppercase",WebkitTextStroke:this.props.stroke,textStroke:this.props.stroke,color:this.props.color,opacity:this.props.opacity}},this.props.text)},n}(n.n(o).a.Component)}).call(this,n(42))},228:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return a});var i={header:"Relax",description:"Lounge at our olympic-sized swimming pool."},r={header:"Play",description:"Host amazing events in our exclusive event spaces."},o={header:"Work",description:"Get access to our high-end conference rooms or private working spaces for your business needs."},a={header:"Live",description:"Our amenities at 1240 Greene St are simply the best. We have the finest appliances and exquisite styling."}},284:function(t,e,n){t.exports=n.p+"static/relax-image-89f1dbea712d7ec84dd1c649a9b6187a.jpg"}}]);
//# sourceMappingURL=component---src-pages-relax-js-cd0d5d018ef456ca2dd0.js.map