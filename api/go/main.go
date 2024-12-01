package handler

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
)

func DevToApi(w http.ResponseWriter, req *http.Request) {
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

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	io.WriteString(w, string(postsJson))
}

func GithubToApi(w http.ResponseWriter, req *http.Request) {
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

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
	io.WriteString(w, string(repositoriesJson))
}

func main() {

	http.HandleFunc("/devto", DevToApi)
	http.HandleFunc("/", GithubToApi)

	http.ListenAndServe(":3000", nil)
	fmt.Println("Listening: http://localhost:3000", nil)
}
