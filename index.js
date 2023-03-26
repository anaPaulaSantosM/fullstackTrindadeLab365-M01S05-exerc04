const usuarios = [
  {nome: "luis", idade: 26},
  {nome: "norma", idade: 16},
  {nome: "daiana", idade: 26},
  {nome: "jorge", idade: 16},
  {nome: "kauan", idade: 16},
  {nome: "charles", idade: 26},
  {nome: "marco", idade: 16},
  {nome: "bruno", idade: 16}
];

const usuariosMenores = usuarios.filter(usuario => usuario.idade < 18);
const usuariosMaiores = usuarios.filter(usuario => usuario.idade >= 18);

console.log("Usuários menores de 18 anos:", usuariosMenores);
console.log("Usuários maiores ou iguais a 18 anos:", usuariosMaiores);
