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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TSEditor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_simple_code_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-simple-code-editor */ \"(app-client)/./node_modules/react-simple-code-editor/lib/index.js\");\n/* harmony import */ var react_simple_code_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-core */ \"(app-client)/./node_modules/prismjs/components/prism-core.js\");\n/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/components/prism-clike */ \"(app-client)/./node_modules/prismjs/components/prism-clike.js\");\n/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/components/prism-javascript */ \"(app-client)/./node_modules/prismjs/components/prism-javascript.js\");\n/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/themes/prism.css */ \"(app-client)/./node_modules/prismjs/themes/prism.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n //Example style, you can use another\nfunction TSEditor(props) {\n    _s();\n    const { currentConfig  } = props;\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_simple_code_editor__WEBPACK_IMPORTED_MODULE_2___default()), {\n            className: \"bg-gray-400\",\n            value: \"export class login implements OnInit {\\n  Angoraform: FormGroup;\\n\\n  constructor(private formBuilder: FormBuilder) {}\\n  ngOnInit() {\\n    this.Angoraform = this.formBuilder.group({\\n      \".concat(currentConfig.formControl[0], \" : ['',[]],\\n      \").concat(currentConfig.formControl[1], \" : ['',[]]\\n    })\\n  }\\n}\\n        \"),\n            onValueChange: (code)=>setCode(code),\n            highlight: (code)=>(0,prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__.highlight)(code, prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_3__.languages.js),\n            padding: 10,\n            style: {\n                fontFamily: '\"Fira code\", \"Fira Mono\", monospace',\n                fontSize: 12\n            }\n        }, void 0, false, {\n            fileName: \"/Users/achen9149/Desktop/Personal Projects/AngoraFormApp/src/app/(components)/TSBuilder.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/achen9149/Desktop/Personal Projects/AngoraFormApp/src/app/(components)/TSBuilder.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(TSEditor, \"DeMoM/F9TqKLFftGs/rnPbEsxbc=\");\n_c = TSEditor;\nvar _c;\n$RefreshReg$(_c, \"TSEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC8oY29tcG9uZW50cykvVFNCdWlsZGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDd0M7QUFDTTtBQUN1QjtBQUM3QjtBQUNLO0FBQ1gsQ0FBQyxvQ0FBb0M7QUFHeEQsU0FBU0ssU0FBVUMsS0FBVSxFQUFFOztJQUU1QyxNQUFNLEVBQUVDLGNBQWEsRUFBRSxHQUFHRDtJQUUxQixNQUFNLENBQUNFLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDakMscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNULGlFQUFNQTtZQUNQUyxXQUFVO1lBQ1ZDLE9BQU8saU1BT0xMLE9BREFBLGNBQWNNLFdBQVcsQ0FBQyxFQUFFLEVBQUMsdUJBQ0EsT0FBN0JOLGNBQWNNLFdBQVcsQ0FBQyxFQUFFLEVBQUM7WUFLN0JDLGVBQWVOLENBQUFBLE9BQVFDLFFBQVFEO1lBQy9CTCxXQUFXSyxDQUFBQSxPQUFRTCx3RUFBU0EsQ0FBQ0ssTUFBTUosdUVBQVk7WUFDL0NZLFNBQVM7WUFDVEMsT0FBTztnQkFDTEMsWUFBWTtnQkFDWkMsVUFBVTtZQUNaOzs7Ozs7Ozs7OztBQUtSLENBQUM7R0FoQ3VCZDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhjb21wb25lbnRzKS9UU0J1aWxkZXIudHN4PzM5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRWRpdG9yIGZyb20gJ3JlYWN0LXNpbXBsZS1jb2RlLWVkaXRvcic7XG5pbXBvcnQgeyBoaWdobGlnaHQsIGxhbmd1YWdlcyB9IGZyb20gJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jb3JlJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNsaWtlJztcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHQnO1xuaW1wb3J0ICdwcmlzbWpzL3RoZW1lcy9wcmlzbS5jc3MnOyAvL0V4YW1wbGUgc3R5bGUsIHlvdSBjYW4gdXNlIGFub3RoZXJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUU0VkaXRvciAocHJvcHM6IGFueSkge1xuXG4gIGNvbnN0IHsgY3VycmVudENvbmZpZyB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoJycpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JvcmRlcic+XG4gICAgICA8RWRpdG9yXG4gICAgICBjbGFzc05hbWU9J2JnLWdyYXktNDAwJ1xuICAgICAgdmFsdWU9e2BleHBvcnQgY2xhc3MgbG9naW4gaW1wbGVtZW50cyBPbkluaXQge1xuICBBbmdvcmFmb3JtOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuQW5nb3JhZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJHtjdXJyZW50Q29uZmlnLmZvcm1Db250cm9sWzBdfSA6IFsnJyxbXV0sXG4gICAgICAke2N1cnJlbnRDb25maWcuZm9ybUNvbnRyb2xbMV19IDogWycnLFtdXVxuICAgIH0pXG4gIH1cbn1cbiAgICAgICAgYH1cbiAgICAgICAgb25WYWx1ZUNoYW5nZT17Y29kZSA9PiBzZXRDb2RlKGNvZGUpfVxuICAgICAgICBoaWdobGlnaHQ9e2NvZGUgPT4gaGlnaGxpZ2h0KGNvZGUsIGxhbmd1YWdlcy5qcyl9XG4gICAgICAgIHBhZGRpbmc9ezEwfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGZvbnRGYW1pbHk6ICdcIkZpcmEgY29kZVwiLCBcIkZpcmEgTW9ub1wiLCBtb25vc3BhY2UnLFxuICAgICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkVkaXRvciIsImhpZ2hsaWdodCIsImxhbmd1YWdlcyIsIlRTRWRpdG9yIiwicHJvcHMiLCJjdXJyZW50Q29uZmlnIiwiY29kZSIsInNldENvZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJ2YWx1ZSIsImZvcm1Db250cm9sIiwib25WYWx1ZUNoYW5nZSIsImpzIiwicGFkZGluZyIsInN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/(components)/TSBuilder.tsx\n"));

/***/ })

});