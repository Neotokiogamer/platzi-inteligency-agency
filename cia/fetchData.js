let = $accordion = document.getElementbyId("accordion");

let ciaData = null;

fetch("./cia.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    ciaData = data;
    cards = ciaData.map(
      (x, idx) => `
            <div class="card">
            <div class="card-header bg-dark" id="heading${idx}">
                <h2 class="mb-0">
                    <button
                    class="btn btn-outline-light"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse${idx}"
                    aria-expanded="ture"
                    aria-controls="collapse${idx}"
                    >
                        ${x.title}
                    </button>
                </h2>
            </div
                id="collapse${idx}"
                class="collapse"
                aria-labelledby="heading${idx}"
                data-parent="#accordion"
            >
                <div class="card-body">
                  ${x.body}
                    <br>
                    <br>
                    <a href=${x.url} target="_blank">Ver mas</a>
                </div>
            <div>
            </div>
        </div>
        `
    );
    for (i = 0; i < cards.length; i++){
        $accordion.innerHTML += cards[i];
    }
})

.catch((err) => {
    
})
