import { addReflectionToGrpcConfig } from "nestjs-grpc-reflection";
import { join } from "path";

import { GrpcOptions, Transport } from "@nestjs/microservices";

import { getServiceHost } from "../constants/env";

export const servicePort = 30004;

export const grpcClientOptions: GrpcOptions = addReflectionToGrpcConfig({
  transport: Transport.GRPC,
  options: {
    url: `${getServiceHost("s3")}:${servicePort}`,
    package: "s3",
    protoPath: join(__dirname, "..", "protocols", "s3.proto"),
  },
});
