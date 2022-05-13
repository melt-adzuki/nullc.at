window.onload = () => {
    getRepos();
};

function getRepos() {
    fetch('https://api.github.com/users/nullnyat/repos',{cache:'no-cache'})
        .then((res) => res.json())
        .then((json) => {
            const list = document.getElementById('github-repos');
            json.forEach((repo) => {
                const a = document.createElement('a');
                const img = document.createElement('img');
                img.src = `https://gh-card.dev/repos/${repo.full_name}.svg`;
                a.href = repo.html_url;
                a.append(img);
                list.appendChild(a);
            });
        });
}