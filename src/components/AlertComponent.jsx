export const AlertComponent = ({ message, type }) => {
  return (
    <div className={`alert alert-${type} mt-3 alert-dismissible`} role="alert">
      <div className="">{message}</div>
    </div>
  );
};
