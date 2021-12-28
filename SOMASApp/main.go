package main

import (
	"embed"
	"fmt"
	"io/fs"
	"net/http"
)

//go:embed build

var embeddedFiles embed.FS

func main() {
	fmt.Println("Starting Server")
	http.Handle("/", http.FileServer(getFileSystem()))
	// http.Handle("/sim", http.FileServer(fmt.Printf("test")))
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		fmt.Printf("test")
	})
	http.ListenAndServe(":9000", nil)
}

func getFileSystem() http.FileSystem {

	// Get the build subdirectory as the
	// root directory so that it can be passed
	// to the http.FileServer
	fsys, err := fs.Sub(embeddedFiles, "build")
	if err != nil {
		panic(err)
	}

	return http.FS(fsys)
}
