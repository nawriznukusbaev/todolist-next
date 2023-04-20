"use strict";
(() => {
var exports = {};
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "next/dist/lib/import-next-warning"
var import_next_warning_ = __webpack_require__(160);
;// CONCATENATED MODULE: ./pages/[id].js



const UserPage = ({ user , posts  })=>{
    console.log(posts);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                style: {
                    fontSize: "30px"
                },
                children: user.name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "left",
                    width: "1000px",
                    padding: "25px",
                    border: "solid 0.1px black",
                    backgroundColor: "orange"
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        style: {
                            fontSize: "25px"
                        },
                        children: [
                            "Phone: ",
                            user.phone
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        style: {
                            fontSize: "25px"
                        },
                        children: [
                            "Address: ",
                            user.address.city,
                            ",",
                            user.address.street_address
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                style: {
                    fontSize: "30px"
                },
                children: "Posts"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "left",
                    width: "1000px",
                    padding: "25px",
                    border: "solid 0.1px black",
                    backgroundColor: "deepskyblue "
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    style: {
                        listStyle: "none"
                    },
                    children: posts.map((post)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            style: {
                                height: "30px",
                                color: "white",
                                fontSize: "25px",
                                border: "solid 0.1px black",
                                padding: "5px"
                            },
                            children: post.title
                        });
                    })
                })
            })
        ]
    });
};
async function getServerSideProps({ query  }) {
    console.log(query);
    const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${query.user_id}`);
    const dataUser = await resUser.json();
    const resPosts = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const dataPosts = await resPosts.json();
    return {
        props: {
            user: dataUser,
            posts: dataPosts.filter((data)=>data.userId === +query.user_id)
        }
    };
}
/* harmony default export */ const _id_ = (UserPage);


/***/ }),

/***/ 160:
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

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
var __webpack_exports__ = (__webpack_exec__(211));
module.exports = __webpack_exports__;

})();