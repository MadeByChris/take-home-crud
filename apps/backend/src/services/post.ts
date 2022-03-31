import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllPosts = async () => {
  return await prisma.post.findMany();
};

export const createPost = async (content: string) => {
  return await prisma.post.create({
    data: {
      content:
        content,
    },
  });
};
//@ts-ignore
export const deletePost = async (id) => {
  console.log(id);
  return await prisma.post.delete({
    //@ts-ignore
    where: {
      id: parseInt(id)
    }
  })
};

export const getPostById = () => { };
