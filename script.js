
let container = document.createElement("div");
container.setAttribute('class', 'container');
container.setAttribute('id', 'container');
document.body.appendChild(container);

let apiName = document.createElement('h1');
apiName.appendChild(document.createTextNode('Characters of The Game Of Thrones'));
container.appendChild(apiName);

window.onload = function myFunc() { 

  const promise = fetch("https://thronesapi.com/api/v2/Characters");

  promise
    .then((data) => data.json())
    .then((res) => {
      res.forEach((obj) => {
  
  let result = document.createElement("div");
  result.setAttribute("class", "result");
  result.setAttribute("id", "result");
  container.appendChild(result);

  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("id", "card");
  card.style.width = "18rem";
  result.appendChild(card);

  let imageUrl = document.createElement("img");
  imageUrl.setAttribute("class", "card-img-top");
  imageUrl.setAttribute("id", "imageUrl");
  imageUrl.src = obj.imageUrl;
  card.appendChild(imageUrl);

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  cardBody.setAttribute("id", "cardBody");
  card.appendChild(cardBody);

  let fullName = document.createElement("h5");
  fullName.setAttribute("class", "fullName");
  fullName.setAttribute("id", "fullName");
  fullName.style.fontWeight = "bold";
  fullName.appendChild(
    document.createTextNode(`${obj.fullName}`)
  );
  cardBody.appendChild(fullName);

  let title = document.createElement("p");
  title.setAttribute("id", "title");
  title.appendChild(
    document.createTextNode(`Title : ${obj.title}`)
  );
  cardBody.appendChild(title);

  let family = document.createElement("p");
  family.setAttribute("id", "family");
  family.appendChild(
    document.createTextNode(`Family : ${obj.family}`)
  );
  cardBody.appendChild(family);
            
        console.log(obj);
      }
      );
    });
    document.getElementById('character').value = "";
}
