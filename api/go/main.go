package main

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
)

func main() {

	type User struct {
		Id       int    `json:id`
		Username string `json:username`
		Data     string `json:data`
	}

	user := User{
		Id:       1,
		Username: "Raziel Rodrigues",
		Data:     "loading...",
	}

	userJson, _ := json.Marshal(user)

	http.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		io.WriteString(w, string(userJson))
	})

	http.ListenAndServe(":8081", nil)
	log.Fatal("Listening: localhost:8081", nil)
}
