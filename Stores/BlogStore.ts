import { createSafeContext } from "Utils/contexts";

export class BlogStore {
  constructor() {}
}

export const [blogStoreContext, useBlogStore] =
  createSafeContext<BlogStore>("BlogStore");
