import { allOperator, loadOperatorsFromCSV } from "../utils/scriptExportCVS.js";

async function renderOperators() {
  const loaded = await loadOperatorsFromCSV();

  if (!loaded) {
    document.querySelector(".container-all-operators").innerHTML =
      "⚠️ Не удалось загрузить операторов";
    return;
  }

  const ul1 = document.createElement("ul");
  const fragment = document.createDocumentFragment();

  for (const [key, value] of allOperator) {
    const li = document.createElement("li");
    const displayName =
      typeof value === "object" && value?.name ? value.name : String(value);

    li.textContent = `${String(key).toUpperCase()} - ${displayName.toUpperCase()}`;
    fragment.appendChild(li);
  }

  ul1.appendChild(fragment);
  document.querySelector(".container-all-operators").appendChild(ul1);
}

renderOperators();
