(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(150),o=n(148);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},141:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(140),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(143),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Asana Pet Adoption Agency"}}}}},146:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(54),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},147:function(e,t,n){},148:function(e,t,n){"use strict";var a=n(149),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(153),l=n.n(c),s=n(141);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,u=e.title;return i.a.createElement(s.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:u},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},t.a=d;var p="1691925375"},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Asana Pet Adoption Agency",description:"Welcome to Asana Pet Adoption Agency!",author:"Victor Tsang"}}}}},150:function(e,t,n){"use strict";var a=n(142),r=n.n(a),i=n(145),o=n(0),u=n.n(o),c=n(4),l=n.n(c),s=n(141),d=function(){return u.a.createElement("header",{className:"site-header"},u.a.createElement("h1",null,"Puppy image gallery"),u.a.createElement("blockquote",{className:"site-header__quote"},u.a.createElement("p",null,"A dog will teach you unconditional love. If you can have that in your life, things won't be too bad."),u.a.createElement("cite",null,"—Robert Wagner")))},p=function(){return u.a.createElement("footer",{className:"site-footer"},u.a.createElement("p",null,"Built by a wonderful developer for Asana."))},m=(n(147),n(144));function f(){var e=r()(["\n  margin-bottom: auto;\n\n  width: 100%;\n  max-width: 1200px;\n"]);return f=function(){return e},e}function y(){var e=r()(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n  padding: 0 10%;\n"]);return y=function(){return e},e}var g=m.a.div(y()),h=m.a.main(f()),v=function(e){var t=e.children;return u.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(g,null,u.a.createElement(d,null),u.a.createElement(h,null,t),u.a.createElement(p,null)))},data:i})};v.propTypes={children:l.a.node.isRequired};t.a=v}}]);
//# sourceMappingURL=component---src-pages-404-js-0f5fc946f08008561c82.js.map