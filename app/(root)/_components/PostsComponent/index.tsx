import styles from './index.module.css'
import { CardComponent } from './CardComponent'
import { postService } from '@/lib/post/application/Services'
import { axiosPostRepository } from '@/lib/post/infrastructure/Repositories/AxiosPostRepository'
import { fetchPostRepository } from '@/lib/post/infrastructure/Repositories/FetchPostRepository'

// const repository = axiosPostRepository()
const repository = fetchPostRepository()
const service = postService(repository)

async function getPosts() {
  try {
    await new Promise((res) => setTimeout(res, 1000))

    const posts = await service.getAll()
    return posts
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.stack)
      console.log(error.message, '❌❌❌')
    }
  }
}

export async function PostsComponent() {
  const posts = await getPosts()

  if (!posts) return <div className="fallback">There was an error on your request. Please try again later.</div>

  return (
    <div className={`${styles.container} overflow-auto`}>
      {posts.length ? (
        <div className="grid gap-x-9 gap-y-5 pt-0 p-5 xl:pt-5 md:grid-cols-2">
          {posts.map(({ title, description, id }) => (
            <CardComponent
              key={id}
              title={title}
              description={description ?? ''}
            />
          ))}
        </div>
      ) : (
        <div className="fallback">Create your first post right now!!!</div>
      )}
    </div>
  )
}
