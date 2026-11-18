import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT||3000;

const githubData ={
Name: "John Doe",
Username: "johndoe",
Bio: "Software developer and open-source enthusiast.",
}
// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/github', (req, res)=>{
  res.json(githubData)
})
// Server listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
