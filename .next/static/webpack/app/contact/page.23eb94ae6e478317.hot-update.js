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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _this = undefined;\n\nvar ContactForm = function(param) {\n    var name = param.name, email = param.email, message = param.message, sendMessage = param.sendMessage;\n    // const [name, setName] = useState<string>(\"\")\n    // const [email, setEmail] = useState<string>(\"\")\n    // const [message, setMessage] = useState<string>(\"\")\n    //  const data = { name, email, message };\n    //   const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {\n    //     e.preventDefault();\n    //     try {\n    //       const requestOptions = {\n    //         method: \"POST\",\n    //         headers: { \"Content-Type\": \"application/json\" },\n    //         body: JSON.stringify(data),\n    //       };\n    //       const res = await fetch(\"../app/api/contact/cont/route.ts\", requestOptions);\n    //       const ress = await res.json();\n    //       console.log(ress);\n    //     } catch (error) {\n    //       console.log(error);\n    //     }\n    //   };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-5 w-full\",\n        onSubmit: sendMessage,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"rounded-sm p-2 bg-[#00000082] text-gray-100 font-para\",\n                type: \"text\",\n                name: \"name\",\n                value: name,\n                onChange: function(e) {\n                    setName(e.target.value);\n                },\n                placeholder: \"Name\",\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"rounded-sm p-2 bg-[#00000082]  text-gray-100 font-para\",\n                type: \"email\",\n                name: \"email\",\n                value: email,\n                onChange: function(e) {\n                    setEmail(e.target.value);\n                },\n                placeholder: \"Email\",\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                className: \"rounded-sm p-2 bg-[#00000082]  text-gray-100 resize-none font-para\",\n                name: \"message\",\n                value: message,\n                onChange: function(e) {\n                    setMessage(e.target.value);\n                },\n                cols: 10,\n                rows: 8,\n                placeholder: \"Your message\",\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-[#F78D26]/70 hover:bg-[#F78D26] transition-all delay-75 duration-300 ease-out p-3 flex items-center justify-center rounded-sm text-gray-50 font-headers\",\n                children: \"Send message\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7OztBQVVBLElBQU1BLGNBQXlCO1FBQUVDLGFBQUFBLE1BQU1DLGNBQUFBLE9BQU9DLGdCQUFBQSxTQUFTQyxvQkFBQUE7SUFDckQsK0NBQStDO0lBQy9DLGlEQUFpRDtJQUNqRCxxREFBcUQ7SUFFckQsMENBQTBDO0lBRTFDLHlFQUF5RTtJQUN6RSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGlDQUFpQztJQUNqQywwQkFBMEI7SUFDMUIsMkRBQTJEO0lBQzNELHNDQUFzQztJQUN0QyxXQUFXO0lBQ1gscUZBQXFGO0lBQ3JGLHVDQUF1QztJQUV2QywyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixRQUFRO0lBQ1IsT0FBTztJQUVQLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVO1FBQTZCQyxVQUFVSDs7MEJBQ3JELDhEQUFDSTtnQkFDQ0YsV0FBVTtnQkFDVkcsTUFBSztnQkFDTFIsTUFBSztnQkFDTFMsT0FBT1Q7Z0JBQ1BVLFVBQVUsU0FBQ0M7b0JBQ1RDLFFBQVFELEVBQUVFLE1BQU0sQ0FBQ0osS0FBSztnQkFDeEI7Z0JBQ0FLLGFBQVk7Z0JBQ1pDLFFBQVE7Ozs7OzswQkFFViw4REFBQ1I7Z0JBQ0NGLFdBQVU7Z0JBQ1ZHLE1BQUs7Z0JBQ0xSLE1BQUs7Z0JBQ0xTLE9BQU9SO2dCQUNQUyxVQUFVLFNBQUNDO29CQUNUSyxTQUFTTCxFQUFFRSxNQUFNLENBQUNKLEtBQUs7Z0JBQ3pCO2dCQUNBSyxhQUFZO2dCQUNaQyxRQUFROzs7Ozs7MEJBRVYsOERBQUNFO2dCQUNDWixXQUFVO2dCQUNWTCxNQUFLO2dCQUNMUyxPQUFPUDtnQkFDUFEsVUFBVSxTQUFDQztvQkFDVE8sV0FBV1AsRUFBRUUsTUFBTSxDQUFDSixLQUFLO2dCQUMzQjtnQkFDQVUsTUFBTTtnQkFDTkMsTUFBTTtnQkFDTk4sYUFBWTtnQkFDWkMsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDTTtnQkFDQ2IsTUFBSztnQkFDTEgsV0FBVTswQkFDWDs7Ozs7Ozs7Ozs7O0FBS1A7S0FwRU1OO0FBc0VOLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0udHN4P2Q1YWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbnRlcmZhY2UgcHJvcHMge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICBzZW5kTWVzc2FnZTogKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG5jb25zdCBDb250YWN0Rm9ybTogRkM8cHJvcHM+ID0gKHtuYW1lLCBlbWFpbCwgbWVzc2FnZSwgc2VuZE1lc3NhZ2V9KSA9PiB7XHJcbiAgLy8gY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG4gIC8vIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG4gIC8vIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuXHJcbiAgLy8gIGNvbnN0IGRhdGEgPSB7IG5hbWUsIGVtYWlsLCBtZXNzYWdlIH07XHJcblxyXG4gIC8vICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vICAgICB0cnkge1xyXG4gIC8vICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gIC8vICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAvLyAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAvLyAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gIC8vICAgICAgIH07XHJcbiAgLy8gICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIuLi9hcHAvYXBpL2NvbnRhY3QvY29udC9yb3V0ZS50c1wiLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgLy8gICAgICAgY29uc3QgcmVzcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHJlc3MpO1xyXG4gIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTUgdy1mdWxsXCIgb25TdWJtaXQ9e3NlbmRNZXNzYWdlfT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1zbSBwLTIgYmctWyMwMDAwMDA4Ml0gdGV4dC1ncmF5LTEwMCBmb250LXBhcmFcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1zbSBwLTIgYmctWyMwMDAwMDA4Ml0gIHRleHQtZ3JheS0xMDAgZm9udC1wYXJhXCJcclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgLz5cclxuICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1zbSBwLTIgYmctWyMwMDAwMDA4Ml0gIHRleHQtZ3JheS0xMDAgcmVzaXplLW5vbmUgZm9udC1wYXJhXCJcclxuICAgICAgICBuYW1lPVwibWVzc2FnZVwiXHJcbiAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNvbHM9ezEwfVxyXG4gICAgICAgIHJvd3M9ezh9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG1lc3NhZ2VcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICBjbGFzc05hbWU9XCJiZy1bI0Y3OEQyNl0vNzAgaG92ZXI6YmctWyNGNzhEMjZdIHRyYW5zaXRpb24tYWxsIGRlbGF5LTc1IGR1cmF0aW9uLTMwMCBlYXNlLW91dCBwLTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1zbSB0ZXh0LWdyYXktNTAgZm9udC1oZWFkZXJzXCJcclxuICAgICAgPlxyXG4gICAgICAgIFNlbmQgbWVzc2FnZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm0iXSwibmFtZXMiOlsiQ29udGFjdEZvcm0iLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwic2VuZE1lc3NhZ2UiLCJmb3JtIiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInNldE5hbWUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwic2V0RW1haWwiLCJ0ZXh0YXJlYSIsInNldE1lc3NhZ2UiLCJjb2xzIiwicm93cyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/ContactForm.tsx\n"));

/***/ })

});