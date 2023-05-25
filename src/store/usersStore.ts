import {IUser} from "../modules/usersAuth/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../modules/usersAuth/services/AuthService";
import axios, {AxiosResponse} from "axios";

export default class UsersStore {

    user = {} as IUser;
    isAuth = false;

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user
    }

    async login(email: string, password: string) {
        try {
          const response = await AuthService.login(email, password);
          console.log(response)
          localStorage.setItem('token', response.data.access_token);
          this.setAuth(true);
          this.setUser(response.data.user);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async singUp(email: string, password: string) {
        try {
            const response = await AuthService.singUp(email, password);
            localStorage.setItem('token', response.data.access_token);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logOut();
            localStorage.removeItem('token')
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }

    // async checkAuth() {
    //     try {
    //         const response = await axios.get<AxiosResponse>()
    //
    //     } catch (e: any) {
    //         console.log(e.response.data.message);
    //     }
    // }
}