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
import { Calendar, Download, Eye, Trophy, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OlympiadsHistoryPage() {
  const historicalOlympiads = [
    {
      id: "hist-1",
      title: "Olimpiada Nacional de Matemáticas 2023",
      year: "2023",
      date: "15-17 Noviembre 2023",
      participants: 1850,
      winner: "María González",
      winnerSchool: "Universidad Autónoma",
      image: "/placeholder.svg?height=200&width=300",
      categories: ["Álgebra", "Geometría", "Cálculo", "Estadística"],
      location: "Ciudad de México",
      hasProblems: true,
      hasResults: true,
    },
    {
      id: "hist-2",
      title: "Copa Universitaria de Matemáticas 2023",
      year: "2023",
      date: "20-21 Septiembre 2023",
      participants: 1200,
      winner: "Carlos Mendoza",
      winnerSchool: "Instituto Tecnológico",
      image: "/placeholder.svg?height=200&width=300",
      categories: ["Álgebra Lineal", "Análisis", "Probabilidad"],
      location: "Guadalajara",
      hasProblems: true,
      hasResults: true,
    },
    {
      id: "hist-3",
      title: "Desafío de Matemáticas Aplicadas 2023",
      year: "2023",
      date: "10-12 Mayo 2023",
      participants: 980,
      winner: "Ana Rodríguez",
      winnerSchool: "Universidad Nacional",
      image: "/placeholder.svg?height=200&width=300",
      categories: ["Matemáticas Financieras", "Optimización", "Modelado"],
      location: "Monterrey",
      hasProblems: true,
      hasResults: true,
    },
    {
      id: "hist-4",
      title: "Olimpiada Nacional de Matemáticas 2022",
      year: "2022",
      date: "18-20 Noviembre 2022",
      participants: 1650,
      winner: "Luis Hernández",
      winnerSchool: "Universidad Central",
      image: "/placeholder.svg?height=200&width=300",
      categories: ["Álgebra", "Geometría", "Cálculo", "Teoría de Números"],
      location: "Ciudad de México",
      hasProblems: true,
      hasResults: true,
    },
    {
      id: "hist-5",
      title: "Copa Regional de Matemáticas 2022",
      year: "2022",
      date: "15-16 Agosto 2022",
      participants: 800,
      winner: "Sofia Martínez",
      winnerSchool: "Instituto Politécnico",
      image: "/placeholder.svg?height=200&width=300",
      categories: ["Álgebra", "Geometría", "Estadística"],
      location: "Puebla",
      hasProblems: true,
      hasResults: true,
    },
    {
      id: "hist-6",
      title: "Olimpiada Juvenil de Matemáticas 2022",
      year: "2022",
      date: "22-23 Abril 2022",
      participants: 1100,
      winner: "Diego López",
      winnerSchool: "Preparatoria Nacional",
      image: "/placeholder.svg?height=200&width=300",
      categories: ["Álgebra Básica", "Geometría", "Aritmética"],
      location: "Tijuana",
      hasProblems: true,
      hasResults: true,
    },
  ];

  const years = ["Todos", "2023", "2022", "2021", "2020"];
  const categories = [
    "Todas",
    "Álgebra",
    "Geometría",
    "Cálculo",
    "Estadística",
    "Teoría de Números",
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Historial de Olimpiadas</h1>
        <p className="text-muted-foreground">
          Explora olimpiadas pasadas, problemas y resultados
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filtros de Búsqueda</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Buscar</label>
              <Input placeholder="Nombre de olimpiada..." />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Año</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar año" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toLowerCase()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
              <label className="text-sm font-medium mb-2 block">
                Ubicación
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar ciudad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="cdmx">Ciudad de México</SelectItem>
                  <SelectItem value="guadalajara">Guadalajara</SelectItem>
                  <SelectItem value="monterrey">Monterrey</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Historical Olympiads Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {historicalOlympiads.map((olympiad) => (
          <Card
            key={olympiad.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={olympiad.image || "/placeholder.svg"}
                alt={olympiad.title}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-2 left-2 bg-gray-800">
                {olympiad.year}
              </Badge>
            </div>

            <CardHeader className="pb-2">
              <CardTitle className="line-clamp-2 text-lg">
                {olympiad.title}
              </CardTitle>
              <CardDescription>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{olympiad.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4" />
                    <span>{olympiad.participants} participantes</span>
                  </div>
                </div>
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-2">Ganador</h4>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-yellow-600" />
                  <div>
                    <p className="text-sm font-medium">{olympiad.winner}</p>
                    <p className="text-xs text-muted-foreground">
                      {olympiad.winnerSchool}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-sm mb-2">Categorías</h4>
                <div className="flex flex-wrap gap-1">
                  {olympiad.categories.slice(0, 3).map((category) => (
                    <Badge key={category} variant="outline" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                  {olympiad.categories.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{olympiad.categories.length - 3}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <Link href={`/olympiads/${olympiad.id}`}>
                    <Eye className="mr-2 h-4 w-4" />
                    Ver Detalles
                  </Link>
                </Button>
                {olympiad.hasProblems && (
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Estadísticas Históricas</CardTitle>
          <CardDescription>Resumen de todas las olimpiadas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold">24</div>
              <p className="text-sm text-muted-foreground">
                Olimpiadas Realizadas
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">15,420</div>
              <p className="text-sm text-muted-foreground">
                Participantes Totales
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">8</div>
              <p className="text-sm text-muted-foreground">Años de Historia</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">156</div>
              <p className="text-sm text-muted-foreground">
                Problemas Archivados
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
