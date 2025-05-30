import { getMyCourses } from "@/api/fetch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Clock, CreditCard, Download, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function MyCoursesPage() {
  const myCourses = [
    {
      id: "1",
      title: "React Avanzado",
      instructor: "María García",
      image: "/placeholder.svg?height=200&width=300",
      progress: 67,
      status: "En progreso",
      enrolledDate: "2024-01-10",
      lastAccessed: "Hace 2 horas",
      totalLessons: 12,
      completedLessons: 8,
      nextLesson: "Custom Hooks",
      timeSpent: "8h 30m",
      certificate: false,
    },
    {
      id: "2",
      title: "Node.js Básico",
      instructor: "Juan Pérez",
      image: "/placeholder.svg?height=200&width=300",
      progress: 100,
      status: "Completado",
      enrolledDate: "2023-12-15",
      lastAccessed: "Hace 3 días",
      totalLessons: 8,
      completedLessons: 8,
      nextLesson: null,
      timeSpent: "12h 15m",
      certificate: true,
    },
    {
      id: "3",
      title: "Full Stack Development",
      instructor: "Carlos López",
      image: "/placeholder.svg?height=200&width=300",
      progress: 29,
      status: "En progreso",
      enrolledDate: "2024-01-08",
      lastAccessed: "Hace 1 día",
      totalLessons: 24,
      completedLessons: 7,
      nextLesson: "Bases de datos con MongoDB",
      timeSpent: "15h 45m",
      certificate: false,
    },
    {
      id: "4",
      title: "JavaScript ES6+",
      instructor: "Ana Martín",
      image: "/placeholder.svg?height=200&width=300",
      progress: 100,
      status: "Completado",
      enrolledDate: "2023-11-20",
      lastAccessed: "Hace 1 semana",
      totalLessons: 10,
      completedLessons: 10,
      nextLesson: null,
      timeSpent: "6h 20m",
      certificate: true,
    },
  ];

  const inProgressCourses = myCourses.filter(
    (course) => course.status === "En progreso"
  );
  const completedCourses = myCourses.filter(
    (course) => course.status === "Completado"
  );
  const totalTimeSpent = myCourses.reduce((total, course) => {
    const [hours, minutes] = course.timeSpent.split(" ");
    const h = Number.parseInt(hours.replace("h", ""));
    const m = Number.parseInt(minutes.replace("m", ""));
    return total + h * 60 + m;
  }, 0);

  const courses = await getMyCourses();

  console.log(courses, "courses");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mis Cursos</h1>
        <p className="text-muted-foreground">
          Gestiona tu progreso de aprendizaje
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Cursos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{courses.length}</div>
            <p className="text-xs text-muted-foreground">Inscritos</p>
          </CardContent>
        </Card>

        {/* <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">En Progreso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inProgressCourses.length}</div>
            <p className="text-xs text-muted-foreground">Activos</p>
          </CardContent>
        </Card> */}

        {/* <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedCourses.length}</div>
            <p className="text-xs text-muted-foreground">Con certificado</p>
          </CardContent>
        </Card> */}

        {/* <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Tiempo Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.floor(totalTimeSpent / 60)}h {totalTimeSpent % 60}m
            </div>
            <p className="text-xs text-muted-foreground">Estudiado</p>
          </CardContent>
        </Card> */}
      </div>

      {/* All Courses */}
      <Card>
        <CardHeader>
          <CardTitle>Todos mis Cursos</CardTitle>
          <CardDescription>Historial completo de cursos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {courses.map((course: any) => (
              <div
                key={course.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-14 rounded overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{course.curso.titulo}</h3>
                    <p className="text-sm text-muted-foreground">
                      por {course.curso.instructor}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-1">
                      <span>Inscrito: {course.createdAt}</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{course.duracion}h</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <Badge
                      variant={
                        course.estado === "Pagado" ? "default" : "secondary"
                      }
                    >
                      {course.estado}
                    </Badge>
                    <div className="text-sm text-muted-foreground mt-1">
                      {course.puntuacion}% completado
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    {course.certificate && (
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Certificado
                      </Button>
                    )}
                    <Button size="sm" asChild>
                      <Link href={`/course/${course.id}`}>
                        {course.estado === "pagado" ? (
                          <>
                            <BookOpen className="mr-2 h-4 w-4" />
                            Ver curso
                          </>
                        ) : (
                          <>
                            <CreditCard className="mr-2 h-4 w-4" />
                            Reintentar pago
                          </>
                        )}
                      </Link>
                    </Button>
                    {course.estado === "Pagado" && (
                      <Button variant="outline" size="sm">
                        <Star className="mr-2 h-4 w-4" />
                        Calificar
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
