let ipfs = null;

// using the ipfs companion
window.ipfs.enable()
  .then(node => { 
    ipfs = node;
  });

function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = ev => {
      const content = ev.target.result;
      resolve(content);
    }

    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  });
}

export async function addFile(file) {
  try {
    const content = await readFile(file);
    const res = await ipfs.add({
      path: file.name,
      content: Buffer.from(content)
    });

    const { hash } = res[0];

    return hash;
  } catch (error) {
    console.error(error);
  }
}

export async function addMetadata(metadata) {
  try {
    const buffer = Buffer.from(JSON.stringify(metadata));
    const result = await ipfs.add(buffer);
    return result[0].hash;
  } catch (e) {
    console.error(e);
  }
}