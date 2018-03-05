webpackHotUpdate(5,{

/***/ "./component/MyLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./component/Header.js");
var _jsxFileName = 'D:\\2017\\github\\hello-next\\component\\MyLayout.js';


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();



var layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

var Layout = function Layout(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: layoutStyle, __source: {
                fileName: _jsxFileName,
                lineNumber: 10
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 11
            }
        }),
        props.children
    );
};

var _default = Layout;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(layoutStyle, 'layoutStyle', 'D:/2017/github/hello-next/component/MyLayout.js');
    reactHotLoader.register(Layout, 'Layout', 'D:/2017/github/hello-next/component/MyLayout.js');
    reactHotLoader.register(_default, 'default', 'D:/2017/github/hello-next/component/MyLayout.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.c3bc18eca46a0651d1dc.hot-update.js.map