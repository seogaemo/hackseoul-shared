import { Observable } from "rxjs";
export declare const protobufPackage = "user";
export interface User {
}
export interface GetUserById {
    id: string;
}
export declare const USER_PACKAGE_NAME = "user";
export interface UserServiceClient {
    getUserById(request: GetUserById): Observable<User>;
}
export interface UserServiceController {
    getUserById(request: GetUserById): Promise<User> | Observable<User> | User;
}
export declare function UserServiceControllerMethods(): (constructor: Function) => void;
export declare const USER_SERVICE_NAME = "UserService";
