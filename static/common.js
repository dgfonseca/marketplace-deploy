(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "6Hp4":
/*!***************************************************!*\
  !*** ./src/app/catalogo/oferta/oferta.service.ts ***!
  \***************************************************/
/*! exports provided: OfertaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfertaService", function() { return OfertaService; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals */ "xa+l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class OfertaService {
    constructor(http) {
        this.http = http;
    }
    getOferta(id) {
        return this.http.get(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["OFERTA"] + id);
    }
    getOfertas() {
        return this.http.get(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["OFERTA"]);
    }
    createOferta(oferta) {
        return this.http.post(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["OFERTA"], oferta);
    }
    updateOferta(id, oferta) {
        return this.http.put(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["OFERTA"] + id, oferta);
    }
    deleteOferta(id) {
        return this.http.delete(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["OFERTA"] + id);
    }
    getOfertasProductor(id) {
        return this.http.get(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + "productorOfertas/" + id);
    }
}
OfertaService.ɵfac = function OfertaService_Factory(t) { return new (t || OfertaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
OfertaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OfertaService, factory: OfertaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IxDw":
/*!*******************************************************!*\
  !*** ./src/app/catalogo/producto/producto.service.ts ***!
  \*******************************************************/
/*! exports provided: ProductoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoService", function() { return ProductoService; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals */ "xa+l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ProductoService {
    constructor(http) {
        this.http = http;
    }
    getProducto(id) {
        return this.http.get(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["PRODUCTO"] + id);
    }
    getProductos() {
        return this.http.get(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["PRODUCTO"]);
    }
    createProducto(producto) {
        return this.http.post(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["PRODUCTO"], producto);
    }
    updateProducto(id, producto) {
        return this.http.put(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["PRODUCTO"] + id, producto);
    }
    deleteProducto(id) {
        return this.http.delete(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["PRODUCTO"] + id);
    }
}
ProductoService.ɵfac = function ProductoService_Factory(t) { return new (t || ProductoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProductoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductoService, factory: ProductoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "bLh6":
/*!*******************************************!*\
  !*** ./src/app/catalogo/oferta/oferta.ts ***!
  \*******************************************/
/*! exports provided: Oferta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Oferta", function() { return Oferta; });
class Oferta {
}


/***/ }),

/***/ "pIXe":
/*!**********************************************!*\
  !*** ./src/app/catalogo/catalogo.service.ts ***!
  \**********************************************/
/*! exports provided: CatalogoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoService", function() { return CatalogoService; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "xa+l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CatalogoService {
    constructor(http) {
        this.http = http;
    }
    getCantidadProducto(id) {
        return this.http.get(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["CANTIDAD_PRODUCTO"] + id);
    }
    getCantidadesProducto() {
        return this.http.get(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["CANTIDAD_PRODUCTO"]);
    }
    createCantidadProducto(cantidadProducto) {
        return this.http.post(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["CANTIDAD_PRODUCTO"], cantidadProducto);
    }
    updateCantidadProducto(id, cantidadProducto) {
        return this.http.put(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["CANTIDAD_PRODUCTO"] + id, cantidadProducto);
    }
    deleteCantidadProducto(id) {
        return this.http.delete(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["CANTIDAD_PRODUCTO"] + id);
    }
    getCantidadProductoCatalogo(id) {
        return this.http.get(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["CANTIDAD_PRODUCTO_CATALOGO"] + id + "/");
    }
    getCantidadesProductoCatalogo() {
        return this.http.get(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["CANTIDAD_PRODUCTO_CATALOGO"]);
    }
    createCantidadProductoCatalogo(cantidadProductoCatalogo) {
        return this.http.post(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["CANTIDAD_PRODUCTO_CATALOGO"], cantidadProductoCatalogo);
    }
    updateCantidadProductoCatalogo(id, cantidadProductoCatalogo) {
        return this.http.put(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["CANTIDAD_PRODUCTO_CATALOGO"] + id + "/", cantidadProductoCatalogo);
    }
    deleteCantidadProductoCatalogo(id) {
        return this.http.delete(_globals__WEBPACK_IMPORTED_MODULE_0__["API_IP"] + _globals__WEBPACK_IMPORTED_MODULE_0__["CANTIDAD_PRODUCTO_CATALOGO"] + id + "/");
    }
}
CatalogoService.ɵfac = function CatalogoService_Factory(t) { return new (t || CatalogoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CatalogoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CatalogoService, factory: CatalogoService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map