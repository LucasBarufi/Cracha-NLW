const links = {
    github: "lucasbarufi",
    twitter: "lucasbarufi",
    youTube: "lucasbarufi",
    facebook: "lucasbarufi",
    instagram: "lucasbarufi"
}

function changeLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${links[social]}`

    }
}
changeLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${links.github}`
    fetch(url)
    .then(response => response.json() ) 
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userGitHub.href = data.html_url
        fotoPessoal.src = data.avatar_url
        userLogin.textContent = data.login

    })
}
getGitHubProfileInfos()
// Arrow Function 