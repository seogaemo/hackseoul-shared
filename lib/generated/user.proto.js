"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_SERVICE_NAME = exports.USER_PACKAGE_NAME = exports.Role = exports.protobufPackage = void 0;
exports.UserServiceControllerMethods = UserServiceControllerMethods;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "user";
var Role;
(function (Role) {
    Role[Role["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["DISTRIBUTOR"] = 2] = "DISTRIBUTOR";
    Role[Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Role || (exports.Role = Role = {}));
exports.USER_PACKAGE_NAME = "user";
function UserServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["getUserById", "createUser"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("UserService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("UserService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.USER_SERVICE_NAME = "UserService";
//# sourceMappingURL=user.proto.js.map