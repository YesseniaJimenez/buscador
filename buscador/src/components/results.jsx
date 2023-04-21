import { useMemo, useState } from "react";

export default function Results({
  items,
  onItemSelected,
  query,
  onResultsCalculated,
}) {
  const [results, setResults] = useState([]);
  const filteredItems = findMach();

  function findMach(items, query) {
    console.log("holis");
  }
  return <div>holis</div>;
}
