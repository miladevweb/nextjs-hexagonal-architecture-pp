import { validatePostId } from '../../domain/EntityValidations/ValidatePostId'
import type { PostRepository } from '../../domain/Repositories/PostRepository'
import { validatePostTitle } from '../../domain/EntityValidations/ValidatePostTitle'
import { validatePostDescription } from '../../domain/EntityValidations/ValidatePostDescription'

export type PostService = ReturnType<typeof postService>

export function postService(repository: PostRepository) {
  return {
    getAll: async () => await repository.getAll(),

    getById: async (id: string) => {
      validatePostId(id)
      return await repository.getById(id)
    },

    create: async (title: string, description: string) => {
      validatePostTitle(title)
      const mappedDescription = validatePostDescription(description)

      await repository.create({
        title,
        description: mappedDescription,
      })
    },

    edit: async (id: string, title: string, description: string) => {
      validatePostId(id)
      validatePostTitle(title)
      const mappedDescription = validatePostDescription(description)

      await repository.edit({
        id,
        title,
        description: mappedDescription,
      })
    },

    delete: async (id: string) => {
      validatePostId(id)

      await repository.delete(id)
    },
  }
}
