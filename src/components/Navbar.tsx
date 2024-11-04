'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { BadgeHelp, Code } from "lucide-react";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">

          </MenuItem>
        </Link>
        <MenuItem
          setActive={setActive} active={active} item="Our Courses"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Notes</HoveredLink>
            <HoveredLink href="/courses">
              JavaScript
            </HoveredLink>
            <HoveredLink href="/courses">
              React JS
            </HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">
              Next JS
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">

            <HoveredLink href="/contact">
              <div className="flex gap-2 hover:text-teal-600 justify-center items-center">
                <p >Support </p>
                <BadgeHelp />
              </div>

            </HoveredLink>
            <HoveredLink href="/about">
              <div className="flex gap-2 hover:text-teal-600 justify-center items-center">
                <p >About </p>
                <Code />
              </div>
            </HoveredLink>
          </div>
        </MenuItem>

      </Menu>
    </div>
  )
}

export default Navbar