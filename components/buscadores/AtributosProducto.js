import React, { useEffect, useState } from "react";

function AtributosProducto(props) {
  const { atributos } = props;
  const [atributosMap, setAtributosMap] = useState([]);

  useEffect(() => {
    const result = JSON.parse(
      atributos
        ?.replaceAll(", ", ",")
        .replace(/([^,{]+)?:([^,}]+)?/gi, `"$1":"$2"`)
    );
    setAtributosMap(result);
  }, [atributos]);

  return (
    <>
      {atributosMap.map((atributo) => (
        <div className="grid grid-cols-3 space-x-3">
          <div className="space-y-3">
            <div className="bg-amarillo w-full px-10 py-1 ">
              <p className="text-azul font-bold">Diámetro (mm)</p>
            </div>
            <p>20</p>
          </div>
          <div className="space-y-3">
            <div className="bg-amarillo w-full px-10 py-1">
              <p className="text-azul font-bold">Eje</p>
            </div>
            <p>{atributo.Eje} </p>
          </div>
          <div className="space-y-3">
            <div className="bg-amarillo w-full px-10 py-1">
              <p className="text-azul font-bold">Posición</p>
            </div>
            <p>{atributo.Posicion} </p>
          </div>
        </div>
      ))}
      ,
    </>
  );
}

export default AtributosProducto;
