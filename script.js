function makeOscarPlayer(parent){
  var div = document.createElement("div");
  div.innerHTML = 'Hello from Ele';

  parent.appendChild(div);
}

makeOscarPlayer(document.querySelector(".my-player"))