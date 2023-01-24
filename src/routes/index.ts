import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const clearFiles = (file: string) => {
  const files = file.replace(".ts", "");
  return files;
};

readdirSync(PATH_ROUTER).filter((file) => {
  const clearFile = clearFiles(file);
  if (clearFile !== "index") {
    import(`./${clearFile}`).then((moduleRouter) => { //Cargador dinamico de rutas de archivos que estan en la carpeta routes
      console.log(` Se cargo la ruta../${clearFile}`);
      router.use(`/${clearFile}`, moduleRouter.router); // esto es lo que hace que se pueda acceder a las rutas de los archivos que estan en la carpeta routes
    });
  }
});

export { router };
