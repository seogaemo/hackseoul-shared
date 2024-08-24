import { addReflectionToGrpcConfig } from "nestjs-grpc-reflection";
import { join } from "path";

import { GrpcOptions, Transport } from "@nestjs/microservices";

import { getServiceHost } from "../constants/env";

export const servicePort = 30003;

export const grpcClientOptions: GrpcOptions = addReflectionToGrpcConfig({
  transport: Transport.GRPC,
  options: {
    url: `${getServiceHost("company")}:${servicePort}`,
    package: "company",
    protoPath: join(__dirname, "..", "protocols", "company.proto"),
  },
});
