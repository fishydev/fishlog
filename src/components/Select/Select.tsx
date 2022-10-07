type SelectProps = {
  items: string[]
  className?: string
}

export const Select = (props: SelectProps) => {
  const { items, className } = props
  return (
    <select className={"p-2 rounded-sm " + className}>
      {items.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  )
}
