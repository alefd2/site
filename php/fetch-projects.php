<?php
// Aqui você pode adicionar o código necessário para buscar os projetos da API do GitHub

// Exemplo de dados fictícios para ilustração
$projects = array(
    array(
        'name' => 'Projeto 1',
        'description' => 'Descrição do projeto 1.',
        'link' => 'https://exemplo.com/projeto1'
    ),
    array(
        'name' => 'Projeto 2',
        'description' => 'Descrição do projeto 2.',
        'link' => ''
    ),
    array(
        'name' => 'Projeto 3',
        'description' => 'Descrição do projeto 3.',
        'link' => 'https://exemplo.com/projeto3'
    )
);

// Iterar sobre os projetos e exibir no formato HTML
foreach ($projects as $project) {
    echo '<div class="project-box">';
    echo '<h2>' . $project['name'] . '</h2>';
    echo '<p>' . $project['description'] . '</p>';
    if (!empty($project['link'])) {
        echo '<a href="' . $project['link'] . '">Link</a>';
    }
    echo '</div>';
}
?>