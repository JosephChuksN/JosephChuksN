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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar ContactForm = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), name = _useState[0], setName = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), email = _useState1[0], setEmail = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), message = _useState2[0], setMessage = _useState2[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-5 w-full\",\n        action: \"https://getform.io/f/b720c0ca-a4f7-4b5c-8cc8-aa14137afbd0\",\n        method: \"POST\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"rounded-sm p-2 bg-[#00000082] text-gray-100 font-para\",\n                type: \"text\",\n                name: \"name\",\n                value: name,\n                onChange: function(e) {\n                    setName(e.target.value);\n                },\n                placeholder: \"Name\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"rounded-sm p-2 bg-[#00000082]  text-gray-100 font-para\",\n                type: \"email\",\n                name: \"email\",\n                value: email,\n                onChange: function(e) {\n                    setEmail(e.target.value);\n                },\n                placeholder: \"Email\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                className: \"rounded-sm p-2 bg-[#00000082]  text-gray-100 resize-none font-para\",\n                name: \"message\",\n                value: message,\n                onChange: function(e) {\n                    setMessage(e.target.value);\n                },\n                cols: 10,\n                rows: 8,\n                placeholder: \"Your message\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-[#F78D26]/70 hover:bg-[#F78D26] transition-all delay-75 duration-300 ease-out p-3 flex items-center justify-center rounded-sm text-gray-50 font-headers\",\n                children: \"Send message\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 37,\n                columnNumber: 10\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, _this);\n};\n_s(ContactForm, \"p54oFk7SUH5bZ7/VKJZjUEiC2Rg=\");\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ29DO0FBRXBDLElBQU1DLGNBQWlCOztJQUVwQixJQUF3QkQsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFTLFNBQWxDRSxPQUFpQkYsY0FBWEcsVUFBV0g7SUFDeEIsSUFBMEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBUyxTQUFwQ0ksUUFBbUJKLGVBQVpLLFdBQVlMO0lBQzFCLElBQThCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsU0FBeENNLFVBQXVCTixlQUFkTyxhQUFjUDtJQUkvQixxQkFFTSw4REFBQ1E7UUFBS0MsV0FBVTtRQUE2QkMsUUFBTztRQUE0REMsUUFBTzs7MEJBQ3ZILDhEQUFDQztnQkFBTUgsV0FBVTtnQkFDaEJJLE1BQUs7Z0JBQ0xYLE1BQUs7Z0JBQ0xZLE9BQU9aO2dCQUNQYSxVQUFVLFNBQUNDO29CQUFLYixRQUFRYSxFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0JBQUM7Z0JBQ3ZDSSxhQUFZOzs7Ozs7MEJBRWIsOERBQUNOO2dCQUFNSCxXQUFVO2dCQUNqQkksTUFBSztnQkFDTFgsTUFBSztnQkFDTFksT0FBT1Y7Z0JBQ1BXLFVBQVUsU0FBQ0M7b0JBQUtYLFNBQVNXLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQkFBQztnQkFDeENJLGFBQVk7Ozs7OzswQkFFWiw4REFBQ0M7Z0JBQVNWLFdBQVU7Z0JBQ3BCUCxNQUFLO2dCQUNMWSxPQUFPUjtnQkFDUFMsVUFBVSxTQUFDQztvQkFBS1QsV0FBV1MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dCQUFDO2dCQUMxQ00sTUFBTTtnQkFDTkMsTUFBTTtnQkFDTkgsYUFBWTs7Ozs7OzBCQUVYLDhEQUFDSTtnQkFBT1QsTUFBSztnQkFBU0osV0FBVTswQkFBNko7Ozs7Ozs7Ozs7OztBQU10TTtHQXZDTVI7S0FBQUE7QUF5Q04sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS50c3g/ZDVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtOkZDID0gKCkgPT4ge1xyXG5cclxuICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG4gICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC01IHctZnVsbFwiIGFjdGlvbj1cImh0dHBzOi8vZ2V0Zm9ybS5pby9mL2I3MjBjMGNhLWE0ZjctNGI1Yy04Y2M4LWFhMTQxMzdhZmJkMFwiIG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicm91bmRlZC1zbSBwLTIgYmctWyMwMDAwMDA4Ml0gdGV4dC1ncmF5LTEwMCBmb250LXBhcmFcIiBcclxuICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgbmFtZT1cIm5hbWVcIiAgXHJcbiAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0TmFtZShlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJyb3VuZGVkLXNtIHAtMiBiZy1bIzAwMDAwMDgyXSAgdGV4dC1ncmF5LTEwMCBmb250LXBhcmFcIiBcclxuICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICBuYW1lPVwiZW1haWxcIiAgXHJcbiAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInJvdW5kZWQtc20gcC0yIGJnLVsjMDAwMDAwODJdICB0ZXh0LWdyYXktMTAwIHJlc2l6ZS1ub25lIGZvbnQtcGFyYVwiXHJcbiAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgY29scz17MTB9XHJcbiAgICAgICAgcm93cz17OH1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbWVzc2FnZVwiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJnLVsjRjc4RDI2XS83MCBob3ZlcjpiZy1bI0Y3OEQyNl0gdHJhbnNpdGlvbi1hbGwgZGVsYXktNzUgZHVyYXRpb24tMzAwIGVhc2Utb3V0IHAtMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLXNtIHRleHQtZ3JheS01MCBmb250LWhlYWRlcnNcIj5cclxuICAgICAgICAgICAgU2VuZCBtZXNzYWdlXHJcbiAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ29udGFjdEZvcm0iLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImZvcm0iLCJjbGFzc05hbWUiLCJhY3Rpb24iLCJtZXRob2QiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJjb2xzIiwicm93cyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/ContactForm.tsx\n"));

/***/ })

});