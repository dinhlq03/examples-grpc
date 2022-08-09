import * as grpcWeb from 'grpc-web';

import {
  HelloRequest,
  HelloResponse} from './hello_pb';

export class HelloServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  sayHello(
    request: HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: HelloResponse) => void
  ): grpcWeb.ClientReadableStream<HelloResponse>;

}

export class HelloServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  sayHello(
    request: HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<HelloResponse>;

}

