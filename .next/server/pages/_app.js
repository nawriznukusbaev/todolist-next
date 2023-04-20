"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(648);
// EXTERNAL MODULE: ./redux/slices/todoSlice.js
var todoSlice = __webpack_require__(579);
;// CONCATENATED MODULE: ./redux/store.js



const makeStore = ()=>(0,toolkit_.configureStore)({
        reducer: {
            nodes: todoSlice/* toDoSlice.reducer */.D8.reducer
        },
        devTools: true
    });
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(makeStore);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , ...rest }) {
    const { store , props  } = wrapper.useWrappedStore(rest);
    const { pageProps  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [579], () => (__webpack_exec__(716)));
module.exports = __webpack_exports__;

})();