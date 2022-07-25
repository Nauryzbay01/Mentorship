import { useForm } from "react-hook-form";
import style from "./uploadPhotoForm.module.css";
import { sendPhotoRequest } from "../../services";

function UploadPhotoForm({ setUploadPhotoDisplay }) {
  const { handleSubmit, register, watch } = useForm();

  const onSubmit = async (data) => {
    await sendPhotoRequest(data.photo[0]);
  };

  const handleClose = () => {
    setUploadPhotoDisplay("none");
  };

  return (
    <form
      className={style.uploadPhotoForm}
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
    >
      <h3>Upload Photo</h3>
      {!watch("photo") || watch("photo").length === 0 ? (
        <div>
          <label htmlFor="photo" className={style.label}>
            Choose File
            <input
              style={{ display: "none" }}
              {...register("photo")}
              id="photo"
              type="file"
              name="photo"
            />
          </label>
        </div>
      ) : (
        <div>
          <label htmlFor="photo" className={style.label}>
            Choose File
            <input
              style={{ display: "none" }}
              {...register("photo")}
              id="photo"
              type="file"
              name="photo"
            />
          </label>
          <div>{watch("photo")[0].name}</div>
        </div>
      )}
      <button type="submit" className={style.uploadBtn}>
        Upload
      </button>
      <button type="button" onClick={handleClose} className={style.closeBtn}>
        x
      </button>
    </form>
  );
}

export default UploadPhotoForm;
