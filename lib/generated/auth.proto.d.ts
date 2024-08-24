import { Observable } from "rxjs";
import { SuccessResponse } from "./messages/messages.proto";
import { CreateUserRequest } from "./user.proto";
export declare const protobufPackage = "auth";
export interface SignIn {
    id: string;
    password: string;
}
export interface SignInResponse {
    token: string;
}
export declare const AUTH_PACKAGE_NAME = "auth";
export interface AuthServiceClient {
    signIn(request: SignIn): Observable<SignInResponse>;
    signUp(request: CreateUserRequest): Observable<SuccessResponse>;
}
export interface AuthServiceController {
    signIn(request: SignIn): Promise<SignInResponse> | Observable<SignInResponse> | SignInResponse;
    signUp(request: CreateUserRequest): Promise<SuccessResponse> | Observable<SuccessResponse> | SuccessResponse;
}
export declare function AuthServiceControllerMethods(): (constructor: Function) => void;
export declare const AUTH_SERVICE_NAME = "AuthService";
