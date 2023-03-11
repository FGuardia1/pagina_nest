import { VistasService } from './vistas.service';
export declare class VistasController {
    private readonly appService;
    constructor(appService: VistasService);
    root(): Promise<void>;
    rootRegister(): Promise<void>;
    rootHome(req: any): Promise<{
        nombre: any;
        productos: any;
        msjs: any;
    }>;
    logout(response: any): Promise<any>;
}
