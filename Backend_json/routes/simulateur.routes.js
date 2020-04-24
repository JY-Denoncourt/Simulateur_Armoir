const router = require("express").Router();
const simulateurFonctions = require("../data/simulateurFonctions.js");

//#region //(ok) GET de homeTasks
router.get("/", (req, res) => {
  res.render("simulateur", {
    armoirs: simulateurFonctions.listArmoir(),
  });
});
//#endregion

//#region -->(ok) POST de homeTasks
router.post("/", (req, res) => {
  let ArmoirModif = req.body.type;
  let ArmoirState = req.body.state;

  //#region -->(ok) Partie du post par BTN OPEN
  if (ArmoirState == "open")
  {
    var modifCompt = simulateurFonctions.addModif(ArmoirModif);
    if (modifCompt == null)
      console.log("Erreur : Armoir #", ArmoirModif, "ne se add pas");
    else
    {
      console.log("sa marche", modifCompt);
      res.render("includes/Armoir", { armoir: modifCompt })
      //res.send({ modifCompt });    //envoyer seulement un objet
    }
  }
  //#endregion
  

  //#region -->(ok) Partie du post par BTN CLOSE
  else
  {
    var changeState = simulateurFonctions.changeState(ArmoirModif);
    if (changeState == null)
      console.log("Erreur : Armoir #", ArmoirModif, "ne se change pas");
    else
    {
      console.log("sa marche", changeState);
      res.render("includes/Armoir", { armoir : changeState });
    }
  }
  //#endregion
   
});
//#endregion

module.exports = router;
