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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-client)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-client)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar ContactForm = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), name = _useState[0], setName = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), email = _useState1[0], setEmail = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), message = _useState2[0], setMessage = _useState2[1];\n    var handleMessageSubmit = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_3__._)(function() {\n            var data;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_4__.__generator)(this, function(_state) {\n                data = {\n                    name: name\n                };\n                return [\n                    2\n                ];\n            });\n        });\n        return function handleMessageSubmit() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-5 w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"rounded-sm p-2 bg-[#00000082] text-gray-100 font-para\",\n                type: \"text\",\n                name: \"name\",\n                value: name,\n                onChange: function(e) {\n                    setName(e.target.value);\n                },\n                placeholder: \"Name\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"rounded-sm p-2 bg-[#00000082]  text-gray-100 font-para\",\n                type: \"email\",\n                name: \"email\",\n                value: email,\n                onChange: function(e) {\n                    setEmail(e.target.value);\n                },\n                placeholder: \"Email\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                className: \"rounded-sm p-2 bg-[#00000082]  text-gray-100 resize-none font-para\",\n                name: \"message\",\n                value: message,\n                onChange: function(e) {\n                    setMessage(e.target.value);\n                },\n                cols: 10,\n                rows: 8,\n                placeholder: \"Your message\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-[#F78D26]/70 hover:bg-[#F78D26] transition-all delay-75 duration-300 ease-out p-3 flex items-center justify-center rounded-sm text-gray-50 font-headers\",\n                children: \"Send message\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 43,\n                columnNumber: 10\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, _this);\n};\n_s(ContactForm, \"p54oFk7SUH5bZ7/VKJZjUEiC2Rg=\");\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMrQztBQUUvQyxJQUFNQyxjQUFpQjs7SUFFcEIsSUFBd0JELFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBUyxTQUFsQ0UsT0FBaUJGLGNBQVhHLFVBQVdIO0lBQ3hCLElBQTBCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsU0FBcENJLFFBQW1CSixlQUFaSyxXQUFZTDtJQUMxQixJQUE4QkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFTLFNBQXhDTSxVQUF1Qk4sZUFBZE8sYUFBY1A7SUFFakMsSUFBTVE7bUJBQXNCO2dCQUNuQkM7O2dCQUFBQSxPQUFPO29CQUNWUCxNQUFBQTtnQkFFSDs7Ozs7UUFDSDt3QkFMTU07Ozs7SUFRSixxQkFFTSw4REFBQ0U7UUFBS0MsV0FBVTs7MEJBQ2hCLDhEQUFDQztnQkFBTUQsV0FBVTtnQkFDaEJFLE1BQUs7Z0JBQ0xYLE1BQUs7Z0JBQ0xZLE9BQU9aO2dCQUNQYSxVQUFVLFNBQUNDO29CQUFLYixRQUFRYSxFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0JBQUM7Z0JBQ3ZDSSxhQUFZOzs7Ozs7MEJBRWIsOERBQUNOO2dCQUFNRCxXQUFVO2dCQUNqQkUsTUFBSztnQkFDTFgsTUFBSztnQkFDTFksT0FBT1Y7Z0JBQ1BXLFVBQVUsU0FBQ0M7b0JBQUtYLFNBQVNXLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQkFBQztnQkFDeENJLGFBQVk7Ozs7OzswQkFFWiw4REFBQ0M7Z0JBQVNSLFdBQVU7Z0JBQ3BCVCxNQUFLO2dCQUNMWSxPQUFPUjtnQkFDUFMsVUFBVSxTQUFDQztvQkFBS1QsV0FBV1MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dCQUFDO2dCQUMxQ00sTUFBTTtnQkFDTkMsTUFBTTtnQkFDTkgsYUFBWTs7Ozs7OzBCQUVYLDhEQUFDSTtnQkFBT1QsTUFBSztnQkFBU0YsV0FBVTswQkFBNko7Ozs7Ozs7Ozs7OztBQU10TTtHQTdDTVY7S0FBQUE7QUErQ04sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS50c3g/ZDVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgQ29udGFjdEZvcm06RkMgPSAoKSA9PiB7XHJcblxyXG4gICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXHJcbiAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG4gICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXHJcblxyXG5jb25zdCBoYW5kbGVNZXNzYWdlU3VibWl0ID0gYXN5bmMgKCkgPT57XHJcbiAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIFxyXG4gICB9XHJcbn1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC01IHctZnVsbFwiPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJyb3VuZGVkLXNtIHAtMiBiZy1bIzAwMDAwMDgyXSB0ZXh0LWdyYXktMTAwIGZvbnQtcGFyYVwiIFxyXG4gICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICBuYW1lPVwibmFtZVwiICBcclxuICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInJvdW5kZWQtc20gcC0yIGJnLVsjMDAwMDAwODJdICB0ZXh0LWdyYXktMTAwIGZvbnQtcGFyYVwiIFxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiICBcclxuICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwicm91bmRlZC1zbSBwLTIgYmctWyMwMDAwMDA4Ml0gIHRleHQtZ3JheS0xMDAgcmVzaXplLW5vbmUgZm9udC1wYXJhXCJcclxuICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICBjb2xzPXsxMH1cclxuICAgICAgICByb3dzPXs4fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBtZXNzYWdlXCJcclxuICAgICAgICAgLz5cclxuICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmctWyNGNzhEMjZdLzcwIGhvdmVyOmJnLVsjRjc4RDI2XSB0cmFuc2l0aW9uLWFsbCBkZWxheS03NSBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgcC0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtc20gdGV4dC1ncmF5LTUwIGZvbnQtaGVhZGVyc1wiPlxyXG4gICAgICAgICAgICBTZW5kIG1lc3NhZ2VcclxuICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgIFxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDb250YWN0Rm9ybSIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaGFuZGxlTWVzc2FnZVN1Ym1pdCIsImRhdGEiLCJmb3JtIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInRleHRhcmVhIiwiY29scyIsInJvd3MiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/ContactForm.tsx\n"));

/***/ })

});