document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    var modalContainer = document.getElementById("modal-container");
    modalContainer.classList.toggle("dark-mode");
  });
});

// Fazer a requisição para a API do GitHub
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users/alefd2/repos", true);
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 400) {
    var projects = JSON.parse(xhr.responseText);

    // Iterar sobre os projetos e exibir no formato HTML
    var projectsContainer = document.querySelector(".projects");
    projects.forEach(function (project) {
      var projectBox = document.createElement("div");
      projectBox.classList.add("project-box");

      var projectName = document.createElement("h2");
      projectName.textContent = project.name;

      var projectDescription = document.createElement("p");
      projectDescription.textContent = project.description;

      var projectLink = document.createElement("a");
      projectLink.href = project.html_url;
      projectLink.textContent = "Link";

      projectBox.appendChild(projectName);
      projectBox.appendChild(projectDescription);
      projectBox.appendChild(projectLink);

      projectsContainer.appendChild(projectBox);
    });
  }
};
xhr.send();

document.addEventListener("DOMContentLoaded", function () {
  var loadingElement = document.getElementById("loading");
  var projectsContainer = document.querySelector(".projects");

  // Função para obter os dados dos projetos
  function getProjects() {
    // Exibir o elemento de loading
    loadingElement.style.display = "flex";

    // Fazer a requisição para a API do GitHub
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/alefd2/repos", true);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        var projects = JSON.parse(xhr.responseText);

        // Limpar o conteúdo atual dos projetos
        projectsContainer.innerHTML = "";

        // Iterar sobre os projetos e criar as caixas
        projects.forEach(function (project) {
          var projectBox = document.createElement("div");
          projectBox.classList.add("project-box");

          var projectName = document.createElement("h2");
          projectName.textContent = project.name;

          var projectDescription = document.createElement("p");
          projectDescription.textContent = project.description;

          var projectLink = document.createElement("a");
          projectLink.href = project.html_url;
          projectLink.textContent = "Link";

          projectBox.appendChild(projectName);
          projectBox.appendChild(projectDescription);
          projectBox.appendChild(projectLink);

          projectsContainer.appendChild(projectBox);

          projectBox.addEventListener("click", function () {
            showModal(project);
          });

          window.addEventListener("click", function (event) {
            if (event.target.classList.contains("modal-container")) {
              closeModal();
            }
          });

          document
            .getElementById("modal-container")
            .addEventListener("click", closeModal);
        });
      }
      // Remover o elemento de loading
      loadingElement.style.display = "none";
    };
    xhr.send();
  }
  getProjects();
});

function showModal(project) {
  document.getElementById("modal-title").textContent = project.name;
  document.getElementById("modal-description").textContent =
    project.description;
  document.getElementById("modal-stars").textContent =
    "Estrelas: " + project.stargazers_count;
  document.getElementById("modal-owner").textContent =
    "Dono: " + project.owner.login;
  document.getElementById("modal-followers").textContent =
    "Seguidores: " + project.owner.followers;

  // Exibir o modal
  document.getElementById("modal-container").style.display = "block";
}

function closeModal() {
  var modalContainer = document.getElementById("modal-container");
  modalContainer.classList.remove("dark-mode");
  modalContainer.style.display = "none";
}
