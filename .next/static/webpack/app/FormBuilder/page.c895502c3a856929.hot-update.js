"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/FormBuilder/page",{

/***/ "(app-client)/./src/app/(components)/TSBuilder.tsx":
/*!********************************************!*\
  !*** ./src/app/(components)/TSBuilder.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TSEditor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_simple_code_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-simple-code-editor */ \"(app-client)/./node_modules/react-simple-code-editor/lib/index.js\");\n/* harmony import */ var react_simple_code_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-core */ \"(app-client)/./node_modules/prismjs/components/prism-core.js\");\n/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-clike */ \"(app-client)/./node_modules/prismjs/components/prism-clike.js\");\n/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/components/prism-javascript */ \"(app-client)/./node_modules/prismjs/components/prism-javascript.js\");\n/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/themes/prism.css */ \"(app-client)/./node_modules/prismjs/themes/prism.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n //Example style, you can use another\nfunction TSEditor(props) {\n    _s();\n    const { currentConfig  } = props;\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_simple_code_editor__WEBPACK_IMPORTED_MODULE_2___default()), {\n            value: \"\\nexport class login implements OnInit {\\n  Angoraform: FormGroup;\\n\\n  constructor(private formBuilder: FormBuilder) {}\\n  ngOnInit() {\\n    this.Angoraform = this.formBuilder.group({\\n      \".concat(currentConfig.formControl[0], \" : ['',[]],\\n      \").concat(currentConfig.formControl[1], \" : ['',[]]\\n    })\\n  }\\n}\\n        \"),\n            onValueChange: (code)=>setCode(code),\n            highlight: (code)=>(0,prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__.highlight)(code, prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__.languages.js),\n            padding: 10,\n            style: {\n                fontFamily: '\"Fira code\", \"Fira Mono\", monospace',\n                fontSize: 12\n            }\n        }, void 0, false, {\n            fileName: \"/Users/achen9149/Desktop/Personal Projects/AngoraFormApp/src/app/(components)/TSBuilder.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/achen9149/Desktop/Personal Projects/AngoraFormApp/src/app/(components)/TSBuilder.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(TSEditor, \"DeMoM/F9TqKLFftGs/rnPbEsxbc=\");\n_c = TSEditor;\nvar _c;\n$RefreshReg$(_c, \"TSEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC8oY29tcG9uZW50cykvVFNCdWlsZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDd0M7QUFDTTtBQUN1QjtBQUM3QjtBQUNLO0FBQ1gsQ0FBQyxvQ0FBb0M7QUFHeEQsU0FBU0ssU0FBVUMsS0FBVSxFQUFFOztJQUU1QyxNQUFNLEVBQUVDLGNBQWEsRUFBRSxHQUFHRDtJQUUxQixNQUFNLENBQUNFLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDakMscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNULGlFQUFNQTtZQUNMVSxPQUFPLG1NQVFQTCxPQURBQSxjQUFjTSxXQUFXLENBQUMsRUFBRSxFQUFDLHVCQUNBLE9BQTdCTixjQUFjTSxXQUFXLENBQUMsRUFBRSxFQUFDO1lBSzdCQyxlQUFlTixDQUFBQSxPQUFRQyxRQUFRRDtZQUMvQkwsV0FBV0ssQ0FBQUEsT0FBUUwsd0VBQVNBLENBQUNLLE1BQU1KLHVFQUFZO1lBQy9DWSxTQUFTO1lBQ1RDLE9BQU87Z0JBQ0xDLFlBQVk7Z0JBQ1pDLFVBQVU7WUFDWjs7Ozs7Ozs7Ozs7QUFLUixDQUFDO0dBaEN1QmQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oY29tcG9uZW50cykvVFNCdWlsZGVyLnRzeD8zOTIwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVkaXRvciBmcm9tICdyZWFjdC1zaW1wbGUtY29kZS1lZGl0b3InO1xuaW1wb3J0IHsgaGlnaGxpZ2h0LCBsYW5ndWFnZXMgfSBmcm9tICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY29yZSc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jbGlrZSc7XG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0JztcbmltcG9ydCAncHJpc21qcy90aGVtZXMvcHJpc20uY3NzJzsgLy9FeGFtcGxlIHN0eWxlLCB5b3UgY2FuIHVzZSBhbm90aGVyXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVFNFZGl0b3IgKHByb3BzOiBhbnkpIHtcblxuICBjb25zdCB7IGN1cnJlbnRDb25maWcgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKCcnKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdib3JkZXInPlxuICAgICAgPEVkaXRvclxuICAgICAgICB2YWx1ZT17YFxuZXhwb3J0IGNsYXNzIGxvZ2luIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQW5nb3JhZm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLkFuZ29yYWZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICR7Y3VycmVudENvbmZpZy5mb3JtQ29udHJvbFswXX0gOiBbJycsW11dLFxuICAgICAgJHtjdXJyZW50Q29uZmlnLmZvcm1Db250cm9sWzFdfSA6IFsnJyxbXV1cbiAgICB9KVxuICB9XG59XG4gICAgICAgIGB9XG4gICAgICAgIG9uVmFsdWVDaGFuZ2U9e2NvZGUgPT4gc2V0Q29kZShjb2RlKX1cbiAgICAgICAgaGlnaGxpZ2h0PXtjb2RlID0+IGhpZ2hsaWdodChjb2RlLCBsYW5ndWFnZXMuanMpfVxuICAgICAgICBwYWRkaW5nPXsxMH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBmb250RmFtaWx5OiAnXCJGaXJhIGNvZGVcIiwgXCJGaXJhIE1vbm9cIiwgbW9ub3NwYWNlJyxcbiAgICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gICk7XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJFZGl0b3IiLCJoaWdobGlnaHQiLCJsYW5ndWFnZXMiLCJUU0VkaXRvciIsInByb3BzIiwiY3VycmVudENvbmZpZyIsImNvZGUiLCJzZXRDb2RlIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFsdWUiLCJmb3JtQ29udHJvbCIsIm9uVmFsdWVDaGFuZ2UiLCJqcyIsInBhZGRpbmciLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/(components)/TSBuilder.tsx\n"));

/***/ })

});