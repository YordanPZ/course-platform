"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { BookOpen, LayoutDashboard, Medal, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/panel", icon: LayoutDashboard },
  { name: "Explorar Cursos", href: "/panel/explore", icon: Search },
  { name: "Mis Cursos", href: "/panel/my-courses", icon: BookOpen },
  // { name: "En Progreso", href: "/panel/learning", icon: Play },
  // { name: "Completados", href: "/panel/completed", icon: Trophy },
  { name: "Olimpiadas", href: "/panel/olimpiadas", icon: Medal },
  // { name: "Lista de Deseos", href: "/panel/wishlist", icon: Heart },
  // { name: "Mis Compras", href: "/panel/purchases", icon: CreditCard },
  // { name: "Perfil", href: "/panel/profile", icon: User },
  // { name: "Configuración", href: "/panel/settings", icon: Settings },
];

export function StudentSidebar({ user }: { user: any }) {
  const pathname = usePathname();

  return (
    <div className="bg-white w-64 shadow-lg border-r">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800">Omatbol</h1>
        <p className="text-sm text-gray-600">Mi Aprendizaje</p>
      </div>

      {/* Student Profile */}
      <div className="px-6 pb-4">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{user?.username}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
        </div>
      </div>

      <nav className="mt-2">
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
