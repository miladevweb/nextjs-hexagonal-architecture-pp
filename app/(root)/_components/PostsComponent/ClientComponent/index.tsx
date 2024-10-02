'use client'
import { CardComponent } from '../CardComponent'
import { usePosts } from '@/shared/context/posts-context'

export default function ClientComponent() {
  const { posts } = usePosts()

  return (
    <>
      {posts.length
        ? posts.map(({ title, description }, i) => (
            <CardComponent
              key={i}
              title={title}
              description={description ?? ''}
            />
          ))
        : null}
    </>
  )
}
