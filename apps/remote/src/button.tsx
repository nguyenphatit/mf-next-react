export default function Button() {
  return (
    <button
      type="button"
      onClick={() => {
        console.log("button clicked!");
      }}
    >
      Provider button
    </button>
  );
}
