let dataOperators = new Map();

export async function loadOperatorsFromCSV() {
  try {
    const response = await fetch("../../src/edo_operators.csv");
    if (!response.ok) throw new Error("Файл не найден");

    const csvText = await response.text();
    const parsedData = parseFNS_CSV(csvText);

    dataOperators.clear();
    
    for (const [key, value] of parsedData) {
      dataOperators.set(key, value);
    }

    return true;
  } catch (error) {
    console.error("❌ Ошибка:", error);
    return false;
  }
}

function parseFNS_CSV(csvText) {
  const lines = csvText.trim().split("\n");
  if (lines.length < 2) return new Map();

  const operatorsMap = new Map();

  for (let i = 1; i < lines.length; i++) {
    const fields = parseCSVLine(lines[i]);
    if (fields.length < 16) continue;

    const name = fields[1]?.replace(/^"|"$/g, "").trim() || "";
    const status1 = fields[4]?.replace(/^"|"$/g, "").trim() || "";
    const status2 = fields[10]?.replace(/^"|"$/g, "").trim() || "";

    const prefix1Raw = fields[6]?.replace(/^"|"$/g, "").trim() || "";
    const website1 = fields[9]?.replace(/^"|"$/g, "").trim() || "";

    const prefix2Raw = fields[12]?.replace(/^"|"$/g, "").trim() || "";
    const website2 = fields[15]?.replace(/^"|"$/g, "").trim() || "";

    const addPrefix = (prefixRaw, website, status) => {
      if (
        !prefixRaw ||
        prefixRaw.toLowerCase() === "nan" ||
        prefixRaw[0] === "1" ||
        status === "Исключен" ||
        status === "Услуга не оказывается"
      ) {
        return;
      }
      const prefixes = prefixRaw.split(",").map((p) => p.trim().toLowerCase());

      prefixes.forEach((prefix) => {
        if (prefix && prefix !== "nan") {
          operatorsMap.set(prefix, {
            name,
            prefix,
            website: website !== "nan" ? website : "",
            status,
          });
        }
      });
    };

    addPrefix(prefix1Raw, website1, status1);
    addPrefix(prefix2Raw, website2, status2);
  }

  return operatorsMap;
}

function parseCSVLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

export function findOperatorBySuffix(suffix) {
  for (const [prefix, operator] of dataOperators) {
    if (prefix.toLowerCase().endsWith(suffix)) {
      return operator;
    }
  }
  return null;
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadOperatorsFromCSV();
});

const allOperator = dataOperators;

export { allOperator };
