import { VistasService } from './vistas.service';
export declare class VistasController {
    private readonly appService;
    constructor(appService: VistasService);
    root(): Promise<void>;
    rootRegister(): Promise<void>;
    rootHome(): Promise<{
        productos: any;
        msjs: any;
    }>;
}
