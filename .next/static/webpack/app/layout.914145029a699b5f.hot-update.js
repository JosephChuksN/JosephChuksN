"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"ed0f6bf5f507\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/NWIyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImVkMGY2YmY1ZjUwN1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useNavbarControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useNavbarControl */ \"(app-client)/./hooks/useNavbarControl.ts\");\n/* harmony import */ var _assets_portfoliologo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/portfoliologo.png */ \"(app-client)/./assets/portfoliologo.png\");\n/* harmony import */ var _hooks_useScrollDirection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useScrollDirection */ \"(app-client)/./hooks/useScrollDirection.ts\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Navbar = function() {\n    _s();\n    var pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    var activeItem = \"text-[#F78D26] scale-75 transition-all delay-75 duration-300 ease-in-out\";\n    // const navbar = useRef< null | HTMLDivElement>(null) ref={navbar}\n    var _useNavbarControl = (0,_hooks_useNavbarControl__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), isNavOpen = _useNavbarControl.isNavOpen, controlNavigation = _useNavbarControl.controlNavigation;\n    var scrollDirection = (0,_hooks_useScrollDirection__WEBPACK_IMPORTED_MODULE_6__[\"default\"])().scrollDirection;\n    //  let threshHold:number = 0;\n    // const handleNavScroll = ():void =>{\n    //   const navNode = navbar.current\n    //      const currentScroll = window.pageYOffset\n    //      if(currentScroll <= 0){\n    //       navNode?.classList.remove(\"shadow-lg\", \"backdrop-blur-lg\", \"md:py-4\", \"fixed\")\n    //       navNode?.classList.add(\"md:py-8\", \"sticky\", \"top-0\")\n    //      }\n    //      if(currentScroll > threshHold  && !navNode?.classList.contains(\"-translate-y-full\")){\n    //       navNode?.classList.remove(\"shadow-lg\",  \"backdrop-blur-lg\")\n    //       navNode?.classList.add(\"-translate-y-full\")   \n    //      }\n    //      if(currentScroll < threshHold  && navNode?.classList.contains(\"-translate-y-full\")){\n    //       navNode?.classList.remove(\"-translate-y-full\", \"md:py-8\", \"sticky\", \"top-0\")\n    //       navNode?.classList.add(\"shadow-lg\", \"backdrop-blur-lg\", \"md:py-4\", \"fixed\" )\n    //      }\n    //    threshHold = currentScroll\n    // }\n    // useEffect(() =>{\n    //   window.addEventListener(\"scroll\", handleNavScroll)\n    //   return () =>{\n    //     window.removeEventListener(\"scroll\", handleNavScroll)\n    //   }\n    // },[threshHold])\n    // const currentScroll = window.scrollY\n    // useEffect(()=>{\n    //   const navNode = navbar.current\n    //    const handleAddClass = ():void =>{\n    //     if(scrollDirection===\"up\"){\n    //       navNode?.classList.add(\"shadow-lg\")\n    //     }else if (scrollDirection===\"down\" && currentScroll <=0){\n    //       navNode?.classList.remove(\"shadow-lg\")\n    //     }\n    //    }\n    //    handleAddClass()\n    // },[scrollDirection, currentScroll])\n    var NavItems = [\n        {\n            name: \"Home\",\n            link: \"/\"\n        },\n        {\n            name: \"About\",\n            link: \"about\"\n        },\n        {\n            name: \"Projects\",\n            link: \"projects\"\n        },\n        {\n            name: \"Contact\",\n            link: \"contact\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sticky shadow-[#00000082] \".concat(scrollDirection === \"down\" ? \"-translate-y-full\" : \"top-0 backdrop-blur-lg \", \" transition-all delay-75 duration-500 ease-in-out w-full py-4 md:py-8 font-headers text-white z-50 \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" flex justify-between items-center px-5 lg:px-56 relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \" flex items-center justify-center   w-12 h-12  \",\n                    src: _assets_portfoliologo_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    alt: \"logo\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 8\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    onClick: controlNavigation,\n                    className: \"lg:hidden text-3xl p-1 text-[#F78D26]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faBars\n                    }, void 0, false, {\n                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 92\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 8\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed flex box-border overscroll-none lg:static py-36 lg:py-0 justify-start items-center lg:justify-between lg:items-start top-0  left-0  h-[100vh] lg:h-7 w-full lg:w-1/3  flex-col md:flex-row bg-[#0d1114] transition-all duration-700 delay-100 ease-in-out  lg:bg-transparent gap-10 lg:opacity-100 z-10 font-medium text-2xl lg:text-base lg:visible   \".concat(isNavOpen ? \"opacity-100  visible\" : \" opacity-0 invisible\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            onClick: controlNavigation,\n                            className: \"absolute top-3 right-5 p-1 text-[#F78D26] text-4xl lg:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faClose\n                            }, void 0, false, {\n                                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 120\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, _this),\n                        NavItems.map(function(items) {\n                            var isActive = pathname.startsWith(items.href);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                onClick: controlNavigation,\n                                className: isActive ? activeItem : \"text-black\",\n                                href: items.link,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \" transition-all delay-100 duration-500 ease-in-out cursor-pointer hover:opacity-70 hover:text-[#F78D26]\",\n                                    children: items.name\n                                }, items.name, false, {\n                                    fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 11\n                                }, _this)\n                            }, items.name, false, {\n                                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, _this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 8\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n            lineNumber: 84,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, _this);\n};\n_s(Navbar, \"fNrVPRqYI3EgwNBRrRTx/p1++gI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname,\n        _hooks_useNavbarControl__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _hooks_useScrollDirection__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeUI7QUFFb0I7QUFDakI7QUFDNEI7QUFDRDtBQUNLO0FBRU87QUFDSDtBQUdoRSxJQUFNUyxTQUFrQjs7SUFFckIsSUFBTUMsV0FBV1QsNERBQVdBO0lBQzVCLElBQU1VLGFBQW9CO0lBQ3pCLG1FQUFtRTtJQUNuRSxJQUF3Q1Isb0JBQUFBLG1FQUFnQkEsSUFBakRTLFlBQWlDVCxrQkFBakNTLFdBQVlDLG9CQUFxQlYsa0JBQXJCVTtJQUNuQixJQUFNLGtCQUFxQlIscUVBQWtCQSxHQUFyQ1M7SUFFViw4QkFBOEI7SUFFNUIsc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxnREFBZ0Q7SUFDaEQsK0JBQStCO0lBQy9CLHVGQUF1RjtJQUN2Riw2REFBNkQ7SUFDN0QsU0FBUztJQUNULDZGQUE2RjtJQUM3RixvRUFBb0U7SUFDcEUsdURBQXVEO0lBQ3ZELFNBQVM7SUFDVCw0RkFBNEY7SUFDNUYscUZBQXFGO0lBQ3JGLHFGQUFxRjtJQUVyRixTQUFTO0lBR1QsZ0NBQWdDO0lBR2hDLElBQUk7SUFFUixtQkFBbUI7SUFDbkIsdURBQXVEO0lBRXZELGtCQUFrQjtJQUNsQiw0REFBNEQ7SUFDNUQsTUFBTTtJQUdOLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFFdkMsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUVuQyx3Q0FBd0M7SUFDeEMsa0NBQWtDO0lBQ2xDLDRDQUE0QztJQUM1QyxnRUFBZ0U7SUFDaEUsK0NBQStDO0lBQy9DLFFBQVE7SUFDUixPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUlsQyxJQUFNQyxXQUFxQjtRQUN6QjtZQUFDQyxNQUFLO1lBQVFDLE1BQUs7UUFBRztRQUN0QjtZQUFDRCxNQUFLO1lBQVNDLE1BQUs7UUFBTztRQUMzQjtZQUFDRCxNQUFLO1lBQVlDLE1BQUs7UUFBVTtRQUNqQztZQUFDRCxNQUFLO1lBQVdDLE1BQUs7UUFBUztLQUNoQztJQUdILHFCQUNFLDhEQUFDQztRQUFLQyxXQUFXLDZCQUF5RyxPQUE1RUwsb0JBQW9CLFNBQVEsc0JBQXNCLDJCQUEwQjtrQkFDMUgsNEVBQUNJO1lBQUlDLFdBQVU7OzhCQUNaLDhEQUFDQztvQkFBSUQsV0FBVTtvQkFBa0RFLEtBQUtqQixpRUFBYUE7b0JBQUVrQixLQUFJOzs7Ozs7OEJBQ3pGLDhEQUFDQztvQkFBS0MsU0FBU1g7b0JBQW1CTSxXQUFVOzhCQUF3Qyw0RUFBQ1gsMkVBQWVBO3dCQUFDaUIsTUFBTW5CLHFFQUFNQTs7Ozs7Ozs7Ozs7OEJBRWpILDhEQUFDWTtvQkFBS0MsV0FBVyxnV0FBMlosT0FBM0RQLFlBQVcseUJBQXlCOztzQ0FFaFosOERBQUNXOzRCQUFLQyxTQUFTWDs0QkFBbUJNLFdBQVU7c0NBQStELDRFQUFDWCwyRUFBZUE7Z0NBQUNpQixNQUFNbEIsc0VBQU9BOzs7Ozs7Ozs7Ozt3QkFFMUlRLFNBQVNXLEdBQUcsQ0FBQ0MsU0FBQUE7NEJBQ1gsSUFBTUMsV0FBV2xCLFNBQVNtQixVQUFVLENBQUNGLE1BQU1HLElBQUk7NEJBQ3BELHFCQUNFLDhEQUFDNUIsa0RBQUlBO2dDQUNQc0IsU0FBU1g7Z0NBQ1RNLFdBQVdTLFdBQVdqQixhQUFhO2dDQUNsQm1CLE1BQU1ILE1BQU1WLElBQUk7MENBQy9CLDRFQUFDTTtvQ0FBS0osV0FBVTs4Q0FDYlEsTUFBTVgsSUFBSTttQ0FEa0hXLE1BQU1YLElBQUk7Ozs7OytCQUR0SVcsTUFBTVgsSUFBSTs7Ozs7d0JBT2Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1SO0dBaEdNUDs7UUFFY1Isd0RBQVdBO1FBR2FFLCtEQUFnQkE7UUFDN0JFLGlFQUFrQkE7OztLQU4zQ0k7QUFrR04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIudHN4PzFiODMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB1c2VOYXZiYXJDb250cm9sIGZyb20gJy4uL2hvb2tzL3VzZU5hdmJhckNvbnRyb2wnXHJcbmltcG9ydCBwb3J0Zm9saW9sb2dvIGZyb20gJy4uL2Fzc2V0cy9wb3J0Zm9saW9sb2dvLnBuZydcclxuaW1wb3J0IHVzZVNjcm9sbERpcmVjdGlvbiBmcm9tICcuLi9ob29rcy91c2VTY3JvbGxEaXJlY3Rpb24nXHJcbmltcG9ydCB7IE5hdkl0ZW1zIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9OYXZiYXJJbnRlcmZhY2UnXHJcbmltcG9ydCB7IGZhQmFycywgZmFDbG9zZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5cclxuXHJcbmNvbnN0IE5hdmJhcjpSZWFjdC5GQyA9ICgpID0+IHtcclxuXHJcbiAgIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKVxyXG4gICBjb25zdCBhY3RpdmVJdGVtOnN0cmluZyA9IFwidGV4dC1bI0Y3OEQyNl0gc2NhbGUtNzUgdHJhbnNpdGlvbi1hbGwgZGVsYXktNzUgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0XCJcclxuICAgIC8vIGNvbnN0IG5hdmJhciA9IHVzZVJlZjwgbnVsbCB8IEhUTUxEaXZFbGVtZW50PihudWxsKSByZWY9e25hdmJhcn1cclxuICAgIGNvbnN0IHtpc05hdk9wZW4sICBjb250cm9sTmF2aWdhdGlvbn0gPSB1c2VOYXZiYXJDb250cm9sKClcclxuICAgIGNvbnN0IHsgc2Nyb2xsRGlyZWN0aW9ufSA9IHVzZVNjcm9sbERpcmVjdGlvbigpXHJcblxyXG4gIC8vICBsZXQgdGhyZXNoSG9sZDpudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIGNvbnN0IGhhbmRsZU5hdlNjcm9sbCA9ICgpOnZvaWQgPT57XHJcbiAgICAvLyAgIGNvbnN0IG5hdk5vZGUgPSBuYXZiYXIuY3VycmVudFxyXG4gICAgLy8gICAgICBjb25zdCBjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0XHJcbiAgICAvLyAgICAgIGlmKGN1cnJlbnRTY3JvbGwgPD0gMCl7XHJcbiAgICAvLyAgICAgICBuYXZOb2RlPy5jbGFzc0xpc3QucmVtb3ZlKFwic2hhZG93LWxnXCIsIFwiYmFja2Ryb3AtYmx1ci1sZ1wiLCBcIm1kOnB5LTRcIiwgXCJmaXhlZFwiKVxyXG4gICAgLy8gICAgICAgbmF2Tm9kZT8uY2xhc3NMaXN0LmFkZChcIm1kOnB5LThcIiwgXCJzdGlja3lcIiwgXCJ0b3AtMFwiKVxyXG4gICAgLy8gICAgICB9XHJcbiAgICAvLyAgICAgIGlmKGN1cnJlbnRTY3JvbGwgPiB0aHJlc2hIb2xkICAmJiAhbmF2Tm9kZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIikpe1xyXG4gICAgLy8gICAgICAgbmF2Tm9kZT8uY2xhc3NMaXN0LnJlbW92ZShcInNoYWRvdy1sZ1wiLCAgXCJiYWNrZHJvcC1ibHVyLWxnXCIpXHJcbiAgICAvLyAgICAgICBuYXZOb2RlPy5jbGFzc0xpc3QuYWRkKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIikgICBcclxuICAgIC8vICAgICAgfVxyXG4gICAgLy8gICAgICBpZihjdXJyZW50U2Nyb2xsIDwgdGhyZXNoSG9sZCAgJiYgbmF2Tm9kZT8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiLXRyYW5zbGF0ZS15LWZ1bGxcIikpe1xyXG4gICAgLy8gICAgICAgbmF2Tm9kZT8uY2xhc3NMaXN0LnJlbW92ZShcIi10cmFuc2xhdGUteS1mdWxsXCIsIFwibWQ6cHktOFwiLCBcInN0aWNreVwiLCBcInRvcC0wXCIpXHJcbiAgICAvLyAgICAgICBuYXZOb2RlPy5jbGFzc0xpc3QuYWRkKFwic2hhZG93LWxnXCIsIFwiYmFja2Ryb3AtYmx1ci1sZ1wiLCBcIm1kOnB5LTRcIiwgXCJmaXhlZFwiIClcclxuICAgICAgICAgIFxyXG4gICAgLy8gICAgICB9XHJcbiAgICAgXHJcbiAgICAgXHJcbiAgICAvLyAgICB0aHJlc2hIb2xkID0gY3VycmVudFNjcm9sbFxyXG5cclxuXHJcbiAgICAvLyB9XHJcbiAgICBcclxuLy8gdXNlRWZmZWN0KCgpID0+e1xyXG4vLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZU5hdlNjcm9sbClcclxuXHJcbi8vICAgcmV0dXJuICgpID0+e1xyXG4vLyAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlTmF2U2Nyb2xsKVxyXG4vLyAgIH1cclxuXHJcblxyXG4vLyB9LFt0aHJlc2hIb2xkXSlcclxuLy8gY29uc3QgY3VycmVudFNjcm9sbCA9IHdpbmRvdy5zY3JvbGxZXHJcblxyXG4vLyB1c2VFZmZlY3QoKCk9PntcclxuLy8gICBjb25zdCBuYXZOb2RlID0gbmF2YmFyLmN1cnJlbnRcclxuICBcclxuLy8gICAgY29uc3QgaGFuZGxlQWRkQ2xhc3MgPSAoKTp2b2lkID0+e1xyXG4vLyAgICAgaWYoc2Nyb2xsRGlyZWN0aW9uPT09XCJ1cFwiKXtcclxuLy8gICAgICAgbmF2Tm9kZT8uY2xhc3NMaXN0LmFkZChcInNoYWRvdy1sZ1wiKVxyXG4vLyAgICAgfWVsc2UgaWYgKHNjcm9sbERpcmVjdGlvbj09PVwiZG93blwiICYmIGN1cnJlbnRTY3JvbGwgPD0wKXtcclxuLy8gICAgICAgbmF2Tm9kZT8uY2xhc3NMaXN0LnJlbW92ZShcInNoYWRvdy1sZ1wiKVxyXG4vLyAgICAgfVxyXG4vLyAgICB9XHJcbi8vICAgIGhhbmRsZUFkZENsYXNzKClcclxuLy8gfSxbc2Nyb2xsRGlyZWN0aW9uLCBjdXJyZW50U2Nyb2xsXSlcclxuXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBOYXZJdGVtczpOYXZJdGVtc1tdID1bXHJcbiAgICAgIHtuYW1lOlwiSG9tZVwiLCBsaW5rOlwiL1wifSxcclxuICAgICAge25hbWU6XCJBYm91dFwiLCBsaW5rOlwiYWJvdXRcIn0sXHJcbiAgICAgIHtuYW1lOlwiUHJvamVjdHNcIiwgbGluazpcInByb2plY3RzXCJ9LFxyXG4gICAgICB7bmFtZTpcIkNvbnRhY3RcIiwgbGluazpcImNvbnRhY3RcIn1cclxuICAgIF1cclxuICAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2ICBjbGFzc05hbWU9e2BzdGlja3kgc2hhZG93LVsjMDAwMDAwODJdICR7c2Nyb2xsRGlyZWN0aW9uID09PSBcImRvd25cIj8gXCItdHJhbnNsYXRlLXktZnVsbFwiIDogXCJ0b3AtMCBiYWNrZHJvcC1ibHVyLWxnIFwifSB0cmFuc2l0aW9uLWFsbCBkZWxheS03NSBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgdy1mdWxsIHB5LTQgbWQ6cHktOCBmb250LWhlYWRlcnMgdGV4dC13aGl0ZSB6LTUwIGB9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB4LTUgbGc6cHgtNTYgcmVsYXRpdmVcIj5cclxuICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyICAgdy0xMiBoLTEyICBcIiBzcmM9e3BvcnRmb2xpb2xvZ299IGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgPHNwYW4gb25DbGljaz17Y29udHJvbE5hdmlnYXRpb259IGNsYXNzTmFtZT1cImxnOmhpZGRlbiB0ZXh0LTN4bCBwLTEgdGV4dC1bI0Y3OEQyNl1cIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQmFyc30gLz48L3NwYW4+XHJcblxyXG4gICAgICAgPGRpdiAgY2xhc3NOYW1lPXtgZml4ZWQgZmxleCBib3gtYm9yZGVyIG92ZXJzY3JvbGwtbm9uZSBsZzpzdGF0aWMgcHktMzYgbGc6cHktMCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBsZzpqdXN0aWZ5LWJldHdlZW4gbGc6aXRlbXMtc3RhcnQgdG9wLTAgIGxlZnQtMCAgaC1bMTAwdmhdIGxnOmgtNyB3LWZ1bGwgbGc6dy0xLzMgIGZsZXgtY29sIG1kOmZsZXgtcm93IGJnLVsjMGQxMTE0XSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi03MDAgZGVsYXktMTAwIGVhc2UtaW4tb3V0ICBsZzpiZy10cmFuc3BhcmVudCBnYXAtMTAgbGc6b3BhY2l0eS0xMDAgei0xMCBmb250LW1lZGl1bSB0ZXh0LTJ4bCBsZzp0ZXh0LWJhc2UgbGc6dmlzaWJsZSAgICR7aXNOYXZPcGVuPyBcIm9wYWNpdHktMTAwICB2aXNpYmxlXCIgOiBcIiBvcGFjaXR5LTAgaW52aXNpYmxlXCJ9YH0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2NvbnRyb2xOYXZpZ2F0aW9ufSBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMyByaWdodC01IHAtMSB0ZXh0LVsjRjc4RDI2XSB0ZXh0LTR4bCBsZzpoaWRkZW5cIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2xvc2V9IC8+PC9zcGFuPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAge05hdkl0ZW1zLm1hcChpdGVtcz0+e1xyXG4gICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBwYXRobmFtZS5zdGFydHNXaXRoKGl0ZW1zLmhyZWYpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgIG9uQ2xpY2s9e2NvbnRyb2xOYXZpZ2F0aW9ufSAgXHJcbiAgICAgICAgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IGFjdGl2ZUl0ZW0gOiAndGV4dC1ibGFjayd9XHJcbiAgICAgICAga2V5PXtpdGVtcy5uYW1lfSBocmVmPXtpdGVtcy5saW5rfT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0cmFuc2l0aW9uLWFsbCBkZWxheS0xMDAgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktNzAgaG92ZXI6dGV4dC1bI0Y3OEQyNl1cIiBrZXk9e2l0ZW1zLm5hbWV9PlxyXG4gICAgICAgICAgICB7aXRlbXMubmFtZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKVxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VQYXRobmFtZSIsIkxpbmsiLCJ1c2VOYXZiYXJDb250cm9sIiwicG9ydGZvbGlvbG9nbyIsInVzZVNjcm9sbERpcmVjdGlvbiIsImZhQmFycyIsImZhQ2xvc2UiLCJGb250QXdlc29tZUljb24iLCJOYXZiYXIiLCJwYXRobmFtZSIsImFjdGl2ZUl0ZW0iLCJpc05hdk9wZW4iLCJjb250cm9sTmF2aWdhdGlvbiIsInNjcm9sbERpcmVjdGlvbiIsIk5hdkl0ZW1zIiwibmFtZSIsImxpbmsiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIiwib25DbGljayIsImljb24iLCJtYXAiLCJpdGVtcyIsImlzQWN0aXZlIiwic3RhcnRzV2l0aCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Navbar.tsx\n"));

/***/ })

});