import { useState } from "react";
import SearchBar from "./components/searchBar";

const people = [
  { id: "people-01", title: "juan Perez" },
  { id: "people-02", title: "Danny Ocean" },
  { id: "people-03", title: "Benito Martinez" },
  { id: "people-04", title: "Austin Santos" },
  { id: "people-05", title: "Fercho" },
];
const calendar = [
  { id: "calendar-01", title: "sesión de seguiomiento" },
  { id: "calendar-02", title: "revisión de porpuestas" },
  { id: "calendar-03", title: "evento donar juguetes" },
  { id: "calendar-04", title: "junta semanal" },
  { id: "calendar-05", title: "reuniones con clientes" },
];

const emails = [
  { id: "email-01", title: "reporte de resultados" },
  { id: "email-01", title: "requisitos de cambio" },
  { id: "email-01", title: "status de funcionalidad" },
  { id: "email-01", title: "proximos eventos" },
  { id: "email-01", title: "párticipa en encuesta" },
];

function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");

  function handleClick(e) {
    const op = e.target.name;

    switch (op) {
      case "all":
        setData([...people, ...calendar, ...emails]);
        setCurrentOption("all");
        break;

      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;

      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;

      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;

      default:
    }
  }
  return (
    <div>
      <button onClick={handleClick} name="all">
        All
      </button>
      <button onClick={handleClick} name="people">
        People
      </button>
      <button onClick={handleClick} name="calendar">
        Calendar
      </button>
      <button onClick={handleClick} name="emails">
        Emails
      </button>

      <SearchBar items={data} onItemSelected={() => {}} />
    </div>
  );
}

export default App;
