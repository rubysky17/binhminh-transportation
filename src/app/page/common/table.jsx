import React from "react";
import TableBody from "./tableBody";
import TableHead from "./tableHead";
import { Link } from "react-router-dom";

import "../common/styles/table.scss";

function Table(props) {
  const { columns, data, heading } = props;

  return (
    <section className="table-section">
      <h1 className="table-heading">{`Danh sách ${heading}`}</h1>

      <div className="action-table  d-flex justify-content-end">
        <button className="product-btn-create">
          <Link to="/quan-tri/danh-sach/them">
            <span>Thêm</span>
          </Link>
        </button>
      </div>

      <div className="table-container mt-3">
        <div className="table-wrapper">
          <table className="table">
            <TableHead columns={columns} />
            <TableBody data={data} />
          </table>
        </div>
      </div>
    </section>
  );
}

export default Table;
