import { HardHat } from "lucide-react";
import Link from "next/link";

export default function ConstruccionPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 max-w-md">
        <div className="flex justify-center mb-6">
          <HardHat className="h-16 w-16 text-orange-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          En Construcción
        </h1>
        <p className="text-gray-600">Estamos trabajando en algo increíble.</p>
        <Link
          href="/register/profesor"
          className="text-blue-600 hover:text-blue-800"
        >
          Volver
        </Link>
      </div>
    </div>
  );
}
