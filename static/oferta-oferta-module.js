(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["oferta-oferta-module"],{

/***/ "5uwW":
/*!**************************************************************************!*\
  !*** ./src/app/catalogo/oferta/oferta-create/oferta-create.component.ts ***!
  \**************************************************************************/
/*! exports provided: OfertaCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertaCreateComponent", function() { return OfertaCreateComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _oferta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../oferta */ "bLh6");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globals */ "xa+l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _oferta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../oferta.service */ "6Hp4");
/* harmony import */ var _catalogo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../catalogo.service */ "pIXe");
/* harmony import */ var _producto_producto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../producto/producto.service */ "IxDw");
/* harmony import */ var _producto_catalogo_producto_catalogo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../producto-catalogo/producto-catalogo.service */ "nQrb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










function OfertaCreateComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function OfertaCreateComponent_div_9_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3); const cantidad_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r2.cambio(cantidad_r1.producto.productoCatalogo, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, " $ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function OfertaCreateComponent_div_9_Template_input_change_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3); const cantidad_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r4.cambioPrecio(cantidad_r1.producto.productoCatalogo, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function OfertaCreateComponent_div_9_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3); const cantidad_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r5.eliminar(cantidad_r1.producto.productoCatalogo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](18, "Eliminar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const cantidad_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](cantidad_r1.producto.productoCatalogo.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("value", cantidad_r1.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", cantidad_r1.producto.productoCatalogo.unidad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate"]("value", cantidad_r1.producto.precioPorUnidad);
} }
class OfertaCreateComponent {
    constructor(ofertaService, catalogoService, productoService, productoCatalogoService) {
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"];
        this.ofertaService = ofertaService;
        this.catalogoService = catalogoService;
        this.productoService = productoService;
        this.productoCatalogoService = productoCatalogoService;
    }
    eliminar(productoCatalogo) {
        let index = _globals__WEBPACK_IMPORTED_MODULE_2__["encontrarEnOfertaAPostular"](productoCatalogo, JSON.parse(localStorage.getItem('ofertaAPostular')));
        if (index != -1) {
            this.oferta.cantidadesProducto.splice(index, 1);
        }
        localStorage.setItem('ofertaAPostular', JSON.stringify(this.oferta));
    }
    cambio(productoCatalogo, evento) {
        let index = _globals__WEBPACK_IMPORTED_MODULE_2__["encontrarEnOfertaAPostular"](productoCatalogo, JSON.parse(localStorage.getItem('ofertaAPostular')));
        if (index != -1) {
            this.oferta.cantidadesProducto[index].cantidad = parseInt(evento.target.value);
            localStorage.setItem('ofertaAPostular', JSON.stringify(this.oferta));
        }
    }
    cambioPrecio(productoCatalogo, evento) {
        let index = _globals__WEBPACK_IMPORTED_MODULE_2__["encontrarEnOfertaAPostular"](productoCatalogo, JSON.parse(localStorage.getItem('ofertaAPostular')));
        if (index != -1) {
            this.oferta.cantidadesProducto[index].producto.precioPorUnidad = parseFloat(evento.target.value);
            localStorage.setItem('ofertaAPostular', JSON.stringify(this.oferta));
        }
    }
    crear() {
        this.oferta.fechaInicio = new Date();
        this.oferta.fechaFin = new Date();
        let temporal = this.oferta;
        this.ofertaService.createOferta(this.oferta).subscribe(oferta => {
            let size = temporal.cantidadesProducto.length;
            console.log(document.getElementsByName("precio"));
            for (let i = 0; i < size; i++) {
                temporal.cantidadesProducto[i].producto.cantidadDisponible =
                    parseInt(document.getElementsByName("cantidad")[i].value);
                temporal.cantidadesProducto[i].producto.productoCatalogo =
                    temporal.cantidadesProducto[i].producto.productoCatalogo.id;
                temporal.cantidadesProducto[i].producto.precioPorUnidad =
                    parseFloat(document.getElementsByName("precio")[i].value);
                console.log(temporal.cantidadesProducto[i].producto);
                temporal.cantidadesProducto[i].cantidad = temporal.cantidadesProducto[i].producto.cantidadDisponible;
                this.productoService.createProducto(temporal.cantidadesProducto[i].producto).subscribe(producto => {
                    temporal.cantidadesProducto[i].producto = producto.id;
                    temporal.cantidadesProducto[i].ofertaProductor = oferta.id;
                    console.log(temporal.cantidadesProducto[i]);
                    this.catalogoService.createCantidadProducto(this.oferta.cantidadesProducto[i]).subscribe(respose => {
                        console.log(respose);
                        this.oferta = new _oferta__WEBPACK_IMPORTED_MODULE_1__["Oferta"]();
                        localStorage.removeItem('ofertaAPostular');
                    });
                });
            }
        });
    }
    ngOnInit() {
        if (localStorage.getItem('ofertaAPostular') == null) {
            localStorage.setItem('ofertaAPostular', JSON.stringify(new _oferta__WEBPACK_IMPORTED_MODULE_1__["Oferta"]()));
        }
        this.oferta = JSON.parse(localStorage.getItem('ofertaAPostular'));
    }
}
OfertaCreateComponent.??fac = function OfertaCreateComponent_Factory(t) { return new (t || OfertaCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_oferta_service__WEBPACK_IMPORTED_MODULE_4__["OfertaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_catalogo_service__WEBPACK_IMPORTED_MODULE_5__["CatalogoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_producto_producto_service__WEBPACK_IMPORTED_MODULE_6__["ProductoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_producto_catalogo_producto_catalogo_service__WEBPACK_IMPORTED_MODULE_7__["ProductoCatalogoService"])); };
OfertaCreateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: OfertaCreateComponent, selectors: [["app-oferta-create"]], decls: 17, vars: 2, consts: [[1, "column"], [1, "title"], [1, "box"], [1, "field"], [1, "control", "has-icons-right"], ["type", "text", "placeholder", "Buscar por nombre del producto", 1, "input", "is-medium"], [1, "icon", "is-small", "is-right"], [3, "icon"], ["class", "columns is-vcentered", 4, "ngFor", "ngForOf"], [1, "field", "columns"], ["href", "", 1, "button", "is-danger", "is-medium", "is-fullwidth"], [1, "button", "is-info", "is-medium", "is-fullwidth", 3, "click"], [1, "columns", "is-vcentered"], [1, "column", "is-5", "has-text-left", "is-size-3"], ["href", ""], [1, "column", "is-1"], [1, "field", "mb-0"], [1, "control"], ["type", "number", "name", "cantidad", "required", "", 1, "input", "is-medium", "has-text-right", "cantidad", 3, "value", "change"], [1, "column", "is-1", "has-text-left", "is-vcentered"], [1, "column", "is-1", "has-text-right"], ["type", "number", "name", "precio", "required", "", 1, "input", "is-medium", "has-text-left", 3, "value", "change"], [1, "column", "is-3"], [1, "button", "is-danger", "is-medium", "is-fullwidth", 3, "click"]], template: function OfertaCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Productos seleccionados");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](8, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](9, OfertaCreateComponent_div_9_Template, 19, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13, "Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function OfertaCreateComponent_Template_button_click_15_listener() { return ctx.crear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "Crear oferta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.oferta.cantidadesProducto);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmVydGEtY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "91iA":
/*!**********************************************************!*\
  !*** ./src/app/catalogo/oferta/oferta-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: OfertaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertaRoutingModule", function() { return OfertaRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _oferta_create_oferta_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oferta-create/oferta-create.component */ "5uwW");
/* harmony import */ var _oferta_detail_oferta_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oferta-detail/oferta-detail.component */ "bcPV");
/* harmony import */ var _oferta_list_oferta_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oferta-list/oferta-list.component */ "K6SV");
/* harmony import */ var _oferta_update_oferta_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oferta-update/oferta-update.component */ "j6ZS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: 'create',
        component: _oferta_create_oferta_create_component__WEBPACK_IMPORTED_MODULE_1__["OfertaCreateComponent"]
    },
    {
        path: 'detail/:id',
        component: _oferta_detail_oferta_detail_component__WEBPACK_IMPORTED_MODULE_2__["OfertaDetailComponent"]
    },
    {
        path: 'list',
        component: _oferta_list_oferta_list_component__WEBPACK_IMPORTED_MODULE_3__["OfertaListComponent"]
    },
    {
        path: 'update/:id',
        component: _oferta_update_oferta_update_component__WEBPACK_IMPORTED_MODULE_4__["OfertaUpdateComponent"]
    }
];
class OfertaRoutingModule {
}
OfertaRoutingModule.??fac = function OfertaRoutingModule_Factory(t) { return new (t || OfertaRoutingModule)(); };
OfertaRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: OfertaRoutingModule });
OfertaRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](OfertaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "K6SV":
/*!**********************************************************************!*\
  !*** ./src/app/catalogo/oferta/oferta-list/oferta-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: OfertaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertaListComponent", function() { return OfertaListComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");



class OfertaListComponent {
    constructor() {
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"];
    }
    ngOnInit() {
    }
}
OfertaListComponent.??fac = function OfertaListComponent_Factory(t) { return new (t || OfertaListComponent)(); };
OfertaListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: OfertaListComponent, selectors: [["app-oferta-list"]], decls: 23, vars: 1, consts: [[1, "title"], [1, "column", "is-12", "is-offset-0"], [1, "box"], [1, "field"], [1, "control", "has-icons-left", "has-icons-right"], ["type", "text", "placeholder", "Buscar por nombre del productor", 1, "input"], [1, "icon", "is-small", "is-right"], [3, "icon"], [1, "columns", "is-vcentered"], [1, "column", "is-9", "has-text-left", "is-size-3"], ["href", ""], [1, "column", "is-3"], ["href", "", 1, "button", "is-info", "is-medium"], [1, "field", "columns"], [1, "column"], ["href", "", 1, "button", "is-danger", "is-medium"]], template: function OfertaListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "Lista de ofertas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Productor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "Detalle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "Ver seleccionados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("icon", ctx.faSearch);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmVydGEtbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "M7Hj":
/*!**************************************************!*\
  !*** ./src/app/catalogo/oferta/oferta.module.ts ***!
  \**************************************************/
/*! exports provided: OfertaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertaModule", function() { return OfertaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _oferta_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./oferta-routing.module */ "91iA");
/* harmony import */ var _oferta_create_oferta_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./oferta-create/oferta-create.component */ "5uwW");
/* harmony import */ var _oferta_detail_oferta_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oferta-detail/oferta-detail.component */ "bcPV");
/* harmony import */ var _oferta_list_oferta_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./oferta-list/oferta-list.component */ "K6SV");
/* harmony import */ var _oferta_update_oferta_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oferta-update/oferta-update.component */ "j6ZS");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class OfertaModule {
}
OfertaModule.??fac = function OfertaModule_Factory(t) { return new (t || OfertaModule)(); };
OfertaModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({ type: OfertaModule });
OfertaModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _oferta_routing_module__WEBPACK_IMPORTED_MODULE_1__["OfertaRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](OfertaModule, { declarations: [_oferta_create_oferta_create_component__WEBPACK_IMPORTED_MODULE_2__["OfertaCreateComponent"],
        _oferta_detail_oferta_detail_component__WEBPACK_IMPORTED_MODULE_3__["OfertaDetailComponent"],
        _oferta_list_oferta_list_component__WEBPACK_IMPORTED_MODULE_4__["OfertaListComponent"],
        _oferta_update_oferta_update_component__WEBPACK_IMPORTED_MODULE_5__["OfertaUpdateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _oferta_routing_module__WEBPACK_IMPORTED_MODULE_1__["OfertaRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]] }); })();


/***/ }),

/***/ "bcPV":
/*!**************************************************************************!*\
  !*** ./src/app/catalogo/oferta/oferta-detail/oferta-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: OfertaDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertaDetailComponent", function() { return OfertaDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OfertaDetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
OfertaDetailComponent.??fac = function OfertaDetailComponent_Factory(t) { return new (t || OfertaDetailComponent)(); };
OfertaDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OfertaDetailComponent, selectors: [["app-oferta-detail"]], decls: 2, vars: 0, template: function OfertaDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "oferta-detail works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmVydGEtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "j6ZS":
/*!**************************************************************************!*\
  !*** ./src/app/catalogo/oferta/oferta-update/oferta-update.component.ts ***!
  \**************************************************************************/
/*! exports provided: OfertaUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertaUpdateComponent", function() { return OfertaUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class OfertaUpdateComponent {
    constructor() { }
    ngOnInit() {
    }
}
OfertaUpdateComponent.??fac = function OfertaUpdateComponent_Factory(t) { return new (t || OfertaUpdateComponent)(); };
OfertaUpdateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OfertaUpdateComponent, selectors: [["app-oferta-update"]], decls: 2, vars: 0, template: function OfertaUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "oferta-update works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmVydGEtdXBkYXRlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=oferta-oferta-module.js.map