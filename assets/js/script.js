document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
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
  var projectsContainer = document.querySelector(".projects");

  // Função para obter os dados dos projetos
  function getProjects() {
    // Adicionar a classe 'loading' para exibir o efeito de skeleton loading
    projectsContainer.classList.add("loading");

    // Fazer a requisição para a API do GitHub
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/alefd2/repos", true);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 400) {
        var projects = JSON.parse(xhr.responseText);

        // Limpar o conteúdo atual
        projectsContainer.innerHTML = "";

        // Iterar sobre os projetos e exibir no formato HTML
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
  }

  // Chamar a função para obter os projetos
  getProjects();
});
