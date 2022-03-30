import { ApolloServer } from "apollo-server";
import { loadTypedefs } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { join } from "path";

import { Query, Mutation } from "./resolvers";

const main = async () => {
  const sources = await loadTypedefs(join(__dirname, "schema.graphql"), {
    loaders: [new GraphQLFileLoader()],
  });

  const typeDefs = sources.map((source) => source.document!);

  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation,
    },
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
