import { Observable } from "rxjs";
export declare const protobufPackage = "s3";
export interface UploadImage {
    base64Image: string;
}
export interface UploadImageResponse {
    imagePath: string;
}
export declare const S3_PACKAGE_NAME = "s3";
export interface S3ServiceClient {
    uploadImage(request: UploadImage): Observable<UploadImageResponse>;
}
export interface S3ServiceController {
    uploadImage(request: UploadImage): Promise<UploadImageResponse> | Observable<UploadImageResponse> | UploadImageResponse;
}
export declare function S3ServiceControllerMethods(): (constructor: Function) => void;
export declare const S3_SERVICE_NAME = "S3Service";
