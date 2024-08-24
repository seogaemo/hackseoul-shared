"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPANY_SERVICE_NAME = exports.COMPANY_PACKAGE_NAME = exports.protobufPackage = void 0;
exports.CompanyServiceControllerMethods = CompanyServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "company";
exports.COMPANY_PACKAGE_NAME = "company";
function CompanyServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["createCompany"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("CompanyService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("CompanyService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.COMPANY_SERVICE_NAME = "CompanyService";
//# sourceMappingURL=company.proto.js.map