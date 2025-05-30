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
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Bell, CreditCard, Globe, Key, Shield } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Configuración</h1>
        <p className="text-muted-foreground">
          Gestiona la configuración de tu plataforma
        </p>
      </div>

      <div className="grid gap-6">
        {/* Platform Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Configuración de la Plataforma
            </CardTitle>
            <CardDescription>
              Configuración general de tu plataforma de cursos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="platform-name">Nombre de la Plataforma</Label>
              <Input id="platform-name" defaultValue="Omatbol" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="platform-description">Descripción</Label>
              <Textarea
                id="platform-description"
                defaultValue="Plataforma de cursos online para desarrolladores"
                rows={3}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="contact-email">Email de Contacto</Label>
              <Input
                id="contact-email"
                type="email"
                defaultValue="admin@omibold.com"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Registro Público</Label>
                <p className="text-sm text-muted-foreground">
                  Permitir que cualquiera se registre en la plataforma
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Cursos Gratuitos</Label>
                <p className="text-sm text-muted-foreground">
                  Permitir cursos gratuitos en la plataforma
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Stripe Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Configuración de Stripe
            </CardTitle>
            <CardDescription>
              Configura tu integración con Stripe para procesar pagos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Stripe conectado</span>
              </div>
              <Badge variant="secondary">Modo Prueba</Badge>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="stripe-public-key">Clave Pública de Stripe</Label>
              <Input
                id="stripe-public-key"
                type="password"
                defaultValue="pk_test_••••••••••••••••••••••••••••••••••••••••"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="stripe-secret-key">Clave Secreta de Stripe</Label>
              <Input
                id="stripe-secret-key"
                type="password"
                defaultValue="sk_test_••••••••••••••••••••••••••••••••••••••••"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="webhook-endpoint">Webhook Endpoint</Label>
              <Input
                id="webhook-endpoint"
                defaultValue="https://tu-dominio.com/api/webhooks/stripe"
                readOnly
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Modo Producción</Label>
                <p className="text-sm text-muted-foreground">
                  Cambiar a modo producción para pagos reales
                </p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* API Keys */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Claves API
            </CardTitle>
            <CardDescription>
              Gestiona las claves API para integraciones externas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="api-key">Clave API Principal</Label>
              <div className="flex gap-2">
                <Input
                  id="api-key"
                  type="password"
                  defaultValue="api_••••••••••••••••••••••••••••••••"
                  readOnly
                />
                <Button variant="outline">Regenerar</Button>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="webhook-secret">Webhook Secret</Label>
              <div className="flex gap-2">
                <Input
                  id="webhook-secret"
                  type="password"
                  defaultValue="whsec_••••••••••••••••••••••••••••••••"
                  readOnly
                />
                <Button variant="outline">Regenerar</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Notificaciones
            </CardTitle>
            <CardDescription>
              Configura las notificaciones del sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Notificaciones de Pago</Label>
                <p className="text-sm text-muted-foreground">
                  Recibir notificaciones cuando se procesen pagos
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Nuevas Inscripciones</Label>
                <p className="text-sm text-muted-foreground">
                  Notificar cuando un estudiante se inscriba a un curso
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Cursos Completados</Label>
                <p className="text-sm text-muted-foreground">
                  Notificar cuando un estudiante complete un curso
                </p>
              </div>
              <Switch />
            </div>

            <Separator />

            <div className="grid gap-2">
              <Label htmlFor="notification-email">
                Email para Notificaciones
              </Label>
              <Input
                id="notification-email"
                type="email"
                defaultValue="notifications@omatbol.com"
              />
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Seguridad
            </CardTitle>
            <CardDescription>
              Configuración de seguridad y privacidad
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Autenticación de Dos Factores</Label>
                <p className="text-sm text-muted-foreground">
                  Requerir 2FA para administradores
                </p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Logs de Actividad</Label>
                <p className="text-sm text-muted-foreground">
                  Registrar todas las actividades del sistema
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="session-timeout">
                Tiempo de Sesión (minutos)
              </Label>
              <Input id="session-timeout" type="number" defaultValue="60" />
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button size="lg">Guardar Configuración</Button>
        </div>
      </div>
    </div>
  );
}
