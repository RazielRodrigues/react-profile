const http = require('node:http')

const server = http.createServer({}, async (req, res) => {
    const token = process.env.CANVA_TOKEN;

    const responseDesign = await fetch("https://api.canva.com/rest/v1/designs", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token,
        },
    })

    // 1. GETTING DESIGNS
    let dataDesign = await responseDesign.json();
    dataDesign = dataDesign.items.filter((cv) => cv.title !== 'OLD')

    // 2. CREATING EXPORT LINK
    const resultExport = []
    for (const design of dataDesign) {
        const response = await fetch("https://api.canva.com/rest/v1/exports", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "design_id": design.id,
                "format": { "type": "pdf" }
            }),
        })
        resultExport.push(await response.json())
    }


    // 3. GETTING EXPORT LINK
    const resultLinks = []

    // 3.1 GIVING TIME FOR THE CANVA API WORKS (CACHE ID'S IN THE FUTURE?)
    await new Promise((resolve) => setTimeout(resolve, 5000));

    for (const exportLink of resultExport) {
        const response = await fetch("https://api.canva.com/rest/v1/exports/" + exportLink.job.id, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json",
            },
        })

        const link = await response.json()
        resultLinks.push(link)
    }

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
    res.end(JSON.stringify(resultLinks))
})

server.listen(3001, "localhost")
console.log("Listening: http://localhost:3081")