"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grpcClientOptions = exports.servicePort = void 0;
const nestjs_grpc_reflection_1 = require("nestjs-grpc-reflection");
const path_1 = require("path");
const microservices_1 = require("@nestjs/microservices");
const env_1 = require("../constants/env");
exports.servicePort = 30002;
exports.grpcClientOptions = (0, nestjs_grpc_reflection_1.addReflectionToGrpcConfig)({
    transport: microservices_1.Transport.GRPC,
    options: {
        url: `${(0, env_1.getServiceHost)("product")}:${exports.servicePort}`,
        package: "product",
        protoPath: (0, path_1.join)(__dirname, "..", "protocols", "product.proto"),
    },
});
//# sourceMappingURL=product.option.js.map