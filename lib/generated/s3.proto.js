"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3_SERVICE_NAME = exports.S3_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.S3ServiceControllerMethods = S3ServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "s3";
exports.S3_PACKAGE_NAME = "s3";
function S3ServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["uploadImage"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("S3Service", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("S3Service", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.S3_SERVICE_NAME = "S3Service";
//# sourceMappingURL=s3.proto.js.map