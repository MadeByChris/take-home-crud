import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPosts = async () => {
  return await prisma.post.findMany();
};

export const createPost = () => {};

export const deletePost = () => {};

export const getPostById = () => {};
