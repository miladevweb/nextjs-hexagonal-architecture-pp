import { UseFormReturn } from 'react-hook-form'
import { Input } from '@/shadcn/components/ui/input'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shadcn/components/ui/form'

type Props = {
  label: string
  form: UseFormReturn<any>
}

export function FormFieldComponent({ label, form }: Props) {
  return (
    <FormField
      name={label}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{label}</FormLabel>

          <FormControl>
            <Input
              autoFocus
              {...field}
              placeholder="Write your Title here...."
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
