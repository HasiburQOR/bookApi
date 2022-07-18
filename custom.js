let searchBook = () => {
    let searchOp = document.getElementById('bkSearch');
    let searchValue = searchOp.value;
    // console.log(searchValue);
    searchOp.value = '';
    let url =`http://openlibrary.org/search.json?q=${searchValue}`;
    // console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => bookInfo (data.docs))
}

let bookInfo = (docs) => {
    // console.log(docs);
    // for ( let i = 0; i < isbn.length; i++ );
    let searchResult = document.getElementById( 'searchResult');
    docs.forEach(docs =>{
        console.log(docs);


    let div = document.createElement('div');
    div.classList.add('bk');
    div.innerHTML = `
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://covers.openlibrary.org/b/isbn/${docs.isbn[0]}-L.jpg" class="img-fluid rounded-start" alt="book cover">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${docs.title}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
    
  `
    searchResult.appendChild(div);
    })
    

}