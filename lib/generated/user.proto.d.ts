import { Observable } from "rxjs";
export declare const protobufPackage = "user";
export declare enum Role {
    UNSPECIFIED = 0,
    ADMIN = 1,
    DISTRIBUTOR = 2,
    UNRECOGNIZED = -1
}
export interface UserResponse {
    uid: string;
    name: string;
    id: string;
    role: Role;
}
export interface GetUserById {
    id: string;
}
export interface GetUserByUid {
    uid: string;
}
export interface CreateUser {
    user: CreateUserRequest | undefined;
}
export interface CreateUserRequest {
    name: string;
    id: string;
    password: string;
    role: Role;
}
export interface CreateUserResponse {
    uid: string;
}
export declare const USER_PACKAGE_NAME = "user";
export interface UserServiceClient {
    getUserById(request: GetUserById): Observable<UserResponse>;
    getUserByUid(request: GetUserByUid): Observable<UserResponse>;
    createUser(request: CreateUser): Observable<CreateUserResponse>;
}
export interface UserServiceController {
    getUserById(request: GetUserById): Promise<UserResponse> | Observable<UserResponse> | UserResponse;
    getUserByUid(request: GetUserByUid): Promise<UserResponse> | Observable<UserResponse> | UserResponse;
    createUser(request: CreateUser): Promise<CreateUserResponse> | Observable<CreateUserResponse> | CreateUserResponse;
}
export declare function UserServiceControllerMethods(): (constructor: Function) => void;
export declare const USER_SERVICE_NAME = "UserService";
