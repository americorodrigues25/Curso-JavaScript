/* utiliza switch/case quando a varios ifs
para sair utilizamos break
podemos inserir default caso nenhum valor for correspondido */

let nome = "Americo";

switch (nome.toLowerCase()) {
  case "americo":
    console.log("o nome é americo");
    break;
  case "livia":
    console.log("o nome é livia");
    break;
  default:
    console.log("O nome não foi encontrado");
}
