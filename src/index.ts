import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";
import express, { Response } from "express";
import { ApolloServer } from "apollo-server-express";
import { GraphQLObjectType } from "graphql";
const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  const app = express();
  const apolloServer = new ApolloServer({});

  app.get("/", (_, res: Response) => {
    res.send("dksjvhdfmdajklgld'klkf");
  });

  const port = process.env.PORT || 2000;
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};
main().catch((err) => {
  console.error(err);
});
