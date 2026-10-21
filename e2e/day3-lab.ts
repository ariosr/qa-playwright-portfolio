import { usuarios } from "./day3-lab-data";

function obtenerUsuariosActivos(): string[] {
  return usuarios
    .filter((usuario) => usuario.activo)
    .map((usuario) => usuario.email);
}

async function ejecutar(): Promise<void> {
  const emails = await Promise.resolve(obtenerUsuariosActivos());

  console.log("Usuarios activos:");
  console.log(emails);
  console.log("Cantidad:", emails.length);
}

ejecutar();