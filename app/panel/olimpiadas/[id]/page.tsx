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
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Award,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Globe,
  MapPin,
  Medal,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function OlympiadDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const olympiad = {
    id: params.id,
    title: "Olimpiada Nacional de Matemáticas 2024",
    description:
      "La competencia más prestigiosa de matemáticas a nivel nacional, donde los mejores estudiantes demuestran sus habilidades en álgebra, geometría, cálculo y estadística.",
    image: "/placeholder.svg?height=400&width=600",
    startDate: "2024-03-15",
    endDate: "2024-03-17",
    registrationDeadline: "2024-03-01",
    participants: 1250,
    maxParticipants: 2000,
    difficulty: "Avanzado",
    prize: "$5,000 USD",
    location: "Universidad Nacional, Ciudad de México",
    format: "Presencial",
    duration: "3 días",
    categories: [
      "Álgebra",
      "Geometría",
      "Cálculo",
      "Estadística",
      "Teoría de Números",
    ],
    status: "Inscripciones abiertas",
    isRegistered: false,
    organizer: "Sociedad Matemática Nacional",
    website: "https://olimpiada-matematicas.org",
    requirements: [
      "Estudiante de secundaria o universidad",
      "Edad máxima: 25 años",
      "Conocimientos avanzados de matemáticas",
      "Documento de identidad válido",
    ],
    schedule: [
      {
        day: "Día 1 - 15 Marzo",
        events: [
          { time: "09:00", event: "Registro y acreditación" },
          { time: "10:00", event: "Ceremonia de apertura" },
          { time: "11:00", event: "Examen de Álgebra (2 horas)" },
          { time: "14:00", event: "Almuerzo" },
          { time: "15:00", event: "Examen de Geometría (2 horas)" },
        ],
      },
      {
        day: "Día 2 - 16 Marzo",
        events: [
          { time: "09:00", event: "Examen de Cálculo (2 horas)" },
          { time: "12:00", event: "Descanso" },
          { time: "14:00", event: "Examen de Estadística (2 horas)" },
          { time: "17:00", event: "Actividades recreativas" },
        ],
      },
      {
        day: "Día 3 - 17 Marzo",
        events: [
          { time: "09:00", event: "Examen de Teoría de Números (2 horas)" },
          { time: "12:00", event: "Revisión de resultados" },
          { time: "15:00", event: "Ceremonia de premiación" },
          { time: "17:00", event: "Clausura" },
        ],
      },
    ],
    prizes: [
      {
        position: "1er lugar",
        prize: "$2,000 USD + Medalla de Oro + Beca universitaria",
      },
      { position: "2do lugar", prize: "$1,500 USD + Medalla de Plata" },
      { position: "3er lugar", prize: "$1,000 USD + Medalla de Bronce" },
      { position: "Top 10", prize: "$500 USD + Certificado de reconocimiento" },
      { position: "Top 50", prize: "Certificado de participación destacada" },
    ],
    pastProblems: [
      {
        year: "2023",
        category: "Álgebra",
        problem: "Resolver el sistema de ecuaciones no lineales...",
        difficulty: "Avanzado",
        points: 25,
      },
      {
        year: "2023",
        category: "Geometría",
        problem: "Demostrar que en un triángulo equilátero...",
        difficulty: "Intermedio",
        points: 20,
      },
      {
        year: "2022",
        category: "Cálculo",
        problem: "Calcular la integral definida de la función...",
        difficulty: "Avanzado",
        points: 30,
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="p-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-2">
                <Badge variant="outline">{olympiad.difficulty}</Badge>
                <Badge
                  variant={
                    olympiad.status === "Inscripciones abiertas"
                      ? "default"
                      : "secondary"
                  }
                >
                  {olympiad.status}
                </Badge>
                {olympiad.isRegistered && (
                  <Badge className="bg-green-600">Inscrito</Badge>
                )}
              </div>

              <h1 className="text-3xl font-bold">{olympiad.title}</h1>
              <p className="text-muted-foreground">{olympiad.description}</p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {olympiad.startDate} - {olympiad.endDate}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>Registro hasta: {olympiad.registrationDeadline}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{olympiad.location}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4" />
                    <span>
                      {olympiad.participants}/{olympiad.maxParticipants}{" "}
                      participantes
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Trophy className="h-4 w-4" />
                    <span>Premio: {olympiad.prize}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Globe className="h-4 w-4" />
                    <span>
                      {olympiad.format} • {olympiad.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Cupos disponibles</span>
                  <span>
                    {olympiad.maxParticipants - olympiad.participants} restantes
                  </span>
                </div>
                <Progress
                  value={
                    (olympiad.participants / olympiad.maxParticipants) * 100
                  }
                  className="h-3"
                />
              </div>
            </div>

            <div className="relative h-64 lg:h-auto rounded-lg overflow-hidden">
              <Image
                src={olympiad.image || "/placeholder.svg"}
                alt={olympiad.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="details" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="details">Detalles</TabsTrigger>
          <TabsTrigger value="schedule">Cronograma</TabsTrigger>
          <TabsTrigger value="problems">Problemas</TabsTrigger>
          <TabsTrigger value="prizes">Premios</TabsTrigger>
          <TabsTrigger value="register">Inscripción</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Información General</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Organizador</h4>
                    <p className="text-sm text-muted-foreground">
                      {olympiad.organizer}
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-2">
                      Categorías de Competencia
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {olympiad.categories.map((category) => (
                        <Badge key={category} variant="outline">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-2">Requisitos</h4>
                    <ul className="space-y-1">
                      {olympiad.requirements.map((req, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Acciones Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {!olympiad.isRegistered ? (
                    <Button className="w-full" size="lg">
                      Inscribirse Ahora
                    </Button>
                  ) : (
                    <Button
                      className="w-full"
                      variant="outline"
                      size="lg"
                      disabled
                    >
                      Ya estás inscrito
                    </Button>
                  )}

                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar Reglamento
                  </Button>

                  <Button variant="outline" className="w-full">
                    <Globe className="mr-2 h-4 w-4" />
                    Sitio Web Oficial
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Estadísticas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Participantes</span>
                    <span className="font-medium">{olympiad.participants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Cupos restantes</span>
                    <span className="font-medium">
                      {olympiad.maxParticipants - olympiad.participants}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Duración</span>
                    <span className="font-medium">{olympiad.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Modalidad</span>
                    <span className="font-medium">{olympiad.format}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Cronograma de Actividades</CardTitle>
              <CardDescription>
                Programa detallado de la olimpiada
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {olympiad.schedule.map((day, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-lg mb-4">{day.day}</h3>
                    <div className="space-y-3">
                      {day.events.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="w-16 text-sm font-medium text-blue-600">
                            {event.time}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm">{event.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {index < olympiad.schedule.length - 1 && (
                      <Separator className="mt-6" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="problems" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Problemas de Años Anteriores</CardTitle>
              <CardDescription>
                Practica con problemas de olimpiadas pasadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {olympiad.pastProblems.map((problem, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{problem.year}</Badge>
                        <Badge variant="secondary">{problem.category}</Badge>
                        <Badge
                          variant={
                            problem.difficulty === "Avanzado"
                              ? "destructive"
                              : problem.difficulty === "Intermedio"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {problem.difficulty}
                        </Badge>
                      </div>
                      <span className="text-sm font-medium">
                        {problem.points} pts
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {problem.problem}
                    </p>
                    <Button variant="outline" size="sm">
                      Ver Problema Completo
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prizes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Premios y Reconocimientos</CardTitle>
              <CardDescription>
                Conoce los premios para los ganadores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {olympiad.prizes.map((prize, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                        {index === 0 ? (
                          <Trophy className="h-6 w-6 text-white" />
                        ) : index === 1 ? (
                          <Medal className="h-6 w-6 text-white" />
                        ) : (
                          <Award className="h-6 w-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium">{prize.position}</h4>
                        <p className="text-sm text-muted-foreground">
                          {prize.prize}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="register" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Proceso de Inscripción</CardTitle>
              <CardDescription>
                Completa tu registro para participar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!olympiad.isRegistered ? (
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">
                      Pasos para inscribirse:
                    </h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-blue-800">
                      <li>Completa el formulario de inscripción</li>
                      <li>Sube los documentos requeridos</li>
                      <li>Realiza el pago de inscripción ($50 USD)</li>
                      <li>Recibe confirmación por email</li>
                    </ol>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Documentos requeridos:</h4>
                    <ul className="space-y-2">
                      {olympiad.requirements.map((req, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button size="lg" className="w-full">
                    Comenzar Inscripción
                  </Button>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">¡Ya estás inscrito!</h3>
                    <p className="text-muted-foreground">
                      Recibirás más información por email antes del evento.
                    </p>
                  </div>
                  <Button variant="outline">Ver mi inscripción</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
