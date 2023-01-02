import { useEffect, useState } from "react";
import "./Servico.css";

function Servico() {


    const [servico, setServico] = useState({nomeCliente: '', dataInicio: '', dataTermino: '', descricaoServico: '', valorServico: '', valorPago: '', dataPagamento: ''});

    const [servicos, setServicos] = useState([]);

    function handleChange(e){
        setServico({...servico, [e.target.name]:e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(servico)
    }


  return (
    <div className="container mt-4">
      <h1>Cadastro de Serviços</h1>

      <form onSubmit={handleSubmit}>
        <div className="col-6">
          <div>
            <label className="form-label">Nome do cliente</label>
            <input onChange={handleChange} value={servico.nomeCliente} name="nomeCliente" type="text" className="form-control mb-4" />
          </div>
          <div>
            <label className="form-label">Data de Início</label>
            <input onChange={handleChange} value={servico.dataInicio} name="dataInicio" type="date" className="form-control mb-4" />
          </div>
          <div>
            <label className="form-label">Data de Término</label>
            <input onChange={handleChange} value={servico.dataTermino} name="dataTermino" type="date" className="form-control mb-4" />
          </div>
          <div>
            <label className="form-label">Descrição do Serviço</label>
            <input onChange={handleChange} value={servico.descricaoServico} name="descricaoServico" type="text" className="form-control mb-4" />
          </div>
          <div>
            <label className="form-label">Valor do Serviço</label>
            <input onChange={handleChange} value={servico.valorServico} name="valorServico" type="number" className="form-control mb-4" />
          </div>
          <div>
            <label className="form-label">Valor Pago</label>
            <input onChange={handleChange} value={servico.valorPago} name="valorPago" type="number" className="form-control mb-4" />
          </div>
          <div>
            <label className="form-label">Data do Pagamento</label>
            <input onChange={handleChange} value={servico.dataPagamento} name="dataPagamento" type="date" className="form-control mb-4" />
          </div>

          <input type="submit" className="btn btn-success" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Servico;
