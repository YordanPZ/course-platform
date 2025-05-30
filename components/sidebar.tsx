"use client";

import { cn } from "@/lib/utils";
import {
  BarChart3,
  BookOpen,
  CreditCard,
  FolderOpen,
  LayoutDashboard,
  PlayCircle,
  Settings,
  UserCheck,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Usuarios", href: "/users", icon: Users },
  { name: "Cursos", href: "/courses", icon: BookOpen },
  { name: "Categorías", href: "/categories", icon: FolderOpen },
  { name: "Lecciones", href: "/lessons", icon: PlayCircle },
  { name: "Suscripciones", href: "/enrollments", icon: UserCheck },
  { name: "Pagos", href: "/payments", icon: CreditCard },
  { name: "Progreso", href: "/progress", icon: BarChart3 },
  { name: "Configuración", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-white w-64 shadow-lg">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800">Omatbol</h1>
        <p className="text-sm text-gray-600">Panel Admin</p>
      </div>
      <nav className="mt-6">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-6 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
