const options = {
  method: "GET",

  headers: {
    Authorization:
      "Bearer 563492ad6f9170000100000176129238c31549aaa546c2bb86dc69c4",
  },
};
const removeCard = (e) => {
  e.target.closest(".col-md-4").remove();
};
const renderData = (data) => {
  let parent = document.querySelector(`.album .row`);
  parent.innerHTML = "";
  data.forEach((img) => {
    let card = `<div class="col-md-4 m-5">
    <div class="img-spot" class="card mb-4 shadow-sm">
      <img src="${img.src.medium}" />
      <div class="card-body">
        <p class="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This content is a little bit
          longer.
        </p>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              View
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              onclick="removeCard(event)"
            >
              Hide
            </button>
          </div>
          <small class="text-muted">${img.id}</small>
        </div>
      </div>
    </div>
  </div>`;
    parent.innerHTML += card;
  });
};
const loadImg = (query) => {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, options)
    .then((response) => response.json())
    .then((data) => {
      renderData(data.photos);
    })
    .catch((err) => console.log(err));
};

window.onload = () => {
  let loadButton = document.getElementById("load");
  let loadSecButton = document.getElementById("load-sec");
  loadButton.addEventListener("click", () => {
    loadImg("dog");
  });
  loadSecButton.addEventListener("click", () => {
    loadImg("cat");
  });
};
/*const options = {
    method: "GET",

    headers: {
      Authorization:
        "Bearer 563492ad6f9170000100000176129238c31549aaa546c2bb86dc69c4",
    },
  };

  fetch("https://api.pexels.com/v1/search?query=dog", options)*/
