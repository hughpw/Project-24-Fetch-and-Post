fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
  .then ((res) => res.json())
  .then ((jsoN) => {
    for (let i of jsoN) {
      let imgSrc = `${i.url}`;
      let image = document.createElement("img");
      image.src = imgSrc;
      document.querySelector("body").appendChild(image);
    }
    const imgSize = document.querySelectorAll("img");
    imgSize.forEach(imgS =>(imgS.style.height = "200px"));
    console.log(jsoN);
  });

const urls = ["https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy",
  "https://s1.cdn.autoevolution.com/images/news/ferrari-f8-tributo-replaces-488-gtb-is-a-pista-in-disguise-132697_1.jpg",
  "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/nsx99.png?itok=tOqWiZuj",
  "https://hypebeast.com/image/2022/05/brabus-porsche-taycan-turbo-s-electric-car-modified-tuned-custom-carbon-fiber-ev-1.jpg"
];

fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    id: 1,
    url: `${urls[0]}`,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then ((response) => response.json())
  .then ((json) => {
    let imgSource = `${json.url}`;
    let image1 = document.createElement("img");
    image1.src = imgSource;
    document.querySelector("body").appendChild(image1);
    const imgSize1 = document.querySelectorAll("img");
    imgSize1.forEach(imgSiZ => (imgSiZ.style.height = "200px"));
    console.log(json);
  });

  fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foos',
    body: 'bars',
    id: 2,
    url: `${urls[1]}`,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then ((resp) => resp.json())
  .then ((data) => {
    let imgSrce = `${data.url}`;
    let image2 = document.createElement("img");
    image2.src = imgSrce;
    document.querySelector("body").appendChild(image2);
    const imgSize2 = document.querySelectorAll("img");
    imgSize2.forEach(imgSZ => (imgSZ.style.height = "200px"));
});

fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
  method: "POST",
  body: JSON.stringify({
    title: "fooos",
    body: "ball",
    id: 3,
    url: `${urls[2]}`,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then ((imgBack) => imgBack.json())
  .then ((postedImg) => {
  let imageSrc3 = `${postedImg.url}`;
  let image3 = document.createElement("img");
  image3.src = imageSrc3;
  document.querySelector("body").appendChild(image3);
  const imgSize3 = document.querySelectorAll("img");
  imgSize3.forEach(imgSIZE => (imgSIZE.style.height = "200px"));
});

fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
  method: "POST",
  body: JSON.stringify({
    title: "foooos",
    body: "balll",
    id: 4,
    url: `${urls[3]}`,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then ((imgreturn) => imgreturn.json())
  .then ((postImg) => {
  let imageSrc4 = `${postImg.url}`;
  let image4 = document.createElement("img");
  image4.src = imageSrc4;
  document.querySelector("body").appendChild(image4);
  const imgSize4 = document.querySelectorAll("img");
  imgSize4.forEach(imgSIZEs => (imgSIZEs.style.height = "200px"));
});
