"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreceFormualarioComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var data_pp_1 = require("src/app/models/data.pp");
var CreceFormualarioComponent = /** @class */ (function () {
    function CreceFormualarioComponent(fb, toastr, _depService, CrecePlaneacionService, _catPpService, loginServices) {
        this.fb = fb;
        this.toastr = toastr;
        this._depService = _depService;
        this.CrecePlaneacionService = CrecePlaneacionService;
        this._catPpService = _catPpService;
        this.loginServices = loginServices;
        this.selectedValue = "";
        this.ProgramaPresupuestario = [];
        this.fecha = new Date(2000, 2, 10);
        this.position = "top";
        this.contador = 0;
        this.CalfDp4 = "";
        this.PonDp4 = 0;
        this.textAreaValueDp4 = "";
        this.textAreaValueDp5 = "";
        this.textAreaValueDp6 = "";
        this.textAreaValueDp7 = "";
        this.textAreaValueDp8 = "";
        this.textAreaValueDp9 = "";
        this.textAreaValueDp10 = "";
        this.textAreaValueDp11 = "";
        this.textAreaValueDp12 = "";
        this.textAreaValueDp13 = "";
        this.textAreaValueDp14 = "";
        this.textAreaValueDp15 = "";
        this.textAreaValueDp16 = "";
        this.textAreaValueDp17 = "";
        this.textAreaValueDp18 = "";
        this.textAreaValueDp19 = "";
        this.textAreaValueDp20 = "";
        this.textAreaValueMir1 = "";
        this.textAreaValueMir2 = "";
        this.textAreaValueMir3 = "";
        this.textAreaValueMir4 = "";
        this.textAreaValueMir5 = "";
        this.textAreaValueMir6 = "";
        this.textAreaValueMir7 = "";
        this.textAreaValueMir8 = "";
        this.textAreaValueMir9 = "";
        this.textAreaValueMir10 = "";
        this.textAreaValueMir11 = "";
        this.textAreaValueMir12 = "";
        this.textAreaValueMir13 = "";
        this.textAreaValueMir14 = "";
        this.textAreaValueMir15 = "";
        this.textAreaValueMir16 = "";
        this.textAreaValueMir17 = "";
        this.textAreaValueMir18 = "";
        this.textAreaValueMir19 = "";
        this.textAreaValueMir20 = "";
        this.textAreaValueMir21 = "";
        this.textAreaValueMir22 = "";
        this.textAreaValueMir23 = "";
        this.textAreaValueMir24 = "";
        this.textAreaValueMir25 = "";
        this.textAreaValueMir26 = "";
        this.textAreaValueFMIR = "";
        this.textAreaValueFDP = "";
        this.textAreaValueAODP = "";
        this.textAreaValueAOMIR = "";
        this.listCursos = [];
        this.listDep = [];
        this.settings = {
            prevButtonIcon: "fa fa-arrow-circle-left",
            nextButtonIcon: "fa fa-arrow-circle-right"
        };
        this.listYear = [
            "2019",
            "2020",
            "2021",
            "2022",
            "2023"
        ];
        this.listDepPar = [
            "Si",
            "Parcialmente",
            "No"
        ];
        this.form = this.fb.group({
            Email: [this.loginServices.getTokenDecoded().email, forms_1.Validators.required],
            Revision: ['Entrega 2023', forms_1.Validators.required],
            Pp: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(4), forms_1.Validators.minLength(4)]],
            Dependencia: ['', forms_1.Validators.required],
            Fecha: ['', forms_1.Validators.required],
            Ano: ['', forms_1.Validators.required],
            DepPar: ['', forms_1.Validators.required],
            ClaveNombre: ['', forms_1.Validators.required],
            DepResPp: ['', forms_1.Validators.required],
            DepParPp: ['', forms_1.Validators.required],
            FechaADx: ['', forms_1.Validators.required],
            Intro: ['', forms_1.Validators.required],
            AnalisisInvolucrados: ['', forms_1.Validators.required],
            DefProblema: ['', forms_1.Validators.required],
            // AnalisisProblema:['',Validators.required],
            EvoProblema: ['', forms_1.Validators.required],
            EstActualProblema: ['', forms_1.Validators.required],
            ExpAtencion: ['', forms_1.Validators.required],
            DefObjetivos: ['', forms_1.Validators.required],
            AnalisisCorrespon: ['', forms_1.Validators.required],
            SelecAlterna: ['', forms_1.Validators.required],
            EstructuraAnalitica: ['', forms_1.Validators.required],
            JustObj: ['', forms_1.Validators.required],
            IdentificacionCuanPob: ['', forms_1.Validators.required],
            IdenficacionAreaInfluencia: ['', forms_1.Validators.required],
            RelOtrosPP: ['', forms_1.Validators.required],
            ElementosPEB: ['', forms_1.Validators.required],
            MIR: ['', forms_1.Validators.required],
            EvoPp: ['', forms_1.Validators.required],
            Glosario: ['', forms_1.Validators.required],
            Dp1: ['', forms_1.Validators.required],
            Dp4: ['', forms_1.Validators.required],
            Dp4Esp: ['', forms_1.Validators.required],
            Dp5: ['', forms_1.Validators.required],
            Dp5Esp: ['', forms_1.Validators.required],
            Dp6: ['', forms_1.Validators.required],
            Dp6Esp: ['', forms_1.Validators.required],
            Dp7: ['', forms_1.Validators.required],
            Dp7Esp: ['', forms_1.Validators.required],
            Dp8: ['', forms_1.Validators.required],
            Dp8Esp: ['', forms_1.Validators.required],
            Dp9: ['', forms_1.Validators.required],
            Dp9Esp: ['', forms_1.Validators.required],
            Dp10: ['', forms_1.Validators.required],
            Dp10Esp: ['', forms_1.Validators.required],
            Dp11: ['', forms_1.Validators.required],
            Dp11Esp: ['', forms_1.Validators.required],
            Dp12: ['', forms_1.Validators.required],
            Dp12Esp: ['', forms_1.Validators.required],
            Dp13: ['', forms_1.Validators.required],
            Dp13Esp: ['', forms_1.Validators.required],
            Dp14: ['', forms_1.Validators.required],
            Dp14Esp: ['', forms_1.Validators.required],
            Dp15: ['', forms_1.Validators.required],
            Dp15Esp: ['', forms_1.Validators.required],
            Dp16: ['', forms_1.Validators.required],
            Dp16Esp: ['', forms_1.Validators.required],
            Dp17: ['', forms_1.Validators.required],
            Dp17Esp: ['', forms_1.Validators.required],
            Dp18: ['', forms_1.Validators.required],
            Dp18Esp: ['', forms_1.Validators.required],
            Dp19: ['', forms_1.Validators.required],
            Dp19Esp: ['', forms_1.Validators.required],
            Dp20: ['', forms_1.Validators.required],
            Dp20Esp: ['', forms_1.Validators.required],
            Mir1: ['', forms_1.Validators.required],
            Mir1Esp: ['', forms_1.Validators.required],
            Mir2: ['', forms_1.Validators.required],
            Mir2Esp: ['', forms_1.Validators.required],
            Mir3: ['', forms_1.Validators.required],
            Mir3Esp: ['', forms_1.Validators.required],
            Mir4: ['', forms_1.Validators.required],
            Mir4Esp: ['', forms_1.Validators.required],
            Mir5: ['', forms_1.Validators.required],
            Mir5Esp: ['', forms_1.Validators.required],
            Mir6: ['', forms_1.Validators.required],
            Mir6Esp: ['', forms_1.Validators.required],
            Mir7: ['', forms_1.Validators.required],
            Mir7Esp: ['', forms_1.Validators.required],
            Mir8: ['', forms_1.Validators.required],
            Mir8Esp: ['', forms_1.Validators.required],
            Mir9: ['', forms_1.Validators.required],
            Mir9Esp: ['', forms_1.Validators.required],
            Mir10: ['', forms_1.Validators.required],
            Mir10Esp: ['', forms_1.Validators.required],
            Mir11: ['', forms_1.Validators.required],
            Mir11Esp: ['', forms_1.Validators.required],
            Mir12: ['', forms_1.Validators.required],
            Mir12Esp: ['', forms_1.Validators.required],
            Mir13: ['', forms_1.Validators.required],
            Mir13Esp: ['', forms_1.Validators.required],
            Mir14: ['', forms_1.Validators.required],
            Mir14Esp: ['', forms_1.Validators.required],
            Mir15: ['', forms_1.Validators.required],
            Mir15Esp: ['', forms_1.Validators.required],
            Mir16: ['', forms_1.Validators.required],
            Mir16Esp: ['', forms_1.Validators.required],
            Mir17: ['', forms_1.Validators.required],
            Mir17Esp: ['', forms_1.Validators.required],
            Mir18: ['', forms_1.Validators.required],
            Mir18Esp: ['', forms_1.Validators.required],
            Mir19: ['', forms_1.Validators.required],
            Mir19Esp: ['', forms_1.Validators.required],
            Mir20: ['', forms_1.Validators.required],
            Mir20Esp: ['', forms_1.Validators.required],
            Mir21: ['', forms_1.Validators.required],
            Mir21Esp: ['', forms_1.Validators.required],
            Mir22: ['', forms_1.Validators.required],
            Mir22Esp: ['', forms_1.Validators.required],
            Mir23: ['', forms_1.Validators.required],
            Mir23Esp: ['', forms_1.Validators.required],
            Mir24: ['', forms_1.Validators.required],
            Mir24Esp: ['', forms_1.Validators.required],
            Mir25: ['', forms_1.Validators.required],
            Mir25Esp: ['', forms_1.Validators.required],
            Mir26: ['', forms_1.Validators.required],
            Mir26Esp: ['', forms_1.Validators.required],
            FMir: ['', forms_1.Validators.required],
            FDp: ['', forms_1.Validators.required],
            AoMir: ['', forms_1.Validators.required],
            AoDp: ['', forms_1.Validators.required],
            CalfDp4form: ['', forms_1.Validators.required],
            ponDp4form: ['', forms_1.Validators.required]
        });
        console.log(data_pp_1.pp);
    }
    CreceFormualarioComponent.prototype.getUsuario = function () {
        this.Nombre = this.loginServices.getTokenDecoded().sub;
        this.Rol = this.loginServices.getTokenDecoded().roles;
        console.log(this.loginServices.getTokenDecoded());
    };
    CreceFormualarioComponent.prototype.onTabSelect = function (e) {
        console.log(e);
    };
    CreceFormualarioComponent.prototype.obtenerPp = function () {
        var _this = this;
        this._catPpService.getListPp().pipe(rxjs_1.map(function (response) { return response.$values; })).subscribe(function (_data) {
            _data = _data.map(function (_pp) {
                var idPp = _pp.idPp, clavePp = _pp.clavePp;
                return {
                    value: idPp,
                    text: clavePp
                };
            });
            _this.ProgramaPresupuestario = _data;
            console.log(_data);
        }, function (error) {
            console.log(error);
        });
    };
    //Obtener Dependencias
    CreceFormualarioComponent.prototype.obtenerDependencias = function () {
        var _this = this;
        this._depService.GetListDep().pipe(rxjs_1.map(function (response) { return response.$values; })).subscribe(function (_data) {
            _data = _data.map(function (_dep) {
                var idDependencia = _dep.idDependencia, siglaDependencia = _dep.siglaDependencia;
                return {
                    text: siglaDependencia,
                    value: idDependencia
                };
            });
            _this.listDep = _data;
            console.log(_data);
        }, function (error) {
            console.log(error);
        });
    };
    //Metodo para registrar las Inscripciones
    CreceFormualarioComponent.prototype.GuardarCrece = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38, _39, _40, _41, _42, _43, _44, _45, _46, _47, _48, _49, _50, _51, _52, _53, _54, _55, _56, _57, _58, _59, _60, _61, _62, _63, _64, _65, _66, _67, _68, _69, _70, _71, _72, _73, _74, _75, _76, _77, _78, _79, _80, _81, _82, _83, _84, _85, _86, _87, _88, _89, _90, _91, _92, _93, _94, _95, _96, _97;
        var crece = {
            Email: (_a = this.form.get('Email')) === null || _a === void 0 ? void 0 : _a.value,
            Revision: (_b = this.form.get('Revision')) === null || _b === void 0 ? void 0 : _b.value,
            Pp: (_c = this.form.get('Pp')) === null || _c === void 0 ? void 0 : _c.value,
            Dependencia: (_d = this.form.get('Dependencia')) === null || _d === void 0 ? void 0 : _d.value,
            Fecha: (_e = this.form.get('Fecha')) === null || _e === void 0 ? void 0 : _e.value,
            Ano: (_f = this.form.get('Ano')) === null || _f === void 0 ? void 0 : _f.value,
            DepPar: (_g = this.form.get('DepPar')) === null || _g === void 0 ? void 0 : _g.value,
            //Elementos
            ClaveNombre: (_h = this.form.get('ClaveNombre')) === null || _h === void 0 ? void 0 : _h.value,
            DepResPp: (_j = this.form.get('DepResPp')) === null || _j === void 0 ? void 0 : _j.value,
            DepParPp: (_k = this.form.get('DepParPp')) === null || _k === void 0 ? void 0 : _k.value,
            FechaADx: (_l = this.form.get('FechaADx')) === null || _l === void 0 ? void 0 : _l.value,
            Intro: (_m = this.form.get('Intro')) === null || _m === void 0 ? void 0 : _m.value,
            AnalisisInvolucrados: (_o = this.form.get('AnalisisInvolucrados')) === null || _o === void 0 ? void 0 : _o.value,
            DefProblema: (_p = this.form.get('DefProblema')) === null || _p === void 0 ? void 0 : _p.value,
            // AnalisisProblema: this.form.get('AnalisisProblema')?.value,
            EvoProblema: (_q = this.form.get('EvoProblema')) === null || _q === void 0 ? void 0 : _q.value,
            EstActualProblema: (_r = this.form.get('EstActualProblema')) === null || _r === void 0 ? void 0 : _r.value,
            ExpAtencion: (_s = this.form.get('ExpAtencion')) === null || _s === void 0 ? void 0 : _s.value,
            DefObjetivos: (_t = this.form.get('DefObjetivos')) === null || _t === void 0 ? void 0 : _t.value,
            AnalisisCorrespon: (_u = this.form.get('AnalisisCorrespon')) === null || _u === void 0 ? void 0 : _u.value,
            SelecAlterna: (_v = this.form.get('SelecAlterna')) === null || _v === void 0 ? void 0 : _v.value,
            EstructuraAnalitica: (_w = this.form.get('EstructuraAnalitica')) === null || _w === void 0 ? void 0 : _w.value,
            JustObj: (_x = this.form.get('JustObj')) === null || _x === void 0 ? void 0 : _x.value,
            IdentificacionCuanPob: (_y = this.form.get('IdentificacionCuanPob')) === null || _y === void 0 ? void 0 : _y.value,
            IdenficacionAreaInfluencia: (_z = this.form.get('IdenficacionAreaInfluencia')) === null || _z === void 0 ? void 0 : _z.value,
            RelOtrosPP: (_0 = this.form.get('RelOtrosPP')) === null || _0 === void 0 ? void 0 : _0.value,
            ElementosPEB: (_1 = this.form.get('ElementosPEB')) === null || _1 === void 0 ? void 0 : _1.value,
            MIR: (_2 = this.form.get('MIR')) === null || _2 === void 0 ? void 0 : _2.value,
            EvoPp: (_3 = this.form.get('EvoPp')) === null || _3 === void 0 ? void 0 : _3.value,
            Glosario: (_4 = this.form.get('Glosario')) === null || _4 === void 0 ? void 0 : _4.value,
            //Evaluacion Dp
            Dp1: (_5 = this.form.get('Dp1')) === null || _5 === void 0 ? void 0 : _5.value,
            Dp4: (_6 = this.form.get('Dp4')) === null || _6 === void 0 ? void 0 : _6.value,
            Dp4Esp: (_7 = this.form.get('Dp4Esp')) === null || _7 === void 0 ? void 0 : _7.value,
            Dp5: (_8 = this.form.get('Dp5')) === null || _8 === void 0 ? void 0 : _8.value,
            Dp5Esp: (_9 = this.form.get('Dp5Esp')) === null || _9 === void 0 ? void 0 : _9.value,
            Dp6: (_10 = this.form.get('Dp6')) === null || _10 === void 0 ? void 0 : _10.value,
            Dp6Esp: (_11 = this.form.get('Dp6Esp')) === null || _11 === void 0 ? void 0 : _11.value,
            Dp7: (_12 = this.form.get('Dp7')) === null || _12 === void 0 ? void 0 : _12.value,
            Dp7Esp: (_13 = this.form.get('Dp7Esp')) === null || _13 === void 0 ? void 0 : _13.value,
            Dp8: (_14 = this.form.get('Dp8')) === null || _14 === void 0 ? void 0 : _14.value,
            Dp8Esp: (_15 = this.form.get('Dp8Esp')) === null || _15 === void 0 ? void 0 : _15.value,
            Dp9: (_16 = this.form.get('Dp9')) === null || _16 === void 0 ? void 0 : _16.value,
            Dp9Esp: (_17 = this.form.get('Dp9Esp')) === null || _17 === void 0 ? void 0 : _17.value,
            Dp10: (_18 = this.form.get('Dp10')) === null || _18 === void 0 ? void 0 : _18.value,
            Dp10Esp: (_19 = this.form.get('Dp10Esp')) === null || _19 === void 0 ? void 0 : _19.value,
            Dp11: (_20 = this.form.get('Dp11')) === null || _20 === void 0 ? void 0 : _20.value,
            Dp11Esp: (_21 = this.form.get('Dp11Esp')) === null || _21 === void 0 ? void 0 : _21.value,
            Dp12: (_22 = this.form.get('Dp12')) === null || _22 === void 0 ? void 0 : _22.value,
            Dp12Esp: (_23 = this.form.get('Dp12Esp')) === null || _23 === void 0 ? void 0 : _23.value,
            Dp13: (_24 = this.form.get('Dp13')) === null || _24 === void 0 ? void 0 : _24.value,
            Dp13Esp: (_25 = this.form.get('Dp13Esp')) === null || _25 === void 0 ? void 0 : _25.value,
            Dp14: (_26 = this.form.get('Dp14')) === null || _26 === void 0 ? void 0 : _26.value,
            Dp14Esp: (_27 = this.form.get('Dp14Esp')) === null || _27 === void 0 ? void 0 : _27.value,
            Dp15: (_28 = this.form.get('Dp15')) === null || _28 === void 0 ? void 0 : _28.value,
            Dp15Esp: (_29 = this.form.get('Dp15Esp')) === null || _29 === void 0 ? void 0 : _29.value,
            Dp16: (_30 = this.form.get('Dp16')) === null || _30 === void 0 ? void 0 : _30.value,
            Dp16Esp: (_31 = this.form.get('Dp16Esp')) === null || _31 === void 0 ? void 0 : _31.value,
            Dp17: (_32 = this.form.get('Dp17')) === null || _32 === void 0 ? void 0 : _32.value,
            Dp17Esp: (_33 = this.form.get('Dp17Esp')) === null || _33 === void 0 ? void 0 : _33.value,
            Dp18: (_34 = this.form.get('Dp18')) === null || _34 === void 0 ? void 0 : _34.value,
            Dp18Esp: (_35 = this.form.get('Dp18Esp')) === null || _35 === void 0 ? void 0 : _35.value,
            Dp19: (_36 = this.form.get('Dp19')) === null || _36 === void 0 ? void 0 : _36.value,
            Dp19Esp: (_37 = this.form.get('Dp19Esp')) === null || _37 === void 0 ? void 0 : _37.value,
            Dp20: (_38 = this.form.get('Dp20')) === null || _38 === void 0 ? void 0 : _38.value,
            Dp20Esp: (_39 = this.form.get('Dp20Esp')) === null || _39 === void 0 ? void 0 : _39.value,
            //MIr
            Mir1: (_40 = this.form.get('Mir1')) === null || _40 === void 0 ? void 0 : _40.value,
            Mir1Esp: (_41 = this.form.get('Mir1Esp')) === null || _41 === void 0 ? void 0 : _41.value,
            Mir2: (_42 = this.form.get('Mir2')) === null || _42 === void 0 ? void 0 : _42.value,
            Mir2Esp: (_43 = this.form.get('Mir2Esp')) === null || _43 === void 0 ? void 0 : _43.value,
            Mir3: (_44 = this.form.get('Mir3')) === null || _44 === void 0 ? void 0 : _44.value,
            Mir3Esp: (_45 = this.form.get('Mir3Esp')) === null || _45 === void 0 ? void 0 : _45.value,
            Mir4: (_46 = this.form.get('Mir4')) === null || _46 === void 0 ? void 0 : _46.value,
            Mir4Esp: (_47 = this.form.get('Mir4Esp')) === null || _47 === void 0 ? void 0 : _47.value,
            Mir5: (_48 = this.form.get('Mir5')) === null || _48 === void 0 ? void 0 : _48.value,
            Mir5Esp: (_49 = this.form.get('Mir5Esp')) === null || _49 === void 0 ? void 0 : _49.value,
            Mir6: (_50 = this.form.get('Mir6')) === null || _50 === void 0 ? void 0 : _50.value,
            Mir6Esp: (_51 = this.form.get('Mir6Esp')) === null || _51 === void 0 ? void 0 : _51.value,
            Mir7: (_52 = this.form.get('Mir7')) === null || _52 === void 0 ? void 0 : _52.value,
            Mir7Esp: (_53 = this.form.get('Mir7Esp')) === null || _53 === void 0 ? void 0 : _53.value,
            Mir8: (_54 = this.form.get('Mir8')) === null || _54 === void 0 ? void 0 : _54.value,
            Mir8Esp: (_55 = this.form.get('Mir8Esp')) === null || _55 === void 0 ? void 0 : _55.value,
            Mir9: (_56 = this.form.get('Mir9')) === null || _56 === void 0 ? void 0 : _56.value,
            Mir9Esp: (_57 = this.form.get('Mir9Esp')) === null || _57 === void 0 ? void 0 : _57.value,
            Mir10: (_58 = this.form.get('Mir10')) === null || _58 === void 0 ? void 0 : _58.value,
            Mir10Esp: (_59 = this.form.get('Mir10Esp')) === null || _59 === void 0 ? void 0 : _59.value,
            Mir11: (_60 = this.form.get('Mir11')) === null || _60 === void 0 ? void 0 : _60.value,
            Mir11Esp: (_61 = this.form.get('Mir11Esp')) === null || _61 === void 0 ? void 0 : _61.value,
            Mir12: (_62 = this.form.get('Mir12')) === null || _62 === void 0 ? void 0 : _62.value,
            Mir12Esp: (_63 = this.form.get('Mir12Esp')) === null || _63 === void 0 ? void 0 : _63.value,
            Mir13: (_64 = this.form.get('Mir13')) === null || _64 === void 0 ? void 0 : _64.value,
            Mir13Esp: (_65 = this.form.get('Mir13Esp')) === null || _65 === void 0 ? void 0 : _65.value,
            Mir14: (_66 = this.form.get('Mir14')) === null || _66 === void 0 ? void 0 : _66.value,
            Mir14Esp: (_67 = this.form.get('Mir14Esp')) === null || _67 === void 0 ? void 0 : _67.value,
            Mir15: (_68 = this.form.get('Mir15')) === null || _68 === void 0 ? void 0 : _68.value,
            Mir15Esp: (_69 = this.form.get('Mir15Esp')) === null || _69 === void 0 ? void 0 : _69.value,
            Mir16: (_70 = this.form.get('Mir16')) === null || _70 === void 0 ? void 0 : _70.value,
            Mir16Esp: (_71 = this.form.get('Mir16Esp')) === null || _71 === void 0 ? void 0 : _71.value,
            Mir17: (_72 = this.form.get('Mir17')) === null || _72 === void 0 ? void 0 : _72.value,
            Mir17Esp: (_73 = this.form.get('Mir17Esp')) === null || _73 === void 0 ? void 0 : _73.value,
            Mir18: (_74 = this.form.get('Mir18')) === null || _74 === void 0 ? void 0 : _74.value,
            Mir18Esp: (_75 = this.form.get('Mir18Esp')) === null || _75 === void 0 ? void 0 : _75.value,
            Mir19: (_76 = this.form.get('Mir19')) === null || _76 === void 0 ? void 0 : _76.value,
            Mir19Esp: (_77 = this.form.get('Mir19Esp')) === null || _77 === void 0 ? void 0 : _77.value,
            Mir20: (_78 = this.form.get('Mir20')) === null || _78 === void 0 ? void 0 : _78.value,
            Mir20Esp: (_79 = this.form.get('Mir20Esp')) === null || _79 === void 0 ? void 0 : _79.value,
            Mir21: (_80 = this.form.get('Mir21')) === null || _80 === void 0 ? void 0 : _80.value,
            Mir21Esp: (_81 = this.form.get('Mir21Esp')) === null || _81 === void 0 ? void 0 : _81.value,
            Mir22: (_82 = this.form.get('Mir22')) === null || _82 === void 0 ? void 0 : _82.value,
            Mir22Esp: (_83 = this.form.get('Mir22Esp')) === null || _83 === void 0 ? void 0 : _83.value,
            Mir23: (_84 = this.form.get('Mir23')) === null || _84 === void 0 ? void 0 : _84.value,
            Mir23Esp: (_85 = this.form.get('Mir23Esp')) === null || _85 === void 0 ? void 0 : _85.value,
            Mir24: (_86 = this.form.get('Mir24')) === null || _86 === void 0 ? void 0 : _86.value,
            Mir24Esp: (_87 = this.form.get('Mir24Esp')) === null || _87 === void 0 ? void 0 : _87.value,
            Mir25: (_88 = this.form.get('Mir25')) === null || _88 === void 0 ? void 0 : _88.value,
            Mir25Esp: (_89 = this.form.get('Mir25Esp')) === null || _89 === void 0 ? void 0 : _89.value,
            Mir26: (_90 = this.form.get('Mir26')) === null || _90 === void 0 ? void 0 : _90.value,
            Mir26Esp: (_91 = this.form.get('Mir26Esp')) === null || _91 === void 0 ? void 0 : _91.value,
            //Fortalezas
            FMir: (_92 = this.form.get('FMir')) === null || _92 === void 0 ? void 0 : _92.value,
            FDp: (_93 = this.form.get('FDp')) === null || _93 === void 0 ? void 0 : _93.value,
            //Areas de Oportunidad
            AoMir: (_94 = this.form.get('AoMir')) === null || _94 === void 0 ? void 0 : _94.value,
            AoDp: (_95 = this.form.get('AoDp')) === null || _95 === void 0 ? void 0 : _95.value,
            CalfDp4form: (_96 = this.form.get('CalfDp4form')) === null || _96 === void 0 ? void 0 : _96.value,
            ponDp4form: (_97 = this.form.get('ponDp4form')) === null || _97 === void 0 ? void 0 : _97.value
        };
        this.CrecePlaneacionService.saveCrece(crece).subscribe(function (_data) {
            _this.toastr.success('El Crece del PP ' + crece.Pp + ' fue registrado con exito!', 'Crece Registrado');
            _this.form.reset();
        }, function (error) {
            _this.toastr.error('Opss.. ocurrio un error', 'Error');
            console.log(error);
        });
    };
    CreceFormualarioComponent.prototype.ngOnInit = function () {
        this.obtenerDependencias();
        this.getUsuario();
        this.obtenerPp();
        this.respuestaGenericaDp4();
        this.ponderacionDp4();
        //this.Elemento2Calculo();
    };
    CreceFormualarioComponent.prototype.clearValue4 = function () {
        this.textAreaValueDp4 = "";
    };
    CreceFormualarioComponent.prototype.clearValue5 = function () {
        this.textAreaValueDp5 = "";
    };
    CreceFormualarioComponent.prototype.clearValue6 = function () {
        this.textAreaValueDp6 = "";
    };
    CreceFormualarioComponent.prototype.clearValue7 = function () {
        this.textAreaValueDp7 = "";
    };
    CreceFormualarioComponent.prototype.clearValue8 = function () {
        this.textAreaValueDp8 = "";
    };
    CreceFormualarioComponent.prototype.clearValue9 = function () {
        this.textAreaValueDp9 = "";
    };
    CreceFormualarioComponent.prototype.clearValue10 = function () {
        this.textAreaValueDp10 = "";
    };
    CreceFormualarioComponent.prototype.clearValue11 = function () {
        this.textAreaValueDp11 = "";
    };
    CreceFormualarioComponent.prototype.clearValue12 = function () {
        this.textAreaValueDp12 = "";
    };
    CreceFormualarioComponent.prototype.clearValue13 = function () {
        this.textAreaValueDp13 = "";
    };
    CreceFormualarioComponent.prototype.clearValue14 = function () {
        this.textAreaValueDp14 = "";
    };
    CreceFormualarioComponent.prototype.clearValue15 = function () {
        this.textAreaValueDp15 = "";
    };
    CreceFormualarioComponent.prototype.clearValue16 = function () {
        this.textAreaValueDp16 = "";
    };
    CreceFormualarioComponent.prototype.clearValue17 = function () {
        this.textAreaValueDp17 = "";
    };
    CreceFormualarioComponent.prototype.clearValue18 = function () {
        this.textAreaValueDp18 = "";
    };
    CreceFormualarioComponent.prototype.clearValue19 = function () {
        this.textAreaValueDp19 = "";
    };
    CreceFormualarioComponent.prototype.clearValue20 = function () {
        this.textAreaValueDp20 = "";
    };
    CreceFormualarioComponent.prototype.clearValue21 = function () {
        this.textAreaValueMir1 = "";
    };
    CreceFormualarioComponent.prototype.clearValue22 = function () {
        this.textAreaValueMir2 = "";
    };
    CreceFormualarioComponent.prototype.clearValue23 = function () {
        this.textAreaValueMir3 = "";
    };
    CreceFormualarioComponent.prototype.clearValue24 = function () {
        this.textAreaValueMir4 = "";
    };
    CreceFormualarioComponent.prototype.clearValue25 = function () {
        this.textAreaValueMir5 = "";
    };
    CreceFormualarioComponent.prototype.clearValue26 = function () {
        this.textAreaValueMir6 = "";
    };
    CreceFormualarioComponent.prototype.clearValue27 = function () {
        this.textAreaValueMir7 = "";
    };
    CreceFormualarioComponent.prototype.clearValue28 = function () {
        this.textAreaValueMir8 = "";
    };
    CreceFormualarioComponent.prototype.clearValue29 = function () {
        this.textAreaValueMir9 = "";
    };
    CreceFormualarioComponent.prototype.clearValue30 = function () {
        this.textAreaValueMir10 = "";
    };
    CreceFormualarioComponent.prototype.clearValue31 = function () {
        this.textAreaValueMir11 = "";
    };
    CreceFormualarioComponent.prototype.clearValue32 = function () {
        this.textAreaValueMir12 = "";
    };
    CreceFormualarioComponent.prototype.clearValue33 = function () {
        this.textAreaValueMir13 = "";
    };
    CreceFormualarioComponent.prototype.clearValue34 = function () {
        this.textAreaValueMir14 = "";
    };
    CreceFormualarioComponent.prototype.clearValue35 = function () {
        this.textAreaValueMir15 = "";
    };
    CreceFormualarioComponent.prototype.clearValue36 = function () {
        this.textAreaValueMir16 = "";
    };
    CreceFormualarioComponent.prototype.clearValue37 = function () {
        this.textAreaValueMir17 = "";
    };
    CreceFormualarioComponent.prototype.clearValue38 = function () {
        this.textAreaValueMir18 = "";
    };
    CreceFormualarioComponent.prototype.clearValue39 = function () {
        this.textAreaValueMir19 = "";
    };
    CreceFormualarioComponent.prototype.clearValue40 = function () {
        this.textAreaValueMir20 = "";
    };
    CreceFormualarioComponent.prototype.clearValue41 = function () {
        this.textAreaValueMir21 = "";
    };
    CreceFormualarioComponent.prototype.clearValue42 = function () {
        this.textAreaValueMir22 = "";
    };
    CreceFormualarioComponent.prototype.clearValue43 = function () {
        this.textAreaValueMir23 = "";
    };
    CreceFormualarioComponent.prototype.clearValue44 = function () {
        this.textAreaValueMir24 = "";
    };
    CreceFormualarioComponent.prototype.clearValue45 = function () {
        this.textAreaValueMir25 = "";
    };
    CreceFormualarioComponent.prototype.clearValue46 = function () {
        this.textAreaValueMir26 = "";
    };
    CreceFormualarioComponent.prototype.clearValue47 = function () {
        this.textAreaValueFMIR = "";
    };
    CreceFormualarioComponent.prototype.clearValue48 = function () {
        this.textAreaValueFDP = "";
    };
    CreceFormualarioComponent.prototype.clearValue49 = function () {
        this.textAreaValueAOMIR = "";
    };
    CreceFormualarioComponent.prototype.clearValue50 = function () {
        this.textAreaValueAODP = "";
    };
    // public Elemento1Calculo(): void {
    //   while(this.contador < 10)
    //   {
    //     this.contador += 1;
    //     if(this.contador== 5)
    //     {
    //       break;
    //     }
    //     console.log(this.contador + " ");
    //   }
    //   console.log("\n");
    // }
    CreceFormualarioComponent.prototype.Elemento2Calculo = function () {
        var _a, _b, _c, _d;
        this.Contador1si = (_a = this.form.get('ClaveNombre')) === null || _a === void 0 ? void 0 : _a.value;
        this.Contador2si = (_b = this.form.get('DepResPp')) === null || _b === void 0 ? void 0 : _b.value;
        this.Contador1no = (_c = this.form.get('ClaveNombre')) === null || _c === void 0 ? void 0 : _c.value;
        this.Contador2no = (_d = this.form.get('DepResPp')) === null || _d === void 0 ? void 0 : _d.value;
        if (this.Contador1no === "0" && this.Contador2no === "0") {
            this.TotalSi = 0;
        }
        else if (this.Contador1si === "1" && this.Contador2no === "0") {
            this.TotalSi = 1;
        }
        else if (this.Contador1no === "0" && this.Contador2si === "1") {
            this.TotalSi = 1;
        }
        else if (this.Contador1si === "1" && this.Contador2si === "1") {
            this.TotalSi = 2;
        }
        console.log(this.form.value);
    };
    CreceFormualarioComponent.prototype.sinrec4 = function () {
        if (this.Dp4Calf == 9) {
            this.textAreaValueDp4 = "Sin recomendaciones";
        }
        else if (this.Dp4Calf == 6) {
            this.textAreaValueDp4 = "";
        }
        else if (this.Dp4Calf == 3) {
            this.textAreaValueDp4 = "";
        }
    };
    CreceFormualarioComponent.prototype.respuestaGenericaDp4 = function () {
        if (this.Dp4Calf == 9) {
            this.CalfDp4 = "La introducción del Diagnóstico es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno";
        }
        else if (this.Dp4Calf == 6) {
            this.CalfDp4 = "La introducción del Diagnóstico no es lo suficientemente clara para dar a conocer la problemática, como ésta será atendida y la justificación de la intervención de gobierno, en este apartado se espera un resumen ejecutivo.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
        }
        else if (this.Dp4Calf == 3) {
            this.CalfDp4 = "La introducción del Diagnóstico no contiene los elementos necesarios que permitan identificar la problemática, su atención o la justificación del programa.\nEste apartado comprende un resumen ejecutivo del resto del documento.\nEsta recomendación se incluirá en el plan de mejora continua del Programa, su atención se considera deseable, pero no urgente.";
        }
        console.log(this.form.value);
    };
    CreceFormualarioComponent.prototype.ponderacionDp4 = function () {
        if (this.Dp4Calf == 9) {
            //Maximo 2%
            this.PonDp4 = 2;
        }
        else if (this.Dp4Calf == 6) {
            this.PonDp4 = 1;
        }
        else if (this.Dp4Calf == 3) {
            this.PonDp4 = 0;
        }
    };
    CreceFormualarioComponent.prototype.sinrec5 = function () {
        this.textAreaValueDp5 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec6 = function () {
        this.textAreaValueDp6 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec7 = function () {
        this.textAreaValueDp7 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec8 = function () {
        this.textAreaValueDp8 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec9 = function () {
        this.textAreaValueDp9 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec10 = function () {
        this.textAreaValueDp10 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec11 = function () {
        this.textAreaValueDp11 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec12 = function () {
        this.textAreaValueDp12 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec13 = function () {
        this.textAreaValueDp13 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec14 = function () {
        this.textAreaValueDp14 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec15 = function () {
        this.textAreaValueDp15 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec16 = function () {
        this.textAreaValueDp16 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec17 = function () {
        this.textAreaValueDp17 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec18 = function () {
        this.textAreaValueDp18 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec19 = function () {
        this.textAreaValueDp19 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec20 = function () {
        this.textAreaValueDp20 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec21 = function () {
        this.textAreaValueMir1 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec22 = function () {
        this.textAreaValueMir2 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec23 = function () {
        this.textAreaValueMir3 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec24 = function () {
        this.textAreaValueMir4 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec25 = function () {
        this.textAreaValueMir5 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec26 = function () {
        this.textAreaValueMir6 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec27 = function () {
        this.textAreaValueMir7 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec28 = function () {
        this.textAreaValueMir8 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec29 = function () {
        this.textAreaValueMir9 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec30 = function () {
        this.textAreaValueMir10 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec31 = function () {
        this.textAreaValueMir11 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec32 = function () {
        this.textAreaValueMir12 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec33 = function () {
        this.textAreaValueMir13 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec34 = function () {
        this.textAreaValueMir14 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec35 = function () {
        this.textAreaValueMir15 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec36 = function () {
        this.textAreaValueMir16 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec37 = function () {
        this.textAreaValueMir17 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec38 = function () {
        this.textAreaValueMir18 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec39 = function () {
        this.textAreaValueMir19 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec40 = function () {
        this.textAreaValueMir20 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec41 = function () {
        this.textAreaValueMir21 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec42 = function () {
        this.textAreaValueMir22 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec43 = function () {
        this.textAreaValueMir23 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec44 = function () {
        this.textAreaValueMir24 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec45 = function () {
        this.textAreaValueMir25 = "Sin recomendaciones";
    };
    CreceFormualarioComponent.prototype.sinrec46 = function () {
        this.textAreaValueMir26 = "Sin recomendaciones";
    };
    CreceFormualarioComponent = __decorate([
        core_1.Component({
            selector: 'app-crece-formualario',
            templateUrl: './crece-formualario.component.html',
            styleUrls: ['./crece-formualario.component.css']
        })
    ], CreceFormualarioComponent);
    return CreceFormualarioComponent;
}());
exports.CreceFormualarioComponent = CreceFormualarioComponent;
