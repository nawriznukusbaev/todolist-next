(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[510],{1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,a){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(2648).Z,l=r(7273).Z,i=a(r(7294)),s=r(4532),n=r(3353),u=r(1410),o=r(9064),f=r(370),d=r(9955),c=r(4224),y=r(508),p=r(1516),h=r(4266);let m=new Set;function v(e,t,r,a,l){if(l||n.isLocalURL(t)){if(!a.bypassPrefetchedCheck){let l=void 0!==a.locale?a.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+l;if(m.has(i))return;m.add(i)}Promise.resolve(e.prefetch(t,r,a)).catch(e=>{})}}function g(e){return"string"==typeof e?e:u.formatUrl(e)}let b=i.default.forwardRef(function(e,t){let r,a;let{href:u,as:m,children:b,prefetch:_,passHref:A,replace:V,shallow:w,scroll:k,locale:x,onClick:S,onMouseEnter:D,onTouchStart:F,legacyBehavior:C=!1}=e,O=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=b,C&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));let E=!1!==_,L=i.default.useContext(d.RouterContext),M=i.default.useContext(c.AppRouterContext),j=null!=L?L:M,T=!L,{href:U,as:B}=i.default.useMemo(()=>{if(!L){let e=g(u);return{href:e,as:m?g(m):e}}let[e,t]=s.resolveHref(L,u,!0);return{href:e,as:m?s.resolveHref(L,m):t||e}},[L,u,m]),N=i.default.useRef(U),P=i.default.useRef(B);C&&(a=i.default.Children.only(r));let R=C?a&&"object"==typeof a&&a.ref:t,[I,q,H]=y.useIntersection({rootMargin:"200px"}),K=i.default.useCallback(e=>{(P.current!==B||N.current!==U)&&(H(),P.current=B,N.current=U),I(e),R&&("function"==typeof R?R(e):"object"==typeof R&&(R.current=e))},[B,R,U,H,I]);i.default.useEffect(()=>{j&&q&&E&&v(j,U,B,{locale:x},T)},[B,U,q,x,E,null==L?void 0:L.locale,j,T]);let $={ref:K,onClick(e){C||"function"!=typeof S||S(e),C&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),j&&!e.defaultPrevented&&function(e,t,r,a,l,s,u,o,f,d){let{nodeName:c}=e.currentTarget,y="A"===c.toUpperCase();if(y&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!n.isLocalURL(r)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[l?"replace":"push"](r,a,{shallow:s,locale:o,scroll:u}):t[l?"replace":"push"](a||r,{forceOptimisticNavigation:!d})};f?i.default.startTransition(p):p()}(e,j,U,B,V,w,k,x,T,E)},onMouseEnter(e){C||"function"!=typeof D||D(e),C&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),j&&(E||!T)&&v(j,U,B,{locale:x,priority:!0,bypassPrefetchedCheck:!0},T)},onTouchStart(e){C||"function"!=typeof F||F(e),C&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),j&&(E||!T)&&v(j,U,B,{locale:x,priority:!0,bypassPrefetchedCheck:!0},T)}};if(o.isAbsoluteUrl(B))$.href=B;else if(!C||A||"a"===a.type&&!("href"in a.props)){let e=void 0!==x?x:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&p.getDomainLocale(B,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);$.href=t||h.addBasePath(f.addLocale(B,e,null==L?void 0:L.defaultLocale))}return C?i.default.cloneElement(a,$):i.default.createElement("a",Object.assign({},O,$),r)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:u}=e,o=u||!i,[f,d]=a.useState(!1),c=a.useRef(null),y=a.useCallback(e=>{c.current=e},[]);a.useEffect(()=>{if(i){if(o||f)return;let e=c.current;if(e&&e.tagName){let a=function(e,t,r){let{id:a,observer:l,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},a=n.find(e=>e.root===r.root&&e.margin===r.margin);if(a&&(t=s.get(a)))return t;let l=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:l},n.push(r),s.set(r,t),t}(r);return i.set(e,t),l.observe(e),function(){if(i.delete(e),l.unobserve(e),0===i.size){l.disconnect(),s.delete(a);let e=n.findIndex(e=>e.root===a.root&&e.margin===a.margin);e>-1&&n.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r});return a}}else if(!f){let e=l.requestIdleCallback(()=>d(!0));return()=>l.cancelIdleCallback(e)}},[o,r,t,f,c.current]);let p=a.useCallback(()=>{d(!1)},[]);return[y,f,p]};var a=r(7294),l=r(29);let i="function"==typeof IntersectionObserver,s=new Map,n=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){r(5569)},7536:function(e,t,r){"use strict";r.d(t,{cI:function(){return eh}});var a=r(7294),l=e=>"checkbox"===e.type,i=e=>e instanceof Date,s=e=>null==e;let n=e=>"object"==typeof e;var u=e=>!s(e)&&!Array.isArray(e)&&n(e)&&!i(e),o=e=>u(e)&&e.target?l(e.target)?e.target.checked:e.target.value:e,f=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,d=(e,t)=>e.has(f(t)),c=e=>{let t=e.constructor&&e.constructor.prototype;return u(t)&&t.hasOwnProperty("isPrototypeOf")},y="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function p(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(y&&(e instanceof Blob||e instanceof FileList))&&(r||u(e))))return e;else if(t=r?[]:{},Array.isArray(e)||c(e))for(let r in e)t[r]=p(e[r]);else t=e;return t}var h=e=>Array.isArray(e)?e.filter(Boolean):[],m=e=>void 0===e,v=(e,t,r)=>{if(!t||!u(e))return r;let a=h(t.split(/[,[\].]+?/)).reduce((e,t)=>s(e)?e:e[t],e);return m(a)||a===e?m(e[t])?r:e[t]:a};let g={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},b={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},_={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};a.createContext(null);var A=(e,t,r,a=!0)=>{let l={defaultValues:t._defaultValues};for(let i in e)Object.defineProperty(l,i,{get:()=>{let l=i;return t._proxyFormState[l]!==b.all&&(t._proxyFormState[l]=!a||b.all),r&&(r[l]=!0),e[l]}});return l},V=e=>u(e)&&!Object.keys(e).length,w=(e,t,r,a)=>{r(e);let{name:l,...i}=e;return V(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(e=>t[e]===(!a||b.all))},k=e=>Array.isArray(e)?e:[e],x=e=>"string"==typeof e,S=(e,t,r,a,l)=>x(e)?(a&&t.watch.add(e),v(r,e,l)):Array.isArray(e)?e.map(e=>(a&&t.watch.add(e),v(r,e))):(a&&(t.watchAll=!0),r),D=e=>/^\w*$/.test(e),F=e=>h(e.replace(/["|']|\]/g,"").split(/\.|\[/));function C(e,t,r){let a=-1,l=D(t)?[t]:F(t),i=l.length,s=i-1;for(;++a<i;){let t=l[a],i=r;if(a!==s){let r=e[t];i=u(r)||Array.isArray(r)?r:isNaN(+l[a+1])?{}:[]}e[t]=i,e=e[t]}return e}var O=(e,t,r,a,l)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:l||!0}}:{};let E=(e,t,r)=>{for(let a of r||Object.keys(e)){let r=v(e,a);if(r){let{_f:e,...a}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else u(a)&&E(a,t)}}};var L=e=>({isOnSubmit:!e||e===b.onSubmit,isOnBlur:e===b.onBlur,isOnChange:e===b.onChange,isOnAll:e===b.all,isOnTouch:e===b.onTouched}),M=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),j=(e,t,r)=>{let a=h(v(e,r));return C(a,"root",t[r]),C(e,r,a),e},T=e=>"boolean"==typeof e,U=e=>"file"===e.type,B=e=>"function"==typeof e,N=e=>{if(!y)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},P=e=>x(e),R=e=>"radio"===e.type,I=e=>e instanceof RegExp;let q={value:!1,isValid:!1},H={value:!0,isValid:!0};var K=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!m(e[0].attributes.value)?m(e[0].value)||""===e[0].value?H:{value:e[0].value,isValid:!0}:H:q}return q};let $={isValid:!1,value:null};var Z=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,$):$;function z(e,t,r="validate"){if(P(e)||Array.isArray(e)&&e.every(P)||T(e)&&!e)return{type:r,message:P(e)?e:"",ref:t}}var G=e=>u(e)&&!I(e)?e:{value:e,message:""},W=async(e,t,r,a,i)=>{let{ref:n,refs:o,required:f,maxLength:d,minLength:c,min:y,max:p,pattern:h,validate:g,name:b,valueAsNumber:A,mount:w,disabled:k}=e._f,S=v(t,b);if(!w||k)return{};let D=o?o[0]:n,F=e=>{a&&D.reportValidity&&(D.setCustomValidity(T(e)?"":e||""),D.reportValidity())},C={},E=R(n),L=l(n),M=(A||U(n))&&m(n.value)&&m(S)||N(n)&&""===n.value||""===S||Array.isArray(S)&&!S.length,j=O.bind(null,b,r,C),q=(e,t,r,a=_.maxLength,l=_.minLength)=>{let i=e?t:r;C[b]={type:e?a:l,message:i,ref:n,...j(e?a:l,i)}};if(i?!Array.isArray(S)||!S.length:f&&(!(E||L)&&(M||s(S))||T(S)&&!S||L&&!K(o).isValid||E&&!Z(o).isValid)){let{value:e,message:t}=P(f)?{value:!!f,message:f}:G(f);if(e&&(C[b]={type:_.required,message:t,ref:D,...j(_.required,t)},!r))return F(t),C}if(!M&&(!s(y)||!s(p))){let e,t;let a=G(p),l=G(y);if(s(S)||isNaN(S)){let r=n.valueAsDate||new Date(S),i=e=>new Date(new Date().toDateString()+" "+e),s="time"==n.type,u="week"==n.type;x(a.value)&&S&&(e=s?i(S)>i(a.value):u?S>a.value:r>new Date(a.value)),x(l.value)&&S&&(t=s?i(S)<i(l.value):u?S<l.value:r<new Date(l.value))}else{let r=n.valueAsNumber||(S?+S:S);s(a.value)||(e=r>a.value),s(l.value)||(t=r<l.value)}if((e||t)&&(q(!!e,a.message,l.message,_.max,_.min),!r))return F(C[b].message),C}if((d||c)&&!M&&(x(S)||i&&Array.isArray(S))){let e=G(d),t=G(c),a=!s(e.value)&&S.length>+e.value,l=!s(t.value)&&S.length<+t.value;if((a||l)&&(q(a,e.message,t.message),!r))return F(C[b].message),C}if(h&&!M&&x(S)){let{value:e,message:t}=G(h);if(I(e)&&!S.match(e)&&(C[b]={type:_.pattern,message:t,ref:n,...j(_.pattern,t)},!r))return F(t),C}if(g){if(B(g)){let e=await g(S,t),a=z(e,D);if(a&&(C[b]={...a,...j(_.validate,a.message)},!r))return F(a.message),C}else if(u(g)){let e={};for(let a in g){if(!V(e)&&!r)break;let l=z(await g[a](S,t),D,a);l&&(e={...l,...j(a,l.message)},F(l.message),r&&(C[b]=e))}if(!V(e)&&(C[b]={ref:D,...e},!r))return C}}return F(!0),C};function J(e,t){let r=Array.isArray(t)?t:D(t)?[t]:F(t),a=1===r.length?e:function(e,t){let r=t.slice(0,-1).length,a=0;for(;a<r;)e=m(e)?a++:e[t[a++]];return e}(e,r),l=r.length-1,i=r[l];return a&&delete a[i],0!==l&&(u(a)&&V(a)||Array.isArray(a)&&function(e){for(let t in e)if(!m(e[t]))return!1;return!0}(a))&&J(e,r.slice(0,-1)),e}function Q(){let e=[],t=t=>{for(let r of e)r.next&&r.next(t)},r=t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),a=()=>{e=[]};return{get observers(){return e},next:t,subscribe:r,unsubscribe:a}}var X=e=>s(e)||!n(e);function Y(e,t){if(X(e)||X(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();let r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(let l of r){let r=e[l];if(!a.includes(l))return!1;if("ref"!==l){let e=t[l];if(i(r)&&i(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!Y(r,e):r!==e)return!1}}return!0}var ee=e=>"select-multiple"===e.type,et=e=>R(e)||l(e),er=e=>N(e)&&e.isConnected,ea=e=>{for(let t in e)if(B(e[t]))return!0;return!1};function el(e,t={}){let r=Array.isArray(e);if(u(e)||r)for(let r in e)Array.isArray(e[r])||u(e[r])&&!ea(e[r])?(t[r]=Array.isArray(e[r])?[]:{},el(e[r],t[r])):s(e[r])||(t[r]=!0);return t}var ei=(e,t)=>(function e(t,r,a){let l=Array.isArray(t);if(u(t)||l)for(let l in t)Array.isArray(t[l])||u(t[l])&&!ea(t[l])?m(r)||X(a[l])?a[l]=Array.isArray(t[l])?el(t[l],[]):{...el(t[l])}:e(t[l],s(r)?{}:r[l],a[l]):a[l]=!Y(t[l],r[l]);return a})(e,t,el(t)),es=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:a})=>m(e)?e:t?""===e?NaN:e?+e:e:r&&x(e)?new Date(e):a?a(e):e;function en(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:U(t)?t.files:R(t)?Z(e.refs).value:ee(t)?[...t.selectedOptions].map(({value:e})=>e):l(t)?K(e.refs).value:es(m(t.value)?e.ref.value:t.value,e)}var eu=(e,t,r,a)=>{let l={};for(let r of e){let e=v(t,r);e&&C(l,r,e._f)}return{criteriaMode:r,names:[...e],fields:l,shouldUseNativeValidation:a}},eo=e=>m(e)?e:I(e)?e.source:u(e)?I(e.value)?e.value.source:e.value:e,ef=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ed(e,t,r){let a=v(e,r);if(a||D(r))return{error:a,name:r};let l=r.split(".");for(;l.length;){let a=l.join("."),i=v(t,a),s=v(e,a);if(i&&!Array.isArray(i)&&r!==a)break;if(s&&s.type)return{name:a,error:s};l.pop()}return{name:r}}var ec=(e,t,r,a,l)=>!l.isOnAll&&(!r&&l.isOnTouch?!(t||e):(r?a.isOnBlur:l.isOnBlur)?!e:(r?!a.isOnChange:!l.isOnChange)||e),ey=(e,t)=>!h(v(e,t)).length&&J(e,t);let ep={mode:b.onSubmit,reValidateMode:b.onChange,shouldFocusError:!0};function eh(e={}){let t=a.useRef(),[r,n]=a.useState({isDirty:!1,isValidating:!1,isLoading:B(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:B(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={},t){let r,a={...ep,...e},n={submitCount:0,isDirty:!1,isLoading:B(a.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},f={},c=(u(a.defaultValues)||u(a.values))&&p(a.defaultValues||a.values)||{},_=a.shouldUnregister?{}:p(c),A={action:!1,mount:!1,watch:!1},w={mount:new Set,unMount:new Set,array:new Set,watch:new Set},D=0,F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},O={values:Q(),array:Q(),state:Q()},P=e.resetOptions&&e.resetOptions.keepDirtyValues,R=L(a.mode),I=L(a.reValidateMode),q=a.criteriaMode===b.all,H=e=>t=>{clearTimeout(D),D=setTimeout(e,t)},K=async e=>{if(F.isValid||e){let e=a.resolver?V((await eh()).errors):await ev(f,!0);e!==n.isValid&&O.state.next({isValid:e})}},$=e=>F.isValidating&&O.state.next({isValidating:e}),Z=(e,t=[],r,a,l=!0,i=!0)=>{if(a&&r){if(A.action=!0,i&&Array.isArray(v(f,e))){let t=r(v(f,e),a.argA,a.argB);l&&C(f,e,t)}if(i&&Array.isArray(v(n.errors,e))){let t=r(v(n.errors,e),a.argA,a.argB);l&&C(n.errors,e,t),ey(n.errors,e)}if(F.touchedFields&&i&&Array.isArray(v(n.touchedFields,e))){let t=r(v(n.touchedFields,e),a.argA,a.argB);l&&C(n.touchedFields,e,t)}F.dirtyFields&&(n.dirtyFields=ei(c,_)),O.state.next({name:e,isDirty:eb(e,t),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else C(_,e,t)},z=(e,t)=>{C(n.errors,e,t),O.state.next({errors:n.errors})},G=(e,t,r,a)=>{let l=v(f,e);if(l){let i=v(_,e,m(r)?v(c,e):r);m(i)||a&&a.defaultChecked||t?C(_,e,t?i:en(l._f)):eV(e,i),A.mount&&K()}},ea=(e,t,r,a,l)=>{let i=!1,s=!1,u={name:e};if(!r||a){F.isDirty&&(s=n.isDirty,n.isDirty=u.isDirty=eb(),i=s!==u.isDirty);let r=Y(v(c,e),t);s=v(n.dirtyFields,e),r?J(n.dirtyFields,e):C(n.dirtyFields,e,!0),u.dirtyFields=n.dirtyFields,i=i||F.dirtyFields&&!r!==s}if(r){let t=v(n.touchedFields,e);t||(C(n.touchedFields,e,r),u.touchedFields=n.touchedFields,i=i||F.touchedFields&&t!==r)}return i&&l&&O.state.next(u),i?u:{}},el=(t,a,l,i)=>{let s=v(n.errors,t),u=F.isValid&&T(a)&&n.isValid!==a;if(e.delayError&&l?(r=H(()=>z(t,l)))(e.delayError):(clearTimeout(D),r=null,l?C(n.errors,t,l):J(n.errors,t)),(l?!Y(s,l):s)||!V(i)||u){let e={...i,...u&&T(a)?{isValid:a}:{},errors:n.errors,name:t};n={...n,...e},O.state.next(e)}$(!1)},eh=async e=>a.resolver(_,a.context,eu(e||w.mount,f,a.criteriaMode,a.shouldUseNativeValidation)),em=async e=>{let{errors:t}=await eh();if(e)for(let r of e){let e=v(t,r);e?C(n.errors,r,e):J(n.errors,r)}else n.errors=t;return t},ev=async(e,t,r={valid:!0})=>{for(let l in e){let i=e[l];if(i){let{_f:e,...l}=i;if(e){let l=w.array.has(e.name),s=await W(i,_,q,a.shouldUseNativeValidation&&!t,l);if(s[e.name]&&(r.valid=!1,t))break;t||(v(s,e.name)?l?j(n.errors,s,e.name):C(n.errors,e.name,s[e.name]):J(n.errors,e.name))}l&&await ev(l,t,r)}}return r.valid},eg=()=>{for(let e of w.unMount){let t=v(f,e);t&&(t._f.refs?t._f.refs.every(e=>!er(e)):!er(t._f.ref))&&eL(e)}w.unMount=new Set},eb=(e,t)=>(e&&t&&C(_,e,t),!Y(eD(),c)),e_=(e,t,r)=>S(e,w,{...A.mount?_:m(t)?c:x(e)?{[e]:t}:t},r,t),eA=t=>h(v(A.mount?_:c,t,e.shouldUnregister?v(c,t,[]):[])),eV=(e,t,r={})=>{let a=v(f,e),i=t;if(a){let r=a._f;r&&(r.disabled||C(_,e,es(t,r)),i=N(r.ref)&&s(t)?"":t,ee(r.ref)?[...r.ref.options].forEach(e=>e.selected=i.includes(e.value)):r.refs?l(r.ref)?r.refs.length>1?r.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find(t=>t===e.value):i===e.value)):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach(e=>e.checked=e.value===i):U(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||O.values.next({name:e,values:{..._}})))}(r.shouldDirty||r.shouldTouch)&&ea(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&eS(e)},ew=(e,t,r)=>{for(let a in t){let l=t[a],s=`${e}.${a}`,n=v(f,s);!w.array.has(e)&&X(l)&&(!n||n._f)||i(l)?eV(s,l,r):ew(s,l,r)}},ek=(e,r,a={})=>{let l=v(f,e),i=w.array.has(e),u=p(r);C(_,e,u),i?(O.array.next({name:e,values:{..._}}),(F.isDirty||F.dirtyFields)&&a.shouldDirty&&O.state.next({name:e,dirtyFields:ei(c,_),isDirty:eb(e,u)})):!l||l._f||s(u)?eV(e,u,a):ew(e,u,a),M(e,w)&&O.state.next({...n}),O.values.next({name:e,values:{..._}}),A.mount||t()},ex=async e=>{let t=e.target,l=t.name,i=!0,s=v(f,l);if(s){let u,d;let c=t.type?en(s._f):o(e),y=e.type===g.BLUR||e.type===g.FOCUS_OUT,p=!ef(s._f)&&!a.resolver&&!v(n.errors,l)&&!s._f.deps||ec(y,v(n.touchedFields,l),n.isSubmitted,I,R),h=M(l,w,y);C(_,l,c),y?(s._f.onBlur&&s._f.onBlur(e),r&&r(0)):s._f.onChange&&s._f.onChange(e);let m=ea(l,c,y,!1),b=!V(m)||h;if(y||O.values.next({name:l,type:e.type,values:{..._}}),p)return F.isValid&&K(),b&&O.state.next({name:l,...h?{}:m});if(!y&&h&&O.state.next({...n}),$(!0),a.resolver){let{errors:e}=await eh([l]),t=ed(n.errors,f,l),r=ed(e,f,t.name||l);u=r.error,l=r.name,d=V(e)}else u=(await W(s,_,q,a.shouldUseNativeValidation))[l],(i=isNaN(c)||c===v(_,l,c))&&(u?d=!1:F.isValid&&(d=await ev(f,!0)));i&&(s._f.deps&&eS(s._f.deps),el(l,d,u,m))}},eS=async(e,t={})=>{let r,l;let i=k(e);if($(!0),a.resolver){let t=await em(m(e)?e:i);r=V(t),l=e?!i.some(e=>v(t,e)):r}else e?((l=(await Promise.all(i.map(async e=>{let t=v(f,e);return await ev(t&&t._f?{[e]:t}:t)}))).every(Boolean))||n.isValid)&&K():l=r=await ev(f);return O.state.next({...!x(e)||F.isValid&&r!==n.isValid?{}:{name:e},...a.resolver||!e?{isValid:r}:{},errors:n.errors,isValidating:!1}),t.shouldFocus&&!l&&E(f,e=>e&&v(n.errors,e),e?i:w.mount),l},eD=e=>{let t={...c,...A.mount?_:{}};return m(e)?t:x(e)?v(t,e):e.map(e=>v(t,e))},eF=(e,t)=>({invalid:!!v((t||n).errors,e),isDirty:!!v((t||n).dirtyFields,e),isTouched:!!v((t||n).touchedFields,e),error:v((t||n).errors,e)}),eC=e=>{e&&k(e).forEach(e=>J(n.errors,e)),O.state.next({errors:e?n.errors:{}})},eO=(e,t,r)=>{let a=(v(f,e,{_f:{}})._f||{}).ref;C(n.errors,e,{...t,ref:a}),O.state.next({name:e,errors:n.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},eE=(e,t)=>B(e)?O.values.subscribe({next:r=>e(e_(void 0,t),r)}):e_(e,t,!0),eL=(e,t={})=>{for(let r of e?k(e):w.mount)w.mount.delete(r),w.array.delete(r),t.keepValue||(J(f,r),J(_,r)),t.keepError||J(n.errors,r),t.keepDirty||J(n.dirtyFields,r),t.keepTouched||J(n.touchedFields,r),a.shouldUnregister||t.keepDefaultValue||J(c,r);O.values.next({values:{..._}}),O.state.next({...n,...t.keepDirty?{isDirty:eb()}:{}}),t.keepIsValid||K()},eM=(e,t={})=>{let r=v(f,e),l=T(t.disabled);return C(f,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),w.mount.add(e),r?l&&C(_,e,t.disabled?void 0:v(_,e,en(r._f))):G(e,!0,t.value),{...l?{disabled:t.disabled}:{},...a.shouldUseNativeValidation?{required:!!t.required,min:eo(t.min),max:eo(t.max),minLength:eo(t.minLength),maxLength:eo(t.maxLength),pattern:eo(t.pattern)}:{},name:e,onChange:ex,onBlur:ex,ref:l=>{if(l){eM(e,t),r=v(f,e);let a=m(l.value)&&l.querySelectorAll&&l.querySelectorAll("input,select,textarea")[0]||l,i=et(a),s=r._f.refs||[];(i?s.find(e=>e===a):a===r._f.ref)||(C(f,e,{_f:{...r._f,...i?{refs:[...s.filter(er),a,...Array.isArray(v(c,e))?[{}]:[]],ref:{type:a.type,name:e}}:{ref:a}}}),G(e,!1,void 0,a))}else(r=v(f,e,{}))._f&&(r._f.mount=!1),(a.shouldUnregister||t.shouldUnregister)&&!(d(w.array,e)&&A.action)&&w.unMount.add(e)}}},ej=()=>a.shouldFocusError&&E(f,e=>e&&v(n.errors,e),w.mount),eT=(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let l=p(_);if(O.state.next({isSubmitting:!0}),a.resolver){let{errors:e,values:t}=await eh();n.errors=e,l=t}else await ev(f);J(n.errors,"root"),V(n.errors)?(O.state.next({errors:{}}),await e(l,r)):(t&&await t({...n.errors},r),ej(),setTimeout(ej)),O.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:V(n.errors),submitCount:n.submitCount+1,errors:n.errors})},eU=(e,t={})=>{v(f,e)&&(m(t.defaultValue)?ek(e,v(c,e)):(ek(e,t.defaultValue),C(c,e,t.defaultValue)),t.keepTouched||J(n.touchedFields,e),t.keepDirty||(J(n.dirtyFields,e),n.isDirty=t.defaultValue?eb(e,v(c,e)):eb()),!t.keepError&&(J(n.errors,e),F.isValid&&K()),O.state.next({...n}))},eB=(r,a={})=>{let l=r||c,i=p(l),s=r&&!V(r)?i:c;if(a.keepDefaultValues||(c=l),!a.keepValues){if(a.keepDirtyValues||P)for(let e of w.mount)v(n.dirtyFields,e)?C(s,e,v(_,e)):ek(e,v(s,e));else{if(y&&m(r))for(let e of w.mount){let t=v(f,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(N(e)){let t=e.closest("form");if(t){t.reset();break}}}}f={}}_=e.shouldUnregister?a.keepDefaultValues?p(c):{}:i,O.array.next({values:{...s}}),O.values.next({values:{...s}})}w={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},A.mount||t(),A.mount=!F.isValid||!!a.keepIsValid,A.watch=!!e.shouldUnregister,O.state.next({submitCount:a.keepSubmitCount?n.submitCount:0,isDirty:a.keepDirty?n.isDirty:!!(a.keepDefaultValues&&!Y(r,c)),isSubmitted:!!a.keepIsSubmitted&&n.isSubmitted,dirtyFields:a.keepDirtyValues?n.dirtyFields:a.keepDefaultValues&&r?ei(c,r):{},touchedFields:a.keepTouched?n.touchedFields:{},errors:a.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},eN=(e,t)=>eB(B(e)?e(_):e,t),eP=(e,t={})=>{let r=v(f,e),a=r&&r._f;if(a){let e=a.refs?a.refs[0]:a.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},eR=e=>{n={...n,...e}},eI=()=>B(a.defaultValues)&&a.defaultValues().then(e=>{eN(e,a.resetOptions),O.state.next({isLoading:!1})});return{control:{register:eM,unregister:eL,getFieldState:eF,_executeSchema:eh,_getWatch:e_,_getDirty:eb,_updateValid:K,_removeUnmounted:eg,_updateFieldArray:Z,_getFieldArray:eA,_reset:eB,_resetDefaultValues:eI,_updateFormState:eR,_subjects:O,_proxyFormState:F,get _fields(){return f},get _formValues(){return _},get _state(){return A},set _state(value){A=value},get _defaultValues(){return c},get _names(){return w},set _names(value){w=value},get _formState(){return n},set _formState(value){n=value},get _options(){return a},set _options(value){a={...a,...value}}},trigger:eS,register:eM,handleSubmit:eT,watch:eE,setValue:ek,getValues:eD,reset:eN,resetField:eU,clearErrors:eC,unregister:eL,setError:eO,setFocus:eP,getFieldState:eF}}(e,()=>n(e=>({...e}))),formState:r});let f=t.current.control;return f._options=e,!function(e){let t=a.useRef(e);t.current=e,a.useEffect(()=>{let r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}({subject:f._subjects.state,next:e=>{w(e,f._proxyFormState,f._updateFormState,!0)&&n({...f._formState})}}),a.useEffect(()=>{e.values&&!Y(e.values,f._defaultValues)?f._reset(e.values,f._options.resetOptions):f._resetDefaultValues()},[e.values,f]),a.useEffect(()=>{f._state.mount||(f._updateValid(),f._state.mount=!0),f._state.watch&&(f._state.watch=!1,f._subjects.state.next({...f._formState})),f._removeUnmounted()}),t.current.formState=A(r,f),t.current}}}]);