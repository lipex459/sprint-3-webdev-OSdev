import { useState } from 'react';

function Conteudo({ materiais, adicionarMaterial, excluirMaterial, sortearMaterial }) {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');

  function enviarFormulario(evento) {
    evento.preventDefault();

    if (!titulo.trim() || !resumo.trim()) {
      alert('Preencha o título e o resumo.');
      return;
    }

    if (adicionarMaterial(titulo.trim(), resumo.trim())) {
      setTitulo('');
      setResumo('');
    }
  }

  return (
    <main>
      <h1>Seu conteúdo da aula, organizado.</h1>
      <p>Escreva seus resumos e escolha um material para revisar.</p>

      <section id="cadastro">
        <h2>Adicionar material</h2>
        <form onSubmit={enviarFormulario}>
          <label htmlFor="titulo">Título da aula</label>
          <input
            id="titulo"
            value={titulo}
            onChange={(evento) => setTitulo(evento.target.value)}
            placeholder="Ex.: Introdução ao React"
            maxLength={80}
            required
          />

          <label htmlFor="resumo">Resumo</label>
          <textarea
            id="resumo"
            value={resumo}
            onChange={(evento) => setResumo(evento.target.value)}
            placeholder="Escreva o que você aprendeu."
            rows={4}
            maxLength={2000}
            required
          />

          <button type="submit">Salvar material</button>
        </form>
      </section>

      <section id="materiais">
        <div className="titulo-lista">
          <h2>Materiais salvos ({materiais.length})</h2>
          <button onClick={sortearMaterial} disabled={materiais.length === 0}>
            Sortear para revisar
          </button>
        </div>

        {materiais.length === 0 && <p>Nenhum material salvo ainda.</p>}

        {materiais.map((material) => (
          <article key={material.id}>
            <h3>{material.titulo}</h3>
            <p className="resumo">{material.resumo}</p>
            <button className="botao-excluir" onClick={() => excluirMaterial(material.id)}>
              Excluir
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Conteudo;
