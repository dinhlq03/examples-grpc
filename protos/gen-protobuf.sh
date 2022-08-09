# protoc -I ./proto \
#    --go_out ./proto --go_opt paths=source_relative \
#    --go-grpc_out ./proto --go-grpc_opt paths=source_relative hello.proto

# protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative ./proto/*.proto

# folder proto out
LIST_APPS=(
    ../server/protos
)
for projectname in "${LIST_APPS[@]}"
do
    rm -rf "$projectname"
    mkdir $projectname
    OUT_PATH="$projectname/"

    # protos folder what contains proto file
    LIST_FILES=(
        hello/hello.proto
        books/bookshop.proto
    )

    for filepath in "${LIST_FILES[@]}"
    do
        # protoc -I/usr/local/include -I. $INCLUDE_PATH $JS_OUT_CMD $GRPC_WEB_OUT_CMD $filepath
        protoc --go_out=$OUT_PATH --go_opt=paths=source_relative --go-grpc_out=$OUT_PATH --go-grpc_opt=paths=source_relative $filepath
    done

done

# projectname = ../server/protos
# rm -rf $projectname
# mkdir $projectname
# OUT_PATH=$projectname/

# protoc --go_out=$OUT_PATH \
#        --go_opt=paths=source_relative \
#        --go-grpc_out=$OUT_PATH \
#        --go-grpc_opt=paths=source_relative hello/*.proto