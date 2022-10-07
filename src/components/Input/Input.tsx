type InputProps = {
  placeholder: string
  className?: string
  type: string
}

export const Input = (props: InputProps) => {
  const { placeholder, className, type } = props

  return (
    <input
      type={type}
      className={"p-2 rounded-sm " + className}
      placeholder={placeholder}
    ></input>
  )
}
