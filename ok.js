var listElement = document.getElementById('out');
var inputElement = document.getElementById('inp');
var btnElement = document.getElementById('btn');

function renderRepositories(repositories){
    for (repo of repositories){
        const textElement = document.createTextNode(repo.name);
        const liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement); 
    }
}
function renderLoading(loading){
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Loading...');
    var loadingElement = document.createElement('li');

    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
}

function listRepositories(){
    var user = inputElement.value;

    if(!user) return;

    renderLoading();

    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function(response){
            listElement.innerHTML = "";
            renderRepositories(response.data);
        })
}
btnElement.onclick = listRepositories;