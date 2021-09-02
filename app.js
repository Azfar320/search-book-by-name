const searchBook = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    searchField.value = " ";

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}

const displaySearchResult = (docs) => {
    const searchResult = document.getElementById("search-result");
    docs.forEach(doc => {
        console.log(doc);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <p>Book Title</p>
                    <h2>${doc.title}</h2>
                    <p>Book Author Name</p>
                    <h2>${doc.author_name}</h2>
                    <p>Published Date</p>
                    <h2>${doc.publish_date}</h2>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}
