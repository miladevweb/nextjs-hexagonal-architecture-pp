import { Post } from '@/lib/post/domain/Entity/Post'
import { PostRepository } from '@/lib/post/domain/Repositories/PostRepository'

const url = process.env.NEXT_PUBLIC_BACKEND_URL as string

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'An error occurred')
  }

  const contentType = response.headers.get('content-type')
  if (contentType && contentType.includes('application/json')) {
    return (await response.json()) as T
  } else {
    // If the content isn't JSON, we return a suitable default value
    return {} as T
  }
}

export function fetchPostRepository(): PostRepository {
  return {
    getAll: async () => {
      const response = await fetch(url + '/posts', { cache: 'no-cache' })
      return handleResponse<Post[]>(response)
    },

    getById: async (id: string) => {
      const response = await fetch(url + `/posts/${id}`, { cache: 'no-cache' })
      return handleResponse<Post>(response)
    },

    create: async (post: Post) => {
      const response = await fetch(url + '/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      return handleResponse<void>(response)
    },

    edit: async (post: Post) => {
      const response = await fetch(url + '/posts', {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      return handleResponse<void>(response)
    },

    delete: async (id: string) => {
      const response = await fetch(url + `/posts/${id}`, {
        method: 'DELETE',
      })

      return handleResponse<void>(response)
    },
  }
}
