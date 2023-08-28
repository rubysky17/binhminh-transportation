import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { deleteProductAction } from "core/redux/actions/productActions";
import { getCategoryAction } from "core/redux/actions/categoryActions";

import Delete from "./delete";

function TableBody({ data }) {
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.category);

  const [renderDateTable, setRenderDateTable] = useState(data);
  const [content, setContent] = useState();
  const prevContent = useRef();

  useEffect(() => {
    dispatch(getCategoryAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    prevContent.current = content;
  }, [content]);

  const handleDelete = (item) => {
    dispatch(deleteProductAction(item.id));
  };

  useEffect(() => {
    if (categoryList.length) {
      let newData = [...data];

      newData = newData.map((item) => {
        const findCatagory = categoryList.find(
          (cate) => cate.id === item.categoryId
        );
        console.log({
          ...item,
          categoryName: findCatagory.name || "",
        });
        return {
          ...item,
          categoryName: findCatagory.name || "",
        };
      });

      setRenderDateTable(newData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryList, data]);

  const HandleContentClick = (index) => {
    if (prevContent.current === index) {
      setContent(undefined);
    } else setContent(index);
  };

  return (
    <tbody>
      {renderDateTable.map((item, index) => {
        return (
          <tr key={item?.id} className="value-row">
            <td className="value-column">{index + 1}</td>
            <td className="value-column">
              <p>{item?.title_vi}</p>
            </td>
            <td className="value-column">{item.categoryName}</td>

            <td
              className="value-column"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Click để xem nội dung"
              onClick={() => HandleContentClick(index)}
            >
              <p className={index === content ? "txt-full" : "txt-truncate"}>
                {item?.content_vi}
              </p>
            </td>
            <td className="value-column">
              <div style={{ width: "15rem", gap: "4px 0" }} className="row">
                {item?.img.map((link) => {
                  return (
                    <div className="col-4" key={link}>
                      <div className="img-wrapper">
                        <img src={link} className="img-fluid" alt={link} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </td>
            <td className="value-column">
              <div className="options">
                <span
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Click để Sửa"
                >
                  <Link
                    to={`/quan-tri/danh-sach/sua-san-pham/${item.id}`}
                    className="btn-edit"
                  >
                    <i className="fa fa-pen-to-square"></i>
                  </Link>
                </span>
                <span
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Click để Xóa"
                >
                  <Delete
                    item={item}
                    list="products"
                    onDelete={() => {
                      handleDelete(item);
                    }}
                  />
                </span>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
