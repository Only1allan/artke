import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Navbar() {
    return (
        <div className="bg-base-100">
            <div className="navbar max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
                <div>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="Tendo_Logo"
                            height={50}
                            width={100}
                            className="btn btn-ghost"
                        />
                    </Link>
                </div>
                <div className="flex gap-2">
                    <Link href="#about" className="btn btn-ghost">About</Link>
                    <Link href="#features" className="btn btn-ghost">Features</Link>
                    <Link href="/shop" className="btn btn-ghost">Shop</Link>
                    <Link href="/forum" className="btn btn-ghost">Forum</Link>
                </div>
                <div className="flex gap-2">
                    <Link href="/auth/signin" className="btn btn-primary">Sign In</Link>
                    <Link href="/auth/signup" className="btn btn-secondary">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}
