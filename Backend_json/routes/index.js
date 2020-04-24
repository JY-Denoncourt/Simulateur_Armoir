const router = require("express").Router();
const simulateurRoutes = require("./simulateur.routes");

//#region //(ok) Arriver sur le site de base home
router.get("/", (req, res) => {
  res.render("home");
});
//#endregion

//#region //(ok) Arriver sur le /homeTask
router.use("/simulateur", simulateurRoutes);
//#endregion

module.exports = router;
