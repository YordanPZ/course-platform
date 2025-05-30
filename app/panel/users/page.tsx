import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Edit, Trash2 } from "lucide-react"

export default function UsersPage() {
  const users = [
    {
      id: "1",
      name: "Juan Pérez",
      email: "juan@example.com",
      role: "Estudiante",
      avatar: "/placeholder.svg?height=40&width=40",
      courses: 3,
      status: "Activo",
    },
    {
      id: "2",
      name: "María García",
      email: "maria@example.com",
      role: "Profesor",
      avatar: "/placeholder.svg?height=40&width=40",
      courses: 5,
      status: "Activo",
    },
    {
      id: "3",
      name: "Carlos López",
      email: "carlos@example.com",
      role: "Administrador",
      avatar: "/placeholder.svg?height=40&width=40",
      courses: 0,
      status: "Activo",
    },
    {
      id: "4",
      name: "Ana Martín",
      email: "ana@example.com",
      role: "Estudiante",
      avatar: "/placeholder.svg?height=40&width=40",
      courses: 2,
      status: "Inactivo",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Usuarios</h1>
          <p className="text-muted-foreground">Gestiona todos los usuarios de la plataforma</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Usuario
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Usuarios</CardTitle>
          <CardDescription>{users.length} usuarios registrados en total</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={user.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Badge
                    variant={
                      user.role === "Administrador" ? "default" : user.role === "Profesor" ? "secondary" : "outline"
                    }
                  >
                    {user.role}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{user.courses} cursos</span>
                  <Badge variant={user.status === "Activo" ? "default" : "secondary"}>{user.status}</Badge>
                  <div className="flex space-x-2">
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
    </div>
  )
}
