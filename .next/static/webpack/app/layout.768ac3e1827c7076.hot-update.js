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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"eac68296e7af\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/NWIyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImVhYzY4Mjk2ZTdhZlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useNavbarControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useNavbarControl */ \"(app-client)/./hooks/useNavbarControl.ts\");\n/* harmony import */ var _assets_portfoliologo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/portfoliologo.png */ \"(app-client)/./assets/portfoliologo.png\");\n/* harmony import */ var _hooks_useScrollDirection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useScrollDirection */ \"(app-client)/./hooks/useScrollDirection.ts\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Navbar = function() {\n    _s();\n    var pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    var activeItem = \"text-[#F78D26] scale-75 transition-all delay-75 duration-300 ease-in-out\";\n    // const navbar = useRef< null | HTMLDivElement>(null) ref={navbar}\n    var _useNavbarControl = (0,_hooks_useNavbarControl__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), isNavOpen = _useNavbarControl.isNavOpen, controlNavigation = _useNavbarControl.controlNavigation;\n    var scrollDirection = (0,_hooks_useScrollDirection__WEBPACK_IMPORTED_MODULE_6__[\"default\"])().scrollDirection;\n    //  let threshHold:number = 0;\n    // const handleNavScroll = ():void =>{\n    //   const navNode = navbar.current\n    //      const currentScroll = window.pageYOffset\n    //      if(currentScroll <= 0){\n    //       navNode?.classList.remove(\"shadow-lg\", \"backdrop-blur-lg\", \"md:py-4\", \"fixed\")\n    //       navNode?.classList.add(\"md:py-8\", \"sticky\", \"top-0\")\n    //      }\n    //      if(currentScroll > threshHold  && !navNode?.classList.contains(\"-translate-y-full\")){\n    //       navNode?.classList.remove(\"shadow-lg\",  \"backdrop-blur-lg\")\n    //       navNode?.classList.add(\"-translate-y-full\")   \n    //      }\n    //      if(currentScroll < threshHold  && navNode?.classList.contains(\"-translate-y-full\")){\n    //       navNode?.classList.remove(\"-translate-y-full\", \"md:py-8\", \"sticky\", \"top-0\")\n    //       navNode?.classList.add(\"shadow-lg\", \"backdrop-blur-lg\", \"md:py-4\", \"fixed\" )\n    //      }\n    //    threshHold = currentScroll\n    // }\n    // useEffect(() =>{\n    //   window.addEventListener(\"scroll\", handleNavScroll)\n    //   return () =>{\n    //     window.removeEventListener(\"scroll\", handleNavScroll)\n    //   }\n    // },[threshHold])\n    // const currentScroll = window.scrollY\n    // useEffect(()=>{\n    //   const navNode = navbar.current\n    //    const handleAddClass = ():void =>{\n    //     if(scrollDirection===\"up\"){\n    //       navNode?.classList.add(\"shadow-lg\")\n    //     }else if (scrollDirection===\"down\" && currentScroll <=0){\n    //       navNode?.classList.remove(\"shadow-lg\")\n    //     }\n    //    }\n    //    handleAddClass()\n    // },[scrollDirection, currentScroll])\n    var NavItems = [\n        {\n            name: \"Home\",\n            link: \"/\"\n        },\n        {\n            name: \"About\",\n            link: \"about\"\n        },\n        {\n            name: \"Projects\",\n            link: \"projects\"\n        },\n        {\n            name: \"Contact\",\n            link: \"contact\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"sticky shadow-[#00000082] \".concat(scrollDirection === \"down\" ? \"-translate-y-full\" : \"top-0 backdrop-blur-lg \", \" transition-all delay-75 duration-500 ease-in-out w-full py-4 md:py-8 font-headers text-white z-50 \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" flex justify-between items-center px-5 lg:px-56 relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \" flex items-center justify-center   w-12 h-12  \",\n                    src: _assets_portfoliologo_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                    alt: \"logo\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 8\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    onClick: controlNavigation,\n                    className: \"lg:hidden text-3xl p-1 text-[#F78D26]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faBars\n                    }, void 0, false, {\n                        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 92\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 8\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed flex box-border overscroll-none lg:static py-36 lg:py-0 justify-start items-center lg:justify-between lg:items-start top-0  left-0  h-[100vh] lg:h-7 w-full lg:w-1/3  flex-col md:flex-row bg-[#0d1114] transition-all duration-700 delay-100 ease-in-out  lg:bg-transparent gap-10 lg:opacity-100 z-10 font-medium text-2xl lg:text-base lg:visible   \".concat(isNavOpen ? \"opacity-100  visible\" : \" opacity-0 invisible\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            onClick: controlNavigation,\n                            className: \"absolute top-3 right-5 p-1 text-[#F78D26] text-4xl lg:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faClose\n                            }, void 0, false, {\n                                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 120\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, _this),\n                        NavItems.map(function(items) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                onClick: controlNavigation,\n                                className: function(param) {\n                                    var isActive = param.isActive;\n                                    return isActive ? activeItem : \"\";\n                                },\n                                href: items.link,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \" transition-all delay-100 duration-500 ease-in-out cursor-pointer hover:opacity-70 hover:text-[#F78D26]\",\n                                    children: items.name\n                                }, items.name, false, {\n                                    fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 135\n                                }, _this)\n                            }, items.name, false, {\n                                fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 9\n                            }, _this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 8\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n            lineNumber: 84,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\new project\\\\mainPortfolio\\\\Portfolio1.0\\\\components\\\\Navbar.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, _this);\n};\n_s(Navbar, \"fNrVPRqYI3EgwNBRrRTx/p1++gI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname,\n        _hooks_useNavbarControl__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _hooks_useScrollDirection__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeUI7QUFFb0I7QUFDakI7QUFDNEI7QUFDRDtBQUNLO0FBRU87QUFDSDtBQUdoRSxJQUFNUyxTQUFrQjs7SUFFckIsSUFBTUMsV0FBV1QsNERBQVdBO0lBQzVCLElBQU1VLGFBQW9CO0lBQ3pCLG1FQUFtRTtJQUNuRSxJQUF3Q1Isb0JBQUFBLG1FQUFnQkEsSUFBakRTLFlBQWlDVCxrQkFBakNTLFdBQVlDLG9CQUFxQlYsa0JBQXJCVTtJQUNuQixJQUFNLGtCQUFxQlIscUVBQWtCQSxHQUFyQ1M7SUFFViw4QkFBOEI7SUFFNUIsc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxnREFBZ0Q7SUFDaEQsK0JBQStCO0lBQy9CLHVGQUF1RjtJQUN2Riw2REFBNkQ7SUFDN0QsU0FBUztJQUNULDZGQUE2RjtJQUM3RixvRUFBb0U7SUFDcEUsdURBQXVEO0lBQ3ZELFNBQVM7SUFDVCw0RkFBNEY7SUFDNUYscUZBQXFGO0lBQ3JGLHFGQUFxRjtJQUVyRixTQUFTO0lBR1QsZ0NBQWdDO0lBR2hDLElBQUk7SUFFUixtQkFBbUI7SUFDbkIsdURBQXVEO0lBRXZELGtCQUFrQjtJQUNsQiw0REFBNEQ7SUFDNUQsTUFBTTtJQUdOLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFFdkMsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUVuQyx3Q0FBd0M7SUFDeEMsa0NBQWtDO0lBQ2xDLDRDQUE0QztJQUM1QyxnRUFBZ0U7SUFDaEUsK0NBQStDO0lBQy9DLFFBQVE7SUFDUixPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUlsQyxJQUFNQyxXQUFxQjtRQUN6QjtZQUFDQyxNQUFLO1lBQVFDLE1BQUs7UUFBRztRQUN0QjtZQUFDRCxNQUFLO1lBQVNDLE1BQUs7UUFBTztRQUMzQjtZQUFDRCxNQUFLO1lBQVlDLE1BQUs7UUFBVTtRQUNqQztZQUFDRCxNQUFLO1lBQVdDLE1BQUs7UUFBUztLQUNoQztJQUdILHFCQUNFLDhEQUFDQztRQUFLQyxXQUFXLDZCQUF5RyxPQUE1RUwsb0JBQW9CLFNBQVEsc0JBQXNCLDJCQUEwQjtrQkFDMUgsNEVBQUNJO1lBQUlDLFdBQVU7OzhCQUNaLDhEQUFDQztvQkFBSUQsV0FBVTtvQkFBa0RFLEtBQUtqQixpRUFBYUE7b0JBQUVrQixLQUFJOzs7Ozs7OEJBQ3pGLDhEQUFDQztvQkFBS0MsU0FBU1g7b0JBQW1CTSxXQUFVOzhCQUF3Qyw0RUFBQ1gsMkVBQWVBO3dCQUFDaUIsTUFBTW5CLHFFQUFNQTs7Ozs7Ozs7Ozs7OEJBRWpILDhEQUFDWTtvQkFBS0MsV0FBVyxnV0FBMlosT0FBM0RQLFlBQVcseUJBQXlCOztzQ0FFaFosOERBQUNXOzRCQUFLQyxTQUFTWDs0QkFBbUJNLFdBQVU7c0NBQStELDRFQUFDWCwyRUFBZUE7Z0NBQUNpQixNQUFNbEIsc0VBQU9BOzs7Ozs7Ozs7Ozt3QkFFMUlRLFNBQVNXLEdBQUcsQ0FBQ0MsU0FBQUE7aURBQ2hCLDhEQUFDekIsa0RBQUlBO2dDQUNMc0IsU0FBU1g7Z0NBQ1RNLFdBQVc7d0NBQUVTLGlCQUFBQTtvQ0FBMEMsT0FBT0EsV0FBV2pCLGFBQWE7Z0NBQUU7Z0NBQW9Ca0IsTUFBTUYsTUFBTVYsSUFBSTswQ0FBRSw0RUFBQ007b0NBQUtKLFdBQVU7OENBQTRIUSxNQUFNWCxJQUFJO21DQUF2QlcsTUFBTVgsSUFBSTs7Ozs7K0JBQXZLVyxNQUFNWCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFsSDtHQXhGTVA7O1FBRWNSLHdEQUFXQTtRQUdhRSwrREFBZ0JBO1FBQzdCRSxpRUFBa0JBOzs7S0FOM0NJO0FBMEZOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeD8xYjgzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgdXNlTmF2YmFyQ29udHJvbCBmcm9tICcuLi9ob29rcy91c2VOYXZiYXJDb250cm9sJ1xyXG5pbXBvcnQgcG9ydGZvbGlvbG9nbyBmcm9tICcuLi9hc3NldHMvcG9ydGZvbGlvbG9nby5wbmcnXHJcbmltcG9ydCB1c2VTY3JvbGxEaXJlY3Rpb24gZnJvbSAnLi4vaG9va3MvdXNlU2Nyb2xsRGlyZWN0aW9uJ1xyXG5pbXBvcnQgeyBOYXZJdGVtcyB9IGZyb20gJy4uL2ludGVyZmFjZXMvTmF2YmFySW50ZXJmYWNlJ1xyXG5pbXBvcnQgeyBmYUJhcnMsIGZhQ2xvc2UgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcclxuXHJcblxyXG5jb25zdCBOYXZiYXI6UmVhY3QuRkMgPSAoKSA9PiB7XHJcblxyXG4gICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKClcclxuICAgY29uc3QgYWN0aXZlSXRlbTpzdHJpbmcgPSBcInRleHQtWyNGNzhEMjZdIHNjYWxlLTc1IHRyYW5zaXRpb24tYWxsIGRlbGF5LTc1IGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dFwiXHJcbiAgICAvLyBjb25zdCBuYXZiYXIgPSB1c2VSZWY8IG51bGwgfCBIVE1MRGl2RWxlbWVudD4obnVsbCkgcmVmPXtuYXZiYXJ9XHJcbiAgICBjb25zdCB7aXNOYXZPcGVuLCAgY29udHJvbE5hdmlnYXRpb259ID0gdXNlTmF2YmFyQ29udHJvbCgpXHJcbiAgICBjb25zdCB7IHNjcm9sbERpcmVjdGlvbn0gPSB1c2VTY3JvbGxEaXJlY3Rpb24oKVxyXG5cclxuICAvLyAgbGV0IHRocmVzaEhvbGQ6bnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBjb25zdCBoYW5kbGVOYXZTY3JvbGwgPSAoKTp2b2lkID0+e1xyXG4gICAgLy8gICBjb25zdCBuYXZOb2RlID0gbmF2YmFyLmN1cnJlbnRcclxuICAgIC8vICAgICAgY29uc3QgY3VycmVudFNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgLy8gICAgICBpZihjdXJyZW50U2Nyb2xsIDw9IDApe1xyXG4gICAgLy8gICAgICAgbmF2Tm9kZT8uY2xhc3NMaXN0LnJlbW92ZShcInNoYWRvdy1sZ1wiLCBcImJhY2tkcm9wLWJsdXItbGdcIiwgXCJtZDpweS00XCIsIFwiZml4ZWRcIilcclxuICAgIC8vICAgICAgIG5hdk5vZGU/LmNsYXNzTGlzdC5hZGQoXCJtZDpweS04XCIsIFwic3RpY2t5XCIsIFwidG9wLTBcIilcclxuICAgIC8vICAgICAgfVxyXG4gICAgLy8gICAgICBpZihjdXJyZW50U2Nyb2xsID4gdGhyZXNoSG9sZCAgJiYgIW5hdk5vZGU/LmNsYXNzTGlzdC5jb250YWlucyhcIi10cmFuc2xhdGUteS1mdWxsXCIpKXtcclxuICAgIC8vICAgICAgIG5hdk5vZGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJzaGFkb3ctbGdcIiwgIFwiYmFja2Ryb3AtYmx1ci1sZ1wiKVxyXG4gICAgLy8gICAgICAgbmF2Tm9kZT8uY2xhc3NMaXN0LmFkZChcIi10cmFuc2xhdGUteS1mdWxsXCIpICAgXHJcbiAgICAvLyAgICAgIH1cclxuICAgIC8vICAgICAgaWYoY3VycmVudFNjcm9sbCA8IHRocmVzaEhvbGQgICYmIG5hdk5vZGU/LmNsYXNzTGlzdC5jb250YWlucyhcIi10cmFuc2xhdGUteS1mdWxsXCIpKXtcclxuICAgIC8vICAgICAgIG5hdk5vZGU/LmNsYXNzTGlzdC5yZW1vdmUoXCItdHJhbnNsYXRlLXktZnVsbFwiLCBcIm1kOnB5LThcIiwgXCJzdGlja3lcIiwgXCJ0b3AtMFwiKVxyXG4gICAgLy8gICAgICAgbmF2Tm9kZT8uY2xhc3NMaXN0LmFkZChcInNoYWRvdy1sZ1wiLCBcImJhY2tkcm9wLWJsdXItbGdcIiwgXCJtZDpweS00XCIsIFwiZml4ZWRcIiApXHJcbiAgICAgICAgICBcclxuICAgIC8vICAgICAgfVxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgLy8gICAgdGhyZXNoSG9sZCA9IGN1cnJlbnRTY3JvbGxcclxuXHJcblxyXG4gICAgLy8gfVxyXG4gICAgXHJcbi8vIHVzZUVmZmVjdCgoKSA9PntcclxuLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVOYXZTY3JvbGwpXHJcblxyXG4vLyAgIHJldHVybiAoKSA9PntcclxuLy8gICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZU5hdlNjcm9sbClcclxuLy8gICB9XHJcblxyXG5cclxuLy8gfSxbdGhyZXNoSG9sZF0pXHJcbi8vIGNvbnN0IGN1cnJlbnRTY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWVxyXG5cclxuLy8gdXNlRWZmZWN0KCgpPT57XHJcbi8vICAgY29uc3QgbmF2Tm9kZSA9IG5hdmJhci5jdXJyZW50XHJcbiAgXHJcbi8vICAgIGNvbnN0IGhhbmRsZUFkZENsYXNzID0gKCk6dm9pZCA9PntcclxuLy8gICAgIGlmKHNjcm9sbERpcmVjdGlvbj09PVwidXBcIil7XHJcbi8vICAgICAgIG5hdk5vZGU/LmNsYXNzTGlzdC5hZGQoXCJzaGFkb3ctbGdcIilcclxuLy8gICAgIH1lbHNlIGlmIChzY3JvbGxEaXJlY3Rpb249PT1cImRvd25cIiAmJiBjdXJyZW50U2Nyb2xsIDw9MCl7XHJcbi8vICAgICAgIG5hdk5vZGU/LmNsYXNzTGlzdC5yZW1vdmUoXCJzaGFkb3ctbGdcIilcclxuLy8gICAgIH1cclxuLy8gICAgfVxyXG4vLyAgICBoYW5kbGVBZGRDbGFzcygpXHJcbi8vIH0sW3Njcm9sbERpcmVjdGlvbiwgY3VycmVudFNjcm9sbF0pXHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgTmF2SXRlbXM6TmF2SXRlbXNbXSA9W1xyXG4gICAgICB7bmFtZTpcIkhvbWVcIiwgbGluazpcIi9cIn0sXHJcbiAgICAgIHtuYW1lOlwiQWJvdXRcIiwgbGluazpcImFib3V0XCJ9LFxyXG4gICAgICB7bmFtZTpcIlByb2plY3RzXCIsIGxpbms6XCJwcm9qZWN0c1wifSxcclxuICAgICAge25hbWU6XCJDb250YWN0XCIsIGxpbms6XCJjb250YWN0XCJ9XHJcbiAgICBdXHJcbiAgIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiAgY2xhc3NOYW1lPXtgc3RpY2t5IHNoYWRvdy1bIzAwMDAwMDgyXSAke3Njcm9sbERpcmVjdGlvbiA9PT0gXCJkb3duXCI/IFwiLXRyYW5zbGF0ZS15LWZ1bGxcIiA6IFwidG9wLTAgYmFja2Ryb3AtYmx1ci1sZyBcIn0gdHJhbnNpdGlvbi1hbGwgZGVsYXktNzUgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IHctZnVsbCBweS00IG1kOnB5LTggZm9udC1oZWFkZXJzIHRleHQtd2hpdGUgei01MCBgfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweC01IGxnOnB4LTU2IHJlbGF0aXZlXCI+XHJcbiAgICAgICA8aW1nIGNsYXNzTmFtZT1cIiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciAgIHctMTIgaC0xMiAgXCIgc3JjPXtwb3J0Zm9saW9sb2dvfSBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgIDxzcGFuIG9uQ2xpY2s9e2NvbnRyb2xOYXZpZ2F0aW9ufSBjbGFzc05hbWU9XCJsZzpoaWRkZW4gdGV4dC0zeGwgcC0xIHRleHQtWyNGNzhEMjZdXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+PC9zcGFuPlxyXG5cclxuICAgICAgIDxkaXYgIGNsYXNzTmFtZT17YGZpeGVkIGZsZXggYm94LWJvcmRlciBvdmVyc2Nyb2xsLW5vbmUgbGc6c3RhdGljIHB5LTM2IGxnOnB5LTAganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbGc6anVzdGlmeS1iZXR3ZWVuIGxnOml0ZW1zLXN0YXJ0IHRvcC0wICBsZWZ0LTAgIGgtWzEwMHZoXSBsZzpoLTcgdy1mdWxsIGxnOnctMS8zICBmbGV4LWNvbCBtZDpmbGV4LXJvdyBiZy1bIzBkMTExNF0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNzAwIGRlbGF5LTEwMCBlYXNlLWluLW91dCAgbGc6YmctdHJhbnNwYXJlbnQgZ2FwLTEwIGxnOm9wYWNpdHktMTAwIHotMTAgZm9udC1tZWRpdW0gdGV4dC0yeGwgbGc6dGV4dC1iYXNlIGxnOnZpc2libGUgICAke2lzTmF2T3Blbj8gXCJvcGFjaXR5LTEwMCAgdmlzaWJsZVwiIDogXCIgb3BhY2l0eS0wIGludmlzaWJsZVwifWB9PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtjb250cm9sTmF2aWdhdGlvbn0gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTMgcmlnaHQtNSBwLTEgdGV4dC1bI0Y3OEQyNl0gdGV4dC00eGwgbGc6aGlkZGVuXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNsb3NlfSAvPjwvc3Bhbj5cclxuICAgICAgICBcclxuICAgICAgICAgIHtOYXZJdGVtcy5tYXAoaXRlbXM9PihcclxuICAgICAgICA8TGluayBcclxuICAgICAgICBvbkNsaWNrPXtjb250cm9sTmF2aWdhdGlvbn0gIFxyXG4gICAgICAgIGNsYXNzTmFtZT17KHtpc0FjdGl2ZX06e2lzQWN0aXZlOmJvb2xlYW59KTogc3RyaW5nID0+IHtyZXR1cm4gaXNBY3RpdmUgPyBhY3RpdmVJdGVtIDogXCJcIn19IGtleT17aXRlbXMubmFtZX0gaHJlZj17aXRlbXMubGlua30+PHNwYW4gY2xhc3NOYW1lPVwiIHRyYW5zaXRpb24tYWxsIGRlbGF5LTEwMCBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6b3BhY2l0eS03MCBob3Zlcjp0ZXh0LVsjRjc4RDI2XVwiIGtleT17aXRlbXMubmFtZX0+e2l0ZW1zLm5hbWV9PC9zcGFuPjwvTGluaz5cclxuICAgICAgICBcclxuICAgICAgICAgICkpfVxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VQYXRobmFtZSIsIkxpbmsiLCJ1c2VOYXZiYXJDb250cm9sIiwicG9ydGZvbGlvbG9nbyIsInVzZVNjcm9sbERpcmVjdGlvbiIsImZhQmFycyIsImZhQ2xvc2UiLCJGb250QXdlc29tZUljb24iLCJOYXZiYXIiLCJwYXRobmFtZSIsImFjdGl2ZUl0ZW0iLCJpc05hdk9wZW4iLCJjb250cm9sTmF2aWdhdGlvbiIsInNjcm9sbERpcmVjdGlvbiIsIk5hdkl0ZW1zIiwibmFtZSIsImxpbmsiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIiwib25DbGljayIsImljb24iLCJtYXAiLCJpdGVtcyIsImlzQWN0aXZlIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Navbar.tsx\n"));

/***/ })

});