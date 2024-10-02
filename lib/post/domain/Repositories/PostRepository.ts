import { Post } from '../Entity/Post'

export type PostRepository = {
  getAll(): Promise<Post[]>
  getById(id: string): Promise<Post>
  create(post: Post): Promise<void>
  edit(post: Post): Promise<void>
  delete(id: string): Promise<void>
}
