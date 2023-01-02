import { useEffect, useState } from "react";
import "./Servico.css";

function Servico() {
  return (
    <div className="container mt-4">
      <h1>Cadastro de Serviços</h1>

      <form>
        <div className="col-6">
          <div>
            <label className="form-label">Nome do cliente</label>
            <input name="nomeCliente" type="text" className="form-control mb-4" />
          </div>
          <div>
            <label className="form-label">Data de Início</label>
            <input name="dataInicio" type="date" className="form-control mb-4" />
          </div>
          <div>
            <label className="form-label">Data de Término</label>
            <input name="dataTermino" type="date" className="form-control mb-4" />
          </div>
          <div>
            <label className="form-label">Descrição do Serviço</label>
            <input name="descricaoServico" type="text" className="form-control mb-4" />
          </div>
          <div>
            <label className="form-label">Valor do Serviço</label>
            <input name="valorServico" type="number" className="form-control mb-4" />
          </div>
          <div>
            <label className="form-label">Valor Pago</label>
            <input name="valorPago" type="number" className="form-control mb-4" />
          </div>
          <div>
            <label className="form-label">Data do Pagamento</label>
            <input name="dataPagamento" type="date" className="form-control mb-4" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Servico;
