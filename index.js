function cadastrarUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //lógica para cadastrar usuário...
      var erro = true;

      if (!erro) {
        resolve({ time: 5, message: "Usuário cadastrado com sucesso!" });
      } else {
        reject("Ocorreu um erro ao cadastrar o usuário!");
      }
    }, 2000);
  });
}

/*
cadastrarUsuario()
  .then((dados) => {
    console.log(dados.time);
    console.log(dados.message);
  })

  .catch(() => {
    console.log("Ocorreu um erro ao Registrar o usuário!");
  });
*/

async function main() {
  try {
    var dados = await cadastrarUsuario();

    console.log(dados);
    console.log(dados.time);
    console.log(dados.message);
  } catch (erro) {
    console.log("Ocorreu um erro ao Registrar o usuário!");
  }
}
main();

function baixarConteudoPromisse(nomeConteudo) {
  return new Promise((resolve, reject) => {
    console.log(`Iniciando o download de ${nomeConteudo}.....`);

    // Simula o tempo de download.

    setTimeout(() => {
      const sucesso = true; // Simula download bem-sucedido.
      if (sucesso) {
        console.log(`${nomeConteudo} foi baixado com sucesso!.....`);
        resolve(nomeConteudo);
      } else {
        const erro = "Erro ao baixar o conteúdo.";
        console.error(erro);
        reject(erro); // Rejeita a promessa com o erro.
      }
    }, 2000);
  });
}

async function baixarConteudoAsyncAwait() {
  try {
    const documento = await baixarConteudoPromisse("documento.pdf");
    console.log(`Download de ${documento} concluído com sucesso!`);

    const imagem = await baixarConteudoPromisse("imagem.jpg");
    console.log(`Download de ${imagem} concluído com sucesso!`);

    const video = await baixarConteudoPromisse("video.mp4");
    console.log(`Download de ${video} concluído com sucesso!`);
  } catch (erro) {
    console.log(`Erro durante o download: ${erro}`);
  }
}

// Chamada da Função Assincrona

baixarConteudoAsyncAwait();
