import { Post } from '@/lib/post/domain/Entity/Post'
import { api } from '@/lib/shared/infrastructure/Axios'
import { PostRepository } from '@/lib/post/domain/Repositories/PostRepository'

export function axiosPostRepository(): PostRepository {
  return {
    getAll: async () => {
      const response = await api.get<Post[]>('/posts')
      return response.data
    },

    getById: async (id: string) => {
      const response = await api.get<Post>(`/posts/${id}`)
      return response.data
    },

    create: async (post: Post) => await api.post('/posts', post),

    edit: async (post: Post) => await api.put('/posts', post),

    delete: async (id: string) => await api.delete(`/posts/${id}`),
  }
}
