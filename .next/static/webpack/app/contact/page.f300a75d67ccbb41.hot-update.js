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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _assets_loading_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/loading.gif */ \"(app-client)/./assets/loading.gif\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ var _this = undefined;\n\n\n\nvar ContactForm = function(param) {\n    var name = param.name, email = param.email, message = param.message, loading = param.loading, setName = param.setName, setEmail = param.setEmail, setMessage = param.setMessage, sendMessage = param.sendMessage;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-5 w-full\",\n        onSubmit: sendMessage,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"rounded-sm p-2 bg-[#00000082] text-gray-100 font-para\",\n                type: \"text\",\n                name: \"name\",\n                value: name,\n                onChange: function(e) {\n                    setName(e.target.value);\n                },\n                placeholder: \"Name\",\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"rounded-sm p-2 bg-[#00000082]  text-gray-100 font-para\",\n                type: \"email\",\n                name: \"email\",\n                value: email,\n                onChange: function(e) {\n                    setEmail(e.target.value);\n                },\n                placeholder: \"Email\",\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                className: \"rounded-sm p-2 bg-[#00000082]  text-gray-100 resize-none font-para\",\n                name: \"message\",\n                value: message,\n                onChange: function(e) {\n                    setMessage(e.target.value);\n                },\n                cols: 10,\n                rows: 8,\n                placeholder: \"Your message\",\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-[#F78D26]/70 hover:bg-[#F78D26] transition-all delay-75 duration-300 ease-out p-3 flex items-center justify-center rounded-sm text-gray-50 font-headers\",\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex items-center gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: _assets_loading_gif__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                            alt: \"loading\",\n                            width: 20,\n                            height: 20\n                        }, void 0, false, {\n                            fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, _this),\n                        \"sending...\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                    fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 10\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU0QztBQUNkO0FBYzlCLElBQU1FLGNBQXlCO1FBQzVCQyxhQUFBQSxNQUNBQyxjQUFBQSxPQUNBQyxnQkFBQUEsU0FDQUMsZ0JBQUFBLFNBQ0FDLGdCQUFBQSxTQUNBQyxpQkFBQUEsVUFDQUMsbUJBQUFBLFlBQ0FDLG9CQUFBQTtJQUdELHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVO1FBQTZCQyxVQUFVSDs7MEJBQ3JELDhEQUFDSTtnQkFDQ0YsV0FBVTtnQkFDVkcsTUFBSztnQkFDTFosTUFBSztnQkFDTGEsT0FBT2I7Z0JBQ1BjLFVBQVUsU0FBQ0M7b0JBQ1RYLFFBQVFXLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQkFDeEI7Z0JBQ0FJLGFBQVk7Z0JBQ1pDLFFBQVE7Ozs7OzswQkFFViw4REFBQ1A7Z0JBQ0NGLFdBQVU7Z0JBQ1ZHLE1BQUs7Z0JBQ0xaLE1BQUs7Z0JBQ0xhLE9BQU9aO2dCQUNQYSxVQUFVLFNBQUNDO29CQUNUVixTQUFTVSxFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0JBQ3pCO2dCQUNBSSxhQUFZO2dCQUNaQyxRQUFROzs7Ozs7MEJBRVYsOERBQUNDO2dCQUNDVixXQUFVO2dCQUNWVCxNQUFLO2dCQUNMYSxPQUFPWDtnQkFDUFksVUFBVSxTQUFDQztvQkFDVFQsV0FBV1MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dCQUMzQjtnQkFDQU8sTUFBTTtnQkFDTkMsTUFBTTtnQkFDTkosYUFBWTtnQkFDWkMsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDSTtnQkFDQ1YsTUFBSztnQkFDTEgsV0FBVTswQkFFVE4sd0JBQ0MsOERBQUNvQjtvQkFBS2QsV0FBVTs7c0NBQ2QsOERBQUNYLG1EQUFLQTs0QkFBQzBCLEtBQUszQiwyREFBVUE7NEJBQUU0QixLQUFJOzRCQUFVQyxPQUFPOzRCQUFJQyxRQUFROzs7Ozs7d0JBQU07Ozs7OzswQ0FJbEUsOERBQUNKOzs7Ozs7Ozs7Ozs7Ozs7O0FBS1Y7S0E5RE14QjtBQWdFTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtLnRzeD9kNWFhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgbG9hZGluZ0dpZiBmcm9tICdAYXNzZXRzL2xvYWRpbmcuZ2lmJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmludGVyZmFjZSBwcm9wcyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIGxvYWRpbmc6Ym9vbGVhblxyXG4gIHNldE5hbWU6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIHNldEVtYWlsOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxuICBzZXRNZXNzYWdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcclxuICBzZW5kTWVzc2FnZTogKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiBQcm9taXNlPHZvaWQ+O1xyXG5cclxufVxyXG5cclxuY29uc3QgQ29udGFjdEZvcm06IEZDPHByb3BzPiA9ICh7XHJcbiAgIG5hbWUsIFxyXG4gICBlbWFpbCwgXHJcbiAgIG1lc3NhZ2UsXHJcbiAgIGxvYWRpbmcsIFxyXG4gICBzZXROYW1lLCBcclxuICAgc2V0RW1haWwsIFxyXG4gICBzZXRNZXNzYWdlLCBcclxuICAgc2VuZE1lc3NhZ2V9KSA9PiB7XHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC01IHctZnVsbFwiIG9uU3VibWl0PXtzZW5kTWVzc2FnZX0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtc20gcC0yIGJnLVsjMDAwMDAwODJdIHRleHQtZ3JheS0xMDAgZm9udC1wYXJhXCJcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtc20gcC0yIGJnLVsjMDAwMDAwODJdICB0ZXh0LWdyYXktMTAwIGZvbnQtcGFyYVwiXHJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgIC8+XHJcbiAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtc20gcC0yIGJnLVsjMDAwMDAwODJdICB0ZXh0LWdyYXktMTAwIHJlc2l6ZS1ub25lIGZvbnQtcGFyYVwiXHJcbiAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBjb2xzPXsxMH1cclxuICAgICAgICByb3dzPXs4fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBtZXNzYWdlXCJcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNGNzhEMjZdLzcwIGhvdmVyOmJnLVsjRjc4RDI2XSB0cmFuc2l0aW9uLWFsbCBkZWxheS03NSBkdXJhdGlvbi0zMDAgZWFzZS1vdXQgcC0zIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtc20gdGV4dC1ncmF5LTUwIGZvbnQtaGVhZGVyc1wiXHJcbiAgICAgID5cclxuICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvYWRpbmdHaWZ9IGFsdD1cImxvYWRpbmdcIiB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+XHJcbiAgICAgICAgICAgIHNlbmRpbmcuLi5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtIl0sIm5hbWVzIjpbImxvYWRpbmdHaWYiLCJJbWFnZSIsIkNvbnRhY3RGb3JtIiwibmFtZSIsImVtYWlsIiwibWVzc2FnZSIsImxvYWRpbmciLCJzZXROYW1lIiwic2V0RW1haWwiLCJzZXRNZXNzYWdlIiwic2VuZE1lc3NhZ2UiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsImNvbHMiLCJyb3dzIiwiYnV0dG9uIiwic3BhbiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/ContactForm.tsx\n"));

/***/ })

});