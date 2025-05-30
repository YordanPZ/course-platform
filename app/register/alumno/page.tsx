"use client";

import type React from "react";

import { createAlumno, fetchLogin } from "@/api/fetch";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  CheckCircle,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AlumnoRegisterPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("register");

  // Estado para el formulario de registro
  const [registerForm, setRegisterForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    grade: "",
    birthDate: "",
  });

  // Estado para el formulario de login
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Manejar cambios en el formulario de registro
  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  // Manejar cambios en el formulario de login
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  // Manejar envío del formulario de registro
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validación básica
    if (
      !registerForm.firstName ||
      !registerForm.lastName ||
      !registerForm.email ||
      !registerForm.password
    ) {
      setError("Por favor completa todos los campos obligatorios");
      return;
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setIsLoading(true);

    try {
      // Simular llamada a API
      console.log("Registrando alumno...");

      const response = await createAlumno(
        registerForm.firstName,
        registerForm.lastName,
        registerForm.email,
        registerForm.password
      );

      console.log(response);

      setSuccess("¡Cuenta de alumno creada exitosamente! Redirigiendo...");

      // Simular redirección después de registro exitoso
      // router.push("/panel");
    } catch (err) {
      setError("Error al crear la cuenta. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  // Manejar envío del formulario de login
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!loginForm.email || !loginForm.password) {
      setError("Por favor ingresa tu email y contraseña");
      return;
    }

    setIsLoading(true);

    try {
      await fetchLogin(loginForm.email, loginForm.password);
      router.push("/panel");
    } catch (err) {
      if (
        (err as Error).message ===
        "Your account has been blocked by an administrator"
      ) {
        setError("Esta cuenta necesita ser aprobada por un administrador");
      } else {
        setError("Credenciales incorrectas. Inténtalo de nuevo.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <Card className="shadow-lg">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                <span className="text-sm">Volver</span>
              </Link>
              <div className="flex space-x-2">
                <Link
                  href="/register/profesor"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Profesor
                </Link>
                <span className="text-gray-400">|</span>
                <Link
                  href="/register/alumno"
                  className="text-sm font-medium text-blue-600"
                >
                  Alumno
                </Link>
              </div>
            </div>
            <CardTitle className="text-2xl text-center">
              Área de Alumnos
            </CardTitle>
            <CardDescription className="text-center">
              Crea una cuenta o inicia sesión como alumno
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue="register"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="register">Registro</TabsTrigger>
                <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
              </TabsList>

              <TabsContent value="register">
                {error && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {success && (
                  <Alert className="mb-4 border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-700">
                      {success}
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        Nombre <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="firstName"
                          name="firstName"
                          value={registerForm.firstName}
                          onChange={handleRegisterChange}
                          placeholder="Nombre"
                          className="pl-10"
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        Apellido <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={registerForm.lastName}
                        onChange={handleRegisterChange}
                        placeholder="Apellido"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={registerForm.email}
                        onChange={handleRegisterChange}
                        placeholder="tu@email.com"
                        className="pl-10"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="grade">
                        Grado/Nivel <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          setRegisterForm((prev) => ({ ...prev, grade: value }))
                        }
                        disabled={isLoading}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="primaria">Primaria</SelectItem>
                          <SelectItem value="secundaria">Secundaria</SelectItem>
                          <SelectItem value="preparatoria">
                            Preparatoria
                          </SelectItem>
                          <SelectItem value="universidad">
                            Universidad
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="birthDate">Fecha de Nacimiento</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="birthDate"
                          name="birthDate"
                          type="date"
                          value={registerForm.birthDate}
                          onChange={handleRegisterChange}
                          className="pl-10"
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">
                      Contraseña <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={registerForm.password}
                        onChange={handleRegisterChange}
                        placeholder="Mínimo 6 caracteres"
                        className="pl-10 pr-10"
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">
                      Confirmar Contraseña{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={registerForm.confirmPassword}
                        onChange={handleRegisterChange}
                        placeholder="Repite tu contraseña"
                        className="pl-10 pr-10"
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        disabled={isLoading}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Creando cuenta...</span>
                      </div>
                    ) : (
                      "Crear Cuenta de Alumno"
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="login">
                {error && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="login-email"
                        name="email"
                        type="email"
                        value={loginForm.email}
                        onChange={handleLoginChange}
                        placeholder="tu@email.com"
                        className="pl-10"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="login-password">Contraseña</Label>
                      <Link
                        href="/forgot-password"
                        className="text-xs text-blue-600 hover:text-blue-500"
                      >
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="login-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={loginForm.password}
                        onChange={handleLoginChange}
                        placeholder="Tu contraseña"
                        className="pl-10 pr-10"
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={loginForm.rememberMe}
                      onCheckedChange={(checked) =>
                        setLoginForm((prev) => ({
                          ...prev,
                          rememberMe: checked === true,
                        }))
                      }
                      disabled={isLoading}
                    />
                    <Label
                      htmlFor="rememberMe"
                      className="text-sm text-gray-600"
                    >
                      Recordarme
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Iniciando sesión...</span>
                      </div>
                    ) : (
                      "Iniciar Sesión"
                    )}
                  </Button>
                </form>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    ¿No tienes una cuenta?{" "}
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600 hover:text-blue-500"
                      onClick={() => setActiveTab("register")}
                    >
                      Regístrate aquí
                    </Button>
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
