/* eslint-disable @next/next/no-img-element */
"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";
import { Hourglass } from "lucide-react";

function Header() {
  const { isSignedIn } = useUser();

  return (
    <nav className="flex justify-around items-center p-4 border-b border-gray-400">
      <div className="flex gap-2 items-center justify-center">
        <Hourglass />
        <h1 className="text-2xl font-semibold">
          <Link href="/" legacyBehavior passHref>
            Keystone
          </Link>
        </h1>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/search-characters" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Search Characters
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {isSignedIn ? (
              <div className="flex gap-2 items-center justify-center">
                <NavigationMenuItem>
                  <Link href="/my-profile" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Profile
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <Link href="/sign-in" legacyBehavior passHref>
                <Button>Sign In</Button>
              </Link>
            )}
          </NavigationMenuItem>
          <NavigationMenuItem>
            <div className="ml-4">
              <ModeToggle />
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default Header;
