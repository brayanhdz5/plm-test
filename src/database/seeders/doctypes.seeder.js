module.exports = (Doctype) => {

  const initial = () => {
    Doctype.create({
      id: 1,
      description: 'Cedula de Ciudadania',      
    });
    Doctype.create({
      id: 2,
      description: 'Cedula de Extranjeria',      
    });
    Doctype.create({
      id: 3,
      description: 'Pasaporte',      
    });
    Doctype.create({
      id: 4,
      description: 'Tarjeta de Identidad',      
    });
  };

  return {
    initial
  };
}