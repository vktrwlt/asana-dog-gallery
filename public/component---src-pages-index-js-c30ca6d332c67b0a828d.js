(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,n){"use strict";n.r(t);n(162);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),s=n(150),l=n(148),u=n(142),c=n.n(u),d=n(144),p=n(164),g=n.n(p);function m(){var e=c()(["\n  overflow: hidden;\n  height: 350px;\n  position: relative;\n  transition: all 0.3s ease;\n  :hover {\n    transform: scale(1.1);\n  }\n"]);return m=function(){return e},e}function h(){var e=c()(["\n  border-radius: 4px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return h=function(){return e},e}var f=d.a.div(h()),v=d.a.div(m()),y=function(e){var t=e.dog,n=e.index,a=e.toggleModal;return i.a.createElement(f,{onClick:function(){return a(n)}},i.a.createElement(v,null,i.a.createElement(g.a,{fixed:t,style:{width:"100%"}})))},w=n(165),x=n(141),E=n(166);function b(){var e=c()(["\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n  ",": 1rem;\n\n  svg {\n    font-size: 3rem;\n    color: white;\n    cursor: pointer;\n  }\n"]);return b=function(){return e},e}function I(){var e=c()(["\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  svg {\n    font-size: 2.5rem;\n    color: white;\n    cursor: pointer;\n  }\n"]);return I=function(){return e},e}function k(){var e=c()(["\n  max-width: 100%;\n  height: auto;\n  max-height: 90vh;\n  border-radius: 4px;\n  user-select: none;\n"]);return k=function(){return e},e}function A(){var e=c()(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return A=function(){return e},e}function j(){var e=c()(["\n  background-color: #222;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  visibility: ",";\n  opacity: ",";\n  transition: all 0.4s ease;\n"]);return j=function(){return e},e}function P(){var e=c()(["\n  height: 100%;\n  width: 100%;\n  z-index: 100;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  visibility: ",";\n  opacity: ",";\n  transition: all 0.4s ease;\n"]);return P=function(){return e},e}var q=d.a.div(P(),function(e){return e.active?"visible":"hidden"},function(e){return e.active?1:0}),C=d.a.div(j(),function(e){return e.active?"visible":"hidden"},function(e){return e.active?1:0}),S=d.a.div(A()),M=d.a.img(k()),N=d.a.div(I()),D=d.a.div(b(),function(e){return"left"===e.direction?"left":"right"}),R=function(e){var t=e.active,n=e.toggleModal,a=e.showDog,r=e.totalDogs,o=e.dogPrevIndex,s=e.dogNextIndex,l=e.dogCarousel,u=null;a&&(u=a?a.node.fluid.originalImg:"null");var c=null,d=null;return c=-1===o?{display:"none"}:{display:"block"},d=s===r?{display:"none"}:{display:"block"},i.a.createElement(i.a.Fragment,null,i.a.createElement(q,{active:t},i.a.createElement(D,{onClick:function(){return l("prev")},direction:"left",style:c},i.a.createElement(E.a,null)),i.a.createElement(D,{onClick:function(){return l("next")},direction:"right",style:d},i.a.createElement(E.b,null)),i.a.createElement(N,{onClick:function(){return n(!1)}},i.a.createElement(E.c,null)),i.a.createElement(S,{onClick:function(){return n(!1)}},a?i.a.createElement(M,{src:Object(x.withPrefix)(u),alt:"dog"}):null)),i.a.createElement(C,{active:t}))};function T(){var e=c()(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 30px;\n  grid-auto-rows: minmax(100px, auto);\n\n  @media only screen and (max-width: 980px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media only screen and (max-width: 767px) {\n    grid-template-columns: 1fr;\n  }\n"]);return T=function(){return e},e}var Q=d.a.div(T()),z=function(e){var t=e.children;return i.a.createElement(Q,null,t)};n.d(t,"dogThumnbnails",function(){return Y});var G=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={modalActive:!1,showDog:null,dogIndex:null,dogPrevIndex:null,dogNextIndex:null},t.toggleModal=function(e){t.setState({modalActive:!t.state.modalActive,showDog:t.props.data.allImageSharp.edges[e],dogIndex:e,dogPrevIndex:e-1,dogNextIndex:e+1}),t.state.modalActive?document.body.style.overflow="auto":document.body.style.overflow="hidden"},t.dogCarousel=function(e){var n=null;switch(e){case"next":n=t.state.dogNextIndex;break;case"prev":n=t.state.dogPrevIndex;break;default:return null}t.setState({showDog:t.props.data.allImageSharp.edges[n],dogIndex:n,dogPrevIndex:n-1,dogNextIndex:n+1})},t}return r()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement(s.a,null,i.a.createElement(l.a,{title:"Puppy Image Gallery",keywords:["asana","pet adoption","dog","puppy"]}),i.a.createElement(z,null,this.props.data.allImageSharp.edges.map(function(t,n){return i.a.createElement(y,{dog:t.node.fixed,key:t.node.id,index:n,toggleModal:e.toggleModal})})),i.a.createElement(R,{active:this.state.modalActive,toggleModal:this.toggleModal,showDog:this.state.showDog,dogCarousel:this.dogCarousel,dogPrevIndex:this.state.dogPrevIndex,dogNextIndex:this.state.dogNextIndex,totalDogs:w.a.length}))},t}(o.Component),Y=(t.default=G,"1826494948")},141:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return g});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(140),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(143),c=n.n(u);n.d(t,"PageRenderer",function(){return c.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),g=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},143:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Asana Pet Adoption Agency"}}}}},146:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(54),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},147:function(e,t,n){},148:function(e,t,n){"use strict";var a=n(149),r=n(0),o=n.n(r),i=n(4),s=n.n(i),l=n(153),u=n.n(l),c=n(141);function d(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,s=e.title;return o.a.createElement(c.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var p="1691925375"},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Asana Pet Adoption Agency",description:"Welcome to Asana Pet Adoption Agency!",author:"Victor Tsang"}}}}},150:function(e,t,n){"use strict";var a=n(142),r=n.n(a),o=n(145),i=n(0),s=n.n(i),l=n(4),u=n.n(l),c=n(141),d=function(){return s.a.createElement("header",{className:"site-header"},s.a.createElement("h1",null,"Puppy image gallery"),s.a.createElement("blockquote",{className:"site-header__quote"},s.a.createElement("p",null,"A dog will teach you unconditional love. If you can have that in your life, things won't be too bad."),s.a.createElement("cite",null,"—Robert Wagner")))},p=function(){return s.a.createElement("footer",{className:"site-footer"},s.a.createElement("p",null,"Built by a wonderful developer for Asana."))},g=(n(147),n(144));function m(){var e=r()(["\n  margin-bottom: auto;\n\n  width: 100%;\n  max-width: 1200px;\n"]);return m=function(){return e},e}function h(){var e=r()(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n  padding: 0 10%;\n"]);return h=function(){return e},e}var f=g.a.div(h()),v=g.a.main(m()),y=function(e){var t=e.children;return s.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(f,null,s.a.createElement(d,null),s.a.createElement(v,null,t),s.a.createElement(p,null)))},data:o})};y.propTypes={children:u.a.node.isRequired};t.a=y},165:function(e){e.exports={a:[{image:"/assets/images/raw/1.jpeg",source:"https://unsplash.com/photos/ybHtKz5He9Y"},{image:"/assets/images/raw/2.jpeg",source:"https://unsplash.com/photos/rY79kwEEyGo"},{image:"/assets/images/raw/3.jpeg",source:"https://unsplash.com/photos/ngqyo2AYYnE"},{image:"/assets/images/raw/4.jpeg",source:"https://unsplash.com/photos/9A64wd1QaAU"},{image:"/assets/images/raw/5.jpeg",source:"https://unsplash.com/photos/915UJQaxtrk"},{image:"/assets/images/raw/6.jpeg",source:"https://unsplash.com/photos/mx0DEnfYxic"},{image:"/assets/images/raw/7.jpeg",source:"https://unsplash.com/photos/OsOQhAzcEKc"},{image:"/assets/images/raw/8.jpeg",source:"https://unsplash.com/photos/6WneSv56YVI"},{image:"/assets/images/raw/9.jpeg",source:"https://unsplash.com/photos/CdVG9f96kyg"},{image:"/assets/images/raw/10.jpeg",source:"https://unsplash.com/photos/bVA2DI7c9e8"},{image:"/assets/images/raw/11.jpeg",source:"https://unsplash.com/photos/GvhSUEN-Lm8"},{image:"/assets/images/raw/12.jpeg",source:"https://unsplash.com/photos/t2XHKIdc4Kw"},{image:"/assets/images/raw/13.jpeg",source:"https://unsplash.com/photos/saRU3vzmgkY"},{image:"/assets/images/raw/14.jpeg",source:"https://unsplash.com/photos/1z-kI6gIEpg"},{image:"/assets/images/raw/15.jpeg",source:"https://unsplash.com/photos/zHZ2nTnBnAQ"}]}}}]);
//# sourceMappingURL=component---src-pages-index-js-c30ca6d332c67b0a828d.js.map