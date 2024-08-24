import { Observable } from "rxjs";
import { SuccessResponse } from "./messages/messages.proto";
export declare const protobufPackage = "company";
export interface Company {
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
export declare const COMPANY_PACKAGE_NAME = "company";
export interface CompanyServiceClient {
    createCompany(request: Company): Observable<SuccessResponse>;
}
export interface CompanyServiceController {
    createCompany(request: Company): Promise<SuccessResponse> | Observable<SuccessResponse> | SuccessResponse;
}
export declare function CompanyServiceControllerMethods(): (constructor: Function) => void;
export declare const COMPANY_SERVICE_NAME = "CompanyService";
