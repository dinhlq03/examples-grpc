INCLUDE_PATH="-I$GOPATH/src/"

LIST_APPS=(
    ../client/myreact/src/proto-gen
)
for projectname in "${LIST_APPS[@]}"
do
    rm -rf "$projectname"
    mkdir $projectname
    OUT_PATH="$projectname/"
    JS_OUT_CMD="--js_out=import_style=commonjs:$OUT_PATH"
    GRPC_WEB_OUT_CMD="--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$OUT_PATH"

    LIST_FILES=(
        proto/hello.proto
  )

    for filepath in "${LIST_FILES[@]}"
    do
        protoc -I/usr/local/include -I. $INCLUDE_PATH $JS_OUT_CMD $GRPC_WEB_OUT_CMD $filepath
    done

    # Update for OSC grpc-web
    for f in $(find $projectname -name \*.js); do
        printf '/* eslint-disable */\n//@ts-nocheck\n' | cat - "${f}" > temp && mv temp "${f}"
    done

done