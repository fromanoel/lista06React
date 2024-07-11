import React, { useState } from 'react';

function BoxInfo() {
  const [textos] = useState([
    "PLANO DE DESENVOLVIMENTO INSTITUCIONAL",
    "PESQUISA PÚBLICA PROCESSOS IFTM",
    "LICITAÇÕES E CONTRATOS",
    "RECEITAS E DESPESAS",
    "DADOS ABERTOS",
    "TRANSPARÊNCIA E PRESTAÇÃO DE CONTAS",
    "SERVIDORES",
    "PERGUNTAS FREQUENTES"
  ]);

  return (
    <div className="boxInfo">
      {textos.map((texto, index) => (
        <a key={index} href="">{texto}</a>
      ))}
    </div>
  );
}

export default BoxInfo;
