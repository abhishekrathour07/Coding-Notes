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
          <div className="flex flex-col space-y-4 text-sm hover:text-teal-600">
            <HoveredLink href="/courses">
              <p className="hover:text-teal-600">All Notes </p>
            </HoveredLink>
            <HoveredLink href="/courses">
              <p className="hover:text-teal-600"> HTML5 </p>

            </HoveredLink>
            <HoveredLink href="/courses">
              <p className="hover:text-teal-600">JavaScript </p>

            </HoveredLink>
            <HoveredLink href="/courses">
              <p className="hover:text-teal-600">React Js </p>

            </HoveredLink>
            <HoveredLink href="/courses">
              <p className="hover:text-teal-600">Next js </p>

            </HoveredLink>

          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm ">

            <HoveredLink href="/contact">
              <p className="hover:text-teal-600">Support </p>

            </HoveredLink>
            <HoveredLink href="/about">
              <p className="hover:text-teal-600">About </p>
            </HoveredLink>
          </div>
        </MenuItem>

      </Menu>
    </div>
  )
}

export default Navbar