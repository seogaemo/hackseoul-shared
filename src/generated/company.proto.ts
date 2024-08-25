// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               v5.27.3
// source: company.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { SuccessResponse, Uid } from "./messages/messages.proto";

export const protobufPackage = "company";

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
  userId: string;
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
  userId: string;
}

export const COMPANY_PACKAGE_NAME = "company";

export interface CompanyServiceClient {
  createCompany(request: CreateCompany): Observable<SuccessResponse>;

  getCompany(request: Uid): Observable<CompanyResponse>;
}

export interface CompanyServiceController {
  createCompany(request: CreateCompany): Promise<SuccessResponse> | Observable<SuccessResponse> | SuccessResponse;

  getCompany(request: Uid): Promise<CompanyResponse> | Observable<CompanyResponse> | CompanyResponse;
}

export function CompanyServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createCompany", "getCompany"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("CompanyService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("CompanyService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const COMPANY_SERVICE_NAME = "CompanyService";
