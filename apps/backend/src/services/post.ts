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

export const deletePost = async (id: string) => {
  return await prisma.post.delete({
    where: {
      id: parseInt(id)
    }
  })
};

export const getPostById = async (id: string) => {
  return await prisma.post.findUnique({
    where: {
      id: parseInt(id)
    }
  });
};
