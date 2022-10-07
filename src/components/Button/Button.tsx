type ButtonProps = {
  label: string
  className?: string
}

export const Button = (props: ButtonProps) => {
  const { label, className } = props

  return <button className={"rounded-sm " + className}>{label}</button>
}
