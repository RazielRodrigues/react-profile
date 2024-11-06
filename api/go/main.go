package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
)

func main() {

	type Post struct {
		Id    int    `json:"id"`
		Title string `json:"title"`
		Url   string `json:"url"`
	}

	resp, err := http.Get("https://dev.to/api/articles/?username=razielrodrigues")
	if err != nil {
		log.Fatalln(err)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}

	var posts []Post
	apiResponse := string(body)
	json.Unmarshal([]byte(apiResponse), &posts)

	postsJson, err := json.Marshal(posts)
	if err != nil {
		log.Fatalln(err)
	}

	http.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		io.WriteString(w, string(postsJson))
	})

	http.ListenAndServe(":8081", nil)
	fmt.Println("Listening: https://localhost:8081", nil)
}
