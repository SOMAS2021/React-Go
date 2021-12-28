FROM golang:1.17-alpine
RUN apk add git gcc libc-dev g++
RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN go mod download
RUN go build -o main main.go
EXPOSE 9000
CMD ["/app/main"]