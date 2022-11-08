const loadImg = () => {
  const options = {
    method: "GET",

    headers: {
      Authorization:
        "Bearer 563492ad6f9170000100000176129238c31549aaa546c2bb86dc69c4",
    },
  };

  fetch("https://api.pexels.com/v1/search?query=dog", options)
    .then((response) => response.json())
    .then((dogsList) => {
      let imagePlace = document.querySelector(".img-spot");
      //let removeSvg = document.querySelector();
      for (let i = 0; i < dogsList.photos.length; i++) {
        const dogs = dogsList.photos[i];
        const dogImg = document.createElement("img");
        dogImg.src = dogsList.photos[i].src.medium;
        dogImg.classList.add("card-img-top");

        imagePlace.appendChild(dogImg);
      }
    })

    .catch((err) => console.error(err));
};

const loadSecImg = () => {
  const options = {
    method: "GET",

    headers: {
      Authorization:
        "Bearer 563492ad6f9170000100000176129238c31549aaa546c2bb86dc69c4",
    },
  };

  fetch("https://api.pexels.com/v1/search?query=cat", options)
    .then((response) => response.json())
    .then((dogsList) => {
      let imagePlace = document.querySelector(".img-spot");
      //let removeSvg = document.querySelector();
      for (let i = 0; i < dogsList.photos.length; i++) {
        const dogs = dogsList.photos[i];
        const dogImg = document.createElement("img");
        dogImg.src = dogsList.photos[i].src.medium;
        dogImg.classList.add("card-img-top");

        imagePlace.appendChild(dogImg);
      }
    })

    .catch((err) => console.error(err));
};

const removeCard = () => {
  butt = document.querySelector("");
};
