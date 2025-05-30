import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Play, Clock, CheckCircle, Lock, Download, Star, Users } from "lucide-react"

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = {
    id: params.id,
    title: "React Avanzado",
    instructor: {
      name: "María García",
      avatar: "/placeholder.svg?height=60&width=60",
      bio: "Desarrolladora Full Stack con 8 años de experiencia",
      rating: 4.9,
      students: 12500,
    },
    description:
      "Aprende React con hooks, context y patrones avanzados para crear aplicaciones profesionales. Este curso te llevará desde conceptos intermedios hasta técnicas avanzadas de desarrollo.",
    image: "/placeholder.svg?height=300&width=500",
    progress: 67,
    totalLessons: 12,
    completedLessons: 8,
    duration: "12h 30m",
    level: "Avanzado",
    category: "Frontend",
    rating: 4.8,
    students: 1234,
    lastAccessed: "Hace 2 horas",
    enrolledDate: "2024-01-10",
  }

  const lessons = [
    {
      id: "1",
      title: "Introducción a React Hooks",
      duration: "15:30",
      completed: true,
      locked: false,
      type: "video",
    },
    {
      id: "2",
      title: "useState y useEffect en profundidad",
      duration: "22:45",
      completed: true,
      locked: false,
      type: "video",
    },
    {
      id: "3",
      title: "useContext y Context API",
      duration: "18:20",
      completed: true,
      locked: false,
      type: "video",
    },
    {
      id: "4",
      title: "useReducer para estado complejo",
      duration: "25:10",
      completed: true,
      locked: false,
      type: "video",
    },
    {
      id: "5",
      title: "Custom Hooks - Parte 1",
      duration: "20:15",
      completed: true,
      locked: false,
      type: "video",
    },
    {
      id: "6",
      title: "Custom Hooks - Parte 2",
      duration: "19:30",
      completed: true,
      locked: false,
      type: "video",
    },
    {
      id: "7",
      title: "Ejercicio Práctico: Todo App",
      duration: "35:45",
      completed: true,
      locked: false,
      type: "exercise",
    },
    {
      id: "8",
      title: "React.memo y optimización",
      duration: "16:40",
      completed: true,
      locked: false,
      type: "video",
    },
    {
      id: "9",
      title: "useCallback y useMemo",
      duration: "21:25",
      completed: false,
      locked: false,
      type: "video",
      current: true,
    },
    {
      id: "10",
      title: "Patrones avanzados de componentes",
      duration: "28:15",
      completed: false,
      locked: false,
      type: "video",
    },
    {
      id: "11",
      title: "Testing con React Testing Library",
      duration: "32:20",
      completed: false,
      locked: false,
      type: "video",
    },
    {
      id: "12",
      title: "Proyecto Final",
      duration: "45:30",
      completed: false,
      locked: false,
      type: "project",
    },
  ]

  const currentLesson = lessons.find((lesson) => lesson.current)

  return (
    <div className="space-y-6">
      {/* Course Header */}
      <Card>
        <CardContent className="p-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <Badge variant="outline">{course.category}</Badge>
                <Badge variant="secondary">{course.level}</Badge>
              </div>

              <h1 className="text-3xl font-bold">{course.title}</h1>
              <p className="text-muted-foreground">{course.description}</p>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students.toLocaleString()} estudiantes</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progreso del curso</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-3" />
                <p className="text-xs text-muted-foreground">
                  {course.completedLessons} de {course.totalLessons} lecciones completadas
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Instructor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} />
                      <AvatarFallback>MG</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{course.instructor.name}</h3>
                      <p className="text-sm text-muted-foreground">{course.instructor.bio}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.instructor.rating}</span>
                    </div>
                    <span>{course.instructor.students.toLocaleString()} estudiantes</span>
                  </div>
                </CardContent>
              </Card>

              {currentLesson && (
                <Button className="w-full" size="lg">
                  <Play className="mr-2 h-4 w-4" />
                  Continuar: {currentLesson.title}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Contenido del Curso</CardTitle>
              <CardDescription>
                {course.totalLessons} lecciones • {course.duration}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {lessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                      lesson.current
                        ? "bg-blue-50 border-blue-200"
                        : lesson.completed
                          ? "bg-green-50 border-green-200"
                          : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                        {lesson.completed ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : lesson.locked ? (
                          <Lock className="h-4 w-4 text-gray-400" />
                        ) : (
                          <span className="text-sm font-medium">{index + 1}</span>
                        )}
                      </div>
                      <div>
                        <h3 className={`font-medium ${lesson.current ? "text-blue-700" : ""}`}>{lesson.title}</h3>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{lesson.duration}</span>
                          <Badge variant="outline" className="text-xs">
                            {lesson.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <Button
                      variant={lesson.current ? "default" : lesson.completed ? "outline" : "ghost"}
                      size="sm"
                      disabled={lesson.locked}
                    >
                      {lesson.completed ? (
                        "Revisar"
                      ) : lesson.current ? (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Continuar
                        </>
                      ) : lesson.locked ? (
                        <Lock className="h-4 w-4" />
                      ) : (
                        <>
                          <Play className="mr-2 h-4 w-4" />
                          Iniciar
                        </>
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Course Info */}
          <Card>
            <CardHeader>
              <CardTitle>Información del Curso</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Inscrito:</span>
                <span className="text-sm">{course.enrolledDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Último acceso:</span>
                <span className="text-sm">{course.lastAccessed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Progreso:</span>
                <span className="text-sm">{course.progress}%</span>
              </div>
              <Separator />
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Descargar recursos
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Star className="mr-2 h-4 w-4" />
                Calificar curso
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                Foro de discusión
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                Certificado (67% completado)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
