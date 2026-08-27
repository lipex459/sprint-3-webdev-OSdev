import { useState } from 'react';
import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import Rodape from './components/Rodape';

function carregarMateriais() {
  try {
    const dados = JSON.parse(localStorage.getItem('jovi-materiais'));

    if (Array.isArray(dados)) {
      return dados.filter((material) =>
        material && typeof material.id === 'number' &&
        typeof material.titulo === 'string' && typeof material.resumo === 'string'
      );
    }
  } catch {
    return [];
  }

  return [];
}

function App() {
  const [materiais, setMateriais] = useState(carregarMateriais);

  function salvarMateriais(novaLista) {
    try {
      localStorage.setItem('jovi-materiais', JSON.stringify(novaLista));
      setMateriais(novaLista);
      return true;
    } catch {
      alert('Não foi possível salvar. Verifique o armazenamento do navegador.');
      return false;
    }
  }

  function adicionarMaterial(titulo, resumo) {
    const novoMaterial = {
      id: Date.now(),
      titulo: titulo,
      resumo: resumo
    };

    return salvarMateriais([...materiais, novoMaterial]);
  }

  function excluirMaterial(id) {
    if (confirm('Deseja excluir este material?')) {
      const novaLista = materiais.filter((material) => material.id !== id);
      salvarMateriais(novaLista);
    }
  }

  function sortearMaterial() {
    if (materiais.length === 0) return;

    const indice = Math.floor(Math.random() * materiais.length);
    alert('Material para revisar: ' + materiais[indice].titulo);
  }

  return (
    <>
      <Cabecalho />
      <Conteudo
        materiais={materiais}
        adicionarMaterial={adicionarMaterial}
        excluirMaterial={excluirMaterial}
        sortearMaterial={sortearMaterial}
      />
      <Rodape />
    </>
  );
}

export default App;
