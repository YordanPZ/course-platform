import { getUser } from "@/api/fetch";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type React from "react";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mi Aprendizaje - Omatbol",
  description: "Panel de estudiante para cursos online",
  generator: "v0.dev",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token");
  if (!token) {
    redirect("/register/alumno");
  }

  const user = await getUser();

  return (
    <html lang="es">
      <body className={cn(inter.className, "flex h-screen bg-gray-50")}>
        {/* <StudentSidebar user={user} /> */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* <StudentHeader /> */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
