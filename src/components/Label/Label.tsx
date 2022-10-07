type LabelProps = {
  value: string
  className?: string
}

export const Label = (props: LabelProps) => {
  const { value, className } = props
  return <label className={"font-semibold " + className}>{value}</label>
}
