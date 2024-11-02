package main

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
)

type User struct {
	Id       int    `json:id`
	Username string `json:username`
	Data     string `json:data`
}

func main() {

	user := User{
		Id:       1,
		Username: "Raziel Rodrigues",
		Data:     "loading...",
	}

	userJson, _ := json.Marshal(user)

	apiHandler := func(w http.ResponseWriter, req *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		io.WriteString(w, string(userJson))
	}

	http.HandleFunc("/api", apiHandler)

	http.ListenAndServe(":8081", nil)
	log.Fatal("Listening: localhost:8081", nil)
}
