(this["webpackJsonpreact-redux-simple"]=this["webpackJsonpreact-redux-simple"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(5),a=n.n(i),s=(n(25),n(26),n(3)),o=n(1),u=function(){var e=Object(s.c)((function(e){return e.joke}));return Object(o.jsxs)("div",{className:"joke",children:[Object(o.jsx)("img",{src:e.state.icon_url,alt:"Chuck"}),Object(o.jsx)("p",{children:e.state.value})]})},j=function(){var e=Object(s.c)((function(e){return e.joke}));return Object(o.jsx)("div",{className:"box",children:Object(o.jsx)("p",{children:0===e.length?"nothing":Object(o.jsx)(u,{})})})},d=n(8),b=n.n(d),l=n(18),O=n(19),h=n.n(O),f="FETCH",p=function(){return function(){var e=Object(l.a)(b.a.mark((function e(t,n){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.chucknorris.io/jokes/random");case 2:c=e.sent,t({type:f,payload:c.data});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()};var x=function(){var e=Object(s.b)();return Object(c.useEffect)((function(){e(p())}),[]),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(j,{}),Object(o.jsx)("button",{onClick:function(){e(p())},children:"More"})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))},_=n(20),g=n(4),k=[],m=Object(g.b)({joke:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{state:t.payload};default:return e}}}),E=Object(g.d)(m,Object(g.c)(Object(g.a)(_.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));a.a.render(Object(o.jsx)(s.a,{store:E,children:Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(x,{})})}),document.getElementById("root")),v()}},[[53,1,2]]]);
//# sourceMappingURL=main.ac2cbdf9.chunk.js.map