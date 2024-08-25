import { Observable } from "rxjs";
import { Uid } from "./messages/messages.proto";
export declare const protobufPackage = "blockchain";
export interface GetProdItemResponse {
    uid: string;
    title: string;
    productId: string;
    modelNumber: string;
    createdAt: Date | undefined;
}
export interface CreateProdItemRequest {
    title: string;
    productId: string;
    modelNumber: string;
}
export interface CreatePipelineRequest {
    title: string;
    description: string;
    companyId: string;
    productItemId: string;
}
export declare const BLOCKCHAIN_PACKAGE_NAME = "blockchain";
export interface BlockchainServiceClient {
    getProdItem(request: Uid): Observable<GetProdItemResponse>;
    createProdItem(request: CreateProdItemRequest): Observable<Uid>;
    createPipeline(request: CreatePipelineRequest): Observable<Uid>;
}
export interface BlockchainServiceController {
    getProdItem(request: Uid): Promise<GetProdItemResponse> | Observable<GetProdItemResponse> | GetProdItemResponse;
    createProdItem(request: CreateProdItemRequest): Promise<Uid> | Observable<Uid> | Uid;
    createPipeline(request: CreatePipelineRequest): Promise<Uid> | Observable<Uid> | Uid;
}
export declare function BlockchainServiceControllerMethods(): (constructor: Function) => void;
export declare const BLOCKCHAIN_SERVICE_NAME = "BlockchainService";
