const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

const app = express();
// load process.env in .env file
require('dotenv').config();

app.get("/", (req, res, next) => {
  res.write("work!");
  res.end();
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
