"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/projects/page",{

/***/ "(app-client)/./components/ProjectData.tsx":
/*!************************************!*\
  !*** ./components/ProjectData.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar ProjectData = function(param) {\n    var data = param.data;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), hover = _useState[0], setHover = _useState[1];\n    var image = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ImageNode = image.current;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _ImageNode;\n        var handleHoverEvent = function() {\n            setHover(!hover);\n        };\n        (_ImageNode = ImageNode) === null || _ImageNode === void 0 ? void 0 : _ImageNode.addEventListener(\"mouseover\", handleHoverEvent);\n        return function() {\n            var _ImageNode;\n            (_ImageNode = ImageNode) === null || _ImageNode === void 0 ? void 0 : _ImageNode.removeEventListener(\"mouseover\", handleHoverEvent);\n        };\n    }, [\n        hover,\n        ImageNode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full  flex flex-col lg:flex-row items-center justify-center lg:pb-5 p-1 pb-16 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                \"data-aos\": \"zoom-in-down\",\n                src: data.image,\n                alt: \"project image\",\n                className: \"flex opacity-70  w-full h-[300px] lg:h-[55vh] rounded-l-md  bg-no-repeat bg-cover \"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                lineNumber: 36,\n                columnNumber: 6\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"data-aos\": \"zoom-out-up\",\n                className: \"flex gap-5   flex-col   h-full lg:h-[55vh]  justify-center  w-full  bg-[#000000b5]  lg:bg-gradient-to-l from-[#0c0f11] to-[#0d1114] py-3  px-2  lg:px-8  shadow-xl shadow-[#00000082] rounded-r-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-[#F78D26] text-lg lg:text-3xl font-headers\",\n                        children: data.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-gray-300 font-para text-base lg:text-lg\",\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-full gap-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-lg lg:text-xl text-[#F78D26] font-headers\",\n                                children: \"Built With:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-headers text-gray-300 text-base lg:text-lg  flex flex-wrap gap-3 items-center  w-full\",\n                                children: data.technologies.map(function(technologies) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"lg:px-1 flex \",\n                                        children: technologies\n                                    }, technologies, false, {\n                                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white font-headers flex gap-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: data.liveSite,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"\".concat(data.liveSite ? \"block\" : \"hidden\", \" flex gap-2 px-1.5 py-2 items-center justify-center bg-[#F78D26]/70 hover:bg-[#F78D26] text-gray-50 font-para rounded-md cursor-pointer text-base transition-all duration-300 delay-75 ease-in-out  hover:scale-90\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"View Live\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faEye\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: data.sourceCode,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"flex gap-2 items-center justify-center px-1.5 py-2 bg-[#F78D26]/70 hover:bg-[#F78D26] text-gray-50 font-para rounded-md cursor-pointer text-base transition-all duration-300 delay-75 ease-in-out  hover:scale-90\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Source Code\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faGithub\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                lineNumber: 39,\n                columnNumber: 6\n            }, _this)\n        ]\n    }, data.name, true, {\n        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProjectData, \"wGMwwhUOBJrFgVFYBJgQAodlk14=\");\n_c = ProjectData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectData);\nvar _c;\n$RefreshReg$(_c, \"ProjectData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Qcm9qZWN0RGF0YS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFdUQ7QUFFTTtBQUNKO0FBQ087QUFDbEM7QUFROUIsSUFBTU8sY0FBd0I7UUFBRUMsYUFBQUE7O0lBQ2hDLElBQXlCUixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVUsWUFBcENTLFFBQWtCVCxjQUFYVSxXQUFXVjtJQUN6QixJQUFNVyxRQUFRVCw2Q0FBTUEsQ0FBeUI7SUFDN0MsSUFBTVUsWUFBWUQsTUFBTUUsT0FBTztJQUcvQlosZ0RBQVNBLENBQUM7WUFLUlc7UUFIQSxJQUFNRSxtQkFBbUI7WUFDdkJKLFNBQVMsQ0FBQ0Q7UUFDWjtTQUNBRyxhQUFBQSx1QkFBQUEsaUNBQUFBLFdBQVdHLGdCQUFnQixDQUFDLGFBQWFEO1FBQ3pDLE9BQU87Z0JBQ0xGO2FBQUFBLGFBQUFBLHVCQUFBQSxpQ0FBQUEsV0FBV0ksbUJBQW1CLENBQUMsYUFBYUY7UUFDOUM7SUFDRixHQUFFO1FBQUNMO1FBQU9HO0tBQVU7SUFFbEIscUJBQ0UsOERBQUNLO1FBQW9CQyxXQUFVOzswQkFFOUIsOERBQUNaLG1EQUFLQTtnQkFBQ2EsWUFBUztnQkFBZUMsS0FBS1osS0FBS0csS0FBSztnQkFBRVUsS0FBSTtnQkFBZ0JILFdBQVk7Ozs7OzswQkFHaEYsOERBQUNEO2dCQUFJRSxZQUFTO2dCQUFlRCxXQUFVOztrQ0FDdEMsOERBQUNJO3dCQUFLSixXQUFVO2tDQUFtRFYsS0FBS2UsSUFBSTs7Ozs7O2tDQUM1RSw4REFBQ0Q7d0JBQUtKLFdBQVU7a0NBQWdEVixLQUFLZ0IsV0FBVzs7Ozs7O2tDQUM5RSw4REFBQ1A7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FBS0osV0FBVTswQ0FBaUQ7Ozs7OzswQ0FDbkUsOERBQUNJO2dDQUFLSixXQUFVOzBDQUNiVixLQUFLaUIsWUFBWSxDQUFDQyxHQUFHLENBQUNELFNBQUFBO3lEQUNyQiw4REFBQ0g7d0NBQXdCSixXQUFVO2tEQUFpQk87dUNBQXpDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWYsOERBQUNIO3dCQUFLSixXQUFVOzswQ0FDZCw4REFBQ1M7Z0NBQUVDLE1BQU1wQixLQUFLcUIsUUFBUTtnQ0FBR0MsUUFBTztnQ0FBU0MsS0FBSTtnQ0FBc0JiLFdBQVcsR0FBc0MsT0FBbkNWLEtBQUtxQixRQUFRLEdBQUcsVUFBVSxVQUFTOztrREFDbEgsOERBQUNQO2tEQUFNOzs7Ozs7a0RBQ1AsOERBQUNqQiwyRUFBZUE7d0NBQUMyQixNQUFNNUIsb0VBQUtBOzs7Ozs7Ozs7Ozs7MENBRTlCLDhEQUFDdUI7Z0NBQUVDLE1BQU1wQixLQUFLeUIsVUFBVTtnQ0FBR0gsUUFBTztnQ0FBU0MsS0FBSTtnQ0FBc0JiLFdBQVU7O2tEQUM3RSw4REFBQ0k7a0RBQU07Ozs7OztrREFDUCw4REFBQ2pCLDJFQUFlQTt3Q0FBQzJCLE1BQU03Qix3RUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F2QjdCSyxLQUFLZSxJQUFJOzs7OztBQWdDdkI7R0FsRE1oQjtLQUFBQTtBQW9ETiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2plY3REYXRhLnRzeD83MjViIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFByb2plY3RJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3Byb2plY3REYXRhSW50ZXJmYWNlJ1xyXG5pbXBvcnQgeyBmYUdpdGh1YiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhRXllIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuXHJcblxyXG5pbnRlcmZhY2UgcHJvcHMge1xyXG4gICAgZGF0YTpQcm9qZWN0SW50ZXJmYWNlXHJcbn1cclxuXHJcbmNvbnN0IFByb2plY3REYXRhOkZDPHByb3BzPiA9ICh7ZGF0YX0pID0+IHtcclxuY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl09IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5jb25zdCBpbWFnZSA9IHVzZVJlZjxudWxsIHwgSFRNTFNwYW5FbGVtZW50PihudWxsKVxyXG5jb25zdCBJbWFnZU5vZGUgPSBpbWFnZS5jdXJyZW50XHJcblxyXG5cclxudXNlRWZmZWN0KCgpPT57XHJcbiBcclxuICBjb25zdCBoYW5kbGVIb3ZlckV2ZW50ID0gKCk6dm9pZD0+e1xyXG4gICAgc2V0SG92ZXIoIWhvdmVyKVxyXG4gIH1cclxuICBJbWFnZU5vZGU/LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaGFuZGxlSG92ZXJFdmVudCApXHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIEltYWdlTm9kZT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBoYW5kbGVIb3ZlckV2ZW50KVxyXG4gIH1cclxufSxbaG92ZXIsIEltYWdlTm9kZV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGtleT17ZGF0YS5uYW1lfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsICBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBsZzpwYi01IHAtMSBwYi0xNiBcIj5cclxuICAgICAgXHJcbiAgICAgPEltYWdlIGRhdGEtYW9zPVwiem9vbS1pbi1kb3duXCIgc3JjPXtkYXRhLmltYWdlfSBhbHQ9J3Byb2plY3QgaW1hZ2UnIGNsYXNzTmFtZT17YGZsZXggb3BhY2l0eS03MCAgdy1mdWxsIGgtWzMwMHB4XSBsZzpoLVs1NXZoXSByb3VuZGVkLWwtbWQgIGJnLW5vLXJlcGVhdCBiZy1jb3ZlciBgfSAvPlxyXG4gICAgXHJcbiAgICAgXHJcbiAgICAgPGRpdiBkYXRhLWFvcz1cInpvb20tb3V0LXVwXCIgIGNsYXNzTmFtZT1cImZsZXggZ2FwLTUgICBmbGV4LWNvbCAgIGgtZnVsbCBsZzpoLVs1NXZoXSAganVzdGlmeS1jZW50ZXIgIHctZnVsbCAgYmctWyMwMDAwMDBiNV0gIGxnOmJnLWdyYWRpZW50LXRvLWwgZnJvbS1bIzBjMGYxMV0gdG8tWyMwZDExMTRdIHB5LTMgIHB4LTIgIGxnOnB4LTggIHNoYWRvdy14bCBzaGFkb3ctWyMwMDAwMDA4Ml0gcm91bmRlZC1yLW1kXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWyNGNzhEMjZdIHRleHQtbGcgbGc6dGV4dC0zeGwgZm9udC1oZWFkZXJzXCI+e2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgZm9udC1wYXJhIHRleHQtYmFzZSBsZzp0ZXh0LWxnXCI+e2RhdGEuZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgZ2FwLTNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgbGc6dGV4dC14bCB0ZXh0LVsjRjc4RDI2XSBmb250LWhlYWRlcnNcIj5CdWlsdCBXaXRoOjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWhlYWRlcnMgdGV4dC1ncmF5LTMwMCB0ZXh0LWJhc2UgbGc6dGV4dC1sZyAgZmxleCBmbGV4LXdyYXAgZ2FwLTMgaXRlbXMtY2VudGVyICB3LWZ1bGxcIj5cclxuICAgICAgICAgIHtkYXRhLnRlY2hub2xvZ2llcy5tYXAodGVjaG5vbG9naWVzPT4oXHJcbiAgICAgICAgICAgIDxzcGFuIGtleT17dGVjaG5vbG9naWVzfSBjbGFzc05hbWU9XCJsZzpweC0xIGZsZXggXCI+e3RlY2hub2xvZ2llc308L3NwYW4+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWhlYWRlcnMgZmxleCBnYXAtNVwiPlxyXG4gICAgICAgICAgPGEgaHJlZj17ZGF0YS5saXZlU2l0ZX0gIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9e2Ake2RhdGEubGl2ZVNpdGUgPyBcImJsb2NrXCIgOiBcImhpZGRlblwifSBmbGV4IGdhcC0yIHB4LTEuNSBweS0yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1bI0Y3OEQyNl0vNzAgaG92ZXI6YmctWyNGNzhEMjZdIHRleHQtZ3JheS01MCBmb250LXBhcmEgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlciB0ZXh0LWJhc2UgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGRlbGF5LTc1IGVhc2UtaW4tb3V0ICBob3ZlcjpzY2FsZS05MGB9PlxyXG4gICAgICAgICAgICA8c3BhbiA+VmlldyBMaXZlPC9zcGFuPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRXllfSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj17ZGF0YS5zb3VyY2VDb2RlfSAgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTEuNSBweS0yIGJnLVsjRjc4RDI2XS83MCBob3ZlcjpiZy1bI0Y3OEQyNl0gdGV4dC1ncmF5LTUwIGZvbnQtcGFyYSByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyIHRleHQtYmFzZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZGVsYXktNzUgZWFzZS1pbi1vdXQgIGhvdmVyOnNjYWxlLTkwXCI+XHJcbiAgICAgICAgICAgIDxzcGFuID5Tb3VyY2UgQ29kZTwvc3Bhbj4gXHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHaXRodWJ9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgXHJcbiAgICBcclxuPC9kaXY+XHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdERhdGEiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJmYUdpdGh1YiIsImZhRXllIiwiRm9udEF3ZXNvbWVJY29uIiwiSW1hZ2UiLCJQcm9qZWN0RGF0YSIsImRhdGEiLCJob3ZlciIsInNldEhvdmVyIiwiaW1hZ2UiLCJJbWFnZU5vZGUiLCJjdXJyZW50IiwiaGFuZGxlSG92ZXJFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YS1hb3MiLCJzcmMiLCJhbHQiLCJzcGFuIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidGVjaG5vbG9naWVzIiwibWFwIiwiYSIsImhyZWYiLCJsaXZlU2l0ZSIsInRhcmdldCIsInJlbCIsImljb24iLCJzb3VyY2VDb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/ProjectData.tsx\n"));

/***/ })

});