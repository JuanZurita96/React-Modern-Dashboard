interface ButtonProps {
  icon?: JSX.Element
  color: string
  bgColor?: string
  bgHoverColor?: string
  text?: string
  size?: string
  borderRadius?: string
  width?: string
  changeFunc?: () => void
}

const Button = ({
  icon,
  color,
  bgColor,
  bgHoverColor,
  text,
  size,
  borderRadius,
  width,
  changeFunc,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={changeFunc}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  )
}

export default Button
