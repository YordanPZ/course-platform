import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Eye, RefreshCw } from "lucide-react"

export default function PurchasesPage() {
  const purchases = [
    {
      id: "1",
      course: "React Avanzado",
      instructor: "María García",
      amount: 99,
      currency: "USD",
      date: "2024-01-10",
      status: "Completado",
      paymentMethod: "Tarjeta de crédito ****1234",
      transactionId: "pi_1234567890",
      invoice: "INV-2024-001",
    },
    {
      id: "2",
      course: "Full Stack Development",
      instructor: "Carlos López",
      amount: 199,
      currency: "USD",
      date: "2024-01-08",
      status: "Completado",
      paymentMethod: "PayPal",
      transactionId: "pi_0987654321",
      invoice: "INV-2024-002",
    },
    {
      id: "3",
      course: "Node.js Básico",
      instructor: "Juan Pérez",
      amount: 79,
      currency: "USD",
      date: "2023-12-15",
      status: "Completado",
      paymentMethod: "Tarjeta de débito ****5678",
      transactionId: "pi_1122334455",
      invoice: "INV-2023-045",
    },
    {
      id: "4",
      course: "Vue.js Fundamentals",
      instructor: "Laura Ruiz",
      amount: 89,
      currency: "USD",
      date: "2023-11-20",
      status: "Reembolsado",
      paymentMethod: "Tarjeta de crédito ****9012",
      transactionId: "pi_5544332211",
      invoice: "INV-2023-032",
    },
  ]

  const totalSpent = purchases.filter((p) => p.status === "Completado").reduce((sum, p) => sum + p.amount, 0)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completado":
        return "default"
      case "Pendiente":
        return "secondary"
      case "Fallido":
        return "destructive"
      case "Reembolsado":
        return "outline"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mis Compras</h1>
        <p className="text-muted-foreground">Historial de transacciones y facturas</p>
      </div>

      {/* Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Gastado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalSpent}</div>
            <p className="text-xs text-muted-foreground">En cursos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Compras Realizadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{purchases.length}</div>
            <p className="text-xs text-muted-foreground">Transacciones</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Último Pago</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{purchases[0]?.date}</div>
            <p className="text-xs text-muted-foreground">{purchases[0]?.course}</p>
          </CardContent>
        </Card>
      </div>

      {/* Purchases List */}
      <Card>
        <CardHeader>
          <CardTitle>Historial de Compras</CardTitle>
          <CardDescription>Todas tus transacciones y facturas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {purchases.map((purchase) => (
              <div key={purchase.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium">{purchase.course}</h3>
                    <Badge variant={getStatusColor(purchase.status)}>{purchase.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">por {purchase.instructor}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>Fecha: {purchase.date}</span>
                    <span>Método: {purchase.paymentMethod}</span>
                    <span>ID: {purchase.transactionId}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-medium text-lg">
                      ${purchase.amount} {purchase.currency}
                    </p>
                    <p className="text-xs text-muted-foreground">Factura: {purchase.invoice}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Ver
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Factura
                    </Button>
                    {purchase.status === "Fallido" && (
                      <Button variant="outline" size="sm">
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Reintentar
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
  )
}
