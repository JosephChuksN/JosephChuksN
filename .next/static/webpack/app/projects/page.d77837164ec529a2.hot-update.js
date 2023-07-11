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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar ProjectData = function(param) {\n    var data = param.data;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), hover = _useState[0], setHover = _useState[1];\n    var image = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ImageNode = image.current;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _ImageNode;\n        var handleHoverEvent = function() {\n            setHover(!hover);\n        };\n        (_ImageNode = ImageNode) === null || _ImageNode === void 0 ? void 0 : _ImageNode.addEventListener(\"mouseover\", handleHoverEvent);\n        return function() {\n            var _ImageNode;\n            (_ImageNode = ImageNode) === null || _ImageNode === void 0 ? void 0 : _ImageNode.removeEventListener(\"mouseover\", handleHoverEvent);\n        };\n    }, [\n        hover,\n        ImageNode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full  flex flex-col lg:flex-row items-center justify-center lg:pb-5 p-1 pb-16 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                width: 500,\n                height: 500,\n                \"data-aos\": \"zoom-in-down\",\n                src: data.image,\n                alt: \"project image\",\n                className: \"flex opacity-70  lg:h-[55vh] rounded-l-md  bg-no-repeat bg-cover \"\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                lineNumber: 36,\n                columnNumber: 6\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"data-aos\": \"zoom-out-up\",\n                className: \"flex gap-5   flex-col   h-full lg:h-[55vh]  justify-center  w-full  bg-[#000000b5]  lg:bg-gradient-to-l from-[#0c0f11] to-[#0d1114] py-3  px-2  lg:px-8  shadow-xl shadow-[#00000082] rounded-r-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-[#F78D26] text-lg lg:text-3xl font-headers\",\n                        children: data.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-gray-300 font-para text-base lg:text-lg\",\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-full gap-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-lg lg:text-xl text-[#F78D26] font-headers\",\n                                children: \"Built With:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-headers text-gray-300 text-base lg:text-lg  flex flex-wrap gap-3 items-center  w-full\",\n                                children: data.technologies.map(function(technologies) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"lg:px-1 flex \",\n                                        children: technologies\n                                    }, technologies, false, {\n                                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white font-headers flex gap-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: data.liveSite,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"\".concat(data.liveSite ? \"block\" : \"hidden\", \" flex gap-2 px-1.5 py-2 items-center justify-center bg-[#F78D26]/70 hover:bg-[#F78D26] text-gray-50 font-para rounded-md cursor-pointer text-base transition-all duration-300 delay-75 ease-in-out  hover:scale-90\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"View Live\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faEye\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: data.sourceCode,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"flex gap-2 items-center justify-center px-1.5 py-2 bg-[#F78D26]/70 hover:bg-[#F78D26] text-gray-50 font-para rounded-md cursor-pointer text-base transition-all duration-300 delay-75 ease-in-out  hover:scale-90\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Source Code\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faGithub\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                lineNumber: 39,\n                columnNumber: 6\n            }, _this)\n        ]\n    }, data.name, true, {\n        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProjectData, \"wGMwwhUOBJrFgVFYBJgQAodlk14=\");\n_c = ProjectData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectData);\nvar _c;\n$RefreshReg$(_c, \"ProjectData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Qcm9qZWN0RGF0YS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFdUQ7QUFFTTtBQUNKO0FBQ087QUFDbEM7QUFROUIsSUFBTU8sY0FBd0I7UUFBRUMsYUFBQUE7O0lBQ2hDLElBQXlCUixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVUsWUFBcENTLFFBQWtCVCxjQUFYVSxXQUFXVjtJQUN6QixJQUFNVyxRQUFRVCw2Q0FBTUEsQ0FBeUI7SUFDN0MsSUFBTVUsWUFBWUQsTUFBTUUsT0FBTztJQUcvQlosZ0RBQVNBLENBQUM7WUFLUlc7UUFIQSxJQUFNRSxtQkFBbUI7WUFDdkJKLFNBQVMsQ0FBQ0Q7UUFDWjtTQUNBRyxhQUFBQSx1QkFBQUEsaUNBQUFBLFdBQVdHLGdCQUFnQixDQUFDLGFBQWFEO1FBQ3pDLE9BQU87Z0JBQ0xGO2FBQUFBLGFBQUFBLHVCQUFBQSxpQ0FBQUEsV0FBV0ksbUJBQW1CLENBQUMsYUFBYUY7UUFDOUM7SUFDRixHQUFFO1FBQUNMO1FBQU9HO0tBQVU7SUFFbEIscUJBQ0UsOERBQUNLO1FBQW9CQyxXQUFVOzswQkFFOUIsOERBQUNaLG1EQUFLQTtnQkFBQ2EsT0FBTztnQkFBS0MsUUFBUTtnQkFBTUMsWUFBUztnQkFBZUMsS0FBS2QsS0FBS0csS0FBSztnQkFBRVksS0FBSTtnQkFBZ0JMLFdBQVk7Ozs7OzswQkFHMUcsOERBQUNEO2dCQUFJSSxZQUFTO2dCQUFlSCxXQUFVOztrQ0FDdEMsOERBQUNNO3dCQUFLTixXQUFVO2tDQUFtRFYsS0FBS2lCLElBQUk7Ozs7OztrQ0FDNUUsOERBQUNEO3dCQUFLTixXQUFVO2tDQUFnRFYsS0FBS2tCLFdBQVc7Ozs7OztrQ0FDOUUsOERBQUNUO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ007Z0NBQUtOLFdBQVU7MENBQWlEOzs7Ozs7MENBQ25FLDhEQUFDTTtnQ0FBS04sV0FBVTswQ0FDYlYsS0FBS21CLFlBQVksQ0FBQ0MsR0FBRyxDQUFDRCxTQUFBQTt5REFDckIsOERBQUNIO3dDQUF3Qk4sV0FBVTtrREFBaUJTO3VDQUF6Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlmLDhEQUFDSDt3QkFBS04sV0FBVTs7MENBQ2QsOERBQUNXO2dDQUFFQyxNQUFNdEIsS0FBS3VCLFFBQVE7Z0NBQUdDLFFBQU87Z0NBQVNDLEtBQUk7Z0NBQXNCZixXQUFXLEdBQXNDLE9BQW5DVixLQUFLdUIsUUFBUSxHQUFHLFVBQVUsVUFBUzs7a0RBQ2xILDhEQUFDUDtrREFBTTs7Ozs7O2tEQUNQLDhEQUFDbkIsMkVBQWVBO3dDQUFDNkIsTUFBTTlCLG9FQUFLQTs7Ozs7Ozs7Ozs7OzBDQUU5Qiw4REFBQ3lCO2dDQUFFQyxNQUFNdEIsS0FBSzJCLFVBQVU7Z0NBQUdILFFBQU87Z0NBQVNDLEtBQUk7Z0NBQXNCZixXQUFVOztrREFDN0UsOERBQUNNO2tEQUFNOzs7Ozs7a0RBQ1AsOERBQUNuQiwyRUFBZUE7d0NBQUM2QixNQUFNL0Isd0VBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BdkI3QkssS0FBS2lCLElBQUk7Ozs7O0FBZ0N2QjtHQWxETWxCO0tBQUFBO0FBb0ROLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdERhdGEudHN4PzcyNWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUHJvamVjdEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcHJvamVjdERhdGFJbnRlcmZhY2UnXHJcbmltcG9ydCB7IGZhR2l0aHViIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgZmFFeWUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5cclxuXHJcbmludGVyZmFjZSBwcm9wcyB7XHJcbiAgICBkYXRhOlByb2plY3RJbnRlcmZhY2VcclxufVxyXG5cclxuY29uc3QgUHJvamVjdERhdGE6RkM8cHJvcHM+ID0gKHtkYXRhfSkgPT4ge1xyXG5jb25zdCBbaG92ZXIsIHNldEhvdmVyXT0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcbmNvbnN0IGltYWdlID0gdXNlUmVmPG51bGwgfCBIVE1MU3BhbkVsZW1lbnQ+KG51bGwpXHJcbmNvbnN0IEltYWdlTm9kZSA9IGltYWdlLmN1cnJlbnRcclxuXHJcblxyXG51c2VFZmZlY3QoKCk9PntcclxuIFxyXG4gIGNvbnN0IGhhbmRsZUhvdmVyRXZlbnQgPSAoKTp2b2lkPT57XHJcbiAgICBzZXRIb3ZlcighaG92ZXIpXHJcbiAgfVxyXG4gIEltYWdlTm9kZT8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBoYW5kbGVIb3ZlckV2ZW50IClcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgSW1hZ2VOb2RlPy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGhhbmRsZUhvdmVyRXZlbnQpXHJcbiAgfVxyXG59LFtob3ZlciwgSW1hZ2VOb2RlXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYga2V5PXtkYXRhLm5hbWV9IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGxnOnBiLTUgcC0xIHBiLTE2IFwiPlxyXG4gICAgICBcclxuICAgICA8SW1hZ2Ugd2lkdGg9ezUwMH0gaGVpZ2h0PXs1MDB9ICBkYXRhLWFvcz1cInpvb20taW4tZG93blwiIHNyYz17ZGF0YS5pbWFnZX0gYWx0PSdwcm9qZWN0IGltYWdlJyBjbGFzc05hbWU9e2BmbGV4IG9wYWNpdHktNzAgIGxnOmgtWzU1dmhdIHJvdW5kZWQtbC1tZCAgYmctbm8tcmVwZWF0IGJnLWNvdmVyIGB9IC8+XHJcbiAgICBcclxuICAgICBcclxuICAgICA8ZGl2IGRhdGEtYW9zPVwiem9vbS1vdXQtdXBcIiAgY2xhc3NOYW1lPVwiZmxleCBnYXAtNSAgIGZsZXgtY29sICAgaC1mdWxsIGxnOmgtWzU1dmhdICBqdXN0aWZ5LWNlbnRlciAgdy1mdWxsICBiZy1bIzAwMDAwMGI1XSAgbGc6YmctZ3JhZGllbnQtdG8tbCBmcm9tLVsjMGMwZjExXSB0by1bIzBkMTExNF0gcHktMyAgcHgtMiAgbGc6cHgtOCAgc2hhZG93LXhsIHNoYWRvdy1bIzAwMDAwMDgyXSByb3VuZGVkLXItbWRcIj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bI0Y3OEQyNl0gdGV4dC1sZyBsZzp0ZXh0LTN4bCBmb250LWhlYWRlcnNcIj57ZGF0YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBmb250LXBhcmEgdGV4dC1iYXNlIGxnOnRleHQtbGdcIj57ZGF0YS5kZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBnYXAtM1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBsZzp0ZXh0LXhsIHRleHQtWyNGNzhEMjZdIGZvbnQtaGVhZGVyc1wiPkJ1aWx0IFdpdGg6PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtaGVhZGVycyB0ZXh0LWdyYXktMzAwIHRleHQtYmFzZSBsZzp0ZXh0LWxnICBmbGV4IGZsZXgtd3JhcCBnYXAtMyBpdGVtcy1jZW50ZXIgIHctZnVsbFwiPlxyXG4gICAgICAgICAge2RhdGEudGVjaG5vbG9naWVzLm1hcCh0ZWNobm9sb2dpZXM9PihcclxuICAgICAgICAgICAgPHNwYW4ga2V5PXt0ZWNobm9sb2dpZXN9IGNsYXNzTmFtZT1cImxnOnB4LTEgZmxleCBcIj57dGVjaG5vbG9naWVzfTwvc3Bhbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtaGVhZGVycyBmbGV4IGdhcC01XCI+XHJcbiAgICAgICAgICA8YSBocmVmPXtkYXRhLmxpdmVTaXRlfSAgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT17YCR7ZGF0YS5saXZlU2l0ZSA/IFwiYmxvY2tcIiA6IFwiaGlkZGVuXCJ9IGZsZXggZ2FwLTIgcHgtMS41IHB5LTIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLVsjRjc4RDI2XS83MCBob3ZlcjpiZy1bI0Y3OEQyNl0gdGV4dC1ncmF5LTUwIGZvbnQtcGFyYSByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyIHRleHQtYmFzZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZGVsYXktNzUgZWFzZS1pbi1vdXQgIGhvdmVyOnNjYWxlLTkwYH0+XHJcbiAgICAgICAgICAgIDxzcGFuID5WaWV3IExpdmU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFFeWV9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPXtkYXRhLnNvdXJjZUNvZGV9ICB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtMS41IHB5LTIgYmctWyNGNzhEMjZdLzcwIGhvdmVyOmJnLVsjRjc4RDI2XSB0ZXh0LWdyYXktNTAgZm9udC1wYXJhIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXIgdGV4dC1iYXNlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBkZWxheS03NSBlYXNlLWluLW91dCAgaG92ZXI6c2NhbGUtOTBcIj5cclxuICAgICAgICAgICAgPHNwYW4gPlNvdXJjZSBDb2RlPC9zcGFuPiBcclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpdGh1Yn0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICBcclxuICAgIFxyXG48L2Rpdj5cclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RGF0YSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImZhR2l0aHViIiwiZmFFeWUiLCJGb250QXdlc29tZUljb24iLCJJbWFnZSIsIlByb2plY3REYXRhIiwiZGF0YSIsImhvdmVyIiwic2V0SG92ZXIiLCJpbWFnZSIsIkltYWdlTm9kZSIsImN1cnJlbnQiLCJoYW5kbGVIb3ZlckV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsImRhdGEtYW9zIiwic3JjIiwiYWx0Iiwic3BhbiIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInRlY2hub2xvZ2llcyIsIm1hcCIsImEiLCJocmVmIiwibGl2ZVNpdGUiLCJ0YXJnZXQiLCJyZWwiLCJpY29uIiwic291cmNlQ29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/ProjectData.tsx\n"));

/***/ })

});