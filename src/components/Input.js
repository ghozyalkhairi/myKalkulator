import Button from "./Button"

function Input() {
  return (
    <div className="container p-4">
      <div className="grid grid-cols-3 gap-4">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, "+", 0, "-", "x", "C", "/"].map(
          (value) => (
            <Button key={value} nilai={value} />
          )
        )}
      </div>
    </div>
  )
}

export default Input
