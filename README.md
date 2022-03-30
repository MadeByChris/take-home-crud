# Otto intelligence take home test!

This is a full-stack project. The objective of this test is to analyze the candidate's ability to work with React and GraphQL.

## What's inside?

This monorepo uses [NPM](https://www.npmjs.com/) as a package manager. It includes the following apps:

### Apps

- `web`: a [Next.js](https://nextjs.org) app
- `backend`: a backend GraphQL API that utilizes Prisma and SQLite to store post information.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Setup

This repository is used in the `npx create-turbo@latest` command, to install all dependencies run the following command:

```
npm i
```

at the root folder

### Develop

To start developing run the following command at the root folder:

```
npm run dev
```

# Objective

After all projects are up and running the candidate should navigate to

```
localhost:3000
```

At the initial page implement:

- Create Post
- Delete Post

In both cases, the table should always display up-to-date information.

Each row of the table should be clickable and when clicked navigate the user to the page:

```
/post/[id]
```

where Post `ID` and `Content` should be displayed back to the user.

User should be able to navigate back to the initial page.

## Important!

- The project has a `graphql.schema` available with a basic CRUD structure. The candidate is free to make any modifications as they desire.
- CSS (tailwind) is not a requirement. When working on the front end, feel free to just use basic HTML structure.

# Deliverable

Create a pull request againts main branch.

## Useful Links

Useful links about all libraries used:

- [Prisma](https://www.prisma.io/docs/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/data/resolvers)
- [ReactJS](https://reactjs.org/docs/getting-started.html)
- [Apollo Client](https://www.apollographql.com/docs/react/data/queries)
- [Turbo Repo](https://turborepo.org/)
