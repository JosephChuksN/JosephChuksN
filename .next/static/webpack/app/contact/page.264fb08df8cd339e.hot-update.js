"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contact/page",{

/***/ "(app-client)/./components/ContactForm.tsx":
/*!************************************!*\
  !*** ./components/ContactForm.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-client)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-client)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar ContactForm = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), name = _useState[0], setName = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), email = _useState1[0], setEmail = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), message = _useState2[0], setMessage = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(/*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function() {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function(_state) {\n            return [\n                2\n            ];\n        });\n    }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-5 w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"rounded-sm p-2 bg-[#00000082] text-gray-100 font-para\",\n                type: \"text\",\n                name: \"name\",\n                value: name,\n                onChange: function(e) {\n                    setName(e.target.value);\n                },\n                placeholder: \"Name\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"rounded-sm p-2 bg-[#00000082]  text-gray-100 font-para\",\n                type: \"email\",\n                name: \"email\",\n                value: email,\n                onChange: function(e) {\n                    setEmail(e.target.value);\n                },\n                placeholder: \"Email\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                className: \"rounded-sm p-2 bg-[#00000082]  text-gray-100 resize-none font-para\",\n                name: \"message\",\n                value: message,\n                onChange: function(e) {\n                    setMessage(e.target.value);\n                },\n                cols: 10,\n                rows: 8,\n                placeholder: \"Your message\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-[#F78D26]/70 hover:bg-[#F78D26] transition-all delay-75 duration-300 ease-out p-3 flex items-center justify-center rounded-sm text-gray-50 font-headers\",\n                children: \"Send message\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 42,\n                columnNumber: 10\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, _this);\n};\n_s(ContactForm, \"bdr8PaUKB2LV8yja8zSWNhh2nRs=\");\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMrQztBQUUvQyxJQUFNRSxjQUFpQjs7SUFFcEIsSUFBd0JGLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBUyxTQUFsQ0csT0FBaUJILGNBQVhJLFVBQVdKO0lBQ3hCLElBQTBCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsU0FBcENLLFFBQW1CTCxlQUFaTSxXQUFZTjtJQUMxQixJQUE4QkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFTLFNBQXhDTyxVQUF1QlAsZUFBZFEsYUFBY1I7SUFHOUJDLGdEQUFTQSxlQUFDOzs7Ozs7SUFFVjtJQUlELHFCQUVNLDhEQUFDUTtRQUFLQyxXQUFVOzswQkFDaEIsOERBQUNDO2dCQUFNRCxXQUFVO2dCQUNoQkUsTUFBSztnQkFDTFQsTUFBSztnQkFDTFUsT0FBT1Y7Z0JBQ1BXLFVBQVUsU0FBQ0M7b0JBQUtYLFFBQVFXLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQkFBQztnQkFDdkNJLGFBQVk7Ozs7OzswQkFFYiw4REFBQ047Z0JBQU1ELFdBQVU7Z0JBQ2pCRSxNQUFLO2dCQUNMVCxNQUFLO2dCQUNMVSxPQUFPUjtnQkFDUFMsVUFBVSxTQUFDQztvQkFBS1QsU0FBU1MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dCQUFDO2dCQUN4Q0ksYUFBWTs7Ozs7OzBCQUVaLDhEQUFDQztnQkFBU1IsV0FBVTtnQkFDcEJQLE1BQUs7Z0JBQ0xVLE9BQU9OO2dCQUNQTyxVQUFVLFNBQUNDO29CQUFLUCxXQUFXTyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0JBQUM7Z0JBQzFDTSxNQUFNO2dCQUNOQyxNQUFNO2dCQUNOSCxhQUFZOzs7Ozs7MEJBRVgsOERBQUNJO2dCQUFPVCxNQUFLO2dCQUFTRixXQUFVOzBCQUE2Sjs7Ozs7Ozs7Ozs7O0FBTXRNO0dBNUNNUjtLQUFBQTtBQThDTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtLnRzeD9kNWFhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBDb250YWN0Rm9ybTpGQyA9ICgpID0+IHtcclxuXHJcbiAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXHJcbiAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuXHJcblxyXG4gICB1c2VFZmZlY3QoYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT57XHJcblxyXG4gICB9KVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC01IHctZnVsbFwiPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJyb3VuZGVkLXNtIHAtMiBiZy1bIzAwMDAwMDgyXSB0ZXh0LWdyYXktMTAwIGZvbnQtcGFyYVwiIFxyXG4gICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICBuYW1lPVwibmFtZVwiICBcclxuICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInJvdW5kZWQtc20gcC0yIGJnLVsjMDAwMDAwODJdICB0ZXh0LWdyYXktMTAwIGZvbnQtcGFyYVwiIFxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiICBcclxuICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwicm91bmRlZC1zbSBwLTIgYmctWyMwMDAwMDA4Ml0gIHRleHQtZ3JheS0xMDAgcmVzaXplLW5vbmUgZm9udC1wYXJhXCJcclxuICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICBjb2xzPXsxMH1cclxuICAgICAgICByb3dzPXs4fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBtZXNzYWdlXCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmctWyNGNzhEMjZdLzcwIGhvdmVyOmJnLVsjRjc4RDI2XSB0cmFuc2l0aW9uLWFsbCBkZWxheS03NSBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgcC0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtc20gdGV4dC1ncmF5LTUwIGZvbnQtaGVhZGVyc1wiPlxyXG4gICAgICAgICAgICBTZW5kIG1lc3NhZ2VcclxuICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250YWN0Rm9ybSIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiZm9ybSIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsImNvbHMiLCJyb3dzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/ContactForm.tsx\n"));

/***/ })

});