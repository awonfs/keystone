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

function Header() {
  const { isSignedIn } = useUser();

  return (
    <nav className="flex justify-around items-center p-4 border-b border-gray-400">
      <h1 className="text-2xl font-semibold">Keystone</h1>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/keystone-runs" legacyBehavior passHref>
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
              <UserButton afterSignOutUrl="/" />
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
