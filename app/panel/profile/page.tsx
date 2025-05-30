import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Edit, Camera, Trophy, BookOpen, Clock, Star } from "lucide-react"

export default function ProfilePage() {
  const userProfile = {
    name: "Juan Pérez",
    email: "juan.perez@email.com",
    avatar: "/placeholder.svg?height=120&width=120",
    bio: "Desarrollador Frontend apasionado por React y las nuevas tecnologías. Siempre buscando aprender y mejorar mis habilidades.",
    location: "Madrid, España",
    joinDate: "Enero 2023",
    website: "https://juanperez.dev",
    linkedin: "linkedin.com/in/juanperez",
    github: "github.com/juanperez",
  }

  const stats = {
    coursesCompleted: 4,
    coursesInProgress: 2,
    totalHours: 45,
    certificates: 3,
    averageRating: 4.8,
  }

  const achievements = [
    {
      id: "1",
      title: "Primer Curso Completado",
      description: "Completaste tu primer curso",
      icon: "🎯",
      earned: true,
      date: "Dic 2023",
    },
    {
      id: "2",
      title: "Estudiante Dedicado",
      description: "10 horas de estudio en una semana",
      icon: "📚",
      earned: true,
      date: "Ene 2024",
    },
    {
      id: "3",
      title: "Experto en React",
      description: "Completaste 3 cursos de React",
      icon: "⚛️",
      earned: true,
      date: "Ene 2024",
    },
    {
      id: "4",
      title: "Maratonista",
      description: "50 horas de estudio total",
      icon: "🏃‍♂️",
      earned: false,
      progress: 90,
    },
    {
      id: "5",
      title: "Coleccionista",
      description: "Obtén 5 certificados",
      icon: "🏆",
      earned: false,
      progress: 60,
    },
  ]

  const recentCertificates = [
    {
      id: "1",
      course: "React Avanzado",
      date: "Enero 2024",
      instructor: "María García",
    },
    {
      id: "2",
      course: "Node.js Básico",
      date: "Diciembre 2023",
      instructor: "Juan Pérez",
    },
    {
      id: "3",
      course: "JavaScript ES6+",
      date: "Noviembre 2023",
      instructor: "Ana Martín",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mi Perfil</h1>
        <p className="text-muted-foreground">Gestiona tu información personal y progreso</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle>Información Personal</CardTitle>
              <CardDescription>Actualiza tu información de perfil</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={userProfile.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="text-lg">JP</AvatarFallback>
                  </Avatar>
                  <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8">
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input id="name" defaultValue={userProfile.name} />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={userProfile.email} />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="bio">Biografía</Label>
                    <Textarea id="bio" defaultValue={userProfile.bio} rows={3} />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="location">Ubicación</Label>
                      <Input id="location" defaultValue={userProfile.location} />
                    </div>
                    <div>
                      <Label htmlFor="website">Sitio web</Label>
                      <Input id="website" defaultValue={userProfile.website} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button>
                  <Edit className="mr-2 h-4 w-4" />
                  Guardar Cambios
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Logros</CardTitle>
              <CardDescription>Tus logros y progreso en la plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-4 border rounded-lg ${
                      achievement.earned ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-medium">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        {achievement.earned ? (
                          <Badge variant="secondary" className="mt-2">
                            Obtenido en {achievement.date}
                          </Badge>
                        ) : (
                          <div className="mt-2 space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>Progreso</span>
                              <span>{achievement.progress}%</span>
                            </div>
                            <Progress value={achievement.progress} className="h-2" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Estadísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm">Cursos Completados</span>
                </div>
                <span className="font-bold">{stats.coursesCompleted}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">En Progreso</span>
                </div>
                <span className="font-bold">{stats.coursesInProgress}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Horas Totales</span>
                </div>
                <span className="font-bold">{stats.totalHours}h</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-purple-600" />
                  <span className="text-sm">Certificados</span>
                </div>
                <span className="font-bold">{stats.certificates}</span>
              </div>
            </CardContent>
          </Card>

          {/* Recent Certificates */}
          <Card>
            <CardHeader>
              <CardTitle>Certificados Recientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentCertificates.map((cert) => (
                  <div key={cert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-sm">{cert.course}</h4>
                      <p className="text-xs text-muted-foreground">por {cert.instructor}</p>
                      <p className="text-xs text-muted-foreground">{cert.date}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Ver
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                Cambiar contraseña
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Configurar notificaciones
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Descargar datos
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Eliminar cuenta
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
