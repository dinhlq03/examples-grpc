import * as grpcWeb from 'grpc-web';

import {
  GetBookListRequest,
  GetBookListResponse} from './bookshop_pb';

export class InventoryClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  getBookList(
    request: GetBookListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetBookListResponse) => void
  ): grpcWeb.ClientReadableStream<GetBookListResponse>;

}

export class InventoryPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  getBookList(
    request: GetBookListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetBookListResponse>;

}

