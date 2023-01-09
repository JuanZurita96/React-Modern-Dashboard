import { TooltipComponent } from '@syncfusion/ej2-react-popups'
interface Navigation {
  title: string
  customFunc: () => void
  icon: JSX.Element
  color: string
  dotColor?: string
}

const NavButton = ({
  title,
  customFunc,
  icon,
  color,
  dotColor,
}: Navigation) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative rounded-full p-3 text-xl hover:bg-light-gray"
    >
      {
        <>
          <span
            style={{ background: dotColor }}
            className="absolute right-2 top-2 inline-flex h-2 w-2 rounded-full"
          />
          {icon}
        </>
      }
    </button>
  </TooltipComponent>
)

export default NavButton
