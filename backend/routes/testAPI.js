var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    const inventoryinRef = db.collection("incomings");
    const snapshot = await inventoryinRef.get();
    const array = [];
    snapshot.forEach(doc => {
        array.push({
            id: doc.id,
            product: doc.data().product,
            productnr: doc.data().productnr,
            inventory: doc.data().inventory,
            inventorynr: doc.data().inventorynr,
            quantity: doc.data().quantity,
            date: doc.data().date,
        });
    });

    res.send(JSON.stringify(array));
});

module.exports = router;