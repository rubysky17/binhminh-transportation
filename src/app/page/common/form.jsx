import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { storage } from "app/const/firebase";
import { addProductAction } from "core/redux/actions/productActions";
import { Toasts } from "./toasts/toasts";
import { Form } from "react-bootstrap";

import "./styles/form.scss";

function FormComponent({ heading }) {
  let pecentsProgress;

  const [dataSubmit, setDataSubmit] = useState({
    title: "",
    content: "",
    price: 0,
    unit: "day",
  });

  const [errors, setErrors] = useState({});
  const [urls, setUrls] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.category);

  const unitList = [
    { name: "Ngày", id: "day" },
    { name: "Giờ", id: "hour" },
    { name: "Tháng", id: "month" },
    { name: "Tuần", id: "week" },
  ];

  const handleChange = (e) => {
    const { value, name } = e.target;

    setDataSubmit({
      ...dataSubmit,
      [name]: value,
    });
  };

  const handleChangeFile = (e) => {
    setUrls([]);
    const { files } = e.target;
    const uploadList = [];
    const extension = /\.(gif|jpe?g|png|jpg)$/i;
    let canUploadFile = false;

    for (let i = 0; i < files.length; i++) {
      const image = files[i];

      if (extension.test(image.name)) {
        canUploadFile = true;
        uploadList.push(files[i]);
      }
    }

    if (canUploadFile) {
      const promises = [];
      uploadList.forEach((image) => {
        const uploadTask = storage
          .ref()
          .child(`images/${image.name}`)
          .put(image);
        promises.push(uploadTask);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // const progress =
            //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // if (snapshot.state === "running") {
            //   // console.log(`Đang tải: ${progress}%`);
            //   pecentsProgress = progress;
            // }
          },
          (error) => {
            console.log({ error });
          },
          async () => {
            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
            setUrls((prevState) => [...prevState, downloadURL]);
          }
        );
      });

      Promise.all(promises)
        .then(() => {
          alert("Đã upload thành công!!!");
        })
        .catch((err) => console.log(err.code));
    } else {
      setErrors({
        ...errors,
        files: "Vui lòng chọn đúng định dạng hình ảnh",
      });
    }
    // show file hiển thị ra bên ngoài ô input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, content } = dataSubmit;

    let errorMgs = {};

    if (!title.length) {
      errorMgs.title = "Vui lòng điền tên chi tiết";
    }

    if (!content.length) {
      errorMgs.content = "Vui lòng điền mô tả";
    }

    if (_.isEmpty(errorMgs)) {
      const payload = {
        ...dataSubmit,
        img: [...urls],
      };

      dispatch(addProductAction(payload));

      cancelModal();
    } else {
      setErrors({ ...errorMgs });
    }

    return;
  };

  const cancelModal = () => {
    setDataSubmit({});
    history.push("/admin/danh-sach");
  };

  return (
    <div className="modal-form">
      <div className="modal-body">
        <h1 className="mat-title-form">{heading}</h1>

        <form>
          <div className="wrapper-input">
            <label htmlFor="content">Loại dịch vụ</label>

            <Form.Select
              size="lg"
              className="form-control"
              name="categoryId"
              onChange={handleChange}
              defaultValue={categoryList[0]?.id}
            >
              {categoryList.map((item) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </Form.Select>
          </div>

          <div className="wrapper-input">
            <label htmlFor="title">Tên chi tiết</label>

            <input
              id="title"
              name="title"
              value={dataSubmit.title}
              onChange={handleChange}
              type="text"
              className="form-control"
            />

            {errors.title && (
              <div className="alert alert-danger">{errors.title}</div>
            )}
          </div>

          <div className="wrapper-input">
            <label htmlFor="content">Mô tả</label>

            <textarea
              id="content"
              name="content"
              value={dataSubmit.content}
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>

          <div className="wrapper-input">
            <label htmlFor="price">Giá</label>

            <input
              id="price"
              name="price"
              value={dataSubmit.price}
              onChange={handleChange}
              type="number"
              className="form-control"
            />

            {errors.price && (
              <div className="alert alert-danger">{errors.price}</div>
            )}
          </div>

          <div className="wrapper-input">
            <label htmlFor="unit">Đơn vị tính</label>

            <Form.Select
              size="lg"
              className="form-control"
              name="unit"
              onChange={handleChange}
              defaultValue={unitList[0]?.id}
            >
              {unitList.map((item) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </Form.Select>
          </div>

          <div>
            <label className="choose-file" htmlFor="image">
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
              Tải hình ảnh từ máy tính
            </label>

            <input
              id="image"
              type="file"
              multiple
              onChange={handleChangeFile}
              hidden
              accept="image/png, image/jpg, image/jpeg,image/*"
            />
          </div>

          <span className="message-file">
            {urls.length !== 0 ? `Đã chọn ${urls.length} ảnh` : ""}
          </span>

          {errors.files && (
            <div className="alert alert-danger">{errors.files}</div>
          )}
        </form>

        <div className="row files-box">
          {(urls.length === 0 ? true : false) && (
            <div className="content">
              <i class="fa-solid fa-cloud-arrow-up"></i>
              <span>Chưa có file ảnh</span>
            </div>
          )}

          {urls.map((url) => {
            return (
              <div
                style={{ padding: "1rem" }}
                className="col-3 image-uploaded"
                key={url}
              >
                <img src={url} alt={url} />
              </div>
            );
          })}
        </div>

        <div className="modal-button">
          <button onClick={cancelModal} className="modal-button-cancel">
            Hủy
          </button>

          <button
            onClick={handleSubmit}
            className="modal-button-save"
            type="button"
          >
            Tạo
          </button>
        </div>
      </div>

      <Toasts />
    </div>
  );
}

export default FormComponent;