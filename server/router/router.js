const express =  require('express');
const pool =  require ('../modules/pool');
const router = express.Router();



router.post('/signature', (req, res) =>{
    // console.log('i just sent the image to database', req.body);
    pool.query (`INSERT INTO "signature" (sign)
    VALUES ($1); `, [...req.body])
    res.sendStatus(200);
});


router.get('/signature', (req, res) => {
    console.log('we can get it back', );
    pool.query (`SELECT "sign" FROM "signature"
    ORDER BY "id" DESC LIMIT 1;`)
    .then((result)=>{
        res.send(result.rows[0]);
    })
})

module.exports = router;
