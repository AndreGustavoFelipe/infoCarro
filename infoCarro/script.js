async function obterDados(){
  try {

    const resposta = await fetch("https://apiteste.hevandro-patric.repl.co/");
    const dados = await resposta.json();

    //Montar o HTML com as informações obtidas
    const dadosDiv = document.querySelector("#dados");
    dadosDiv.innerHTML = `
    <p class="infos"><strong>Sensor de Temperatura da Água:</strong> ${dados.Sensor_Temperatura_Agua}</p>
    <p class="infos"><strong>Sensor de Temperatura do Óleo:</strong> ${dados.Sensor_Temperatura_Oleo}</p>
    <p class="infos"><strong>Sensor de Nível da Água:</strong> ${dados.Sensor_Nivel_Agua}</p>
    <p class="infos"><strong>Sensor de Nível do Óleo:</strong> ${dados.Sensor_Nivel_Oleo}</p>
    <p class="infos"><strong>Avisos:</strong></p>
    <ul class="ul">
        ${dados.Avisos.map(aviso=> `<li class="li">${aviso}</li>`).join('')}
    </ul>
    `
  } catch (error){
      console.error("Erro ao obter dados: ", error);
  }
  
}

setInterval(obterDados, 5000);