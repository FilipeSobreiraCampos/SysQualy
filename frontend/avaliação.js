const criteria = [
    {
      name: 'Usabilidade',
      description: 'Facilidade de uso e experiência do usuário',
      questions: [
        { id: 'ui1', text: 'O layout das telas é intuitivo?', weight: 0.3 },
        { id: 'ui2', text: 'Os ícones e botões são claros?', weight: 0.2 },
        { id: 'ui3', text: 'Tempo de resposta das ações?', weight: 0.5 }
      ]
    },
    {
      name: 'Desempenho',
      description: 'Eficiência e velocidade do sistema',
      questions: [
        { id: 'perf1', text: 'Tempo de carregamento de páginas', weight: 0.4 },
        { id: 'perf2', text: 'Consumo de recursos do sistema', weight: 0.3 },
        { id: 'perf3', text: 'Estabilidade em alta carga', weight: 0.3 }
      ]
    },
    {
      name: 'Segurança',
      description: 'Proteção contra acesso não autorizado e falhas',
      questions: [
        { id: 'sec1', text: 'Autenticação e controle de acesso eficazes?', weight: 0.4 },
        { id: 'sec2', text: 'Proteção contra falhas de segurança?', weight: 0.4 },
        { id: 'sec3', text: 'Registro de logs e rastreabilidade?', weight: 0.2 }
      ]
    },
    {
      name: 'Compatibilidade',
      description: 'Funcionamento em diferentes dispositivos, navegadores e sistemas operacionais',
      questions: [
        { id: 'comp1', text: 'Compatível com todos os navegadores modernos?', weight: 0.5 },
        { id: 'comp2', text: 'Compatível com dispositivos móveis?', weight: 0.3 },
        { id: 'comp3', text: 'Funciona em diferentes SOs (Windows, Linux, etc.)?', weight: 0.2 }
      ]
    },
    {
      name: 'Manutenibilidade',
      description: 'Facilidade de manutenção e atualização do sistema',
      questions: [
        { id: 'man1', text: 'Código bem estruturado e modular?', weight: 0.4 },
        { id: 'man2', text: 'Facilidade de aplicar correções e melhorias?', weight: 0.3 },
        { id: 'man3', text: 'Disponibilidade de testes automatizados?', weight: 0.3 }
      ]
    },
    {
      name: 'Acessibilidade',
      description: 'Acesso facilitado para pessoas com deficiência',
      questions: [
        { id: 'acc1', text: 'Compatível com leitores de tela?', weight: 0.4 },
        { id: 'acc2', text: 'Contraste adequado para leitura?', weight: 0.3 },
        { id: 'acc3', text: 'Navegação possível apenas pelo teclado?', weight: 0.3 }
      ]
    },
    {
      name: 'Documentação',
      description: 'Disponibilidade e clareza da documentação',
      questions: [
        { id: 'doc1', text: 'Manual de uso completo e acessível?', weight: 0.4 },
        { id: 'doc2', text: 'Documentação para desenvolvedores?', weight: 0.3 },
        { id: 'doc3', text: 'Material de apoio e FAQs disponíveis?', weight: 0.3 }
      ]
    }
  ];

let currentStep = 0;
const evaluation = {};

const container = document.getElementById('avaliacao-container');

function render() {
  const crit = criteria[currentStep];
  const critKey = crit.name.toLowerCase();

  if (!evaluation[critKey]) {
    evaluation[critKey] = crit.questions.map(q => ({ id: q.id, score: null, comment: '' }));
  }

  container.innerHTML = `
    <div class="mb-6">
      <h2 class="text-xl font-semibold text-gray-800 flex items-center">
        🛡️ ${crit.name}
      </h2>
      <p class="text-gray-600 mt-2">${crit.description}</p>
    </div>

    <div class="space-y-4">
      ${crit.questions.map(question => {
        const selected = evaluation[critKey].find(q => q.id === question.id)?.score;
        const comment = evaluation[critKey].find(q => q.id === question.id)?.comment;
        return `
          <div class="bg-gray-50 p-4 rounded-lg shadow-sm border">
            <div class="flex justify-between items-center mb-3">
              <span class="font-medium">${question.text}</span>
              <span class="text-sm text-gray-500">Peso: ${question.weight * 100}%</span>
            </div>
            <div class="flex space-x-2">
              ${[1, 2, 3, 4, 5].map(score => `
                <button 
                  onclick="setScore('${crit.name}', '${question.id}', ${score})"
                  class="w-10 h-10 rounded-full transition font-bold ${
                    selected === score 
                      ? 'bg-blue-600 text-white ring-2 ring-blue-400' 
                      : 'bg-gray-200 hover:bg-blue-100'
                  }"
                >${score}</button>
              `).join('')}
            </div>

            <!-- Campo de comentário -->
            <div class="mt-4">
              <label for="comment-${question.id}" class="block text-sm font-medium text-gray-700">Comentário (Não obrigatório)</label>
              <textarea
                id="comment-${question.id}"
                class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Deixe um comentário (não obrigatório)"
                rows="3"
                oninput="setComment('${crit.name}', '${question.id}', this.value)"
              >${comment || ''}</textarea>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <div class="flex justify-between mt-6">
      <button onclick="prevStep()" ${currentStep === 0 ? 'disabled' : ''} 
        class="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}">
        ⬅ Anterior
      </button>
      <button onclick="${currentStep === criteria.length - 1 ? 'submitEvaluation()' : 'nextStep()'}"
        class="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        ${currentStep === criteria.length - 1 ? 'Enviar Avaliação ✅' : 'Próximo ➡'}
      </button>
    </div>

    <div class="mt-4 flex justify-center">
      ${criteria.map((_, index) => `
        <div class="w-3 h-3 mx-1 rounded-full ${index === currentStep ? 'bg-blue-600' : 'bg-gray-300'}"></div>
      `).join('')}
    </div>
  `;
}

function setScore(criterionName, questionId, score) {
  const key = criterionName.toLowerCase();
  const item = evaluation[key].find(q => q.id === questionId);
  if (item) item.score = score;
  render();
}

function setComment(criterionName, questionId, comment) {
  const key = criterionName.toLowerCase();
  const item = evaluation[key].find(q => q.id === questionId);
  if (item) item.comment = comment;
}

function nextStep() {
  if (currentStep < criteria.length - 1) {
    currentStep++;
    render();
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    render();
  }
}

function submitEvaluation() {
  console.log("Avaliação enviada:", evaluation);
  alert("Avaliação enviada com sucesso!");
}

render();
