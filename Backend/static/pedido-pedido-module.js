(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedido-pedido-module"],{

/***/ "OHMz":
/*!**************************************************!*\
  !*** ./src/app/catalogo/pedido/pedido.module.ts ***!
  \**************************************************/
/*! exports provided: PedidoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoModule", function() { return PedidoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pedido_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedido-routing.module */ "v54r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class PedidoModule {
}
PedidoModule.ɵfac = function PedidoModule_Factory(t) { return new (t || PedidoModule)(); };
PedidoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PedidoModule });
PedidoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _pedido_routing_module__WEBPACK_IMPORTED_MODULE_1__["PedidoRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PedidoModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _pedido_routing_module__WEBPACK_IMPORTED_MODULE_1__["PedidoRoutingModule"]] }); })();


/***/ }),

/***/ "v54r":
/*!**********************************************************!*\
  !*** ./src/app/catalogo/pedido/pedido-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: PedidoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoRoutingModule", function() { return PedidoRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: 'cliente',
        loadChildren: () => __webpack_require__.e(/*! import() | pedido-cliente-pedido-cliente-module */ "pedido-cliente-pedido-cliente-module").then(__webpack_require__.bind(null, /*! ./pedido-cliente/pedido-cliente.module */ "V2X0")).then(module => module.PedidoClienteModule)
    },
    {
        path: 'productor',
        loadChildren: () => __webpack_require__.e(/*! import() | pedido-productor-pedido-productor-module */ "pedido-productor-pedido-productor-module").then(__webpack_require__.bind(null, /*! ./pedido-productor/pedido-productor.module */ "HetN")).then(module => module.PedidoProductorModule)
    }
];
class PedidoRoutingModule {
}
PedidoRoutingModule.ɵfac = function PedidoRoutingModule_Factory(t) { return new (t || PedidoRoutingModule)(); };
PedidoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PedidoRoutingModule });
PedidoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PedidoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pedido-pedido-module.js.map