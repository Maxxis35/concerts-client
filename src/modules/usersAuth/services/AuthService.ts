import $api from "../../../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "./response/AuthResponse";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', {email, password});
    }

    static async singUp(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/singup', {email, password});
    }

    static async logOut(): Promise<void> {
        return $api.post('/auth/logout');
    }
}