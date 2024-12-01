package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
)

func DevToApi() string {
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

	return string(postsJson)
}

func GithubToApi() string {
	type Repository struct {
		Id               int    `json:"id"`
		Name             string `json:"name"`
		Description      string `json:"description"`
		Html_url         string `json:"html_url"`
		Fork             bool   `json:"fork"`
		CreatedAt        string `json:"created_at"`
		UpdateddAt       string `json:"updated_at"`
		Homepage         string `json:"homepage"`
		Language         string `json:"language"`
		Stargazers_count int    `json:"stargazers_count"`
	}

	resp, err := http.Get("https://api.github.com/users/RazielRodrigues/repos")
	if err != nil {
		log.Fatalln(err)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}

	var repositories []Repository
	apiResponse := string(body)
	json.Unmarshal([]byte(apiResponse), &repositories)

	repositoriesJson, err := json.Marshal(repositories)
	if err != nil {
		log.Fatalln(err)
	}

	return string(repositoriesJson)
}

func Api(w http.ResponseWriter, req *http.Request) {

	type Response struct {
		DevTo  string `json:"devto"`
		Github string `json:"github"`
	}

	var response Response

	response.DevTo = DevToApi()
	response.Github = GithubToApi()

	responseJson, _ := json.Marshal(response)

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	io.WriteString(w, string(responseJson))
}

func main() {
	http.HandleFunc("/", Api)
	http.ListenAndServe(":3000", nil)
	fmt.Println("Listening: http://localhost:3000", nil)
}
