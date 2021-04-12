(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pedido-productor-pedido-productor-module"],{

/***/ "0sM7":
/*!***********************************************************************************************************!*\
  !*** ./src/app/catalogo/pedido/pedido-productor/pedido-productor-list/pedido-productor-list.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PedidoProductorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoProductorListComponent", function() { return PedidoProductorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PedidoProductorListComponent {
    constructor() { }
    ngOnInit() {
    }
}
PedidoProductorListComponent.ɵfac = function PedidoProductorListComponent_Factory(t) { return new (t || PedidoProductorListComponent)(); };
PedidoProductorListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedidoProductorListComponent, selectors: [["app-pedido-productor-list"]], decls: 2, vars: 0, template: function PedidoProductorListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pedido-productor-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWRpZG8tcHJvZHVjdG9yLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "1hMs":
/*!***************************************************************************************************************!*\
  !*** ./src/app/catalogo/pedido/pedido-productor/pedido-productor-update/pedido-productor-update.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PedidoProductorUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoProductorUpdateComponent", function() { return PedidoProductorUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PedidoProductorUpdateComponent {
    constructor() { }
    ngOnInit() {
    }
}
PedidoProductorUpdateComponent.ɵfac = function PedidoProductorUpdateComponent_Factory(t) { return new (t || PedidoProductorUpdateComponent)(); };
PedidoProductorUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedidoProductorUpdateComponent, selectors: [["app-pedido-productor-update"]], decls: 2, vars: 0, template: function PedidoProductorUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pedido-productor-update works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWRpZG8tcHJvZHVjdG9yLXVwZGF0ZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "66X4":
/*!*************************************************************************************!*\
  !*** ./src/app/catalogo/pedido/pedido-productor/pedido-productor-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: PedidoProductorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoProductorRoutingModule", function() { return PedidoProductorRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pedido_productor_create_pedido_productor_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedido-productor-create/pedido-productor-create.component */ "usfG");
/* harmony import */ var _pedido_productor_detail_pedido_productor_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pedido-productor-detail/pedido-productor-detail.component */ "lnNH");
/* harmony import */ var _pedido_productor_list_pedido_productor_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedido-productor-list/pedido-productor-list.component */ "0sM7");
/* harmony import */ var _pedido_productor_update_pedido_productor_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pedido-productor-update/pedido-productor-update.component */ "1hMs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: 'create',
        component: _pedido_productor_create_pedido_productor_create_component__WEBPACK_IMPORTED_MODULE_1__["PedidoProductorCreateComponent"]
    },
    {
        path: 'detail/:id',
        component: _pedido_productor_detail_pedido_productor_detail_component__WEBPACK_IMPORTED_MODULE_2__["PedidoProductorDetailComponent"]
    },
    {
        path: 'list',
        component: _pedido_productor_list_pedido_productor_list_component__WEBPACK_IMPORTED_MODULE_3__["PedidoProductorListComponent"]
    },
    {
        path: 'update/:id',
        component: _pedido_productor_update_pedido_productor_update_component__WEBPACK_IMPORTED_MODULE_4__["PedidoProductorUpdateComponent"]
    }
];
class PedidoProductorRoutingModule {
}
PedidoProductorRoutingModule.ɵfac = function PedidoProductorRoutingModule_Factory(t) { return new (t || PedidoProductorRoutingModule)(); };
PedidoProductorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PedidoProductorRoutingModule });
PedidoProductorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PedidoProductorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "HetN":
/*!*****************************************************************************!*\
  !*** ./src/app/catalogo/pedido/pedido-productor/pedido-productor.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PedidoProductorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoProductorModule", function() { return PedidoProductorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pedido_productor_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedido-productor-routing.module */ "66X4");
/* harmony import */ var _pedido_productor_create_pedido_productor_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pedido-productor-create/pedido-productor-create.component */ "usfG");
/* harmony import */ var _pedido_productor_list_pedido_productor_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pedido-productor-list/pedido-productor-list.component */ "0sM7");
/* harmony import */ var _pedido_productor_detail_pedido_productor_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pedido-productor-detail/pedido-productor-detail.component */ "lnNH");
/* harmony import */ var _pedido_productor_update_pedido_productor_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pedido-productor-update/pedido-productor-update.component */ "1hMs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class PedidoProductorModule {
}
PedidoProductorModule.ɵfac = function PedidoProductorModule_Factory(t) { return new (t || PedidoProductorModule)(); };
PedidoProductorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PedidoProductorModule });
PedidoProductorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _pedido_productor_routing_module__WEBPACK_IMPORTED_MODULE_1__["PedidoProductorRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PedidoProductorModule, { declarations: [_pedido_productor_create_pedido_productor_create_component__WEBPACK_IMPORTED_MODULE_2__["PedidoProductorCreateComponent"],
        _pedido_productor_list_pedido_productor_list_component__WEBPACK_IMPORTED_MODULE_3__["PedidoProductorListComponent"],
        _pedido_productor_detail_pedido_productor_detail_component__WEBPACK_IMPORTED_MODULE_4__["PedidoProductorDetailComponent"],
        _pedido_productor_update_pedido_productor_update_component__WEBPACK_IMPORTED_MODULE_5__["PedidoProductorUpdateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _pedido_productor_routing_module__WEBPACK_IMPORTED_MODULE_1__["PedidoProductorRoutingModule"]] }); })();


/***/ }),

/***/ "lnNH":
/*!***************************************************************************************************************!*\
  !*** ./src/app/catalogo/pedido/pedido-productor/pedido-productor-detail/pedido-productor-detail.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PedidoProductorDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoProductorDetailComponent", function() { return PedidoProductorDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PedidoProductorDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
PedidoProductorDetailComponent.ɵfac = function PedidoProductorDetailComponent_Factory(t) { return new (t || PedidoProductorDetailComponent)(); };
PedidoProductorDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedidoProductorDetailComponent, selectors: [["app-pedido-productor-detail"]], decls: 2, vars: 0, template: function PedidoProductorDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pedido-productor-detail works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWRpZG8tcHJvZHVjdG9yLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "usfG":
/*!***************************************************************************************************************!*\
  !*** ./src/app/catalogo/pedido/pedido-productor/pedido-productor-create/pedido-productor-create.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PedidoProductorCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoProductorCreateComponent", function() { return PedidoProductorCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PedidoProductorCreateComponent {
    constructor() { }
    ngOnInit() {
    }
}
PedidoProductorCreateComponent.ɵfac = function PedidoProductorCreateComponent_Factory(t) { return new (t || PedidoProductorCreateComponent)(); };
PedidoProductorCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PedidoProductorCreateComponent, selectors: [["app-pedido-productor-create"]], decls: 2, vars: 0, template: function PedidoProductorCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pedido-productor-create works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWRpZG8tcHJvZHVjdG9yLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=pedido-productor-pedido-productor-module.js.map