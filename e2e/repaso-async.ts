
async function obtenerUsuario(): Promise<string> {
  return "Andre";
}

async function ejecutar(): Promise<void> {
  console.log("Iniciando");

  const usuario = await obtenerUsuario();

  console.log("Usuario:", usuario);
  console.log("Finalizado");
}

ejecutar();
