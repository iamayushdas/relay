(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{1069:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return r?n.a.createElement(m,c(c({ref:t},l),{},{components:r})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},578:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),i=(r(0),r(1069)),o={id:"classic-api-reference-relay-route",title:"Relay.Route",original_id:"classic-api-reference-relay-route"},c={unversionedId:"classic-api-reference-relay-route",id:"version-classic/classic-api-reference-relay-route",isDocsHomePage:!1,title:"Relay.Route",description:"Relay uses routes to define entry points into a Relay application.",source:"@site/versioned_docs/version-classic/Classic-APIReference-Route.md",slug:"/classic-api-reference-relay-route",permalink:"/docs/classic/classic-api-reference-relay-route",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-classic/Classic-APIReference-Route.md",version:"classic",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1614833838,sidebar:"version-classic/docs",previous:{title:"RelayContainer",permalink:"/docs/classic/classic-api-reference-relay-container"},next:{title:"Relay.Renderer",permalink:"/docs/classic/classic-api-reference-relay-renderer"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Properties",id:"properties",children:[{value:"paramDefinitions (static property)",id:"paramdefinitions-static-property",children:[]},{value:"prepareParams (static property)",id:"prepareparams-static-property",children:[]},{value:"queries (static property)",id:"queries-static-property",children:[]},{value:"routeName (static property)",id:"routename-static-property",children:[]}]},{value:"Methods",id:"methods",children:[{value:"constructor",id:"constructor",children:[]}]}],l={toc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Relay uses routes to define entry points into a Relay application."),Object(i.b)("blockquote",null,"Note",Object(i.b)("p",null,"Relay routes don't really implement any URL routing specific logic or work with History API. In the future we will maybe rename RelayRoute to be something more like RelayQueryRoots or RelayQueryConfig.")),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Properties")),Object(i.b)("ul",{className:"apiIndex"},Object(i.b)("li",null,Object(i.b)("a",{href:"#paramdefinitions-static-property"},Object(i.b)("pre",null,"static paramDefinitions"),"Declare the expected parameters.")),Object(i.b)("li",null,Object(i.b)("a",{href:"#prepareparams-static-property"},Object(i.b)("pre",null,"static prepareParams"),"Declare additional parameters or conversion for parameters.")),Object(i.b)("li",null,Object(i.b)("a",{href:"#queries-static-property"},Object(i.b)("pre",null,"static queries"),"Declare the set of query roots.")),Object(i.b)("li",null,Object(i.b)("a",{href:"#routename-static-property"},Object(i.b)("pre",null,"static routeName"),"Declare the name of this route class."))),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Methods")),Object(i.b)("ul",{className:"apiIndex"},Object(i.b)("li",null,Object(i.b)("a",{href:"#constructor"},Object(i.b)("pre",null,"constructor(initialParams)")))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"paramdefinitions-static-property"},"paramDefinitions (static property)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nstatic paramDefinitions: {[param: string]: {required: boolean}}\n\n")),Object(i.b)("p",null,"Routes can declare a set of parameter names that are required to be supplied to the constructor. This is also a convenient place to document the set of valid parameters."),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass ProfileRoute extends Relay.Route {\n  static paramDefinitions = {\n    userID: {required: true},\n  };\n  // ...\n}\n\n")),Object(i.b)("h3",{id:"prepareparams-static-property"},"prepareParams (static property)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nstatic prepareParams: ?(prevParams: {[prevParam: string]: mixed}) => {[param: string]: mixed};\n\n")),Object(i.b)("p",null,"Routes can use ",Object(i.b)("inlineCode",{parentName:"p"},"prepareParams")," to provide default parameters, or pass through, convert or suppress passed-in parameters."),Object(i.b)("h4",{id:"example-1"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass ProfileRoute extends Relay.Route {\n  static queries = {\n    viewer: () => Relay.QL`query { viewer }`\n  };\n  static prepareParams = (prevParams) => {\n    return {\n      // Pass base set of supplied params through:\n      ...prevParams,\n      // Transform a param to meet internal requirements:\n      id: toGlobalId('Profile', prevParams.id),\n      // Provide a starting `limit` variable:\n      limit: 10,\n    }\n  }\n  // ...\n}\n\n")),Object(i.b)("h3",{id:"queries-static-property"},"queries (static property)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nstatic queries: {\n  [queryName: string]: () => Relay.QL`query { ... }`\n};\n\n")),Object(i.b)("p",null,"Routes must declare a set of query roots using ",Object(i.b)("inlineCode",{parentName:"p"},"Relay.QL"),". These queries will automatically compose a matching fragment named ",Object(i.b)("inlineCode",{parentName:"p"},"queryName")," on\nthe Relay container used with this route on a ",Object(i.b)("strong",{parentName:"p"},"Relay.RootContainer"),"."),Object(i.b)("h4",{id:"example-2"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nclass ProfileRoute extends Relay.Route {\n  static queries = {\n    user: () => Relay.QL`query { user(id: $userID) }`,\n  };\n  // ...\n}\n\n")),Object(i.b)("p",null,"In this example the Route should be initialized with a ",Object(i.b)("inlineCode",{parentName:"p"},"userID")," which gets passed on to the query. That ",Object(i.b)("inlineCode",{parentName:"p"},"userID")," variable will automatically be passed down to the top-level container and can be used there if needed. Further the top-level RelayContainer is expected to have a ",Object(i.b)("inlineCode",{parentName:"p"},"user")," fragment with the fields to be queried."),Object(i.b)("h3",{id:"routename-static-property"},"routeName (static property)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nstatic routeName: string\n\n")),Object(i.b)("p",null,"Routes must define a string name."),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"constructor"},"constructor"),Object(i.b)("p",null,"Create a route instance using the ",Object(i.b)("inlineCode",{parentName:"p"},"new")," keyword, optionally passing it some params."),Object(i.b)("h4",{id:"example-3"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"\nvar profileRoute = new ProfileRoute({userID: '123'});\n\n")))}p.isMDXComponent=!0}}]);