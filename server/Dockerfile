# FROM golang:1.6
FROM golang:1.14.4 AS build


# Move to working directory /app
WORKDIR /app


# Copy the code into the container
COPY . .


# Build the application's binary
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -ldflags '-extldflags "-static"' -o main .


# Command to run the application when starting the container
CMD ["/app/main"]