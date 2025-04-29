// Função de pesquisa para filtrar clientes
function searchClients() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('#clientes-lista tr');
    rows.forEach(row => {
      const name = row.cells[0].textContent.toLowerCase();
      const email = row.cells[1].textContent.toLowerCase();
      if (name.includes(searchTerm) || email.includes(searchTerm)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }
  
  // Função para excluir cliente (simulação de exclusão)
  function deleteClient(clientName) {
    if (confirm(`Tem certeza que deseja excluir o cliente ${clientName}?`)) {
      alert(`Cliente ${clientName} excluído com sucesso!`);
      // Aqui você pode adicionar a lógica de exclusão real, como uma chamada à API
    }
  }
  
  // Função para alternar a visibilidade do formulário de cadastro
  function toggleForm() {
    const formContainer = document.getElementById('form-container');
    formContainer.classList.toggle('hidden');
  }
  
  // Função para salvar o cliente (simulação)
  function saveClient() {
    const nome = document.getElementById('cliente-nome').value;
    const email = document.getElementById('cliente-email').value;
    
    if (!nome || !email) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
  
    // Simula o processo de cadastro
    alert(`Cliente ${nome} cadastrado com sucesso!`);
    
    // Limpar os campos
    document.getElementById('form-cadastro').reset();
    
    // Ocultar o formulário novamente
    document.getElementById('form-container').classList.add('hidden');
    
    // Aqui você pode adicionar a lógica para enviar os dados ao backend ou atualizar a lista de clientes.
  }
  