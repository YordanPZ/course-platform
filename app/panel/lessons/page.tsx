import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Play, Clock } from "lucide-react"

export default function LessonsPage() {
  const lessons = [
    {
      id: "1",
      title: "Introducción a React Hooks",
      description: "Aprende los conceptos básicos de useState y useEffect",
      course: "React Avanzado",
      order: 1,
      duration: "15 min",
      videoUrl: "https://example.com/video1",
      content: "Contenido de la lección en markdown...",
      status: "Publicado",
    },
    {
      id: "2",
      title: "Context API y useContext",
      description: "Manejo de estado global con Context API",
      course: "React Avanzado",
      order: 2,
      duration: "22 min",
      videoUrl: "https://example.com/video2",
      content: "Contenido de la lección en markdown...",
      status: "Publicado",
    },
    {
      id: "3",
      title: "Custom Hooks",
      description: "Creación de hooks personalizados reutilizables",
      course: "React Avanzado",
      order: 3,
      duration: "18 min",
      videoUrl: null,
      content: "Contenido de la lección en markdown...",
      status: "Borrador",
    },
    {
      id: "4",
      title: "Configuración del entorno Node.js",
      description: "Instalación y configuración inicial de Node.js",
      course: "Node.js Básico",
      order: 1,
      duration: "12 min",
      videoUrl: "https://example.com/video4",
      content: "Contenido de la lección en markdown...",
      status: "Publicado",
    },
    {
      id: "5",
      title: "Creando tu primer servidor",
      description: "Servidor HTTP básico con Node.js",
      course: "Node.js Básico",
      order: 2,
      duration: "25 min",
      videoUrl: "https://example.com/video5",
      content: "Contenido de la lección en markdown...",
      status: "Publicado",
    },
  ]

  const courses = [...new Set(lessons.map((lesson) => lesson.course))]
  const publishedLessons = lessons.filter((lesson) => lesson.status === "Publicado").length
  const totalDuration = lessons.reduce((total, lesson) => {
    const minutes = Number.parseInt(lesson.duration.split(" ")[0])
    return total + minutes
  }, 0)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Lecciones</h1>
          <p className="text-muted-foreground">Gestiona el contenido de tus cursos</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nueva Lección
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Lecciones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{lessons.length}</div>
            <p className="text-xs text-muted-foreground">En {courses.length} cursos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Publicadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{publishedLessons}</div>
            <p className="text-xs text-muted-foreground">Disponibles para estudiantes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Duración Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.floor(totalDuration / 60)}h {totalDuration % 60}m
            </div>
            <p className="text-xs text-muted-foreground">Contenido de video</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Con Video</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{lessons.filter((l) => l.videoUrl).length}</div>
            <p className="text-xs text-muted-foreground">Lecciones con video</p>
          </CardContent>
        </Card>
      </div>

      {/* Lessons by Course */}
      {courses.map((courseName) => (
        <Card key={courseName}>
          <CardHeader>
            <CardTitle>{courseName}</CardTitle>
            <CardDescription>{lessons.filter((l) => l.course === courseName).length} lecciones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {lessons
                .filter((lesson) => lesson.course === courseName)
                .sort((a, b) => a.order - b.order)
                .map((lesson) => (
                  <div key={lesson.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-sm font-medium">
                        {lesson.order}
                      </div>
                      <div>
                        <h3 className="font-medium">{lesson.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">{lesson.description}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                          {lesson.videoUrl && (
                            <>
                              <Play className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">Con video</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Badge variant={lesson.status === "Publicado" ? "default" : "secondary"}>{lesson.status}</Badge>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
