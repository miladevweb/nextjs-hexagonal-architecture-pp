'use client'
import { Post } from '@/lib/post/domain/Entity/Post'
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'


type Props = {
  posts: Post[]
  setPosts: Dispatch<SetStateAction<Post[]>>
}

const PostsContext = createContext<Props>(null!)

export default function PostsProvider({ children }: { children: React.ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([])

  return <PostsContext.Provider value={{ posts, setPosts }}>{children}</PostsContext.Provider>
}

export function usePosts() {
  const context = useContext(PostsContext)
  return context
}
