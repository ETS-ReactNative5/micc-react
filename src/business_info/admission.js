export const villagePricing = [
  {
    title: (language) => (language ? "Adult admission" : "Adultos"),
    detail: (language) => "13+",
    price: (language) => "$15.00",
  },
  {
    title: (language) => (language ? "Child admission" : "Entrada para niños"),
    detail: (language) => "6 — 12",
    price: (language) => "$8.00",
  },
  {
    title: (language) => (language ? "Child admission" : "Entrada para niños"),
    detail: (language) => (language ? "5 & under" : "Menores de 5"),
    price: (language) => (language ? "Free" : "Gratis"),
  },
];

export const airboatsPricing = [
  {
    title: (language) => (language ? "Adult admission" : "Adultos"),
    detail: (language) => (language ? "12 years old and up" : "12 años y más"),
    price: (language) => "$15",
  },
  {
    title: (language) => (language ? "Child admission" : "Niños"),
    detail: (language) => (language ? "6 — 12 years old" : "6 – 12 años"),
    price: (language) => "$8",
  },
  {
    title: (language) => (language ? "Child admission" : "Niños"),
    detail: (language) =>
      language ? "Under 6 Years Old" : "Menores de 6 años",
    price: (language) => (language ? "Free" : "Gratis"),
  },
  {
    title: (language) =>
      language
        ? "Private tour, 30 minutes"
        : `Tour de grupo privado – 30 minutos`,
    detail: (language) =>
      language ? "Minimum six people per boat" : "Mínimo 6 pasajeros por bote",
    price: (language) => "$150",
  },
  {
    title: (language) =>
      language ? "Private tour, one hour" : "Tour de grupo privado – una hora",
    detail: (language) =>
      language
        ? "Minimum eight people per boat"
        : "Mínimo 8 pasajeros por bote",
    price: (language) => "$300",
  },
];
