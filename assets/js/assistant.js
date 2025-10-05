/// Arrow function what indexes the random value (without repeating)
/// Function to index the random value 
export const generate = (myarray, tl) => {

  tl = Number(tl) || 0;

  myarray.length = 0;

  let lastValue = null;
  let counter = 0;
  for (let i = 0; i < tl; i += 4) {

    let guia = [0, 1, 2, 3];

    do {
      shuffle(guia);
    } while (guia[0] === lastValue);

    myarray[i] = [...guia];
    if (counter > 3) counter = 0;

    lastValue = guia[guia.length - 1];
  }

};

/// Shuffle System
export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};