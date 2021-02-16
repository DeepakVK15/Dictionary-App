
 reloadPage = () =>{
    location.reload();
}

search = () => {
    document.getElementById('searchResult').style.visibility = 'visible';

    let word = document.getElementById('word');
    let definition = document.getElementById('definition');
    let synonyms = document.getElementById('synonyms');

    let wordToSearch = document.getElementById('searchBox').value;

    let request = new XMLHttpRequest();
    request.open("GET", "https://wordsapiv1.p.rapidapi.com/words/"+wordToSearch);
    request.setRequestHeader("x-rapidapi-key", "b10a6d535cmsh0853737a1e4d7c7p111cb4jsn4772539b7891");
    request.setRequestHeader("x-rapidapi-host", "wordsapiv1.p.rapidapi.com");
    request.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data['results'][0]['synonyms'][0]);
        if (request.status >= 200 && request.status < 400) {
            word.innerHTML = data.word;  
            definition.innerHTML = data['results'][0].definition;
            synonyms.innerHTML = data['results'][0].synonyms;
        } else {
            word.innerHTML = "Error";
            definition.innerHTML = "Error";
        }
    }
    request.send();
}



