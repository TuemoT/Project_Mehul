"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/organizations",{

/***/ "./pages/organizations/index.jsx":
/*!***************************************!*\
  !*** ./pages/organizations/index.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var _api_FetchApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/FetchApi */ \"./pages/organizations/api/FetchApi.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list */ \"./pages/organizations/list.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction OrganizationList() {\n    _s();\n    const [organizations, setOrganization] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { data  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)(\"organizations\", _api_FetchApi__WEBPACK_IMPORTED_MODULE_4__.fetchOrganizations);\n    const deleteOrganization = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)((id)=>{\n        const isConfirmed = confirm(\"Are you sure you want to delete this item?\");\n        if (isConfirmed) {\n            fetch(\"http://localhost:3000/api/organization/\".concat(id), {\n                method: \"DELETE\"\n            }).then((res)=>{\n                if (res.ok) {\n                    const findIndex = organizations.findIndex((organization)=>organization.id === id);\n                    organizations.splice(findIndex, 1);\n                    setOrganization([\n                        ...organizations\n                    ]);\n                }\n            });\n            window.location.reload();\n            window.location.href = \"/organizations\";\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data) {\n            setOrganization(data);\n        }\n    }, []);\n    const setData = (data)=>{\n        setOrganization(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Organization List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\NEXTJS\\\\nextjs-crud-app\\\\pages\\\\organizations\\\\index.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/organizations/create\",\n                className: \"btn btn-sm btn-success mb-2\",\n                children: \"Add Organization\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\NEXTJS\\\\nextjs-crud-app\\\\pages\\\\organizations\\\\index.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table table-striped\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: {\n                                        width: \"3%\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\NEXTJS\\\\nextjs-crud-app\\\\pages\\\\organizations\\\\index.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: {\n                                        width: \"10%\"\n                                    },\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\NEXTJS\\\\nextjs-crud-app\\\\pages\\\\organizations\\\\index.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: {\n                                        width: \"10%\"\n                                    },\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\NEXTJS\\\\nextjs-crud-app\\\\pages\\\\organizations\\\\index.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: {\n                                        width: \"10%\"\n                                    },\n                                    children: \"Phones\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\NEXTJS\\\\nextjs-crud-app\\\\pages\\\\organizations\\\\index.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: {\n                                        width: \"10%\"\n                                    },\n                                    children: \"Address\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\NEXTJS\\\\nextjs-crud-app\\\\pages\\\\organizations\\\\index.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    style: {\n                                        width: \"5%\"\n                                    },\n                                    children: \"Action\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\NEXTJS\\\\nextjs-crud-app\\\\pages\\\\organizations\\\\index.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\NEXTJS\\\\nextjs-crud-app\\\\pages\\\\organizations\\\\index.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\NEXTJS\\\\nextjs-crud-app\\\\pages\\\\organizations\\\\index.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: (data === null || data === void 0 ? void 0 : data.length) > 0 && data.map((organization)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_list__WEBPACK_IMPORTED_MODULE_5__.ListRow, {\n                                organization: organization,\n                                deleteOrganization: deleteOrganization.mutate,\n                                setData: setData\n                            }, organization.id, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\NEXTJS\\\\nextjs-crud-app\\\\pages\\\\organizations\\\\index.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\NEXTJS\\\\nextjs-crud-app\\\\pages\\\\organizations\\\\index.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\NEXTJS\\\\nextjs-crud-app\\\\pages\\\\organizations\\\\index.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\NEXTJS\\\\nextjs-crud-app\\\\pages\\\\organizations\\\\index.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(OrganizationList, \"u4AMSHKU6H7Do8B5HUifXB67Cok=\", false, function() {\n    return [\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery,\n        react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation\n    ];\n});\n_c = OrganizationList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrganizationList);\nvar _c;\n$RefreshReg$(_c, \"OrganizationList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vcmdhbml6YXRpb25zL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ2Y7QUFDWTtBQUNXO0FBRUE7QUFDbkI7QUFFakMsU0FBU1EsbUJBQW1COztJQUMxQixNQUFNLENBQUNDLGVBQWVDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXBELE1BQU0sRUFBRVUsS0FBSSxFQUFFLEdBQUdOLHFEQUFRQSxDQUFDLGlCQUFpQkMsNkRBQWtCQTtJQUU3RCxNQUFNTSxxQkFBcUJSLHdEQUFXQSxDQUFDLENBQUNTLEtBQU87UUFDN0MsTUFBTUMsY0FBY0MsUUFBUTtRQUM1QixJQUFJRCxhQUFhO1lBQ2ZFLE1BQU0sMENBQTZDLE9BQUhILEtBQU07Z0JBQ3BESSxRQUFRO1lBQ1YsR0FBR0MsSUFBSSxDQUFDLENBQUNDLE1BQVE7Z0JBQ2YsSUFBSUEsSUFBSUMsRUFBRSxFQUFFO29CQUNWLE1BQU1DLFlBQVlaLGNBQWNZLFNBQVMsQ0FDdkMsQ0FBQ0MsZUFBaUJBLGFBQWFULEVBQUUsS0FBS0E7b0JBRXhDSixjQUFjYyxNQUFNLENBQUNGLFdBQVc7b0JBQ2hDWCxnQkFBZ0I7MkJBQUlEO3FCQUFjO2dCQUNwQyxDQUFDO1lBQ0g7WUFDQWUsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO1lBQ3RCRixPQUFPQyxRQUFRLENBQUNFLElBQUksR0FBRztRQUN6QixDQUFDO0lBQ0g7SUFFQTNCLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJVyxNQUFNO1lBQ1JELGdCQUFnQkM7UUFDbEIsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLE1BQU1pQixVQUFVLENBQUNqQixPQUFTO1FBQ3hCRCxnQkFBZ0JDO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUNrQjs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUM1QixrREFBSUE7Z0JBQ0h5QixNQUFLO2dCQUNMSSxXQUFVOzBCQUNYOzs7Ozs7MEJBR0QsOERBQUNDO2dCQUFNRCxXQUFVOztrQ0FDZiw4REFBQ0U7a0NBQ0MsNEVBQUNDOzs4Q0FDQyw4REFBQ0M7b0NBQUdDLE9BQU87d0NBQUVDLE9BQU87b0NBQUs7Ozs7Ozs4Q0FDekIsOERBQUNGO29DQUFHQyxPQUFPO3dDQUFFQyxPQUFPO29DQUFNOzhDQUFHOzs7Ozs7OENBQzdCLDhEQUFDRjtvQ0FBR0MsT0FBTzt3Q0FBRUMsT0FBTztvQ0FBTTs4Q0FBRzs7Ozs7OzhDQUU3Qiw4REFBQ0Y7b0NBQUdDLE9BQU87d0NBQUVDLE9BQU87b0NBQU07OENBQUc7Ozs7Ozs4Q0FDN0IsOERBQUNGO29DQUFHQyxPQUFPO3dDQUFFQyxPQUFPO29DQUFNOzhDQUFHOzs7Ozs7OENBRTdCLDhEQUFDRjtvQ0FBR0MsT0FBTzt3Q0FBRUMsT0FBTztvQ0FBSzs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2hDLDhEQUFDQztrQ0FDRTNCLENBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTTRCLE1BQU0sSUFBRyxLQUNkNUIsS0FBSzZCLEdBQUcsQ0FBQyxDQUFDbEIsNkJBQ1IsOERBQUNmLDBDQUFPQTtnQ0FFTmUsY0FBY0E7Z0NBQ2RWLG9CQUFvQkEsbUJBQW1CNkIsTUFBTTtnQ0FDN0NiLFNBQVNBOytCQUhKTixhQUFhVCxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3BDO0dBMUVTTDs7UUFHVUgsaURBQVFBO1FBRUVELG9EQUFXQTs7O0tBTC9CSTtBQTJFVCwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL29yZ2FuaXphdGlvbnMvaW5kZXguanN4PzdlOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XHJcblxyXG5pbXBvcnQgeyBmZXRjaE9yZ2FuaXphdGlvbnMgfSBmcm9tIFwiLi9hcGkvRmV0Y2hBcGlcIjtcclxuaW1wb3J0IHsgTGlzdFJvdyB9IGZyb20gXCIuL2xpc3RcIjtcclxuXHJcbmZ1bmN0aW9uIE9yZ2FuaXphdGlvbkxpc3QoKSB7XHJcbiAgY29uc3QgW29yZ2FuaXphdGlvbnMsIHNldE9yZ2FuaXphdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoXCJvcmdhbml6YXRpb25zXCIsIGZldGNoT3JnYW5pemF0aW9ucyk7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZU9yZ2FuaXphdGlvbiA9IHVzZU11dGF0aW9uKChpZCkgPT4ge1xyXG4gICAgY29uc3QgaXNDb25maXJtZWQgPSBjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/XCIpO1xyXG4gICAgaWYgKGlzQ29uZmlybWVkKSB7XHJcbiAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL29yZ2FuaXphdGlvbi8ke2lkfWAsIHtcclxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgIGNvbnN0IGZpbmRJbmRleCA9IG9yZ2FuaXphdGlvbnMuZmluZEluZGV4KFxyXG4gICAgICAgICAgICAob3JnYW5pemF0aW9uKSA9PiBvcmdhbml6YXRpb24uaWQgPT09IGlkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgb3JnYW5pemF0aW9ucy5zcGxpY2UoZmluZEluZGV4LCAxKTtcclxuICAgICAgICAgIHNldE9yZ2FuaXphdGlvbihbLi4ub3JnYW5pemF0aW9uc10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9vcmdhbml6YXRpb25zXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBzZXRPcmdhbml6YXRpb24oZGF0YSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzZXREYXRhID0gKGRhdGEpID0+IHtcclxuICAgIHNldE9yZ2FuaXphdGlvbihkYXRhKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPk9yZ2FuaXphdGlvbiBMaXN0PC9oMj5cclxuICAgICAgPExpbmtcclxuICAgICAgICBocmVmPVwiL29yZ2FuaXphdGlvbnMvY3JlYXRlXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzIG1iLTJcIlxyXG4gICAgICA+XHJcbiAgICAgICAgQWRkIE9yZ2FuaXphdGlvblxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6IFwiMyVcIiB9fT48L3RoPlxyXG4gICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6IFwiMTAlXCIgfX0+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogXCIxMCVcIiB9fT5FbWFpbDwvdGg+XHJcblxyXG4gICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6IFwiMTAlXCIgfX0+UGhvbmVzPC90aD5cclxuICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiBcIjEwJVwiIH19PkFkZHJlc3M8L3RoPlxyXG5cclxuICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiBcIjUlXCIgfX0+QWN0aW9uPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7ZGF0YT8ubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICBkYXRhLm1hcCgob3JnYW5pemF0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgPExpc3RSb3dcclxuICAgICAgICAgICAgICAgIGtleT17b3JnYW5pemF0aW9uLmlkfVxyXG4gICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uPXtvcmdhbml6YXRpb259XHJcbiAgICAgICAgICAgICAgICBkZWxldGVPcmdhbml6YXRpb249e2RlbGV0ZU9yZ2FuaXphdGlvbi5tdXRhdGV9XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhPXtzZXREYXRhfVxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBPcmdhbml6YXRpb25MaXN0O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiQnV0dG9uIiwidXNlTXV0YXRpb24iLCJ1c2VRdWVyeSIsImZldGNoT3JnYW5pemF0aW9ucyIsIkxpc3RSb3ciLCJPcmdhbml6YXRpb25MaXN0Iiwib3JnYW5pemF0aW9ucyIsInNldE9yZ2FuaXphdGlvbiIsImRhdGEiLCJkZWxldGVPcmdhbml6YXRpb24iLCJpZCIsImlzQ29uZmlybWVkIiwiY29uZmlybSIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlcyIsIm9rIiwiZmluZEluZGV4Iiwib3JnYW5pemF0aW9uIiwic3BsaWNlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJocmVmIiwic2V0RGF0YSIsImRpdiIsImgyIiwiY2xhc3NOYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzdHlsZSIsIndpZHRoIiwidGJvZHkiLCJsZW5ndGgiLCJtYXAiLCJtdXRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/organizations/index.jsx\n"));

/***/ })

});