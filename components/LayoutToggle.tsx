'use client';

import * as React from 'react';
import { LayoutPanelLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';


interface LayoutToggleProps {
  setLayout: (prev: boolean) => void
}


export const LayoutToggle:React.FC<LayoutToggleProps> = ({ setLayout }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon">
        <LayoutPanelLeft className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    ); // Placeholder sin clases condicionales
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <LayoutPanelLeft className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLayout(true)}>
          Vertical
        </DropdownMenuItem>
        <DropdownMenuItem onClick = {() => setLayout(false)}>
          Horizontal
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}