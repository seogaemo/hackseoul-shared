"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLOCKCHAIN_SERVICE_NAME = exports.BLOCKCHAIN_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.BlockchainServiceControllerMethods = BlockchainServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
const protobufjs_1 = require("protobufjs");
exports.protobufPackage = "blockchain";
exports.BLOCKCHAIN_PACKAGE_NAME = "blockchain";
protobufjs_1.wrappers[".google.protobuf.Timestamp"] = {
    fromObject(value) {
        return { seconds: value.getTime() / 1000, nanos: (value.getTime() % 1000) * 1e6 };
    },
    toObject(message) {
        return new Date(message.seconds * 1000 + message.nanos / 1e6);
    },
};
function BlockchainServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["getProdItem", "getPipelines", "createProdItem", "createPipeline"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("BlockchainService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("BlockchainService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.BLOCKCHAIN_SERVICE_NAME = "BlockchainService";
//# sourceMappingURL=blockchain.proto.js.map