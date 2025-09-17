import "../style.scss";
import "../media.scss";

/**
 * Генерирует HTML таблицу с кнопкой в последней ячейке
 *
 * @param {string[]} items - Массив элементов для отображения в таблице
 *  @param {number} [columns=4] - Количество колонок в одной строке таблицы
 *  @param buttonText - Текст на кнопке
 *  @returns {string} HTML-разметка таблицы с клиентами и кнопкой
 */
export const Table = ({ items, columns = 4, buttonText = "More" }) => {
  const rows = [];
  for (let i = 0; i < items.length; i += columns) {
    rows.push(items.slice(i, i + columns));
  }

  if (rows.length) {
    const lastRow = rows[rows.length - 1];
    if (lastRow.length < columns) {
      lastRow.push("__BTN__");
      while (lastRow.length < columns) {
        lastRow.push("");
      }
    } else {
      lastRow[lastRow.length - 1] = "__BTN__";
    }
  }

  return `
    <table class="table">
      ${rows
        .map(
          (row) => `
          <tr class="table__row">
            ${row
              .map((cell) => {
                if (cell === "__BTN__") {
                  return `
                    <td class="table__column table__column_more">
                      <button class="table__button">${buttonText}</button>
                    </td>
                  `;
                }
                return `<td class="table__column">${cell}</td>`;
              })
              .join("")}
          </tr>
        `
        )
        .join("")}
    </table>
  `;
};