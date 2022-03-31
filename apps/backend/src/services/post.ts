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

// TODO: update schema so that delete returns the Post that was deleted
//  this might require a migration
export const deletePost = async (id: number) => {
  return await prisma.post.delete({
    where: {
      id: id
    }
  })
};

export const getPostById = async (id: number) => {
  return await prisma.post.findUnique({
    where: {
      id: id
    }
  });
};
