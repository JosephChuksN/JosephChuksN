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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar ContactForm = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), name = _useState[0], setName = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), email = _useState1[0], setEmail = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), message = _useState2[0], setMessage = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), disableBtn = _useState3[0], setDisableBtn = _useState3[1];\n    // const handleMessageSubmit = async (e:SubmitEvent) =>{\n    //    e.preventDefault()\n    //    console.log(\"test\")\n    //    setDisableBtn(false)\n    //    const data = {\n    //       name,\n    //       email,\n    //       message\n    //    }\n    //    await fetch(\"../app/api/contact\", {\n    //       method: 'POST',\n    //       headers: {\n    //         'Accept': 'application/json, text/plain, */*',\n    //         'Content-Type': 'application/json'\n    //       },\n    //       body: JSON.stringify(data)\n    //    })\n    //    setName(\"\")\n    //    setEmail(\"\")\n    //    setMessage(\"\")\n    //    setDisableBtn(true)\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-5 w-full\",\n        onSubmit: function() {\n            return handleMessageSubmit;\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"rounded-sm p-2 bg-[#00000082] text-gray-100 font-para\",\n                type: \"text\",\n                name: \"name\",\n                value: name,\n                onChange: function(e) {\n                    setName(e.target.value);\n                },\n                placeholder: \"Name\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"rounded-sm p-2 bg-[#00000082]  text-gray-100 font-para\",\n                type: \"email\",\n                name: \"email\",\n                value: email,\n                onChange: function(e) {\n                    setEmail(e.target.value);\n                },\n                placeholder: \"Email\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                className: \"rounded-sm p-2 bg-[#00000082]  text-gray-100 resize-none font-para\",\n                name: \"message\",\n                value: message,\n                onChange: function(e) {\n                    setMessage(e.target.value);\n                },\n                cols: 10,\n                rows: 8,\n                placeholder: \"Your message\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                className: \"bg-[#F78D26]/70 hover:bg-[#F78D26] transition-all delay-75 duration-300 ease-out p-3 flex items-center justify-center rounded-sm text-gray-50 font-headers\",\n                children: \"Send message\"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n                lineNumber: 63,\n                columnNumber: 10\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ContactForm.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, _this);\n};\n_s(ContactForm, \"T6EfSeqTDWndoXKxHjRnIDQEIBY=\");\n_c = ContactForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQytDO0FBRS9DLElBQU1DLGNBQWlCOztJQUVwQixJQUF3QkQsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFTLFNBQWxDRSxPQUFpQkYsY0FBWEcsVUFBV0g7SUFDeEIsSUFBMEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBUyxTQUFwQ0ksUUFBbUJKLGVBQVpLLFdBQVlMO0lBQzFCLElBQThCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsU0FBeENNLFVBQXVCTixlQUFkTyxhQUFjUDtJQUM5QixJQUFvQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFVLFdBQS9DUSxhQUE2QlIsZUFBakJTLGdCQUFpQlQ7SUFFdkMsd0RBQXdEO0lBQ3hELHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFFekIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixPQUFPO0lBRVAseUNBQXlDO0lBQ3pDLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIseURBQXlEO0lBQ3pELDZDQUE2QztJQUM3QyxXQUFXO0lBQ1gsbUNBQW1DO0lBRW5DLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsSUFBSTtJQUdGLHFCQUVNLDhEQUFDVTtRQUFLQyxXQUFVO1FBQTZCQyxVQUFVO21CQUFJQzs7OzBCQUMzRCw4REFBQ0M7Z0JBQU1ILFdBQVU7Z0JBQ2hCSSxNQUFLO2dCQUNMYixNQUFLO2dCQUNMYyxPQUFPZDtnQkFDUGUsVUFBVSxTQUFDQztvQkFBS2YsUUFBUWUsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dCQUFDO2dCQUN2Q0ksYUFBWTs7Ozs7OzBCQUViLDhEQUFDTjtnQkFBTUgsV0FBVTtnQkFDakJJLE1BQUs7Z0JBQ0xiLE1BQUs7Z0JBQ0xjLE9BQU9aO2dCQUNQYSxVQUFVLFNBQUNDO29CQUFLYixTQUFTYSxFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0JBQUM7Z0JBQ3hDSSxhQUFZOzs7Ozs7MEJBRVosOERBQUNDO2dCQUFTVixXQUFVO2dCQUNwQlQsTUFBSztnQkFDTGMsT0FBT1Y7Z0JBQ1BXLFVBQVUsU0FBQ0M7b0JBQUtYLFdBQVdXLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQkFBQztnQkFDMUNNLE1BQU07Z0JBQ05DLE1BQU07Z0JBQ05ILGFBQVk7Ozs7OzswQkFFWCw4REFBQ0k7Z0JBQVFULE1BQUs7Z0JBQVNKLFdBQVU7MEJBQTZKOzs7Ozs7Ozs7Ozs7QUFNdk07R0FqRU1WO0tBQUFBO0FBbUVOLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udGFjdEZvcm0udHN4P2Q1YWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgRkMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IENvbnRhY3RGb3JtOkZDID0gKCkgPT4ge1xyXG5cclxuICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG4gICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIilcclxuICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKVxyXG4gICBjb25zdCBbZGlzYWJsZUJ0biwgc2V0RGlzYWJsZUJ0bl0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKVxyXG5cclxuLy8gY29uc3QgaGFuZGxlTWVzc2FnZVN1Ym1pdCA9IGFzeW5jIChlOlN1Ym1pdEV2ZW50KSA9PntcclxuLy8gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbi8vICAgIGNvbnNvbGUubG9nKFwidGVzdFwiKVxyXG5cclxuLy8gICAgc2V0RGlzYWJsZUJ0bihmYWxzZSlcclxuLy8gICAgY29uc3QgZGF0YSA9IHtcclxuLy8gICAgICAgbmFtZSxcclxuLy8gICAgICAgZW1haWwsXHJcbi8vICAgICAgIG1lc3NhZ2VcclxuLy8gICAgfVxyXG5cclxuLy8gICAgYXdhaXQgZmV0Y2goXCIuLi9hcHAvYXBpL2NvbnRhY3RcIiwge1xyXG4vLyAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuLy8gICAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcclxuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICBcclxuLy8gICAgfSlcclxuLy8gICAgc2V0TmFtZShcIlwiKVxyXG4vLyAgICBzZXRFbWFpbChcIlwiKVxyXG4vLyAgICBzZXRNZXNzYWdlKFwiXCIpXHJcbi8vICAgIHNldERpc2FibGVCdG4odHJ1ZSlcclxuLy8gfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTUgdy1mdWxsXCIgb25TdWJtaXQ9eygpPT5oYW5kbGVNZXNzYWdlU3VibWl0fT5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwicm91bmRlZC1zbSBwLTIgYmctWyMwMDAwMDA4Ml0gdGV4dC1ncmF5LTEwMCBmb250LXBhcmFcIiBcclxuICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgbmFtZT1cIm5hbWVcIiAgXHJcbiAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0TmFtZShlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJyb3VuZGVkLXNtIHAtMiBiZy1bIzAwMDAwMDgyXSAgdGV4dC1ncmF5LTEwMCBmb250LXBhcmFcIiBcclxuICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICBuYW1lPVwiZW1haWxcIiAgXHJcbiAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInJvdW5kZWQtc20gcC0yIGJnLVsjMDAwMDAwODJdICB0ZXh0LWdyYXktMTAwIHJlc2l6ZS1ub25lIGZvbnQtcGFyYVwiXHJcbiAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgY29scz17MTB9XHJcbiAgICAgICAgcm93cz17OH1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbWVzc2FnZVwiXHJcbiAgICAgICAgIC8+XHJcbiAgICAgICAgIDxidXR0b24gIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJiZy1bI0Y3OEQyNl0vNzAgaG92ZXI6YmctWyNGNzhEMjZdIHRyYW5zaXRpb24tYWxsIGRlbGF5LTc1IGR1cmF0aW9uLTMwMCBlYXNlLW91dCBwLTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1zbSB0ZXh0LWdyYXktNTAgZm9udC1oZWFkZXJzXCI+XHJcbiAgICAgICAgICAgIFNlbmQgbWVzc2FnZVxyXG4gICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNvbnRhY3RGb3JtIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJkaXNhYmxlQnRuIiwic2V0RGlzYWJsZUJ0biIsImZvcm0iLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImhhbmRsZU1lc3NhZ2VTdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwidGV4dGFyZWEiLCJjb2xzIiwicm93cyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/ContactForm.tsx\n"));

/***/ })

});