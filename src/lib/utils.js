import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { compareDesc, parseISO } from "date-fns"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/*
This is a JavaScript function named `cx` that takes any number of arguments 
(`...classNames`). These arguments are expected to be class names in string format. 

The function works as follows:

1. `...classNames`: This is the rest parameter syntax in JavaScript. It allows 
a function to accept any number of arguments as an array.

2. `filter(Boolean)`: This filters out any falsy values from the `classNames` array. 
Falsy values in JavaScript are values that are considered false when encountered in a Boolean context. They are: `false`, `0`, `-0`, `0n`, `null`, `undefined`, `NaN`, and `""` (empty string).

3. `join(" ")`: This joins all the class names in the array into a single string 
with each class name separated by a space.

The `cx` function is often used in React projects to conditionally apply class names 
to components. It's a simple way to handle conditional styling in JavaScript.
*/

export const cx = (...classNames) => classNames.filter(Boolean).join(" ")

export const sortPages = (mdxPages) => {
  return mdxPages
    .slice()
    .sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)))
}
