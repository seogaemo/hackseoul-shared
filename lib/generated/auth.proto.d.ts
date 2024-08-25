import { Observable } from "rxjs";
import { SuccessResponse, Uid } from "./messages/messages.proto";
import { CreateUserRequest } from "./user.proto";
export declare const protobufPackage = "auth";
export interface SignIn {
    id: string;
    password: string;
}
export interface Token {
    token: string;
}
export declare const AUTH_PACKAGE_NAME = "auth";
export interface AuthServiceClient {
    signIn(request: SignIn): Observable<Token>;
    signUp(request: CreateUserRequest): Observable<SuccessResponse>;
    validateToken(request: Token): Observable<Uid>;
}
export interface AuthServiceController {
    signIn(request: SignIn): Promise<Token> | Observable<Token> | Token;
    signUp(request: CreateUserRequest): Promise<SuccessResponse> | Observable<SuccessResponse> | SuccessResponse;
    validateToken(request: Token): Promise<Uid> | Observable<Uid> | Uid;
}
export declare function AuthServiceControllerMethods(): (constructor: Function) => void;
export declare const AUTH_SERVICE_NAME = "AuthService";
