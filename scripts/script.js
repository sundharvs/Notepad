function load(){
  console.log("Loaded");
  document.getElementById('editor').innerHTML = wkjesvjr
}

function save(){
  var content = document.getElementById('editor').textContent;
  // Store
    localStorage.clear();
    localStorage.setItem("saved", content);
    // Retrieve
    console.log(localStorage.getItem("saved"));
}
