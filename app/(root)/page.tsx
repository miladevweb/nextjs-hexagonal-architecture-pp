import { Suspense } from 'react'
import { FormComponent } from './_components/FormComponent'
import { PostsComponent } from './_components/PostsComponent'

export default function Home() {
  return (
    <div className="h-screen-w-navbar grid grid-cols-1 justify-between xl:grid-cols-[40%_60%]">
      <FormComponent />

      <Suspense fallback={<div className="fallback">Loading....</div>}>
        <PostsComponent />
      </Suspense>
    </div>
  )
}
