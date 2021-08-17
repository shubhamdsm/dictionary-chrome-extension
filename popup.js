document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('search').addEventListener('click', function (e) {
        e.preventDefault();
        const word = document.getElementById('word').value;
        if (word === "") {
            document.getElementById('error').innerText = `Please enter something`;
        } else {
            document.getElementById('error').innerText = '';
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
            fetch(url)
                .then(res => res.json())
                .then(data => renderResults(data))
                .catch(error => handleError(error))
        }
    })
})

function renderResults(data) {
    data.forEach(element => {
        document.getElementById('content').innerText = `Your word : ${element['word']}`
        const arr = Object.values(element['meanings'])
        const arrofdefinitons = arr[0]['definitions']
        const singleDefin = arrofdefinitons[0].definition;
        document.getElementById('definition').innerText = `Definition: ${singleDefin}`;


    });
}

function handleError() {
    document.getElementById('error').innerText = `No definition found `
}