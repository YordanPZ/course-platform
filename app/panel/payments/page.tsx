import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Download } from "lucide-react"

export default function PaymentsPage() {
  const payments = [
    {
      id: "pi_1234567890",
      user: "Juan Pérez",
      course: "React Avanzado",
      amount: 99,
      currency: "USD",
      status: "completado",
      method: "Tarjeta de crédito",
      date: "2024-01-15",
      stripeId: "pi_1234567890",
    },
    {
      id: "pi_0987654321",
      user: "María García",
      course: "Node.js Básico",
      amount: 79,
      currency: "USD",
      status: "pendiente",
      method: "PayPal",
      date: "2024-01-14",
      stripeId: "pi_0987654321",
    },
    {
      id: "pi_1122334455",
      user: "Carlos López",
      course: "Full Stack Development",
      amount: 199,
      currency: "USD",
      status: "completado",
      method: "Tarjeta de débito",
      date: "2024-01-13",
      stripeId: "pi_1122334455",
    },
    {
      id: "pi_5544332211",
      user: "Ana Martín",
      course: "JavaScript ES6+",
      amount: 59,
      currency: "USD",
      status: "fallido",
      method: "Tarjeta de crédito",
      date: "2024-01-12",
      stripeId: "pi_5544332211",
    },
    {
      id: "pi_9988776655",
      user: "Pedro Sánchez",
      course: "Vue.js Fundamentals",
      amount: 89,
      currency: "USD",
      status: "reembolsado",
      method: "Tarjeta de crédito",
      date: "2024-01-11",
      stripeId: "pi_9988776655",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completado":
        return "default"
      case "pendiente":
        return "secondary"
      case "fallido":
        return "destructive"
      case "reembolsado":
        return "outline"
      default:
        return "secondary"
    }
  }

  const totalRevenue = payments.filter((p) => p.status === "completado").reduce((sum, p) => sum + p.amount, 0)

  const pendingAmount = payments.filter((p) => p.status === "pendiente").reduce((sum, p) => sum + p.amount, 0)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Pagos</h1>
          <p className="text-muted-foreground">Gestión de transacciones y pagos</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Exportar
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue}</div>
            <p className="text-xs text-muted-foreground">Pagos completados</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pagos Pendientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${pendingAmount}</div>
            <p className="text-xs text-muted-foreground">En proceso</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Transacciones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{payments.length}</div>
            <p className="text-xs text-muted-foreground">Este mes</p>
          </CardContent>
        </Card>
      </div>

      {/* Payments Table */}
      <Card>
        <CardHeader>
          <CardTitle>Historial de Pagos</CardTitle>
          <CardDescription>Todas las transacciones procesadas a través de Stripe</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium">{payment.user}</h3>
                    <Badge variant="outline" className="text-xs">
                      {payment.stripeId}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{payment.course}</p>
                  <p className="text-xs text-muted-foreground">
                    {payment.method} • {payment.date}
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium">
                      ${payment.amount} {payment.currency}
                    </p>
                    <Badge variant={getStatusColor(payment.status)}>{payment.status}</Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
