import { Observable } from "rxjs";
export declare const protobufPackage = "hello";
export interface SayHello {
    name?: string | undefined;
}
export interface SayHelloResponse {
    message: string;
}
export declare const HELLO_PACKAGE_NAME = "hello";
export interface HelloServiceClient {
    sayHello(request: SayHello): Observable<SayHelloResponse>;
}
export interface HelloServiceController {
    sayHello(request: SayHello): Promise<SayHelloResponse> | Observable<SayHelloResponse> | SayHelloResponse;
}
export declare function HelloServiceControllerMethods(): (constructor: Function) => void;
export declare const HELLO_SERVICE_NAME = "HelloService";
