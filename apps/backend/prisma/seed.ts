import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.post.create({
    data: {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit sem et nulla pharetra, ut lacinia urna aliquam. Aliquam fringilla eros ut risus ullamcorper elementum vitae at purus.",
    },
  });
  await prisma.post.create({
    data: {
      content:
        "Aliquam tempus erat nulla, non volutpat lacus mattis vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
