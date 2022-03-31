import { ApolloServer } from "apollo-server";
import { loadTypedefs } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { join } from "path";

import { Query, Mutation } from "./resolvers";
import { PrismaClient, Prisma, prisma } from "@prisma/client";

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

  server.listen(4001).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`); // Changed since port 4000 was occupied by Node.exe
  });
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
