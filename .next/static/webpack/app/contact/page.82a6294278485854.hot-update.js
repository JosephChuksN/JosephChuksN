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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _this = undefined;\n\nvar ContactForm = function() {\n    // const [name, setName] = useState<string>(\"\")\n    // const [email, setEmail] = useState<string>(\"\")\n    // const [message, setMessage] = useState<string>(\"\")\n    //  const data = { name, email, message };\n    //   const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {\n    //     e.preventDefault();\n    //     try {\n    //       const requestOptions = {\n    //         method: \"POST\",\n    //         headers: { \"Content-Type\": \"application/json\" },\n    //         body: JSON.stringify(data),\n    //       };\n    //       const res = await fetch(\"../app/api/contact/cont/route.ts\", requestOptions);\n    //       const ress = await res.json();\n    //       console.log(ress);\n    //     } catch (error) {\n    //       console.log(error);\n    //     }\n    //   };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-5 w-full\",\n        onSubmit: sendMessage,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"rounded-sm p-2 bg-[#00000082] text-gray-100 font-para\",\n                type: \"text\",\n                name: \"name\",\n                value: name,\n                onChange: function(e) {\n                    setName(e.target.value);\n                },\n                placeholder: \"Name\",\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"rounded-sm p-2 bg-[#00000082]  text-gray-100 font-para\",\n                type: \"email\",\n                name: \"email\",\n                value: email,\n                onChange: function(e) {\n                    setEmail(e.target.value);\n                },\n                placeholder: \"Email\",\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                className: \"rounded-sm p-2 bg-[#00000082]  text-gray-100 resize-none font-para\",\n                name: \"message\",\n                value: message,\n                onChange: function(e) {\n                    setMessage(e.target.value);\n                },\n                cols: 10,\n                rows: 8,\n                placeholder: \"Your message\",\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-[#F78D26]/70 hover:bg-[#F78D26] transition-all delay-75 duration-300 ease-out p-3 flex items-center justify-center rounded-sm text-gray-50 font-headers\",\n                children: \"Send message\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 65,\n                columnNumber: 10\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, _this);\n};\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7OztBQVNBLElBQU1BLGNBQWlCO0lBRXBCLCtDQUErQztJQUMvQyxpREFBaUQ7SUFDakQscURBQXFEO0lBRXJELDBDQUEwQztJQUUxQyx5RUFBeUU7SUFDekUsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsMEJBQTBCO0lBQzFCLDJEQUEyRDtJQUMzRCxzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLHFGQUFxRjtJQUNyRix1Q0FBdUM7SUFFdkMsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsUUFBUTtJQUNSLE9BQU87SUFJUixxQkFFTSw4REFBQ0M7UUFBS0MsV0FBVTtRQUE2QkMsVUFBVUM7OzBCQUN2RCw4REFBQ0M7Z0JBQU1ILFdBQVU7Z0JBQ2hCSSxNQUFLO2dCQUNMQyxNQUFLO2dCQUNMQyxPQUFPRDtnQkFDUEUsVUFBVSxTQUFDQztvQkFBS0MsUUFBUUQsRUFBRUUsTUFBTSxDQUFDSixLQUFLO2dCQUFDO2dCQUN2Q0ssYUFBWTtnQkFDWkMsUUFBUTs7Ozs7OzBCQUVULDhEQUFDVDtnQkFBTUgsV0FBVTtnQkFDakJJLE1BQUs7Z0JBQ0xDLE1BQUs7Z0JBQ0xDLE9BQU9PO2dCQUNQTixVQUFVLFNBQUNDO29CQUFLTSxTQUFTTixFQUFFRSxNQUFNLENBQUNKLEtBQUs7Z0JBQUM7Z0JBQ3hDSyxhQUFZO2dCQUNaQyxRQUFROzs7Ozs7MEJBRVIsOERBQUNHO2dCQUFTZixXQUFVO2dCQUNwQkssTUFBSztnQkFDTEMsT0FBT1U7Z0JBQ1BULFVBQVUsU0FBQ0M7b0JBQUtTLFdBQVdULEVBQUVFLE1BQU0sQ0FBQ0osS0FBSztnQkFBQztnQkFDMUNZLE1BQU07Z0JBQ05DLE1BQU07Z0JBQ05SLGFBQVk7Z0JBQ1pDLFFBQVE7Ozs7OzswQkFFUCw4REFBQ1E7Z0JBQU9oQixNQUFLO2dCQUFTSixXQUFVOzBCQUE2Sjs7Ozs7Ozs7Ozs7O0FBTXRNO0tBN0RNRjtBQStETiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRhY3RGb3JtLnRzeD9kNWFhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW50ZXJmYWNlIHByb3BzIHtcclxuICAgbmFtZTpzdHJpbmdcclxuICAgZW1haWw6c3RyaW5nXHJcbiAgIG1lc3NhZ2U6c3RyaVxyXG59XHJcblxyXG5jb25zdCBDb250YWN0Rm9ybTpGQyA9ICgpID0+IHtcclxuXHJcbiAgIC8vIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuICAgLy8gY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpXHJcbiAgIC8vIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuXHJcbiAgIC8vICBjb25zdCBkYXRhID0geyBuYW1lLCBlbWFpbCwgbWVzc2FnZSB9O1xyXG5cclxuICAgLy8gICBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAvLyAgICAgdHJ5IHtcclxuICAgLy8gICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgIC8vICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgLy8gICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgIC8vICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgIC8vICAgICAgIH07XHJcbiAgIC8vICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiLi4vYXBwL2FwaS9jb250YWN0L2NvbnQvcm91dGUudHNcIiwgcmVxdWVzdE9wdGlvbnMpO1xyXG4gICAvLyAgICAgICBjb25zdCByZXNzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgIC8vICAgICAgIGNvbnNvbGUubG9nKHJlc3MpO1xyXG4gICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgLy8gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAvLyAgICAgfVxyXG4gICAvLyAgIH07XHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTUgdy1mdWxsXCIgb25TdWJtaXQ9e3NlbmRNZXNzYWdlfT5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicm91bmRlZC1zbSBwLTIgYmctWyMwMDAwMDA4Ml0gdGV4dC1ncmF5LTEwMCBmb250LXBhcmFcIiBcclxuICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgbmFtZT1cIm5hbWVcIiAgXHJcbiAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0TmFtZShlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJyb3VuZGVkLXNtIHAtMiBiZy1bIzAwMDAwMDgyXSAgdGV4dC1ncmF5LTEwMCBmb250LXBhcmFcIiBcclxuICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICBuYW1lPVwiZW1haWxcIiAgXHJcbiAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwicm91bmRlZC1zbSBwLTIgYmctWyMwMDAwMDA4Ml0gIHRleHQtZ3JheS0xMDAgcmVzaXplLW5vbmUgZm9udC1wYXJhXCJcclxuICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfX1cclxuICAgICAgICBjb2xzPXsxMH1cclxuICAgICAgICByb3dzPXs4fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBtZXNzYWdlXCJcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAvPlxyXG4gICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJiZy1bI0Y3OEQyNl0vNzAgaG92ZXI6YmctWyNGNzhEMjZdIHRyYW5zaXRpb24tYWxsIGRlbGF5LTc1IGR1cmF0aW9uLTMwMCBlYXNlLW91dCBwLTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1zbSB0ZXh0LWdyYXktNTAgZm9udC1oZWFkZXJzXCI+XHJcbiAgICAgICAgICAgIFNlbmQgbWVzc2FnZVxyXG4gICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybSJdLCJuYW1lcyI6WyJDb250YWN0Rm9ybSIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsInNlbmRNZXNzYWdlIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwic2V0TmFtZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJlbWFpbCIsInNldEVtYWlsIiwidGV4dGFyZWEiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImNvbHMiLCJyb3dzIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/ContactForm.tsx\n"));

/***/ })

});