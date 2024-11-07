function chunkString(str, chunkLength) {
  if (str === null) {
    return [];
  }

  let chunks = [];

  for (let i = 0; i < str.length; i += chunkLength) {
    chunks.push(str.slice(i, i + chunkLength));  
  }

  return chunks;
}
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(chunkString(str, size)); 