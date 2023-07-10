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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-client)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ProjectData = function(param) {\n    var data = param.data;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), hover = _useState[0], setHover = _useState[1];\n    var image = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ImageNode = image.current;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var _ImageNode;\n        var handleHoverEvent = function() {\n            setHover(!hover);\n        };\n        (_ImageNode = ImageNode) === null || _ImageNode === void 0 ? void 0 : _ImageNode.addEventListener(\"mouseover\", handleHoverEvent);\n        return function() {\n            var _ImageNode;\n            (_ImageNode = ImageNode) === null || _ImageNode === void 0 ? void 0 : _ImageNode.removeEventListener(\"mouseover\", handleHoverEvent);\n        };\n    }, [\n        hover,\n        ImageNode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-full  flex flex-col lg:flex-row items-center justify-center lg:pb-5 p-1 pb-16 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                \"data-aos\": \"zoom-in-down\",\n                ref: image,\n                className: \"flex opacity-70  w-full h-[300px] lg:h-[55vh] rounded-l-md  bg-no-repeat bg-cover \".concat(hover ? \"scale-110\" : \"\", \" \"),\n                style: {\n                    backgroundImage: \"url(\".concat(data.image, \")\")\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                lineNumber: 35,\n                columnNumber: 6\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"data-aos\": \"zoom-out-up\",\n                className: \"flex gap-5   flex-col   h-full lg:h-[55vh]  justify-center  w-full  bg-[#000000b5]  lg:bg-gradient-to-l from-[#0c0f11] to-[#0d1114] py-3  px-2  lg:px-8  shadow-xl shadow-[#00000082] rounded-r-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-[#F78D26] text-lg lg:text-3xl font-headers\",\n                        children: data.name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-gray-300 font-para text-base lg:text-lg\",\n                        children: data.description\n                    }, void 0, false, {\n                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-full gap-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-lg lg:text-xl text-[#F78D26] font-headers\",\n                                children: \"Built With:\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-headers text-gray-300 text-base lg:text-lg  flex flex-wrap gap-3 items-center  w-full\",\n                                children: data.technologies.map(function(technologies) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"lg:px-1 flex \",\n                                        children: technologies\n                                    }, technologies, false, {\n                                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white font-headers flex gap-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: data.liveSite,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"\".concat(data.liveSite ? \"block\" : \"hidden\", \" flex gap-2 px-1.5 py-2 items-center justify-center bg-[#F78D26]/70 hover:bg-[#F78D26] text-gray-50 font-para rounded-md cursor-pointer text-base transition-all duration-300 delay-75 ease-in-out  hover:scale-90\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"View Live\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faEye\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: data.sourceCode,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"flex gap-2 items-center justify-center px-1.5 py-2 bg-[#F78D26]/70 hover:bg-[#F78D26] text-gray-50 font-para rounded-md cursor-pointer text-base transition-all duration-300 delay-75 ease-in-out  hover:scale-90\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Source Code\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faGithub\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n                lineNumber: 38,\n                columnNumber: 6\n            }, _this)\n        ]\n    }, data.name, true, {\n        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\ProjectData.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProjectData, \"wGMwwhUOBJrFgVFYBJgQAodlk14=\");\n_c = ProjectData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectData);\nvar _c;\n$RefreshReg$(_c, \"ProjectData\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9Qcm9qZWN0RGF0YS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXVEO0FBRU07QUFDSjtBQUNPO0FBUWhFLElBQU1NLGNBQXdCO1FBQUVDLGFBQUFBOztJQUNoQyxJQUF5QlAsWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFVLFlBQXBDUSxRQUFrQlIsY0FBWFMsV0FBV1Q7SUFDekIsSUFBTVUsUUFBUVIsNkNBQU1BLENBQXlCO0lBQzdDLElBQU1TLFlBQVlELE1BQU1FLE9BQU87SUFHL0JYLGdEQUFTQSxDQUFDO1lBS1JVO1FBSEEsSUFBTUUsbUJBQW1CO1lBQ3ZCSixTQUFTLENBQUNEO1FBQ1o7U0FDQUcsYUFBQUEsdUJBQUFBLGlDQUFBQSxXQUFXRyxnQkFBZ0IsQ0FBQyxhQUFhRDtRQUN6QyxPQUFPO2dCQUNMRjthQUFBQSxhQUFBQSx1QkFBQUEsaUNBQUFBLFdBQVdJLG1CQUFtQixDQUFDLGFBQWFGO1FBQzlDO0lBQ0YsR0FBRTtRQUFDTDtRQUFPRztLQUFVO0lBRWxCLHFCQUNFLDhEQUFDSztRQUFvQkMsV0FBVTs7MEJBRTlCLDhEQUFDQztnQkFBS0MsWUFBUztnQkFBZUMsS0FBS1Y7Z0JBQU9PLFdBQVcscUZBQTZHLE9BQXhCVCxRQUFRLGNBQWEsSUFBRztnQkFBSWEsT0FBTztvQkFBQ0MsaUJBQWdCLE9BQWtCLE9BQVhmLEtBQUtHLEtBQUssRUFBQztnQkFBRTs7Ozs7OzBCQUdsTiw4REFBQ007Z0JBQUlHLFlBQVM7Z0JBQWVGLFdBQVU7O2tDQUN0Qyw4REFBQ0M7d0JBQUtELFdBQVU7a0NBQW1EVixLQUFLZ0IsSUFBSTs7Ozs7O2tDQUM1RSw4REFBQ0w7d0JBQUtELFdBQVU7a0NBQWdEVixLQUFLaUIsV0FBVzs7Ozs7O2tDQUM5RSw4REFBQ1I7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBS0QsV0FBVTswQ0FBaUQ7Ozs7OzswQ0FDbkUsOERBQUNDO2dDQUFLRCxXQUFVOzBDQUNiVixLQUFLa0IsWUFBWSxDQUFDQyxHQUFHLENBQUNELFNBQUFBO3lEQUNyQiw4REFBQ1A7d0NBQXdCRCxXQUFVO2tEQUFpQlE7dUNBQXpDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSWYsOERBQUNQO3dCQUFLRCxXQUFVOzswQ0FDZCw4REFBQ1U7Z0NBQUVDLE1BQU1yQixLQUFLc0IsUUFBUTtnQ0FBR0MsUUFBTztnQ0FBU0MsS0FBSTtnQ0FBc0JkLFdBQVcsR0FBc0MsT0FBbkNWLEtBQUtzQixRQUFRLEdBQUcsVUFBVSxVQUFTOztrREFDbEgsOERBQUNYO2tEQUFNOzs7Ozs7a0RBQ1AsOERBQUNiLDJFQUFlQTt3Q0FBQzJCLE1BQU01QixvRUFBS0E7Ozs7Ozs7Ozs7OzswQ0FFOUIsOERBQUN1QjtnQ0FBRUMsTUFBTXJCLEtBQUswQixVQUFVO2dDQUFHSCxRQUFPO2dDQUFTQyxLQUFJO2dDQUFzQmQsV0FBVTs7a0RBQzdFLDhEQUFDQztrREFBTTs7Ozs7O2tEQUNQLDhEQUFDYiwyRUFBZUE7d0NBQUMyQixNQUFNN0Isd0VBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BdkI3QkksS0FBS2dCLElBQUk7Ozs7O0FBZ0N2QjtHQWxETWpCO0tBQUFBO0FBb0ROLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdERhdGEudHN4PzcyNWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUHJvamVjdEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcHJvamVjdERhdGFJbnRlcmZhY2UnXHJcbmltcG9ydCB7IGZhR2l0aHViIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgZmFFeWUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIHByb3BzIHtcclxuICAgIGRhdGE6UHJvamVjdEludGVyZmFjZVxyXG59XHJcblxyXG5jb25zdCBQcm9qZWN0RGF0YTpGQzxwcm9wcz4gPSAoe2RhdGF9KSA9PiB7XHJcbmNvbnN0IFtob3Zlciwgc2V0SG92ZXJdPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuY29uc3QgaW1hZ2UgPSB1c2VSZWY8bnVsbCB8IEhUTUxTcGFuRWxlbWVudD4obnVsbClcclxuY29uc3QgSW1hZ2VOb2RlID0gaW1hZ2UuY3VycmVudFxyXG5cclxuXHJcbnVzZUVmZmVjdCgoKT0+e1xyXG4gXHJcbiAgY29uc3QgaGFuZGxlSG92ZXJFdmVudCA9ICgpOnZvaWQ9PntcclxuICAgIHNldEhvdmVyKCFob3ZlcilcclxuICB9XHJcbiAgSW1hZ2VOb2RlPy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGhhbmRsZUhvdmVyRXZlbnQgKVxyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBJbWFnZU5vZGU/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaGFuZGxlSG92ZXJFdmVudClcclxuICB9XHJcbn0sW2hvdmVyLCBJbWFnZU5vZGVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBrZXk9e2RhdGEubmFtZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCAgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbGc6cGItNSBwLTEgcGItMTYgXCI+XHJcbiAgICAgIFxyXG4gICAgIDxzcGFuIGRhdGEtYW9zPVwiem9vbS1pbi1kb3duXCIgcmVmPXtpbWFnZX0gY2xhc3NOYW1lPXtgZmxleCBvcGFjaXR5LTcwICB3LWZ1bGwgaC1bMzAwcHhdIGxnOmgtWzU1dmhdIHJvdW5kZWQtbC1tZCAgYmctbm8tcmVwZWF0IGJnLWNvdmVyICR7aG92ZXIgPyBcInNjYWxlLTExMFwiOiBcIlwifSBgfSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpgdXJsKCR7ZGF0YS5pbWFnZX0pYH19Pjwvc3Bhbj5cclxuICAgIFxyXG4gICAgIFxyXG4gICAgIDxkaXYgZGF0YS1hb3M9XCJ6b29tLW91dC11cFwiICBjbGFzc05hbWU9XCJmbGV4IGdhcC01ICAgZmxleC1jb2wgICBoLWZ1bGwgbGc6aC1bNTV2aF0gIGp1c3RpZnktY2VudGVyICB3LWZ1bGwgIGJnLVsjMDAwMDAwYjVdICBsZzpiZy1ncmFkaWVudC10by1sIGZyb20tWyMwYzBmMTFdIHRvLVsjMGQxMTE0XSBweS0zICBweC0yICBsZzpweC04ICBzaGFkb3cteGwgc2hhZG93LVsjMDAwMDAwODJdIHJvdW5kZWQtci1tZFwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjRjc4RDI2XSB0ZXh0LWxnIGxnOnRleHQtM3hsIGZvbnQtaGVhZGVyc1wiPntkYXRhLm5hbWV9PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGZvbnQtcGFyYSB0ZXh0LWJhc2UgbGc6dGV4dC1sZ1wiPntkYXRhLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGdhcC0zXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxnOnRleHQteGwgdGV4dC1bI0Y3OEQyNl0gZm9udC1oZWFkZXJzXCI+QnVpbHQgV2l0aDo8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1oZWFkZXJzIHRleHQtZ3JheS0zMDAgdGV4dC1iYXNlIGxnOnRleHQtbGcgIGZsZXggZmxleC13cmFwIGdhcC0zIGl0ZW1zLWNlbnRlciAgdy1mdWxsXCI+XHJcbiAgICAgICAgICB7ZGF0YS50ZWNobm9sb2dpZXMubWFwKHRlY2hub2xvZ2llcz0+KFxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9e3RlY2hub2xvZ2llc30gY2xhc3NOYW1lPVwibGc6cHgtMSBmbGV4IFwiPnt0ZWNobm9sb2dpZXN9PC9zcGFuPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1oZWFkZXJzIGZsZXggZ2FwLTVcIj5cclxuICAgICAgICAgIDxhIGhyZWY9e2RhdGEubGl2ZVNpdGV9ICB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPXtgJHtkYXRhLmxpdmVTaXRlID8gXCJibG9ja1wiIDogXCJoaWRkZW5cIn0gZmxleCBnYXAtMiBweC0xLjUgcHktMiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctWyNGNzhEMjZdLzcwIGhvdmVyOmJnLVsjRjc4RDI2XSB0ZXh0LWdyYXktNTAgZm9udC1wYXJhIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXIgdGV4dC1iYXNlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBkZWxheS03NSBlYXNlLWluLW91dCAgaG92ZXI6c2NhbGUtOTBgfT5cclxuICAgICAgICAgICAgPHNwYW4gPlZpZXcgTGl2ZTwvc3Bhbj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUV5ZX0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9e2RhdGEuc291cmNlQ29kZX0gIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC0xLjUgcHktMiBiZy1bI0Y3OEQyNl0vNzAgaG92ZXI6YmctWyNGNzhEMjZdIHRleHQtZ3JheS01MCBmb250LXBhcmEgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlciB0ZXh0LWJhc2UgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGRlbGF5LTc1IGVhc2UtaW4tb3V0ICBob3ZlcjpzY2FsZS05MFwiPlxyXG4gICAgICAgICAgICA8c3BhbiA+U291cmNlIENvZGU8L3NwYW4+IFxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2l0aHVifSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgXHJcbjwvZGl2PlxyXG5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3REYXRhIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZmFHaXRodWIiLCJmYUV5ZSIsIkZvbnRBd2Vzb21lSWNvbiIsIlByb2plY3REYXRhIiwiZGF0YSIsImhvdmVyIiwic2V0SG92ZXIiLCJpbWFnZSIsIkltYWdlTm9kZSIsImN1cnJlbnQiLCJoYW5kbGVIb3ZlckV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiZGF0YS1hb3MiLCJyZWYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInRlY2hub2xvZ2llcyIsIm1hcCIsImEiLCJocmVmIiwibGl2ZVNpdGUiLCJ0YXJnZXQiLCJyZWwiLCJpY29uIiwic291cmNlQ29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/ProjectData.tsx\n"));

/***/ })

});