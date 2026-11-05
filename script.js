(function() {
    // ===== DADOS DA PESQUISA =====
    const dadosFormas = {
        labels: ['Influencer', 'Marketing afiliados', 'Venda de produtos', 'Prestação de serviços', 'Não conheço'],
        valores: [8, 0, 1, 1, 1]
    };

    const dadosImpedimentos = {
        labels: ['Falta de conhecimento', 'Falta de recurso', 'Dificuldade p/ clientes', 'Falta de tempo', 'Medo de golpes'],
        valores: [1, 2, 3, 4, 1]
    };

    // ===== CONTROLE DE PÁGINAS =====
    let currentPage = 1;
    const totalPages = 5;

    const pages = [
        document.getElementById('page1'),
        document.getElementById('page2'),
        document.getElementById('page3'),
        document.getElementById('page4'),
        document.getElementById('page5')
    ];

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageIndicator = document.getElementById('pageIndicator');
    const dots = document.querySelectorAll('.dot');

    function updateUI() {
        pages.forEach((page, idx) => {
            page.classList.toggle('active', idx + 1 === currentPage);
        });

        pageIndicator.textContent = `Página ${currentPage} de ${totalPages}`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;

        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx + 1 === currentPage);
        });
    }

    function goToPage(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        updateUI();
    }

    prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
    nextBtn.addEventListener('click', () => goToPage(currentPage + 1));

    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            goToPage(parseInt(dot.dataset.page));
        });
    });

    updateUI();

    // ===== GRÁFICO 1: Formas que mais conhecem =====
    const ctx1 = document.getElementById('chart1').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: dadosFormas.labels,
            datasets: [{
                label: 'Votos',
                data: dadosFormas.valores,
                backgroundColor: ['#d9a066', '#c0b6aa', '#a3b8b0', '#b4a79c', '#bea38b'],
                borderRadius: 10,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { backgroundColor: '#1e2b2f' }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 1, color: '#3b4e55' },
                    grid: { color: '#e8dfd7' }
                },
                x: {
                    ticks: { color: '#2e3b40', font: { size: 11 } },
                    grid: { display: false }
                }
            }
        }
    });

    // ===== GRÁFICO 2: O que impede de começar =====
    const ctx2 = document.getElementById('chart2').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: dadosImpedimentos.labels,
            datasets: [{
                label: 'Votos',
                data: dadosImpedimentos.valores,
                backgroundColor: ['#b4a79c', '#c0b6aa', '#a3b8b0', '#d9a066', '#bea38b'],
                borderRadius: 10,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { backgroundColor: '#1e2b2f' }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 1, color: '#3b4e55' },
                    grid: { color: '#e8dfd7' }
                },
                x: {
                    ticks: { color: '#2e3b40', font: { size: 11 } },
                    grid: { display: false }
                }
            }
        }
    });
})();
