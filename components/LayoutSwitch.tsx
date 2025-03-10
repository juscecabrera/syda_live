'use client'

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface LayoutSwitchProps {
  setLayout: (prev: boolean) => void
}

//Ya no lo estoy usando

export const LayoutSwitch:React.FC<LayoutSwitchProps> = ({ setLayout }) =>  {
  return (
    <div className="absolute items-center justify-center space-x-2 p-3">
      <Label htmlFor="layout-mode">Horizontal</Label>
      <Switch id="layout-mode" onCheckedChange={(checked) => setLayout(checked)} />
      <Label htmlFor="layout-mode">Vertical</Label>
    </div>
  )
}
