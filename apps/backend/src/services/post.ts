import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPosts = async () => {
  return await prisma.post.findMany();
};

export const createPost = async (content: string) => {
  return await prisma.post.create({
    data: {
      content: content
    }
  });
};

export const deletePost = () => {};

export const getPostById = async (id: number) => {
  return await prisma.post.findUnique({
    where: {
      id: id
    }
  });
};
