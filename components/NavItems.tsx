'use client';
import Link from "next/link";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

const navItems = [
    { label:'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' },
]

const NavItems = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-6">
            {navItems.map(({ label, href }) => {
                const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
                return (
                    <Link
                        href={href}
                        key={label}
                        className={cn(
                            'text-sm transition-colors hover:text-foreground/80',
                            isActive ? 'text-foreground font-bold underline underline-offset-4' : 'text-muted-foreground'
                        )}
                    >
                        {label}
                    </Link>
                )
            })}
        </nav>
    )
}

export default NavItems