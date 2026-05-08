const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors')

app.use(express.static('./public'));
app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
  let path=req.body.url;
  if (fs.statSync (path).isDirectory ()){
    const allContents = fs.readdirSync(path);
    res.json({
      "isdir":true,
      "content":allContents
    });
  }
  else {
    // let data=fs.readFileSync (path);
    res.json ({
      "isdir":false,
      "content":path
    });
  }
  // console.log(req.body);
  // res.json ('helo');
});

app.listen(3000, () => {
  console.log('server started');
});



