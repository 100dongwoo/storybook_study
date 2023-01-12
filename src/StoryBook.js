import { useEffect } from "react";
import styles from "./tablr.module.css";
import PropTypes from "prop-types";

export const StoryBookTest = ({
  rows,
  headers,
  borderWidth = "medium",
  cellPadding = "medium",
  cellTextColor = "black",
  headerTextColor = "white",
  cellBorderColor = "#747381",
  headerBorderColor = "#494866",
  backgroundColor = "#a6a5b8",
  headerBackgroundColor = "#65647a",
}) => {
  useEffect(() => {
    if (headers.length < 1) {
      throw Error("헤더는 1개는 최소 존재해야합니다");
    } else if (!rows.every((r) => r.length === headers.length)) {
      throw Error("Row의길이와 헤더의 길이는 같아야합니다");
    }
  }, [rows, headers]);

  const cellPaddingMap = {
    small: "3px",
    medium: "8px",
    large: "15px",
    super: "30px",
  };
  const borderWidthMap = {
    small: "1px",
    medium: "2px",
    large: "3px",
    super: "10px",
  };
  return (
    <div className={styles.main}>
      {headers.map((h, columnIndex) => (
        <div key={columnIndex} className={styles.column}>
          <div
            className={styles.header}
            style={{
              color: headerTextColor,
              padding: cellPaddingMap[cellPadding],
              backgroundColor: headerBackgroundColor,
              border: `${borderWidthMap[borderWidth]} solid ${headerBorderColor}`,
            }}
          >
            {h}
          </div>

          <div className={styles.rows}>
            {rows.map((r, rowIndex) => (
              <div
                key={rowIndex}
                className={styles.cell}
                style={{
                  color: cellTextColor,
                  backgroundColor: backgroundColor,
                  padding: cellPaddingMap[cellPadding],
                  border: `${borderWidthMap[borderWidth]} solid ${cellBorderColor}`,
                }}
              >
                {r[columnIndex]}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

StoryBookTest.propTypes = {
  cellTextColor: PropTypes.string,
  headerTextColor: PropTypes.string,
  cellBorderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  headerBorderColor: PropTypes.string,
  headerBackgroundColor: PropTypes.string,
  borderWidth: PropTypes.oneOf(["thin", "medium", "thick", "super"]),
  cellPadding: PropTypes.oneOf(["small", "medium", "large", "super"]),
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};
