function load(){
  // Retrieve
  document.getElementById('editor').textContent = localStorage.getItem("saved");
}

function save(){
  var content = document.getElementById('editor').textContent;
  // Store
    localStorage.clear();
    localStorage.setItem("saved", content);
    console.log(localStorage.getItem("saved"));
}

function down(){
  download(document.getElementById('editor').textContent, "save.txt", "text/plain");
}
