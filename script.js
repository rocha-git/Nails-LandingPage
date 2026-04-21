document.getElementById("form-agenda").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;

  const dados = {
    nome: form.nome.value,
    servico: form.servico.value,
    data: form.data.value
  };

  try {
    const res = await fetch("SUA_URL_DO_SCRIPT_AQUI", {
      method: "POST",
      body: JSON.stringify(dados)
    });

    const resposta = await res.text();

    alert("Agendamento enviado com sucesso!");
    form.reset();

  } catch (erro) {
    alert("Erro ao enviar. Tente novamente.");
    console.error(erro);
  }
});