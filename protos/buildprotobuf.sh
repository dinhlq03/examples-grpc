protoc -I ./ \
   --go_out ./ --go_opt paths=source_relative \
   --go-grpc_out ./ --go-grpc_opt paths=source_relative *.proto

# protoc --go-grpc_out=./gen --go-grpc_opt=paths=source_relative ./protos/user.proto
# protoc --go_out=plugins=grpc:./gen --go_opt=paths=source_relative /user.proto