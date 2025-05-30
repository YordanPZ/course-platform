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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Award,
  Calendar,
  Clock,
  Medal,
  Star,
  Target,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OlympiadsPage() {
  const stats = {
    participatedOlympiads: 3,
    currentRanking: 45,
    totalPoints: 1250,
    medals: 2,
  };

  const availableOlympiads = [
    {
      id: "1",
      title: "Olimpiada Nacional de Matemáticas 2024",
      description:
        "Competencia nacional para estudiantes de secundaria y universidad",
      image: "/placeholder.svg?height=200&width=300",
      startDate: "2024-03-15",
      endDate: "2024-03-17",
      registrationDeadline: "2024-03-01",
      participants: 1250,
      maxParticipants: 2000,
      difficulty: "Avanzado",
      prize: "$5,000 USD",
      categories: ["Álgebra", "Geometría", "Cálculo", "Estadística"],
      status: "Inscripciones abiertas",
      isRegistered: false,
    },
    {
      id: "2",
      title: "Copa Universitaria de Matemáticas",
      description: "Competencia exclusiva para estudiantes universitarios",
      image: "/placeholder.svg?height=200&width=300",
      startDate: "2024-04-20",
      endDate: "2024-04-21",
      registrationDeadline: "2024-04-05",
      participants: 890,
      maxParticipants: 1500,
      difficulty: "Intermedio",
      prize: "$3,000 USD",
      categories: ["Álgebra Lineal", "Análisis", "Probabilidad"],
      status: "Inscripciones abiertas",
      isRegistered: true,
    },
    {
      id: "3",
      title: "Desafío de Matemáticas Aplicadas",
      description: "Problemas de matemáticas aplicadas a la vida real",
      image: "/placeholder.svg?height=200&width=300",
      startDate: "2024-05-10",
      endDate: "2024-05-12",
      registrationDeadline: "2024-04-25",
      participants: 456,
      maxParticipants: 1000,
      difficulty: "Principiante",
      prize: "$1,500 USD",
      categories: ["Matemáticas Financieras", "Optimización", "Modelado"],
      status: "Próximamente",
      isRegistered: false,
    },
  ];

  const myOlympiads = [
    {
      id: "4",
      title: "Olimpiada Regional 2023",
      status: "Completada",
      rank: 23,
      totalParticipants: 500,
      score: 85,
      maxScore: 100,
      medal: "Bronce",
      date: "2023-11-15",
    },
    {
      id: "5",
      title: "Copa Nacional 2023",
      status: "Completada",
      rank: 12,
      totalParticipants: 800,
      score: 92,
      maxScore: 100,
      medal: "Plata",
      date: "2023-09-20",
    },
    {
      id: "2",
      title: "Copa Universitaria de Matemáticas",
      status: "Inscrito",
      rank: null,
      totalParticipants: 890,
      score: null,
      maxScore: null,
      medal: null,
      date: "2024-04-20",
    },
  ];

  const recentResults = [
    {
      olympiad: "Olimpiada Regional 2023",
      rank: 23,
      participants: 500,
      medal: "Bronce",
      points: 85,
    },
    {
      olympiad: "Copa Nacional 2023",
      rank: 12,
      participants: 800,
      medal: "Plata",
      points: 92,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Olimpiadas de Matemáticas</h1>
        <p className="text-muted-foreground">
          Participa en competencias y demuestra tus habilidades matemáticas
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Olimpiadas Participadas
            </CardTitle>
            <Medal className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.participatedOlympiads}
            </div>
            <p className="text-xs text-muted-foreground">
              Competencias completadas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Ranking Actual
            </CardTitle>
            <Trophy className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#{stats.currentRanking}</div>
            <p className="text-xs text-muted-foreground">Posición nacional</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Puntos Totales
            </CardTitle>
            <Target className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalPoints}</div>
            <p className="text-xs text-muted-foreground">Puntos acumulados</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Medallas</CardTitle>
            <Award className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.medals}</div>
            <p className="text-xs text-muted-foreground">Medallas obtenidas</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="available" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="available">Disponibles</TabsTrigger>
          <TabsTrigger value="my-olympiads">Mis Olimpiadas</TabsTrigger>
          <TabsTrigger value="history">Historial</TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Olimpiadas Disponibles</CardTitle>
              <CardDescription>
                Inscríbete a las próximas competencias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {availableOlympiads.map((olympiad) => (
                  <Card key={olympiad.id} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={olympiad.image || "/placeholder.svg"}
                        alt={olympiad.title}
                        fill
                        className="object-cover"
                      />
                      <Badge
                        className="absolute top-2 right-2"
                        variant={
                          olympiad.status === "Inscripciones abiertas"
                            ? "default"
                            : olympiad.status === "Próximamente"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {olympiad.status}
                      </Badge>
                      {olympiad.isRegistered && (
                        <Badge className="absolute top-2 left-2 bg-green-600">
                          Inscrito
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-2">
                        {olympiad.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {olympiad.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Participantes</span>
                          <span>
                            {olympiad.participants}/{olympiad.maxParticipants}
                          </span>
                        </div>
                        <Progress
                          value={
                            (olympiad.participants / olympiad.maxParticipants) *
                            100
                          }
                          className="h-2"
                        />
                      </div>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {olympiad.startDate} - {olympiad.endDate}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>
                            Registro hasta: {olympiad.registrationDeadline}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Trophy className="h-4 w-4" />
                          <span>Premio: {olympiad.prize}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {olympiad.categories.slice(0, 3).map((category) => (
                          <Badge
                            key={category}
                            variant="outline"
                            className="text-xs"
                          >
                            {category}
                          </Badge>
                        ))}
                        {olympiad.categories.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{olympiad.categories.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex space-x-2">
                        <Button className="flex-1" asChild>
                          <Link href={`/olympiads/${olympiad.id}`}>
                            Ver Detalles
                          </Link>
                        </Button>
                        {!olympiad.isRegistered &&
                          olympiad.status === "Inscripciones abiertas" && (
                            <Button variant="outline">Inscribirse</Button>
                          )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="my-olympiads" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mis Olimpiadas</CardTitle>
              <CardDescription>
                Olimpiadas en las que has participado o estás inscrito
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myOlympiads.map((olympiad) => (
                  <div
                    key={olympiad.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="space-y-1">
                      <h3 className="font-medium">{olympiad.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Fecha: {olympiad.date}</span>
                        {olympiad.rank && (
                          <span>
                            Posición: #{olympiad.rank}/
                            {olympiad.totalParticipants}
                          </span>
                        )}
                        {olympiad.score && (
                          <span>
                            Puntuación: {olympiad.score}/{olympiad.maxScore}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      {olympiad.medal && (
                        <Badge
                          variant={
                            olympiad.medal === "Oro"
                              ? "default"
                              : olympiad.medal === "Plata"
                              ? "secondary"
                              : "outline"
                          }
                          className={
                            olympiad.medal === "Oro"
                              ? "bg-yellow-500"
                              : olympiad.medal === "Plata"
                              ? "bg-gray-400"
                              : "bg-orange-600"
                          }
                        >
                          {olympiad.medal}
                        </Badge>
                      )}
                      <Badge
                        variant={
                          olympiad.status === "Completada"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {olympiad.status}
                      </Badge>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/olympiads/${olympiad.id}`}>
                          Ver Detalles
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Resultados Recientes</CardTitle>
                <CardDescription>Tus últimas participaciones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentResults.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <h4 className="font-medium text-sm">
                          {result.olympiad}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          Posición #{result.rank} de {result.participants}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            result.medal === "Oro"
                              ? "default"
                              : result.medal === "Plata"
                              ? "secondary"
                              : "outline"
                          }
                          className={
                            result.medal === "Oro"
                              ? "bg-yellow-500"
                              : result.medal === "Plata"
                              ? "bg-gray-400"
                              : "bg-orange-600"
                          }
                        >
                          {result.medal}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">
                          {result.points} pts
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Explorar Olimpiadas Pasadas</CardTitle>
                <CardDescription>
                  Revisa competencias anteriores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-between"
                    asChild
                  >
                    <Link href="/olympiads/history/2023">
                      Olimpiadas 2023
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-between"
                    asChild
                  >
                    <Link href="/olympiads/history/2022">
                      Olimpiadas 2022
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-between"
                    asChild
                  >
                    <Link href="/olympiads/history/2021">
                      Olimpiadas 2021
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-between"
                    asChild
                  >
                    <Link href="/olympiads/rankings">
                      Rankings Históricos
                      <Star className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
