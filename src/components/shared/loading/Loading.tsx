// Styles
import loading from "./Loading.module.scss";

export const Loading = () => {
  return (
    <div className={loading.container_loader}>
      <div className={loading.loader}></div>
    </div>
  );
};
