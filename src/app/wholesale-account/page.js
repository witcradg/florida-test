"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  /* https://www.react-hook-form.com/get-started/ */

  /*****************
   * This looks like a promising approach
   * Creating a Contact Form with React Hook Form and Tailwind CSS
   * https://youtu.be/5kbbBaQ07Fk
   *
   * https://galaxies.dev/quickwin/react-tailwind-form [NOT REVIEWED]
   */

  return (
    <main className="lg:m-auto lg:w-1/4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor=":username:-form-item"
          >
            First Name
          </label>

          <input
            {...register("username", { required: true })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="name"
            id=":username:-form-item"
            aria-describedby=":username:-form-item-description"
            aria-invalid="false"
            name="username"
            value=""
          />
          <p
            id=":username:-form-item-description"
            className="text-sm text-muted-foreground"
          >
            Please Enter Your Name
          </p>
        </div>

        {/* <input {...register("username", { required: true })} /> */}
        <Button type="submit">Schedule Appointment</Button>
      </form>
    </main>
  )
}
