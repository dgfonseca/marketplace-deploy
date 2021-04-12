(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedido-cliente-pedido-cliente-module"],{

/***/ "AXH0":
/*!*********************************************************************************************************!*\
  !*** ./src/app/catalogo/pedido/pedido-cliente/pedido-cliente-update/pedido-cliente-update.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PedidoClienteUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoClienteUpdateComponent", function() { return PedidoClienteUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PedidoClienteUpdateComponent {
    constructor() { }
    ngOnInit() {
    }
}
PedidoClienteUpdateComponent.ɵfac = function PedidoClienteUpdateComponent_Factory(t) { return new (t || PedidoClienteUpdateComponent)(); };
PedidoClienteUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedidoClienteUpdateComponent, selectors: [["app-pedido-cliente-update"]], decls: 2, vars: 0, template: function PedidoClienteUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pedido-cliente-update works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWRpZG8tY2xpZW50ZS11cGRhdGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "NFSa":
/*!*****************************************************************************************************!*\
  !*** ./src/app/catalogo/pedido/pedido-cliente/pedido-cliente-list/pedido-cliente-list.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PedidoClienteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoClienteListComponent", function() { return PedidoClienteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PedidoClienteListComponent {
    constructor() { }
    ngOnInit() {
    }
}
PedidoClienteListComponent.ɵfac = function PedidoClienteListComponent_Factory(t) { return new (t || PedidoClienteListComponent)(); };
PedidoClienteListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedidoClienteListComponent, selectors: [["app-pedido-cliente-list"]], decls: 2, vars: 0, template: function PedidoClienteListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pedido-cliente-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWRpZG8tY2xpZW50ZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "V2X0":
/*!*************************************************************************!*\
  !*** ./src/app/catalogo/pedido/pedido-cliente/pedido-cliente.module.ts ***!
  \*************************************************************************/
/*! exports provided: PedidoClienteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoClienteModule", function() { return PedidoClienteModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pedido_cliente_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedido-cliente-routing.module */ "r62h");
/* harmony import */ var _pedido_cliente_update_pedido_cliente_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pedido-cliente-update/pedido-cliente-update.component */ "AXH0");
/* harmony import */ var _pedido_cliente_list_pedido_cliente_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedido-cliente-list/pedido-cliente-list.component */ "NFSa");
/* harmony import */ var _pedido_cliente_detail_pedido_cliente_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pedido-cliente-detail/pedido-cliente-detail.component */ "eAbH");
/* harmony import */ var _pedido_cliente_create_pedido_cliente_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pedido-cliente-create/pedido-cliente-create.component */ "dlaU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class PedidoClienteModule {
}
PedidoClienteModule.ɵfac = function PedidoClienteModule_Factory(t) { return new (t || PedidoClienteModule)(); };
PedidoClienteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PedidoClienteModule });
PedidoClienteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _pedido_cliente_routing_module__WEBPACK_IMPORTED_MODULE_1__["PedidoClienteRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PedidoClienteModule, { declarations: [_pedido_cliente_update_pedido_cliente_update_component__WEBPACK_IMPORTED_MODULE_2__["PedidoClienteUpdateComponent"],
        _pedido_cliente_list_pedido_cliente_list_component__WEBPACK_IMPORTED_MODULE_3__["PedidoClienteListComponent"],
        _pedido_cliente_detail_pedido_cliente_detail_component__WEBPACK_IMPORTED_MODULE_4__["PedidoClienteDetailComponent"],
        _pedido_cliente_create_pedido_cliente_create_component__WEBPACK_IMPORTED_MODULE_5__["PedidoClienteCreateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _pedido_cliente_routing_module__WEBPACK_IMPORTED_MODULE_1__["PedidoClienteRoutingModule"]] }); })();


/***/ }),

/***/ "dlaU":
/*!*********************************************************************************************************!*\
  !*** ./src/app/catalogo/pedido/pedido-cliente/pedido-cliente-create/pedido-cliente-create.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PedidoClienteCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoClienteCreateComponent", function() { return PedidoClienteCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PedidoClienteCreateComponent {
    constructor() { }
    ngOnInit() {
    }
}
PedidoClienteCreateComponent.ɵfac = function PedidoClienteCreateComponent_Factory(t) { return new (t || PedidoClienteCreateComponent)(); };
PedidoClienteCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedidoClienteCreateComponent, selectors: [["app-pedido-cliente-create"]], decls: 2, vars: 0, template: function PedidoClienteCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pedido-cliente-create works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWRpZG8tY2xpZW50ZS1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "eAbH":
/*!*********************************************************************************************************!*\
  !*** ./src/app/catalogo/pedido/pedido-cliente/pedido-cliente-detail/pedido-cliente-detail.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PedidoClienteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoClienteDetailComponent", function() { return PedidoClienteDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PedidoClienteDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
PedidoClienteDetailComponent.ɵfac = function PedidoClienteDetailComponent_Factory(t) { return new (t || PedidoClienteDetailComponent)(); };
PedidoClienteDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedidoClienteDetailComponent, selectors: [["app-pedido-cliente-detail"]], decls: 2, vars: 0, template: function PedidoClienteDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pedido-cliente-detail works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWRpZG8tY2xpZW50ZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "r62h":
/*!*********************************************************************************!*\
  !*** ./src/app/catalogo/pedido/pedido-cliente/pedido-cliente-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PedidoClienteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoClienteRoutingModule", function() { return PedidoClienteRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pedido_cliente_create_pedido_cliente_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedido-cliente-create/pedido-cliente-create.component */ "dlaU");
/* harmony import */ var _pedido_cliente_detail_pedido_cliente_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pedido-cliente-detail/pedido-cliente-detail.component */ "eAbH");
/* harmony import */ var _pedido_cliente_list_pedido_cliente_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedido-cliente-list/pedido-cliente-list.component */ "NFSa");
/* harmony import */ var _pedido_cliente_update_pedido_cliente_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pedido-cliente-update/pedido-cliente-update.component */ "AXH0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: 'create',
        component: _pedido_cliente_create_pedido_cliente_create_component__WEBPACK_IMPORTED_MODULE_1__["PedidoClienteCreateComponent"]
    },
    {
        path: 'detail/:id',
        component: _pedido_cliente_detail_pedido_cliente_detail_component__WEBPACK_IMPORTED_MODULE_2__["PedidoClienteDetailComponent"]
    },
    {
        path: 'list',
        component: _pedido_cliente_list_pedido_cliente_list_component__WEBPACK_IMPORTED_MODULE_3__["PedidoClienteListComponent"]
    },
    {
        path: 'update/:id',
        component: _pedido_cliente_update_pedido_cliente_update_component__WEBPACK_IMPORTED_MODULE_4__["PedidoClienteUpdateComponent"]
    }
];
class PedidoClienteRoutingModule {
}
PedidoClienteRoutingModule.ɵfac = function PedidoClienteRoutingModule_Factory(t) { return new (t || PedidoClienteRoutingModule)(); };
PedidoClienteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PedidoClienteRoutingModule });
PedidoClienteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PedidoClienteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pedido-cliente-pedido-cliente-module.js.map