import ConstruccionPage from "@/components/EnConstruccion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Play, Star, TrendingUp, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StudentDashboard() {
  return <ConstruccionPage />;
  const studentStats = {
    coursesEnrolled: 4,
    coursesCompleted: 2,
    totalHours: 28,
    certificates: 2,
  };

  const currentCourses = [
    {
      id: "1",
      title: "React Avanzado",
      instructor: "María García",
      progress: 67,
      nextLesson: "Custom Hooks",
      image: "/placeholder.svg?height=200&width=300",
      totalLessons: 12,
      completedLessons: 8,
      estimatedTime: "2h 30m restantes",
    },
    {
      id: "2",
      title: "Full Stack Development",
      instructor: "Carlos López",
      progress: 29,
      nextLesson: "Bases de datos con MongoDB",
      image: "/placeholder.svg?height=200&width=300",
      totalLessons: 24,
      completedLessons: 7,
      estimatedTime: "12h 15m restantes",
    },
  ];

  const recentActivity = [
    {
      type: "lesson_completed",
      title: "Completaste: Context API y useContext",
      course: "React Avanzado",
      time: "Hace 2 horas",
    },
    {
      type: "course_started",
      title: "Comenzaste: Full Stack Development",
      course: "Full Stack Development",
      time: "Hace 1 día",
    },
    {
      type: "certificate_earned",
      title: "¡Certificado obtenido en Node.js Básico!",
      course: "Node.js Básico",
      time: "Hace 3 días",
    },
  ];

  const recommendedCourses = [
    {
      id: "3",
      title: "Vue.js Fundamentals",
      instructor: "Ana Martín",
      price: 89,
      rating: 4.8,
      students: 1234,
      image: "/placeholder.svg?height=200&width=300",
      level: "Intermedio",
    },
    {
      id: "4",
      title: "Python para Principiantes",
      instructor: "Pedro Sánchez",
      price: 0,
      rating: 4.9,
      students: 2567,
      image: "/placeholder.svg?height=200&width=300",
      level: "Principiante",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">¡Hola Juan! 👋</h1>
        <p className="text-muted-foreground">
          Continúa tu aprendizaje donde lo dejaste
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Cursos Inscritos
            </CardTitle>
            <BookOpen className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {studentStats.coursesEnrolled}
            </div>
            <p className="text-xs text-muted-foreground">2 en progreso</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completados</CardTitle>
            <Trophy className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {studentStats.coursesCompleted}
            </div>
            <p className="text-xs text-muted-foreground">Con certificado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Horas de Estudio
            </CardTitle>
            <Clock className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{studentStats.totalHours}h</div>
            <p className="text-xs text-muted-foreground">Este mes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certificados</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {studentStats.certificates}
            </div>
            <p className="text-xs text-muted-foreground">Obtenidos</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Continue Learning */}
          <Card>
            <CardHeader>
              <CardTitle>Continúa Aprendiendo</CardTitle>
              <CardDescription>
                Retoma tus cursos donde los dejaste
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center space-x-4 p-4 border rounded-lg"
                >
                  <div className="relative w-20 h-14 rounded overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div>
                      <h3 className="font-medium">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        por {course.instructor}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>
                          {course.completedLessons}/{course.totalLessons}{" "}
                          lecciones
                        </span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        Siguiente: {course.nextLesson}
                      </p>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/course/${course.id}`}>
                      <Play className="mr-2 h-4 w-4" />
                      Continuar
                    </Link>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recommended Courses */}
          <Card>
            <CardHeader>
              <CardTitle>Cursos Recomendados</CardTitle>
              <CardDescription>
                Basado en tus intereses y progreso
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {recommendedCourses.map((course) => (
                  <div
                    key={course.id}
                    className="border rounded-lg overflow-hidden"
                  >
                    <div className="relative h-32">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <Badge
                        className="absolute top-2 right-2"
                        variant="secondary"
                      >
                        {course.level}
                      </Badge>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-medium line-clamp-1">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        por {course.instructor}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{course.rating}</span>
                          <span className="text-xs text-muted-foreground">
                            ({course.students})
                          </span>
                        </div>
                        <span className="font-bold">
                          {course.price === 0 ? "Gratis" : `$${course.price}`}
                        </span>
                      </div>
                      <Button className="w-full" variant="outline" asChild>
                        <Link href={`/course/${course.id}`}>Ver Curso</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Actividad Reciente</CardTitle>
              <CardDescription>Tu progreso de aprendizaje</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.course}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
