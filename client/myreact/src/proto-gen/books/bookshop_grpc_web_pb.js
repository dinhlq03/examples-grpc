/* eslint-disable */
//@ts-nocheck
/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./bookshop_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.InventoryClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.InventoryPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetBookListRequest,
 *   !proto.GetBookListResponse>}
 */
const methodDescriptor_Inventory_GetBookList = new grpc.web.MethodDescriptor(
  '/Inventory/GetBookList',
  grpc.web.MethodType.UNARY,
  proto.GetBookListRequest,
  proto.GetBookListResponse,
  /** @param {!proto.GetBookListRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetBookListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetBookListRequest,
 *   !proto.GetBookListResponse>}
 */
const methodInfo_Inventory_GetBookList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetBookListResponse,
  /** @param {!proto.GetBookListRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetBookListResponse.deserializeBinary
);


/**
 * @param {!proto.GetBookListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetBookListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetBookListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.InventoryClient.prototype.getBookList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Inventory/GetBookList',
      request,
      metadata || {},
      methodDescriptor_Inventory_GetBookList,
      callback);
};


/**
 * @param {!proto.GetBookListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetBookListResponse>}
 *     A native promise that resolves to the response
 */
proto.InventoryPromiseClient.prototype.getBookList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Inventory/GetBookList',
      request,
      metadata || {},
      methodDescriptor_Inventory_GetBookList);
};


module.exports = proto;

