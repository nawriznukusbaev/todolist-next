"use strict";
exports.id = 579;
exports.ids = [579];
exports.modules = {

/***/ 579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AL": () => (/* binding */ addNote),
/* harmony export */   "D8": () => (/* binding */ toDoSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    value: [
        {
            id: 1,
            description: "Nawriz",
            isActive: true
        }
    ]
};
const toDoSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "nodes",
    initialState,
    reducers: {
        // Action to add comment
        addNote: (state, action)=>{
            const lastId = state.value[state.value.length - 1].id;
            let defaulValue = {
                id: lastId + 1,
                description: action.payload.description,
                isActive: false
            };
            state.value.push(defaulValue);
        },
        // Special reducer for hydrating the state
        extraReducers: {
            [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE]: (state, action)=>{
                return {
                    ...state,
                    ...action.payload.nodes
                };
            }
        }
    }
});
const { addNote  } = toDoSlice.actions;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (toDoSlice.reducer);


/***/ })

};
;