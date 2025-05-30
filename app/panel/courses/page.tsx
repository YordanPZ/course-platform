import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Eye } from "lucide-react"
import Image from "next/image"

export default function CoursesPage() {
  const courses = [
    {
      id: "1",
      title: "React Avanzado",
      description: "Aprende React con hooks, context y patrones avanzados",
      image: "/placeholder.svg?height=200&width=300",
      price: 99,
      status: "Publicado",
      professor: "María García",
      students: 45,
      lessons: 12,
      category: "Frontend",
    },
    {
      id: "2",
      title: "Node.js Básico",
      description: "Fundamentos de desarrollo backend con Node.js",
      image: "/placeholder.svg?height=200&width=300",
      price: 79,
      status: "Borrador",
      professor: "Juan Pérez",
      students: 0,
      lessons: 8,
      category: "Backend",
    },
    {
      id: "3",
      title: "Full Stack Development",
      description: "Curso completo de desarrollo web full stack",
      image: "/placeholder.svg?height=200&width=300",
      price: 199,
      status: "Publicado",
      professor: "Carlos López",
      students: 78,
      lessons: 24,
      category: "Full Stack",
    },
    {
      id: "4",
      title: "JavaScript ES6+",
      description: "Características modernas de JavaScript",
      image: "/placeholder.svg?height=200&width=300",
      price: 0,
      status: "Publicado",
      professor: "Ana Martín",
      students: 156,
      lessons: 10,
      category: "Frontend",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Cursos</h1>
          <p className="text-muted-foreground">Gestiona el catálogo de cursos</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Curso
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              <Badge
                className="absolute top-2 right-2"
                variant={course.status === "Publicado" ? "default" : "secondary"}
              >
                {course.status}
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-1">{course.title}</CardTitle>
              <CardDescription className="line-clamp-2">{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{course.price === 0 ? "Gratis" : `$${course.price}`}</span>
                  <Badge variant="outline">{course.category}</Badge>
                </div>

                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Profesor: {course.professor}</p>
                  <p>
                    {course.students} estudiantes • {course.lessons} lecciones
                  </p>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="mr-2 h-4 w-4" />
                    Ver
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
