"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-client)/./src/app/login/page.tsx":
/*!********************************!*\
  !*** ./src/app/login/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"(app-client)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Login() {\n    _s();\n    // some js here\n    // fetch request can occur here to the db to find the user\n    // if not found, log an error\n    const { register , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen grid place-content-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit((data)=>{\n                console.log(data);\n            }),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    ...register(\"email\", {\n                        required: true\n                    }),\n                    className: \"box-border h-25 w-40 p-4 border-4 hover:box-content\",\n                    autoFocus: true,\n                    placeholder: \"Name\"\n                }, void 0, false, {\n                    fileName: \"/Users/ryan/codesmith/AngoraFormApp/src/app/login/page.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    ...register(\"password\", {\n                        required: true\n                    }),\n                    className: \"box-border h-25 w-40 p-4 border-4 hover:box-content\",\n                    placeholder: \"Password\"\n                }, void 0, false, {\n                    fileName: \"/Users/ryan/codesmith/AngoraFormApp/src/app/login/page.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\"\n                }, void 0, false, {\n                    fileName: \"/Users/ryan/codesmith/AngoraFormApp/src/app/login/page.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ryan/codesmith/AngoraFormApp/src/app/login/page.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ryan/codesmith/AngoraFormApp/src/app/login/page.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n} // needs to be centered in the page\n // need to have email / password\n // and Oauth\n_s(Login, \"zkd3JmxRK/AmyiWtSfciHeYO5Zk=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9sb2dpbi9wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMwQztBQUUzQixTQUFTQyxRQUFROztJQUM5QixlQUFlO0lBQ2YsMERBQTBEO0lBQzFELDZCQUE2QjtJQUU3QixNQUFNLEVBQUVDLFNBQVEsRUFBRUMsYUFBWSxFQUFFLEdBQUdILHdEQUFPQTtJQUUxQyxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBWTtrQkFDZiw0RUFBQ0M7WUFBS0MsVUFBWUosYUFBYSxDQUFDSyxPQUFTO2dCQUN2Q0MsUUFBUUMsR0FBRyxDQUFDRjtZQUNkOzs4QkFDRSw4REFBQ0c7b0JBQU8sR0FBR1QsU0FBUyxTQUFTO3dCQUFDVSxVQUFTLElBQUk7b0JBQUEsRUFBRTtvQkFBRVAsV0FBWTtvQkFBc0RRLFNBQVM7b0JBQUNDLGFBQWM7Ozs7Ozs4QkFDekksOERBQUNIO29CQUFPLEdBQUdULFNBQVMsWUFBWTt3QkFBQ1UsVUFBUyxJQUFJO29CQUFBLEVBQUU7b0JBQUVQLFdBQVk7b0JBQXNEUyxhQUFjOzs7Ozs7OEJBQ2xJLDhEQUFDSDtvQkFBTUksTUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEIsQ0FBQyxDQUVELG1DQUFtQztDQUNuQyxnQ0FBZ0M7Q0FDaEMsWUFBWTtHQXRCWWQ7O1FBS2FELG9EQUFPQTs7O0tBTHBCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL3BhZ2UudHN4P2ZjNjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIC8vIHNvbWUganMgaGVyZVxuICAvLyBmZXRjaCByZXF1ZXN0IGNhbiBvY2N1ciBoZXJlIHRvIHRoZSBkYiB0byBmaW5kIHRoZSB1c2VyXG4gIC8vIGlmIG5vdCBmb3VuZCwgbG9nIGFuIGVycm9yXG5cbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZSA9IFwibWluLWgtc2NyZWVuIGdyaWQgcGxhY2UtY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxmb3JtIG9uU3VibWl0ID0ge2hhbmRsZVN1Ym1pdCgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgfSl9PlxuICAgICAgICA8aW5wdXQgey4uLnJlZ2lzdGVyKFwiZW1haWxcIiwge3JlcXVpcmVkOnRydWV9KX0gY2xhc3NOYW1lID0gXCJib3gtYm9yZGVyIGgtMjUgdy00MCBwLTQgYm9yZGVyLTQgaG92ZXI6Ym94LWNvbnRlbnRcIiBhdXRvRm9jdXMgcGxhY2Vob2xkZXIgPSBcIk5hbWVcIi8+XG4gICAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7cmVxdWlyZWQ6dHJ1ZX0pfSBjbGFzc05hbWUgPSBcImJveC1ib3JkZXIgaC0yNSB3LTQwIHAtNCBib3JkZXItNCBob3Zlcjpib3gtY29udGVudFwiIHBsYWNlaG9sZGVyID0gXCJQYXNzd29yZFwiLz5cbiAgICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBuZWVkcyB0byBiZSBjZW50ZXJlZCBpbiB0aGUgcGFnZVxuLy8gbmVlZCB0byBoYXZlIGVtYWlsIC8gcGFzc3dvcmRcbi8vIGFuZCBPYXV0aCJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiTG9naW4iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaW5wdXQiLCJyZXF1aXJlZCIsImF1dG9Gb2N1cyIsInBsYWNlaG9sZGVyIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/login/page.tsx\n"));

/***/ })

});