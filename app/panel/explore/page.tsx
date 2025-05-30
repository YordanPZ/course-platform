import { fetchApi } from "@/api/fetch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Clock, Heart, ShoppingCart, Star, Users } from "lucide-react";
import Image from "next/image";
export default async function ExplorePage() {
  const courses = [
    {
      id: "1",
      title: "React Avanzado",
      instructor: "María García",
      description:
        "Aprende React con hooks, context y patrones avanzados para crear aplicaciones profesionales",
      image: "/placeholder.svg?height=200&width=300",
      price: 99,
      originalPrice: 149,
      rating: 4.8,
      students: 1234,
      duration: "12h 30m",
      lessons: 45,
      level: "Avanzado",
      category: "Frontend",
      bestseller: true,
    },
    {
      id: "2",
      title: "Node.js Completo",
      instructor: "Carlos López",
      description:
        "Desarrollo backend completo con Node.js, Express, MongoDB y despliegue en producción",
      image: "/placeholder.svg?height=200&width=300",
      price: 89,
      originalPrice: null,
      rating: 4.9,
      students: 2156,
      duration: "18h 45m",
      lessons: 67,
      level: "Intermedio",
      category: "Backend",
      bestseller: false,
    },
    {
      id: "3",
      title: "JavaScript Moderno ES6+",
      instructor: "Ana Martín",
      description:
        "Domina las características modernas de JavaScript y mejora tu código",
      image: "/placeholder.svg?height=200&width=300",
      price: 0,
      originalPrice: null,
      rating: 4.7,
      students: 3421,
      duration: "8h 20m",
      lessons: 32,
      level: "Principiante",
      category: "Frontend",
      bestseller: false,
    },
    {
      id: "4",
      title: "Python para Data Science",
      instructor: "Pedro Sánchez",
      description:
        "Análisis de datos, machine learning y visualización con Python",
      image: "/placeholder.svg?height=200&width=300",
      price: 129,
      originalPrice: 199,
      rating: 4.6,
      students: 987,
      duration: "22h 15m",
      lessons: 78,
      level: "Intermedio",
      category: "Data Science",
      bestseller: true,
    },
    {
      id: "5",
      title: "Vue.js Fundamentals",
      instructor: "Laura Ruiz",
      description:
        "Aprende Vue.js desde cero hasta crear aplicaciones completas",
      image: "/placeholder.svg?height=200&width=300",
      price: 79,
      originalPrice: 119,
      rating: 4.5,
      students: 756,
      duration: "10h 30m",
      lessons: 38,
      level: "Principiante",
      category: "Frontend",
      bestseller: false,
    },
    {
      id: "6",
      title: "DevOps con Docker y Kubernetes",
      instructor: "Miguel Torres",
      description: "Containerización y orquestación para aplicaciones modernas",
      image: "/placeholder.svg?height=200&width=300",
      price: 149,
      originalPrice: 229,
      rating: 4.8,
      students: 543,
      duration: "16h 45m",
      lessons: 56,
      level: "Avanzado",
      category: "DevOps",
      bestseller: false,
    },
  ];

  const categories = [
    "Todos",
    "Frontend",
    "Backend",
    "Full Stack",
    "Data Science",
    "DevOps",
    "Mobile",
  ];
  const levels = ["Todos", "Principiante", "Intermedio", "Avanzado"];
  const realCourses = await fetchApi("/cursos?filters[estado][$eq]=publicado");
  console.log(realCourses);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Explorar Cursos</h1>
        <p className="text-muted-foreground">
          Descubre nuevos conocimientos y habilidades
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Buscar</label>
              <Input placeholder="Buscar cursos..." />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">
                Categoría
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Nivel</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar nivel" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level.toLowerCase()}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Precio</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar precio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="free">Gratis</SelectItem>
                  <SelectItem value="paid">De pago</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {realCourses.map((course: any) => (
          <Card
            key={course.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <div className="relative h-48">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              {course.bestseller && (
                <Badge className="absolute top-2 left-2 bg-orange-500">
                  Bestseller
                </Badge>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                {/* <Badge variant="outline" className="mb-2">
                  {course.category}
                </Badge> */}
                <Badge variant="secondary">{course.level}</Badge>
              </div>
              <CardTitle className="line-clamp-2 text-lg">
                {course.titulo}
              </CardTitle>
              <CardDescription className="line-clamp-2">
                <BlocksRenderer content={course.descripcion} />
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">
                {/* <p>por {course.instructor}</p> */}
              </div>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.puntuacion}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{course.estudiantes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>
                    {Math.floor(course.duracion / 60)}h {course.duracion % 60}m
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {course.precio === 0 ? (
                    <span className="text-2xl font-bold text-green-600">
                      Gratis
                    </span>
                  ) : (
                    <>
                      <span className="text-2xl font-bold">
                        ${course.precio}
                      </span>
                      {/* {course.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${course.originalPrice}
                        </span>
                      )} */}
                    </>
                  )}
                </div>
              </div>

              <div className="flex space-x-2">
                <Button className="flex-1">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {course.precio === 0 ? "Inscribirse" : "Añadir al carrito"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
