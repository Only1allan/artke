import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Navbar(){
    return(
        <div className="bg-base-100">
            <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
                <div className="flex-1">
                    <Link href="/">
                        <Image 
                            src={logo}
                            alt="Tendo_Logo" 
                            height={200}
                            width={150}
                            className="btn btn-ghost"
                         />
                    </Link>
                </div>

            </div>
        </div>
    );
}