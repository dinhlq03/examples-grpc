package main

import (
	"log"
	"net"

	pb "github.com/dinhlq03/examples-grpc/protos"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
)

type server struct {
	request []*pb.UserServer
}

func (s *server) CreateUser(ctx context.Context, req *pb.CreateRequest) (*pb.CreateResponse, error) {
	return &pb.CreateResponse{}, nil
}

func main() {
	conn, err := grpc.Dial("user:8080", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()

	client := pb.NewUserClient(conn)
    request := &pb.CreateRequest{
		User: {}
	}
	_, err := client.CreateUser(context.Background(), request)
    // To do something with resp from instance server response
}
