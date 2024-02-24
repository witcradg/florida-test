import React from "react"

export const TermsCheckbox = () => {
  return (
    <div className="divider-bottom-spacing text-left whitespace-nowrap py-8">
      <input
        type="checkbox"
        id="term-conditions-checkbox"
        value="1"
        defaultChecked
      />
      <label
        htmlFor="term-conditions-checkbox"
        style={{ color: "#777777", fontWeight: "300" }}
      >
        <span className="check" />
        <span className="box" />
        &nbsp;I agree with the terms and conditions
      </label>
    </div>
  )
}
