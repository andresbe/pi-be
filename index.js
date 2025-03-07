const express = require('express');
const cors = require('cors'); // CommonJS / Module
const PORT = process.env.PORT || 4000;
const app = express();

const router = express.Router();  // ✅ Corrected variable
asdadas;
app.use(cors()); // middleware
router.route('/')
    .get((req,res) => {
        try{
            
            res.status(200).json({
                status: 'success',
                data: []
            });
        } catch(error) {
            new Error('Invalid format');
        }
    });
app.use(router);

app.listen(PORT, () => {
    console.log(`app running on http://localhost:${PORT}`);
});