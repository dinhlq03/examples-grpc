import * as jspb from "google-protobuf"

export class Book extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getAuthor(): string;
  setAuthor(value: string): void;

  getPageCount(): number;
  setPageCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    title: string,
    author: string,
    pageCount: number,
  }
}

export class GetBookListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookListRequest): GetBookListRequest.AsObject;
  static serializeBinaryToWriter(message: GetBookListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookListRequest;
  static deserializeBinaryFromReader(message: GetBookListRequest, reader: jspb.BinaryReader): GetBookListRequest;
}

export namespace GetBookListRequest {
  export type AsObject = {
  }
}

export class GetBookListResponse extends jspb.Message {
  getBooksList(): Array<Book>;
  setBooksList(value: Array<Book>): void;
  clearBooksList(): void;
  addBooks(value?: Book, index?: number): Book;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBookListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBookListResponse): GetBookListResponse.AsObject;
  static serializeBinaryToWriter(message: GetBookListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBookListResponse;
  static deserializeBinaryFromReader(message: GetBookListResponse, reader: jspb.BinaryReader): GetBookListResponse;
}

export namespace GetBookListResponse {
  export type AsObject = {
    booksList: Array<Book.AsObject>,
  }
}

