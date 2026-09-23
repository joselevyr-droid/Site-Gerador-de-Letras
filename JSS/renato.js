const lyric = [
  ["Eu não quero saber", 0, 2, 0, 0],
  ["Eu não tou nem aí", 0, 2, 3, 0],
  ["Eu sou penso em você,", 0, 1, 0, 1],
  ["nunca mais vou dormir", 1, 2, 3, 0],
["Você não disse nada,", 0, 2, 0, 1],
["Eu percebi de", 0, 1, 0, 1],
["longeeee", 1, 1.5, 2, 0],
["Quer cheirar meu cabelo e", 0, 1.5, 0, 1],
["quer ouvir o meu", 0, 1, 0, 1],
["nomeeee", 1, 2, 2, 0],
["Didi!", 0, 1, 0, 1],
["Didi!", 1, 1, 1, 0],
["Como é bom te ter por aqui", 0, 3, 1, 0],
["Renato", 0, 1, 0, 1],
["Aragão!", 1, 2, 0, 0],
["Vem pegar na minha mão", 0, 3, 1, 0],
["Didi!", 0, 1, 0, 1],
["Didi!", 1, 1, 1, 0],
["Como é bom te ter por aqui", 0, 3, 1, 0],
["Renato", 0, 1, 0, 1],
["Aragão!", 1, 2, 0, 0]
];

let memoria = "";

function sepletra () {
  for (let i = 0; i < lyric.length; i++){
    lyric[i][0] = lyric[i][0].split(" ");
  };
  return;
};

function timer (t) {
  return new Promise ((resolve) => 
    setTimeout (resolve, t));
  return;
};

async function falante (t, q, l) {
  let memorypad = "";
  if (memoria !== "") {
    memorypad = memoria;
  };
  for (let i = 0; i < q; i++) {
    for (let y = 0; y < lyric[l][0][i].length; y++) {
      console.clear();
      console.log(memorypad + lyric[l][0][i][y]);
      memorypad = memorypad + lyric[l][0][i][y];
      await timer(t);
    };
  };
  if (lyric[l][lyric[l].length - 4] > 0) {
    memoria = "";
    memorypad = "";
  };
  if (lyric[l][lyric[l].length - 1] > 0) {
    if (lyric[l][lyric[l].length - 4] <= 0) {
      memoria = memorypad + " ";
    } else {
      memoria = "";
      memorypad = "";
  };
  return;
};
};

async function escrita (l) {
  let quantia = lyric[l][0].length;
  let espaco = quantia - 1;
  for (let i = 0; i < quantia; i++) {
    lyric[l][0][i] = lyric[l][0][i].split("");
    if (espaco > 0) {
      lyric[l][0][i].push(" ");
      espaco--;
    };
  };
  let total = 0;
  for (let i = 0; i < quantia; i++) {
    total = total + lyric[l][0][i].length;
  };
  let tempo = (lyric[l][lyric[l].length - 3]/total) * 1000;
  await falante(tempo, quantia, l);
  if (lyric[l][lyric[l].length - 2] > 0) {
    await timer((lyric[l][lyric[l].length - 2]) * 1000);
  };
  return;
};

async function song () {
  await sepletra();
  for (let i = 0; i < lyric.length; i++) {
    await escrita (i);
  };
};

song();