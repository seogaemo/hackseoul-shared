import { Observable } from "rxjs";
import { SuccessResponse, Uid } from "./messages/messages.proto";
export declare const protobufPackage = "product";
export interface CreateProduct {
    title: string;
    companyId: string;
    base64Image: string;
}
export interface ProductResponse {
    uid: string;
    title: string;
    companyId: string;
    imageUrl: string;
}
export declare const PRODUCT_PACKAGE_NAME = "product";
export interface ProductServiceClient {
    createProduct(request: CreateProduct): Observable<SuccessResponse>;
    getProduct(request: Uid): Observable<ProductResponse>;
}
export interface ProductServiceController {
    createProduct(request: CreateProduct): Promise<SuccessResponse> | Observable<SuccessResponse> | SuccessResponse;
    getProduct(request: Uid): Promise<ProductResponse> | Observable<ProductResponse> | ProductResponse;
}
export declare function ProductServiceControllerMethods(): (constructor: Function) => void;
export declare const PRODUCT_SERVICE_NAME = "ProductService";
