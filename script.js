
let navbar = document.createElement('nav');
navbar.setAttribute('class', "navbar navbar-expand-lg bg-body-tertiary");
document.body.appendChild(navbar);

let headerDiv = document.createElement('div');
headerDiv.style.display = 'block';
headerDiv.style.margin = 'auto';
headerDiv.style.padding = '5px';
navbar.appendChild(headerDiv);

let heading = document.createElement('h1');
let headingText = document.createTextNode('Got Characters');
heading.appendChild(headingText);
headerDiv.appendChild(heading);

let container = document.createElement('div');
container.setAttribute('id', 'container');
container.setAttribute('class', 'container-fluid');
navbar.appendChild(container);

window.onload = async function myFunc() { 
try{
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
  card.style.height = "30rem";
  result.appendChild(card);

  let imageUrl = document.createElement("img");
  imageUrl.setAttribute("class", "card-img-top");
  imageUrl.setAttribute("id", "imageUrl");
  imageUrl.style.width = '17rem';
  imageUrl.style.height = '20rem';
  imageUrl.style.margin = 'auto';
  imageUrl.style.marginTop = '5px';
  imageUrl.style.display = 'block';
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
  
      }
      );
    });
  }catch(err){
    alert("Error!")
  }
}
