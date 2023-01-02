import axios from "axios";
import { useEffect, useState } from "react";
import "./Servico.css";

function Servico() {
  const [servico, setServico] = useState({
    nomeCliente: "",
    dataInicio: "",
    dataTermino: "",
    descricaoServico: "",
    valorServico: "",
    valorPago: "",
    dataPagamento: "",
  });

  const [servicos, setServicos] = useState([]);
  const [atualizar, setAtualizar] = useState();

  useEffect(() => {
    buscarTodos();
  },[atualizar])

  function handleChange(e) {
    setServico({ ...servico, [e.target.name]: e.target.value });
  }

  function buscarTodos() {
    axios.get("http://localhost:8080/api/servico/").then(result => {
      setServicos(result.data);
    });
  }

  function buscarPagamentoPendente(){
    axios.get("http://localhost:8080/api/servico/pagamentoPendente").then(result => {
      setServicos(result.data);
    });
  }

  function buscarCancelados(){
    axios.get("http://localhost:8080/api/servico/cancelados").then(result => {
      setServicos(result.data);
    });
  }

  function limpar() {
    setServico({
      nomeCliente: "",
      dataInicio: "",
      dataTermino: "",
      descricaoServico: "",
      valorServico: "",
      valorPago: "",
      dataPagamento: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(servico.id === undefined){
        axios.post("http://localhost:8080/api/servico/", servico).then((result) => {
        //console.log(result);
        setAtualizar(result);
      });
    }else{
        axios.put("http://localhost:8080/api/servico/", servico).then((result) => {
        //console.log(result);
        setAtualizar(result);
      });
    }
    limpar();
  }

  function cancelar(id) {
    axios.post("http://localhost:8080/api/servico/" + id).then(result => {
      setAtualizar(result);
    })
  }

  function excluir(id) {
    axios.delete("http://localhost:8080/api/servico/" + id).then(result => {
      setAtualizar(result);
    })
  }

  return (
    <div className="container mt-4">
      <h1>Cadastro de Serviços</h1>

      <form onSubmit={handleSubmit}>
        <div className="col-6 mb-4">
          <div>
            <label className="form-label">Nome do cliente</label>
            <input
              onChange={handleChange}
              value={servico.nomeCliente}
              name="nomeCliente"
              type="text"
              className="form-control mb-4"
            />
          </div>
          <div>
            <label className="form-label">Data de Início</label>
            <input
              onChange={handleChange}
              value={servico.dataInicio || ''}
              name="dataInicio"
              type="date"
              className="form-control mb-4"
            />
          </div>
          <div>
            <label className="form-label">Data de Término</label>
            <input
              onChange={handleChange}
              value={servico.dataTermino || ''}
              name="dataTermino"
              type="date"
              className="form-control mb-4"
            />
          </div>
          <div>
            <label className="form-label">Descrição do Serviço</label>
            <input
              onChange={handleChange}
              value={servico.descricaoServico}
              name="descricaoServico"
              type="text"
              className="form-control mb-4"
            />
          </div>
          <div>
            <label className="form-label">Valor do Serviço</label>
            <input
              onChange={handleChange}
              value={servico.valorServico || ''}
              name="valorServico"
              type="number"
              className="form-control mb-4"
            />
          </div>
          <div>
            <label className="form-label">Valor Pago</label>
            <input
              onChange={handleChange}
              value={servico.valorPago || ''}
              name="valorPago"
              type="number"
              className="form-control mb-4"
            />
          </div>
          <div>
            <label className="form-label">Data do Pagamento</label>
            <input
              onChange={handleChange}
              value={servico.dataPagamento || ''}
              name="dataPagamento"
              type="date"
              className="form-control mb-4"
            />
          </div>

          <input type="submit" className="btn btn-success" value="Cadastrar" />
        </div>
      </form>

      <button onClick={buscarTodos} type="button" className="btn btn-outline-primary mb-4">Todos os Serviços</button>&nbsp;&nbsp;
      <button onClick={buscarPagamentoPendente} type="button" className="btn btn-outline-warning mb-4">Pagamentos Pendentes</button>&nbsp;&nbsp;
      <button onClick={buscarCancelados} type="button" className="btn btn-outline-danger mb-4">Serviços Cancelados</button>

      <table className="table table-striped mb-7">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">Valor</th>
            <th scope="col">Status</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          {servicos?.map((serv) => (
            <tr key={serv.id}>
              <td>{serv.nomeCliente}</td>
              <td>{serv.descricaoServico}</td>
              <td>R$ {serv.valorServico}</td>
              <td>{serv.status}</td>
              <td>
                {serv.status !== 'cancelado' && 
                  <>
                    <button onClick={() => setServico(serv)} className="btn btn-primary">Editar</button>&nbsp;&nbsp;
                    <button onClick={() => cancelar(serv.id)} className="btn btn-warning">Cancelar</button>&nbsp;&nbsp;
                  </>
                }
                <button onClick={() => excluir(serv.id)} className="btn btn-danger">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Servico;
