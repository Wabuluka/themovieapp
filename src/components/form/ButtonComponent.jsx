export function ButtonComponent({ type, label }) {
  return (
    <div className="d-grid gap-2 border rounded">
      <a className="btn btn-warning" type={type}>
        {label}
      </a>
    </div>
  );
}
