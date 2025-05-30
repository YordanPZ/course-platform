import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Eye, TrendingUp, Clock, CheckCircle } from "lucide-react"

export default function ProgressPage() {
  const studentProgress = [
    {
      id: "1",
      user: {
        name: "Juan Pérez",
        email: "juan@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      course: "React Avanzado",
      totalLessons: 12,
      completedLessons: 8,
      progress: 67,
      lastActivity: "2024-01-15",
      timeSpent: "4h 30m",
      currentLesson: "Custom Hooks",
    },
    {
      id: "2",
      user: {
        name: "María García",
        email: "maria@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      course: "Node.js Básico",
      totalLessons: 8,
      completedLessons: 8,
      progress: 100,
      lastActivity: "2024-01-14",
      timeSpent: "6h 15m",
      currentLesson: "Completado",
    },
    {
      id: "3",
      user: {
        name: "Carlos López",
        email: "carlos@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      course: "Full Stack Development",
      totalLessons: 24,
      completedLessons: 7,
      progress: 29,
      lastActivity: "2024-01-13",
      timeSpent: "8h 45m",
      currentLesson: "Bases de datos",
    },
    {
      id: "4",
      user: {
        name: "Ana Martín",
        email: "ana@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      course: "JavaScript ES6+",
      totalLessons: 10,
      completedLessons: 2,
      progress: 20,
      lastActivity: "2024-01-10",
      timeSpent: "1h 20m",
      currentLesson: "Arrow Functions",
    },
    {
      id: "5",
      user: {
        name: "Pedro Sánchez",
        email: "pedro@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      course: "Vue.js Fundamentals",
      totalLessons: 15,
      completedLessons: 12,
      progress: 80,
      lastActivity: "2024-01-16",
      timeSpent: "7h 10m",
      currentLesson: "Vuex State Management",
    },
  ]

  const averageProgress = Math.round(
    studentProgress.reduce((sum, student) => sum + student.progress, 0) / studentProgress.length,
  )

  const completedCourses = studentProgress.filter((s) => s.progress === 100).length
  const activeLearners = studentProgress.filter((s) => s.progress > 0 && s.progress < 100).length

  const totalTimeSpent = studentProgress.reduce((total, student) => {
    const [hours, minutes] = student.timeSpent.split(" ")
    const h = Number.parseInt(hours.replace("h", ""))
    const m = Number.parseInt(minutes.replace("m", ""))
    return total + h * 60 + m
  }, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Progreso de Estudiantes</h1>
        <p className="text-muted-foreground">Seguimiento del avance en los cursos</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Progreso Promedio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageProgress}%</div>
            <Progress value={averageProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Cursos Completados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedCourses}</div>
            <p className="text-xs text-muted-foreground">Finalizados exitosamente</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Estudiantes Activos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeLearners}</div>
            <p className="text-xs text-muted-foreground">En progreso</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Tiempo Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.floor(totalTimeSpent / 60)}h {totalTimeSpent % 60}m
            </div>
            <p className="text-xs text-muted-foreground">Tiempo de estudio</p>
          </CardContent>
        </Card>
      </div>

      {/* Student Progress List */}
      <Card>
        <CardHeader>
          <CardTitle>Progreso Detallado</CardTitle>
          <CardDescription>Seguimiento individual del progreso de cada estudiante</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {studentProgress.map((student) => (
              <div key={student.id} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={student.user.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {student.user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{student.user.name}</h3>
                      <p className="text-sm text-muted-foreground">{student.course}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>
                      Progreso: {student.completedLessons}/{student.totalLessons} lecciones
                    </span>
                    <span className="font-medium">{student.progress}%</span>
                  </div>
                  <Progress value={student.progress} className="h-2" />

                  <div className="flex justify-between items-center text-xs text-muted-foreground mt-3">
                    <div className="flex items-center space-x-4">
                      <span>Lección actual: {student.currentLesson}</span>
                      <span>Tiempo: {student.timeSpent}</span>
                    </div>
                    <span>Última actividad: {student.lastActivity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
