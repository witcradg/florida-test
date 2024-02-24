import { TermsCheckbox } from "./terms-checkbox"

export const AddToCart = ({ children, outOfStock }) => {
  return (
    <div>
      {outOfStock === "true" ? (
        <button className="btn btn-lg text-lg bg-black text-white w-full">
          SOLD OUT
        </button>
      ) : (
        <div>
          <div className="plus-minus-container">
            <div className="bg-black text-white text-lg atc-btn">
              {children}
            </div>
          </div>
          <TermsCheckbox />
        </div>
      )}
    </div>
  )
}
