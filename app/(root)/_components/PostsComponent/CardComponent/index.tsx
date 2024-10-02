import { Card, CardDescription, CardHeader, CardTitle } from '@/shadcn/components/ui/card'

type Props = {
  title: string
  description: string
}

export function CardComponent({ title, description }: Props) {
  return (
    <Card className="min-h-[200px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
