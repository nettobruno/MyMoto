webpackJsonp([4],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, afAuth, AlertCtrl, db, toast, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.AlertCtrl = AlertCtrl;
        this.db = db;
        this.toast = toast;
        this.loadingController = loadingController;
        this.user = {};
        this.PATH = '/usuarios';
    }
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading_1, alert_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(user.email !== undefined || user.password !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadingController.create({
                                cssClass: 'loading'
                            })];
                    case 1:
                        loading_1 = _a.sent();
                        loading_1.present();
                        this.afAuth.auth.signInWithEmailAndPassword(user.email.toLowerCase(), user.password)
                            .then(function (res) {
                            var uid = res.user.uid;
                            var listDB = _this.db.database.ref(_this.PATH).child(uid);
                            listDB.on('value', function (snapshot) {
                                var items = snapshot.val();
                                if (items == null) {
                                    var alert_2 = _this.AlertCtrl.create({
                                        title: "Atenção",
                                        message: "Esse E-mail não está cadastrado",
                                        buttons: ['OK']
                                    });
                                    loading_1.dismiss();
                                    alert_2.present();
                                }
                                else {
                                    loading_1.dismiss();
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                                }
                            });
                        }).catch(function (error) {
                            console.log(error);
                            var alert = _this.AlertCtrl.create({
                                title: "Atenção",
                                message: "Email ou senha inválido!",
                                buttons: ['OK']
                            });
                            loading_1.dismiss();
                            alert.present();
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        alert_1 = this.AlertCtrl.create({
                            title: "Atenção",
                            message: "Preencha todos os campos!",
                            buttons: ['OK']
                        });
                        // loading.dismiss();
                        alert_1.present();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.esqueceuSenha = function () {
        var _this = this;
        var alert = this.AlertCtrl.create({
            title: 'Redefinir senha',
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Digite o E-mail'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text: "confirmar",
                    handler: function (data) {
                        if (data.email == "") {
                            _this.toast.create({
                                message: 'Nenhum e-mail informado',
                                duration: 3000
                            }).present();
                        }
                        else {
                            var email_1 = data.email;
                            _this.afAuth.auth.sendPasswordResetEmail(email_1)
                                .then(function (data) {
                                _this.toast.create({
                                    message: 'Enviamos um E-mail para ' + email_1 + ', clique no link do E-mail para redefinir sua senha',
                                    showCloseButton: true
                                }).present();
                            });
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/brunonetto/Documents/PROJETOS/MyMoto/Cliente/src/pages/login/login.html"*/'<ion-content class="background">\n  <div class="content">\n    <div padding>\n      <div text-center>\n        <img src="./assets/imgs/logo.png" class="logo">\n      </div>\n\n      <div class="form">\n          <input type="text" [(ngModel)]="user.email" placeholder="E-mail" text-center>\n          <input type="password" [(ngModel)]="user.password" placeholder="Senha" text-center>\n      </div>\n\n      <div text-center>\n        <div (click)="login(user)" class="btnLogin" text-center>Entrar</div>\n        <div (click)="esqueceuSenha()" class="esqueceuSenha" text-center>Esqueceu sua senha?</div>\n      </div>\n\n      <div text-center>\n        <div (click)="register()" class="linkCadastrar" text-center>Cadastre-se</div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/brunonetto/Documents/PROJETOS/MyMoto/Cliente/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotoristaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MotoristaPage = /** @class */ (function () {
    function MotoristaPage(navCtrl, navParams, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.uid = navParams.get('item');
    }
    MotoristaPage.prototype.ionViewDidLoad = function () {
        this.infoMotorista();
    };
    MotoristaPage.prototype.infoMotorista = function () {
        var _this = this;
        var pegarMotorista = this.db.database.ref('corridas-pendentes').child(this.uid);
        pegarMotorista.once('value', function (data) {
            var value = data.val();
            var dadosMotorista = _this.db.database.ref('motoristas').child(value.motorista);
            dadosMotorista.once('value', function (data) {
                var motorista = data.val();
                _this.imgMotorista(motorista);
                _this.nomeMotorista(motorista);
                _this.avaliacaoMotorista(motorista);
                _this.corridasMotorista(motorista);
                _this.corMoto(motorista);
                _this.placaMoto(motorista);
            });
        });
    };
    MotoristaPage.prototype.imgMotorista = function (motorista) {
        // Verifica se o motorista já tem uma foto de perfil ou não
        if (motorista.perfil == "") {
            this.element = document.createElement("img");
            this.element.className = 'imgTeste';
            this.element.src = "../../assets/imgs/default.png";
            document.getElementById('imagem').appendChild(this.element);
        }
        else {
            this.element = document.createElement("img");
            this.element.className = 'imgTeste';
            this.element.src = motorista.perfil;
            document.getElementById('imagem').appendChild(this.element);
        }
    };
    MotoristaPage.prototype.nomeMotorista = function (motorista) {
        document.getElementById('nome').innerText = motorista.nome;
    };
    MotoristaPage.prototype.avaliacaoMotorista = function (motorista) {
        if (motorista.avaliacao == 0) {
            document.getElementById('avaliacao').innerText = 'Ainda sem avaliações';
        }
        else {
            var mediaAvaliacao = motorista.avaliacao / motorista.corridas;
            document.getElementById('avaliacao').innerText = "" + mediaAvaliacao.toFixed(2);
        }
    };
    MotoristaPage.prototype.corridasMotorista = function (motorista) {
        document.getElementById('numeroCorridas').innerText = motorista.corridas;
    };
    MotoristaPage.prototype.corMoto = function (motorista) {
        document.getElementById('cor').innerText = "  " + motorista.cor;
    };
    MotoristaPage.prototype.placaMoto = function (motorista) {
        document.getElementById('placa').innerText = "  " + motorista.placa;
    };
    MotoristaPage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    MotoristaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-motorista',template:/*ion-inline-start:"/Users/brunonetto/Documents/PROJETOS/MyMoto/Cliente/src/pages/motorista/motorista.html"*/'<ion-content>\n  <div id="fundo">\n    <div class="containerHeader">\n      <div>\n        <ion-icon name="arrow-round-back" class="botao-voltar" (click)="voltar()"></ion-icon>\n      </div>\n      <div id="imagem"></div>\n      <div id="textos">\n        <p id="nome"></p>\n        <div>\n          <div class="displayFlex">\n            <p id="avaliacao"></p>\n            <ion-icon ios="ios-star" md="md-star"></ion-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="box boxInfo" text-center>\n      <div class="textInfo">\n        <h2>Informaçoes da moto</h2>\n        <div class="displayFlex">\n          <p class="boldFont">Cor:</p>\n          <p id="cor"></p>\n        </div>\n        <div class="displayFlex">\n          <p class="boldFont">Placa:</p>\n          <p id="placa"></p>\n        </div>\n      </div>\n    </div>\n    <div class="box boxCorrida">\n      <div class="textCorrida">\n        <h2>Corridas realizadas</h2>\n        <div>\n          <p id="numeroCorridas"></p>\n        </div>\n      </div>\n    </div>\n    <div class="containerBody">\n    </div>\n  </div>\n  </ion-content>\n'/*ion-inline-end:"/Users/brunonetto/Documents/PROJETOS/MyMoto/Cliente/src/pages/motorista/motorista.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], MotoristaPage);
    return MotoristaPage;
}());

//# sourceMappingURL=motorista.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, toast, afAuth, alertCtrl, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.PATH = 'usuarios/';
        this.user = {};
    }
    RegisterPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (user.email == undefined || user.password == undefined || this.confirm_pass == undefined || this.nome == undefined) {
                    this.toast.create({
                        message: 'Preencha todos os campos',
                        duration: 3000
                    }).present();
                }
                else {
                    if (user.password == this.confirm_pass) {
                        try {
                            this.afAuth.auth.createUserWithEmailAndPassword(user.email.toLowerCase(), user.password)
                                .then(function (res) {
                                _this.setId(res.user.uid);
                                _this.db.database.ref(_this.PATH).child(_this.getId())
                                    .set({
                                    name: _this.nome,
                                    avaliacao: 0,
                                    corridas: 0,
                                }).then(function (error) {
                                    console.log(error);
                                });
                                _this.toast.create({
                                    message: 'Cadastro finalizado!',
                                    duration: 4000
                                }).present();
                                _this.Login();
                            }).catch(function (error) {
                                if (user.password.length < 6) {
                                    _this.toast.create({
                                        message: 'A seenha precisa ter no mínimo 6 caracteres',
                                        duration: 3000
                                    }).present();
                                }
                                else {
                                    _this.toast.create({
                                        message: 'E-mail já cadastrado',
                                        duration: 3000
                                    }).present();
                                }
                            });
                        }
                        catch (e) {
                            console.error(e);
                        }
                    }
                    else {
                        this.toast.create({
                            message: 'Senhas diferentes, digite a mesma senha nos dois campos',
                            duration: 3000
                        }).present();
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    RegisterPage.prototype.setId = function (id) {
        this.id = id;
    };
    RegisterPage.prototype.getId = function () {
        return this.id;
    };
    RegisterPage.prototype.Login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/brunonetto/Documents/PROJETOS/MyMoto/Cliente/src/pages/register/register.html"*/'<ion-content class="background">\n  <div class="content">\n    <div padding>\n      <div text-center>\n        <img src="./assets/imgs/logo.png" class="logo">\n      </div>\n\n      <div class="form">\n        <input type="text" [(ngModel)]="nome" placeholder="Nome" text-center>\n\n        <input type="text" [(ngModel)]="user.email" placeholder="Email" text-center>\n\n        <input type="password" [(ngModel)]="user.password" placeholder="Senha" text-center>\n\n        <input type="password" [(ngModel)]="confirm_pass" placeholder="Confirmar Senha" text-center>\n      </div>\n\n      <div text-center>\n        <div (click)="register(user)" class="btnCadastrar" text-center>Cadastrar</div>\n        <div (click)="Login()" class="linkLogin" text-center>Entrar</div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/brunonetto/Documents/PROJETOS/MyMoto/Cliente/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		842,
		3
	],
	"../pages/login/login.module": [
		839,
		2
	],
	"../pages/motorista/motorista.module": [
		840,
		1
	],
	"../pages/register/register.module": [
		841,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 259;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// declare var Connection;
var ConnectivityService = /** @class */ (function () {
    function ConnectivityService(platform, network) {
        var _this = this;
        this.platform = platform;
        this.network = network;
        this.boolIsOnline = false;
        this.onDevice = this.platform.is('cordova');
        this.boolIsOnline = false;
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            _this.boolIsOnline = false;
        });
        // watch network for a connection
        var connectSubscription = this.network.onConnect().subscribe(function () {
            _this.boolIsOnline = true;
        });
    }
    ConnectivityService.prototype.isOnline = function () {
        if (this.onDevice && this.boolIsOnline) {
            return this.boolIsOnline;
        }
        else {
            return navigator.onLine;
        }
    };
    ConnectivityService.prototype.isOffline = function () {
        if (this.onDevice && !this.boolIsOnline) {
            return this.boolIsOnline;
        }
        else {
            return !navigator.onLine;
        }
    };
    ConnectivityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]])
    ], ConnectivityService);
    return ConnectivityService;
}());

//# sourceMappingURL=connectivity-service.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(425);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_firebase_config__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_location_accuracy__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_connectivity_service__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_motorista_motorista__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// Google maps



// Páginas




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_motorista_motorista__["a" /* MotoristaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/motorista/motorista.module#MotoristaPageModule', name: 'MotoristaPage', segment: 'motorista', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_9__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabaseModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_motorista_motorista__["a" /* MotoristaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_13__providers_connectivity_service__["a" /* ConnectivityService */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { LoginPage } from '../pages/login/login';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/brunonetto/Documents/PROJETOS/MyMoto/Cliente/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/brunonetto/Documents/PROJETOS/MyMoto/Cliente/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyAfgjSwZ6q_1aCFNXlEhJv_vyltl2qD-lI",
    authDomain: "mymoto-9f776.firebaseapp.com",
    databaseURL: "https://mymoto-9f776.firebaseio.com",
    projectId: "mymoto-9f776",
    storageBucket: "",
    messagingSenderId: "74704005722",
    appId: "1:74704005722:web:9d6b1ea47ac201a1"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_location_accuracy__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_connectivity_service__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__motorista_motorista__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







// Páginas


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, afAuth, db, geolocation, alertCtrl, locationAccuracy, connectivityService, loadingController, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.db = db;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.locationAccuracy = locationAccuracy;
        this.connectivityService = connectivityService;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.PATH = 'usuarios';
        this.mapInitialised = false;
        this.apiKey = 'AIzaSyAfqddk6NK_yUfmF6m6ovYMPGdTWhzAGVc';
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // this.gpsState();
        this.getUser();
        // this.initializeGoogleMaps();
        this.loadGoogleMaps();
        this.escondeFazerPedido();
        this.escondeAguardando();
        this.escondeMotoristaAceitou();
        this.escondeCorridaFinalizada();
        this.escondeReclamacao();
    };
    HomePage.prototype.gpsState = function () {
        var _this = this;
        this.locationAccuracy.canRequest()
            .then(function (canRequest) {
            if (canRequest) {
                // the accuracy option will be ignored by iOS
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
                    .then(function () { return alert('GPS ativado'); }, function (error) { return alert('Erro na ativação do GPS'); });
            }
        });
    };
    HomePage.prototype.getUser = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.uid = data.uid;
                _this.esperarPorAlteracoesNaCorrida();
                var listDB = _this.db.database.ref(_this.PATH).child(_this.uid);
                listDB.on('value', function (snapshot) {
                    _this.item = snapshot.val();
                });
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
            }
        });
    };
    HomePage.prototype.loadGoogleMaps = function () {
        var _this = this;
        this.addConnectivityListeners();
        if (typeof google == "undefined" || typeof google.maps == "undefined") {
            console.log("Google maps JavaScript needs to be loaded.");
            this.disableMap();
            if (this.connectivityService.isOnline()) {
                console.log("online, loading map");
                //Load the SDK
                window['mapInit'] = function () {
                    _this.initMap();
                    _this.enableMap();
                };
                var script = document.createElement("script");
                script.id = "googleMaps";
                if (this.apiKey) {
                    script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&v=3.exp&libraries=places&callback=mapInit';
                }
                else {
                    script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
                }
                document.body.appendChild(script);
            }
        }
        else {
            if (this.connectivityService.isOnline()) {
                console.log("showing map");
                this.initMap();
                this.enableMap();
            }
            else {
                console.log("disabling map");
                this.disableMap();
            }
        }
    };
    HomePage.prototype.initMap = function () {
        this.mapInitialised = true;
        this.initializeGoogleMaps();
    };
    HomePage.prototype.disableMap = function () {
        console.log("disable map");
    };
    HomePage.prototype.enableMap = function () {
        console.log("enable map");
    };
    HomePage.prototype.addConnectivityListeners = function () {
        var _this = this;
        var onOnline = function () {
            setTimeout(function () {
                if (typeof google == "undefined" || typeof google.maps == "undefined") {
                    _this.loadGoogleMaps();
                }
                else {
                    if (!_this.mapInitialised) {
                        _this.initMap();
                    }
                    _this.enableMap();
                }
            }, 2000);
        };
        var onOffline = function () {
            _this.disableMap();
        };
        document.addEventListener('online', onOnline, false);
        document.addEventListener('offline', onOffline, false);
    };
    HomePage.prototype.initializeGoogleMaps = function () {
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer({
            polylineOptions: {
                strokeColor: "#543267",
                strokeWeight: 5
            }
        });
        // Define Itapeva como o centro do mapa
        var latLng = new google.maps.LatLng(-23.9793, -48.8769);
        var mapOptions = {
            center: latLng,
            mapTypeControl: false,
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.directionsDisplay.setMap(this.map);
        var self = this;
        this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(this.divDirections.nativeElement);
        var autocompleteOrigin = new google.maps.places.Autocomplete(this.inputOrigin.nativeElement);
        autocompleteOrigin.bindTo('bounds', this.map);
        autocompleteOrigin.setFields(['address_components', 'geometry', 'icon', 'name']);
        autocompleteOrigin.addListener('place_changed', function () {
            var place = autocompleteOrigin.getPlace();
            if (!place.geometry) {
                window.alert("No details available for input: '" + place.name + "'");
                return;
            }
            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                self.map.fitBounds(place.geometry.viewport);
            }
            else {
                self.map.setCenter(place.geometry.location);
                self.map.setZoom(17);
            }
            self.addDirections();
        });
        var autocompleteDestination = new google.maps.places.Autocomplete(this.inputDestino.nativeElement);
        autocompleteDestination.bindTo('bounds', this.map);
        autocompleteDestination.setFields(['address_components', 'geometry', 'icon', 'name']);
        autocompleteDestination.addListener('place_changed', function () {
            var place = autocompleteDestination.getPlace();
            if (!place.geometry) {
                window.alert("No details available for input: '" + place.name + "'");
                return;
            }
            // If the place has a geometry, then present it on a map.
            if (place.geometry.viewport) {
                self.map.fitBounds(place.geometry.viewport);
            }
            else {
                self.map.setCenter(place.geometry.location);
                self.map.setZoom(17);
            }
            self.addDirections();
        });
        // Adicionando marcador de localização
        this.markerOrigin = new google.maps.Marker({
            map: this.map,
            anchorPoint: new google.maps.Point(0, -29),
        });
        this.pegaPosicao();
    };
    HomePage.prototype.pegaPosicao = function () {
        var _this = this;
        var self = this;
        this.geolocation.getCurrentPosition({
            timeout: 15000,
            enableHighAccuracy: true,
            maximumAge: 75000
        })
            .then(function (response) {
            _this.startPosition = response.coords;
            // Pego a lng e lat do usuário
            _this.getOriginUser = new Array(_this.startPosition.longitude, _this.startPosition.latitude);
            // Deixando o centro do mapa na localização do usuário
            _this.map.setCenter(new google.maps.LatLng(_this.startPosition.latitude, _this.startPosition.longitude));
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({
                'location': {
                    lat: _this.startPosition.latitude,
                    lng: _this.startPosition.longitude
                }
            }, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        self.inputOrigin.nativeElement.value = results[0].formatted_address;
                    }
                }
            });
            _this.markerOrigin.setPosition(new google.maps.LatLng(_this.startPosition.latitude, _this.startPosition.longitude));
        })
            .catch(function (err) {
            console.log(err.message);
            console.log("Caiu aqui ooou");
        });
    };
    // É chamada para fazer o traçado entre a Origem e o Destino
    HomePage.prototype.addDirections = function () {
        var self = this;
        var request = {
            origin: this.inputOrigin.nativeElement.value,
            destination: this.inputDestino.nativeElement.value,
            travelMode: 'DRIVING'
        };
        this.directionsService.route(request, function (result, status) {
            if (status == 'OK') {
                self.directionsDisplay.setDirections(result);
                self.markerOrigin.setVisible(false);
                // No resultado da consulta da rota ao google maps, seta o lat e lng do destino
                self.getDestinationUser = result.routes[0].legs[0].end_location;
                self.getOriginUser = result.routes[0].legs[0].start_location;
                var distancia = result.routes[0].legs[0].distance.value / 1000;
                self.distanciaFixed = distancia.toFixed(0);
                console.log(self.distanciaFixed);
                var tempo = result.routes[0].legs[0].duration.value / 60;
                var tempoExato = tempo.toFixed(0);
                // ~~ é para transformar as strings em números inteiros
                // O preço base é R$5. A cada minuto é adicionado R$0.25, e a cada Km é adicionado R$1.00
                self.price = (~~tempoExato * 0.25) + (~~self.distanciaFixed * 1) + 5;
                self.exibeFazerPedido();
                self.divConfirmaCorrida(distancia, tempo, self.price);
            }
        });
    };
    HomePage.prototype.esperarPorAlteracoesNaCorrida = function () {
        var _this = this;
        var pegarMotorista = this.db.database.ref('/corridas-pendentes').child(this.uid);
        pegarMotorista.on('value', function (data) {
            var value = data.val();
            if (value !== null) {
                // se tiver algum valor neste registro no banco de dados
                // e se nesse caso estiver sem motorista:
                if (value.motorista == "") {
                    _this.escondeFazerPedido();
                    _this.escondeMotoristaAceitou();
                    _this.exibeAguardando();
                }
                else {
                    if (value.status == "finalizado") {
                        _this.escondeMotoristaAceitou();
                        _this.exibeCorridaFinalizada();
                    }
                    else {
                        _this.id_motorista = value.motorista;
                        var dadosMotorista = _this.db.database.ref('motoristas').child(value.motorista);
                        dadosMotorista.once('value', function (data) {
                            _this.motorista = data.val();
                            _this.divMotoristaAceitou(_this.motorista);
                            _this.escondeAguardando();
                            _this.exibeMotoristaAceitou();
                        });
                    }
                }
            }
        });
    };
    // Funções que escondem exibição de divs
    HomePage.prototype.escondeFazerPedido = function () {
        document.getElementById('fazerPedido').style.display = "none";
    };
    HomePage.prototype.escondeAguardando = function () {
        document.getElementById('aguardando').style.display = "none";
    };
    HomePage.prototype.escondeMotoristaAceitou = function () {
        document.getElementById('motoristaAceitou').style.display = "none";
    };
    HomePage.prototype.escondeCorridaFinalizada = function () {
        document.getElementById('corridaFinalizada').style.display = "none";
    };
    HomePage.prototype.escondeReclamacao = function () {
        document.getElementById('reclamacao').style.display = "none";
    };
    // Funções que exibem as divs
    HomePage.prototype.exibeFazerPedido = function () {
        document.getElementById('fazerPedido').style.display = "block";
    };
    HomePage.prototype.exibeAguardando = function () {
        document.getElementById('aguardando').style.display = "block";
    };
    HomePage.prototype.exibeMotoristaAceitou = function () {
        document.getElementById('motoristaAceitou').style.display = "block";
    };
    HomePage.prototype.exibeCorridaFinalizada = function () {
        document.getElementById('corridaFinalizada').style.display = "block";
    };
    HomePage.prototype.exibeReclamacao = function () {
        document.getElementById('reclamacao').style.display = "block";
    };
    // Alterando valor de elementos dentro de divs
    HomePage.prototype.divConfirmaCorrida = function (distancia, tempo, preco) {
        document.getElementById('distancia').innerText = "Dist\u00E2ncia: " + distancia.toFixed(2) + " Km";
        document.getElementById('tempo').innerText = "Tempo: " + tempo.toFixed(0) + " minutos";
        document.getElementById('preco').innerText = "Valor: R$" + preco.toFixed(2);
    };
    HomePage.prototype.divMotoristaAceitou = function (motorista) {
        document.getElementById('nomeMotorista').innerText = "Nome: " + motorista.nome;
        document.getElementById('corMoto').innerText = "Cor da Moto: " + motorista.cor;
        document.getElementById('placaMoto').innerText = "Placa da Moto: " + motorista.placa;
    };
    // Botões
    // envia() é um botão do confirmaCorrida. Chamada quando o usuário deseja realizar a corrida e manda os seus dados para o firebase
    HomePage.prototype.envia = function () {
        var self = this;
        this.db.database.ref('/corridas-pendentes').child(this.uid)
            .set({
            destinoLng: "" + this.getDestinationUser.lng(),
            destinoLat: "" + this.getDestinationUser.lat(),
            origemLng: "" + this.getOriginUser.lng(),
            origemLat: "" + this.getOriginUser.lat(),
            motorista: '',
            usuario: this.item.name,
            preco: self.price.toFixed(2),
            status: ''
        });
    };
    // cancela() é um botão do confirmaCorrida. Chamada quando o usuário não deseja realizar a corrida e quer apagar a rota do mapa para fazer outro pedido
    HomePage.prototype.cancela = function () {
        this.directionsDisplay.set('directions', null);
        this.inputDestino.nativeElement.value = '';
        this.escondeFazerPedido();
    };
    // cancelarAguardo() é um botão do aguardando. Chamada quando o usuário decide cancelar o pedido durante a espera por um motorista
    HomePage.prototype.cancelarAguardando = function () {
        this.escondeAguardando();
        var cancelar = this.alertCtrl.create({
            title: 'Corrida cancelada com sucesso',
        });
        cancelar.present();
        this.db.database.ref('/corridas-pendentes').child(this.uid).remove();
        this.directionsDisplay.set('directions', null);
        this.inputDestino.nativeElement.value = '';
    };
    // cancelarCorrida() é um botão do motoristaAceitou. Chamada quando o usuário decide cancelar a corrida quando o motorista já aceitou e está a caminho
    HomePage.prototype.cancelarCorrida = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Tem certeza que deseja cancelar a corrida?',
            buttons: [
                {
                    text: 'Sim',
                    role: 'cancel',
                    handler: function () {
                        _this.escondeMotoristaAceitou();
                        var cancelar = _this.alertCtrl.create({
                            title: 'Corrida cancelada com sucesso',
                        });
                        cancelar.present();
                        _this.db.database.ref('/corridas-pendentes').child(_this.uid).remove();
                        _this.directionsDisplay.set('directions', null);
                        _this.inputDestino.nativeElement.value = '';
                    }
                }, {
                    text: 'Não',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    // confirmar() é um botão do corridaFinalizada. Chamada quando a corrida acaba e o usuário dá uma nota para o motorista
    HomePage.prototype.confirmar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var corrida, motorista, avaliacao, dados, userDB, listDB, loading, data, dataAtual;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userDB = this.db.database.ref('corridas-pendentes').child(this.uid);
                        userDB.once('value', function (data) {
                            dados = data.val();
                            motorista = dados.motorista;
                        });
                        listDB = this.db.database.ref('motoristas').child(motorista);
                        listDB.once('value', function (data) {
                            var dados = data.val();
                            corrida = dados.corridas + 1;
                            avaliacao = dados.avaliacao + _this.valorAvaliacaoInput;
                            listDB.update({
                                corridas: corrida,
                                avaliacao: avaliacao
                            });
                        });
                        this.escondeCorridaFinalizada();
                        return [4 /*yield*/, this.loadingController.create({
                                cssClass: 'loading'
                            })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.directionsDisplay.set('directions', null);
                        this.inputDestino.nativeElement.value = '';
                        return [4 /*yield*/, this.db.database.ref('/corridas-pendentes').child(this.uid).remove()];
                    case 2:
                        _a.sent();
                        data = new Date();
                        dataAtual = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
                        this.db.database.ref('/corridas-finalizadas').push({
                            preco: dados.preco,
                            id_motorista: motorista,
                            motorista: this.motorista.nome,
                            id_usuario: this.uid,
                            usuario: dados.usuario,
                            data: dataAtual
                        });
                        return [4 /*yield*/, this.db.database.ref('/corridas-pendentes').child(this.uid).remove()];
                    case 3:
                        _a.sent();
                        loading.dismiss();
                        this.exibeReclamacao();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Função que redireciona para a página com mais informações sobre o motorista
    HomePage.prototype.verMais = function (event, exibeUser) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__motorista_motorista__["a" /* MotoristaPage */], {
            item: this.uid
        });
    };
    HomePage.prototype.reclamar = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Reclamação do usuario",
            buttons: [{
                    text: 'Enviar',
                    handler: function (data) {
                        var loader = _this.loadingController.create();
                        loader.present();
                        _this.db.database.ref('reclamacoes').push({
                            por: _this.uid,
                            para: _this.id_motorista,
                            reclamacao: data.input
                        }).then(function () {
                            loader.dismiss();
                            _this.toastCtrl.create({
                                message: 'Reclamação enviada',
                                duration: 2500
                            }).present();
                            _this.escondeReclamacao();
                        }).catch(function () {
                            loader.dismiss();
                            _this.toastCtrl.create({
                                message: 'Erro ao enviar',
                                duration: 2500
                            }).present();
                        });
                    }
                },
                {
                    text: 'Voltar',
                    handler: function () { }
                }
            ]
        });
        alert.addInput({
            type: 'textarea',
            name: 'input',
            placeholder: 'Descreva o que te desagradou'
        });
        alert.present();
    };
    HomePage.prototype.naoReclamar = function () {
        this.escondeReclamacao();
    };
    // Função para que o usuário saia da sua conta
    HomePage.prototype.logout = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            _this.db.database.ref('/corridas-pendentes').child(_this.uid).remove();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
        }).catch(function (error) { return console.log(error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('blockDirections'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "divDirections", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('inputOrigin'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "inputOrigin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('inputDestination'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "inputDestino", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/brunonetto/Documents/PROJETOS/MyMoto/Cliente/src/pages/home/home.html"*/'<ion-content>\n  <div #map id="map"></div>\n\n  <div #blockDirections class="directions">\n    <input class="ion-input" #inputOrigin placeholder="Onde você está?" />\n    <input class="ion-input" #inputDestination placeholder="Para onde deseja ir?" />\n\n    <ion-fab right>\n      <button class="buttonColor" ion-fab mini>\n        <ion-icon name="settings"></ion-icon>\n      </button>\n      <ion-fab-list side="bottom">\n        <button class="buttonColor" (click)="logout()" ion-fab>\n          <ion-icon name="md-log-out"></ion-icon>\n        </button>\n      </ion-fab-list>\n    </ion-fab>\n  </div>\n\n  <!-- É exibida quando o usuário informa o seu local e destino -->\n  <div id="fazerPedido" #fazerPedido>\n    <h2>Realizar Pedido?</h2>\n    <p id="distancia"></p>\n    <p id="tempo"></p>\n    <p id="preco"></p>\n\n    <button class="btn btnAceitar" id="aceitar" (click)="envia()">Aceitar</button>\n    <button class="btn btnCancelar" id="cancelar" (click)="cancela()">Cancelar</button>\n  </div>\n\n  <!-- É exibida quando o usário faz o pedido de corrida -->\n  <div id="aguardando" #aguardando>\n    <h3>Só um minuto, aguardando resposta do motorista</h3>\n    <button class="btn btnCancelar" id="cancelarAguardando" (click)="cancelarAguardando()">Cancelar</button>\n  </div>\n\n  <!-- É exibida quando um motorista aceita aquele corrida -->\n  <div id="motoristaAceitou" #motoristaAceitou>\n    <h2>Corrida Aceita, aguarde no local</h2>\n    <h3>Informações do Motorista</h3>\n    <p id="nomeMotorista"></p>\n    <p id="corMoto"></p>\n    <p id="placaMoto"></p>\n\n    <!-- Chama a página com mais informações sobre o motorista -->\n    <button class="btn btnAceitar" id="verMais" (click)="verMais($event, uid)">Ver Mais</button>\n    <button class="btn btnCancelar" id="cancelarCorrida" (click)="cancelarCorrida()">Cancelar</button>\n  </div>\n\n  <!-- É chamada quando o motorista define que a corrida foi finalizada -->\n  <div id="corridaFinalizada" #corridaFinalizada>\n    <h2>Corrida Finalizada</h2>\n    <p>Para que a gente possa oferecer sempre bons serviços, de 0 a 10, qual nota você daria para o motorista?</p>\n    <p>Observação: a sua resposta é altamente secreta, ninguém terá acesso a ela, pode ficar tranquilo!</p>\n    <ion-range id="dual-range" type="number" min="0" max="10" step="1" dual-knobs pin color="dark" [(ngModel)]="valorAvaliacaoInput"></ion-range>\n    <button class="btn btnAceitar" id="confirmar" (click)="confirmar()">Confirmar</button>\n  </div>\n\n  <!-- É chamada após o usuário dar nota ao motorista -->\n  <div id="reclamacao" #reclamacao>\n    <h2>Algo na corrida não foi bom?</h2>\n    <p>Se você teve algum tipo de problema pode fazer uma reclamação. Deseja ?</p>\n    <p>Observação: a sua resposta é altamente secreta, ninguém terá acesso a ela, pode ficar tranquilo!</p>\n    <div class="block-btn">\n      <button class="btn btnAceitar" (click)="reclamar()">Sim</button>\n      <button class="btn btnCancelar" (click)="naoReclamar()">Não</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/brunonetto/Documents/PROJETOS/MyMoto/Cliente/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_6__providers_connectivity_service__["a" /* ConnectivityService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[420]);
//# sourceMappingURL=main.js.map