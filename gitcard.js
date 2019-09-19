const getGitHubInfo = function (usuario_github) {
    var usuario_github = document.getElementById("usuario_github").value;
    var url = 'https://api.github.com/users/' + usuario_github;

    var followers = document.getElementById("fol").value;
    var url1 = 'https://api.github.com/users/' + usuario_github + 'followers' + followers;

    var gists = document.getElementById("gists").value;
    var url2 = 'https://api.github.com/users/' + usuario_github + 'gists_url' + gists;

    var repos = document.getElementById("repos").value;
    var url2 = 'https://api.github.com/users/' + usuario_github + 'public_repos' + repos;

    


    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText);
            const avatar = ajax.avatar_url;
            document.getElementById("github_avatar").src = avatar;

            const fol = ajax.followers_url;
            document.getElementById("mostrar_fol").src = fol;

            const gi = ajax.gists_url;
            document.getElementById("mostrar_gists").src = gi;

            const re = ajax.repos_url;
            document.getElementById("mostrar_repos").src = re;
        }
    };

    ajax.open('GET', url, true);
    ajax.send();

};
