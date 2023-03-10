"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VistasService = void 0;
const common_1 = require("@nestjs/common");
const ProductsRepo_1 = require("../persistencia/repos/ProductsRepo");
const prodsRepo = ProductsRepo_1.default.getInstancia();
const MsjsRepo_1 = require("../persistencia/repos/MsjsRepo");
const msjsRepo = MsjsRepo_1.default.getInstancia();
let VistasService = class VistasService {
    async getHomeInfo() {
        let prods = await prodsRepo.getAll();
        let msjs = await msjsRepo.getAll();
        msjs = msjs.map((e) => {
            e.date = new Date(e.date).toLocaleString();
            return e;
        });
        return { productos: prods, msjs };
    }
};
VistasService = __decorate([
    (0, common_1.Injectable)()
], VistasService);
exports.VistasService = VistasService;
//# sourceMappingURL=vistas.service.js.map