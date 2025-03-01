export function DefaultButton({ type, label }) {
  return (
    <div className="d-grid gap-2 border rounded">
      <button className="btn btn-warning" type={type}>
        {label}
      </button>
    </div>
  );
}
