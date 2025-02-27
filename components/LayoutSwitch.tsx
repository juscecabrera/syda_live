import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface LayoutSwitchProps {
    layout: boolean
    setLayout: (prev: boolean) => void
}

export const LayoutSwitch:React.FC<LayoutSwitchProps> = ({ layout, setLayout }) =>  {
  return (
    <div className="absolute items-center justify-center space-x-2 p-3">
      <Label htmlFor="layout-mode">Vertical</Label>
      <Switch id="layout-mode" onCheckedChange={(checked) => setLayout(checked)} />
      <Label htmlFor="layout-mode">Horizontal</Label>
    </div>
  )
}
