import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2 } from "lucide-react"
import Image from "next/image"

export default function CategoriesPage() {
  const categories = [
    {
      id: "1",
      name: "Frontend",
      description: "Desarrollo de interfaces de usuario y experiencia del usuario",
      image: "/placeholder.svg?height=150&width=200",
      coursesCount: 12,
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: "2",
      name: "Backend",
      description: "Desarrollo del lado del servidor y APIs",
      image: "/placeholder.svg?height=150&width=200",
      coursesCount: 8,
      color: "bg-green-100 text-green-800",
    },
    {
      id: "3",
      name: "Full Stack",
      description: "Desarrollo completo de aplicaciones web",
      image: "/placeholder.svg?height=150&width=200",
      coursesCount: 5,
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: "4",
      name: "Mobile",
      description: "Desarrollo de aplicaciones móviles",
      image: "/placeholder.svg?height=150&width=200",
      coursesCount: 6,
      color: "bg-orange-100 text-orange-800",
    },
    {
      id: "5",
      name: "DevOps",
      description: "Operaciones de desarrollo y despliegue",
      image: "/placeholder.svg?height=150&width=200",
      coursesCount: 4,
      color: "bg-red-100 text-red-800",
    },
    {
      id: "6",
      name: "Data Science",
      description: "Análisis de datos y machine learning",
      image: "/placeholder.svg?height=150&width=200",
      coursesCount: 7,
      color: "bg-yellow-100 text-yellow-800",
    },
  ]

  const totalCourses = categories.reduce((sum, cat) => sum + cat.coursesCount, 0)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Categorías</h1>
          <p className="text-muted-foreground">Organiza tus cursos por categorías</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nueva Categoría
        </Button>
      </div>

      {/* Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Resumen de Categorías</CardTitle>
          <CardDescription>
            {categories.length} categorías con {totalCourses} cursos en total
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Categories Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.id} className="overflow-hidden">
            <div className="relative h-32">
              <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{category.name}</CardTitle>
                <Badge className={category.color}>{category.coursesCount} cursos</Badge>
              </div>
              <CardDescription className="line-clamp-2">{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Ver Cursos
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
