const fs = require("fs");
const chalk = require("chalk");

//#region (ok) loader le fichier loadFs
const loadFs = () => {
  try {
    const buffer = fs.readFileSync("./data/compt.json"); //lire le fichier
    const fsJson = buffer.toString(); //tout mettre en string
    return JSON.parse(fsJson);
  } catch (error) {
    console.log(error);
    return {
      //si ps de fichier crée un nouvelle entrer vide et debut a 1
      armoirs:[
        {"id":1, "title":"Armoir 1R", "side": "R", "open" : false, "modif": 0},
        {"id":2, "title":"Armoir 1L", "side": "L", "open" : false, "modif": 0},
        {"id":3, "title":"Armoir 2R", "side": "R", "open" : false, "modif": 0},
        {"id":4, "title":"Armoir 2L", "side": "L", "open" : false, "modif": 0},
        {"id":5, "title":"Armoir 3R", "side": "R", "open" : false, "modif": 0},
        {"id":6, "title":"Armoir 3L", "side": "L", "open" : false, "modif": 0}
      ]
    };
  }
};
//#endregion

//#region //(ok) Function saveFS --> Save le fichier JSON
const saveFs = (data) => {
  const FsJson = JSON.stringify(data);
  fs.writeFileSync("./data/compt.json", FsJson);
};
//#endregion

//=================================================================================================

//Fonction exporter
//#region //(ok) Function ListArmoir / ListOxygen    --> Retourner fichier JSON        (fonct qui est deja exporter ecrit de meme)
exports.listArmoir = () => {
  const data = loadFs();
  return data.armoirs;
};
//#endregion


//#region //(ok) Fonction AddModif      --> Ajoute 1 a modif au fichier et retourne (fonct qui est deja exporter ecrit de meme)
exports.addModif = (id) => {
  dataFs = loadFs();
  //console.log(id, dataFs);

  for(let i = 0; i < 6; i++)
  {
    if (dataFs.armoirs[i].id == id)
    {
      dataFs.modif++;
      dataFs.armoirs[i].modif++;
      dataFs.armoirs[i].open = true;
      saveFs(dataFs);
      return dataFs.armoirs[i];
    }
    //console.log(dataFs.armoirs[i]);
  }
  
  return null;
};
//#endregion


//#region //(ok) Fonction changeState   --> change etat close-open au fichier et retourne (fonct qui est deja exporter ecrit de meme)
exports.changeState = (id) => {
  dataFs = loadFs();
  //console.log(id, dataFs);

  for(let i = 0; i < 6; i++)
  {
    if (dataFs.armoirs[i].id == id)
    {
      dataFs.armoirs[i].open = false;
      saveFs(dataFs);
      return dataFs.armoirs[i];
    }
    //console.log(dataFs.armoirs[i]);
  }
  
  return null;
};
//#endregion
