'use client'
import { useForm } from 'react-hook-form'
import { Form } from '@/shadcn/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/shadcn/components/ui/button'
import { postService } from '@/lib/post/application/Services'
import { axiosPostRepository } from '@/lib/post/infrastructure/Repositories/AxiosPostRepository'
import { createPostSchema, CreatePostSchema } from '@/lib/post/infrastructure/Schemas/PostSchema'
import { FormFieldComponent } from '@/shared/components/FormField'
import { AxiosError } from 'axios'
import { toast } from 'sonner'
import { fetchPostRepository } from '@/lib/post/infrastructure/Repositories/FetchPostRepository'

const repository = axiosPostRepository()
const service = postService(repository)

export function FormComponent() {
  const form = useForm<CreatePostSchema>({
    resolver: zodResolver(createPostSchema),

    defaultValues: {
      title: '',
    },
  })

  const onSubmit = async ({ title, description }: CreatePostSchema) => {
    const submitPromise = service.create(title, description ?? '')

    toast.promise(submitPromise, {
      success: 'Post created successfully',

      loading: 'Creating post...',

      error: (error) => {
        if (error instanceof AxiosError) {
          return error.response ? error.response.data.message : error.message
        } else if (error instanceof Error) {
          return error.message === 'Failed to fetch' ? 'Network Error' : error.message
        }

        return 'Something went wrong'
      },
    })
  }

  return (
    <div className="grid place-items-center py-5">
      <Form {...form}>
        <form
          autoComplete="off"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-[330px] sm:w-[350px] px-5 pt-8 pb-5 rounded-lg border border-input"
        >
          {['title', 'description'].map((label, i) => (
            <FormFieldComponent
              key={i}
              form={form}
              label={label}
            />
          ))}

          <div className="flex justify-end">
            <Button>Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
