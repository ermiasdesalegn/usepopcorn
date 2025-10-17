const ContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

export default function StarRating() {
  return (
    <div className={ContainerStyle}>
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p>10</p>
    </div>
  );
}
