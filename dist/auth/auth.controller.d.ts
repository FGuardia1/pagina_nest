import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any, response: any): Promise<{
        access_token: string;
    }>;
    a(request: any): string;
}
