const http = require('node:http')

const server = http.createServer({}, async (req, res) => {
    const token = process.env.CANVA_TOKEN;


    const tokenResponse = await fetch("https://api.canva.com/rest/v1/oauth/token", {
        method: "POST",
        headers: {
            "Authorization": "Basic {credentials}",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams("grant_type=authorization_code&refresh_token=xxx&client_id=OC-AZLzpxR9SXd1&client_secret=cnvcaIbMrsN8SiRu1DHIXoJnLAq-SETqjDbbhZvgGIG9LJd87a6a3c37"),
    });
    let tokenJson = await tokenResponse.json();
    console.log(tokenJson)

    const responseDesign = await fetch("https://api.canva.com/rest/v1/designs", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token,
        },
    })

    // 1. GETTING DESIGNS
    let dataDesign = await responseDesign.json();

    if (dataDesign.message !== null) {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
        res.end(JSON.stringify(dataDesign))
    }
    
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
console.log("Listening: http://localhost:3001")