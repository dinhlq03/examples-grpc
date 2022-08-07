protoc protos/*.proto \
    --go_out=. \
    --go_opt=paths=source_relative \
    --go-grpc_out=. \
    --go-grpc_opt=paths=source_relative \
    --proto_path=.

# protoc --proto_path=protos protos/*.proto --go_out=protos --go-grpc_out=protos