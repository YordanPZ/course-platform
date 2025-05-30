import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, UserX } from "lucide-react"

export default function EnrollmentsPage() {
  const enrollments = [
    {
      id: "1",
      user: {
        name: "Juan Pérez",
        email: "juan@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      course: {
        title: "React Avanzado",
        price: 99,
      },
      startDate: "2024-01-15",
      endDate: null,
      status: "activo",
      progress: 65,
      paymentMethod: "Tarjeta de crédito",
    },
    {
      id: "2",
      user: {
        name: "María García",
        email: "maria@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      course: {
        title: "Node.js Básico",
        price: 79,
      },
      startDate: "2024-01-10",
      endDate: "2024-01-25",
      status: "completado",
      progress: 100,
      paymentMethod: "PayPal",
    },
    {
      id: "3",
      user: {
        name: "Carlos López",
        email: "carlos@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      course: {
        title: "Full Stack Development",
        price: 199,
      },
      startDate: "2024-01-08",
      endDate: null,
      status: "activo",
      progress: 30,
      paymentMethod: "Tarjeta de débito",
    },
    {
      id: "4",
      user: {
        name: "Ana Martín",
        email: "ana@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      course: {
        title: "JavaScript ES6+",
        price: 0,
      },
      startDate: "2024-01-05",
      endDate: null,
      status: "cancelado",
      progress: 15,
      paymentMethod: "Gratis",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "activo":
        return "default"
      case "completado":
        return "secondary"
      case "cancelado":
        return "destructive"
      default:
        return "outline"
    }
  }

  const activeEnrollments = enrollments.filter((e) => e.status === "activo").length
  const completedEnrollments = enrollments.filter((e) => e.status === "completado").length
  const totalRevenue = enrollments.filter((e) => e.status !== "cancelado").reduce((sum, e) => sum + e.course.price, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Suscripciones</h1>
        <p className="text-muted-foreground">Gestión de inscripciones de estudiantes</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Suscripciones Activas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeEnrollments}</div>
            <p className="text-xs text-muted-foreground">Estudiantes activos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Cursos Completados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedEnrollments}</div>
            <p className="text-xs text-muted-foreground">Finalizados exitosamente</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ingresos por Suscripciones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue}</div>
            <p className="text-xs text-muted-foreground">Total generado</p>
          </CardContent>
        </Card>
      </div>

      {/* Enrollments List */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Suscripciones</CardTitle>
          <CardDescription>Todas las inscripciones de estudiantes a cursos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {enrollments.map((enrollment) => (
              <div key={enrollment.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={enrollment.user.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {enrollment.user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{enrollment.user.name}</h3>
                    <p className="text-sm text-muted-foreground">{enrollment.course.title}</p>
                    <p className="text-xs text-muted-foreground">
                      Inicio: {enrollment.startDate}
                      {enrollment.endDate && ` • Fin: ${enrollment.endDate}`}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">Progreso: {enrollment.progress}%</p>
                    <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${enrollment.progress}%` }}></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {enrollment.course.price === 0 ? "Gratis" : `$${enrollment.course.price}`}
                    </p>
                    <p className="text-xs text-muted-foreground">{enrollment.paymentMethod}</p>
                  </div>
                  <Badge variant={getStatusColor(enrollment.status)}>{enrollment.status}</Badge>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <UserX className="h-4 w-4" />
                    </Button>
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
