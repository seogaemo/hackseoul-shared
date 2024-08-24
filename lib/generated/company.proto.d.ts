import { Observable } from "rxjs";
import { SuccessResponse, Uid } from "./messages/messages.proto";
export declare const protobufPackage = "company";
export interface CreateCompany {
    name: string;
    owner: string;
    ownerPhoto?: string | undefined;
    phone: string;
    email: string;
    address: string;
    licenseNumber: string;
    businessNumber: string;
    type: number;
}
export interface CompanyResponse {
    uid: string;
    name: string;
    owner: string;
    ownerPhoto: string;
    phone: string;
    email: string;
    address: string;
    licenseNumber: string;
    businessNumber: string;
    type: number;
}
export declare const COMPANY_PACKAGE_NAME = "company";
export interface CompanyServiceClient {
    createCompany(request: CreateCompany): Observable<SuccessResponse>;
    getCompany(request: Uid): Observable<CompanyResponse>;
}
export interface CompanyServiceController {
    createCompany(request: CreateCompany): Promise<SuccessResponse> | Observable<SuccessResponse> | SuccessResponse;
    getCompany(request: Uid): Promise<CompanyResponse> | Observable<CompanyResponse> | CompanyResponse;
}
export declare function CompanyServiceControllerMethods(): (constructor: Function) => void;
export declare const COMPANY_SERVICE_NAME = "CompanyService";
