(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["producto-producto-module"],{

/***/ "0w+3":
/*!********************************************************************************!*\
  !*** ./src/app/catalogo/producto/producto-detail/producto-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoDetailComponent", function() { return ProductoDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProductoDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductoDetailComponent.ɵfac = function ProductoDetailComponent_Factory(t) { return new (t || ProductoDetailComponent)(); };
ProductoDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductoDetailComponent, selectors: [["app-producto-detail"]], decls: 2, vars: 0, template: function ProductoDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "producto-detail works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0by1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "9QLa":
/*!****************************************************************************!*\
  !*** ./src/app/catalogo/producto/producto-list/producto-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoListComponent", function() { return ProductoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProductoListComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductoListComponent.ɵfac = function ProductoListComponent_Factory(t) { return new (t || ProductoListComponent)(); };
ProductoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductoListComponent, selectors: [["app-producto-list"]], decls: 2, vars: 0, template: function ProductoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "producto-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0by1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "HoJ2":
/*!**************************************************************!*\
  !*** ./src/app/catalogo/producto/producto-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ProductoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoRoutingModule", function() { return ProductoRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _producto_create_producto_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto-create/producto-create.component */ "lMhN");
/* harmony import */ var _producto_update_producto_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./producto-update/producto-update.component */ "adeO");
/* harmony import */ var _producto_list_producto_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./producto-list/producto-list.component */ "9QLa");
/* harmony import */ var _producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./producto-detail/producto-detail.component */ "0w+3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: 'create',
        component: _producto_create_producto_create_component__WEBPACK_IMPORTED_MODULE_1__["ProductoCreateComponent"]
    },
    {
        path: 'detail/:id',
        component: _producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductoDetailComponent"]
    },
    {
        path: 'list',
        component: _producto_list_producto_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductoListComponent"]
    },
    {
        path: 'update/:id',
        component: _producto_update_producto_update_component__WEBPACK_IMPORTED_MODULE_2__["ProductoUpdateComponent"]
    }
];
class ProductoRoutingModule {
}
ProductoRoutingModule.ɵfac = function ProductoRoutingModule_Factory(t) { return new (t || ProductoRoutingModule)(); };
ProductoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ProductoRoutingModule });
ProductoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProductoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "adeO":
/*!********************************************************************************!*\
  !*** ./src/app/catalogo/producto/producto-update/producto-update.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductoUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoUpdateComponent", function() { return ProductoUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProductoUpdateComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductoUpdateComponent.ɵfac = function ProductoUpdateComponent_Factory(t) { return new (t || ProductoUpdateComponent)(); };
ProductoUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductoUpdateComponent, selectors: [["app-producto-update"]], decls: 2, vars: 0, template: function ProductoUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "producto-update works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0by11cGRhdGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "jjJd":
/*!******************************************************!*\
  !*** ./src/app/catalogo/producto/producto.module.ts ***!
  \******************************************************/
/*! exports provided: ProductoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoModule", function() { return ProductoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _producto_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto-routing.module */ "HoJ2");
/* harmony import */ var _producto_list_producto_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./producto-list/producto-list.component */ "9QLa");
/* harmony import */ var _producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./producto-detail/producto-detail.component */ "0w+3");
/* harmony import */ var _producto_update_producto_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./producto-update/producto-update.component */ "adeO");
/* harmony import */ var _producto_create_producto_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./producto-create/producto-create.component */ "lMhN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class ProductoModule {
}
ProductoModule.ɵfac = function ProductoModule_Factory(t) { return new (t || ProductoModule)(); };
ProductoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ProductoModule });
ProductoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _producto_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProductoRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProductoModule, { declarations: [_producto_list_producto_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductoListComponent"],
        _producto_detail_producto_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductoDetailComponent"],
        _producto_update_producto_update_component__WEBPACK_IMPORTED_MODULE_4__["ProductoUpdateComponent"],
        _producto_create_producto_create_component__WEBPACK_IMPORTED_MODULE_5__["ProductoCreateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _producto_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProductoRoutingModule"]] }); })();


/***/ }),

/***/ "lMhN":
/*!********************************************************************************!*\
  !*** ./src/app/catalogo/producto/producto-create/producto-create.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProductoCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoCreateComponent", function() { return ProductoCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProductoCreateComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductoCreateComponent.ɵfac = function ProductoCreateComponent_Factory(t) { return new (t || ProductoCreateComponent)(); };
ProductoCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductoCreateComponent, selectors: [["app-producto-create"]], decls: 25, vars: 0, consts: [[1, "column"], [1, "title"], [1, "box"], [1, "field"], [1, "control"], ["type", "text", "name", "nombre", "placeholder", "Nombre", "autofocus", "", "required", "", 1, "input", "is-medium"], ["type", "url", "name", "fotoProducto", "placeholder", "Foto Producto", "autofocus", "", "required", "", 1, "input", "is-medium"], [1, "field", "columns", "mb-0"], [1, "control", "column"], ["type", "number", "name", "cantidad", "min", "0", "placeholder", "Cantidad", "required", "", 1, "input", "is-medium"], ["type", "text", "name", "unidad", "placeholder", "Unidad", "required", "", 1, "input", "is-medium"], ["type", "number", "name", "precio", "min", "0", "step", ".01", "placeholder", "Precio", "required", "", 1, "input", "is-medium"], [1, "columns"], ["href", "", 1, "button", "is-danger", "is-medium", "is-fullwidth"], [1, "button", "is-info", "is-medium", "is-fullwidth"]], template: function ProductoCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registro de producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Crear producto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0by1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=producto-producto-module.js.map