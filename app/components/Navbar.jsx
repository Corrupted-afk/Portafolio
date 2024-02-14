import { M_PLUS_Rounded_1c } from "next/font/google";
import Link from "next/link";
import { DropdownTheme } from "./DropdownTheme";
const NOMBRE_PAGINA = 'Diego Lopez';
const mplus = M_PLUS_Rounded_1c({ subsets: ['latin'], weight: "700" })

export const Navbar = () => {

    return (
        <div className="navbar bg-base-100/5 shadow-sm fixed" style={{ backdropFilter: 'blur(10px)' }}>
            <div className="navbar-end">

                <Link className={mplus.className} href={`/`}>{NOMBRE_PAGINA}</Link>
                {/* <a className="btn btn-ghost text-xl">Corrupted AFK</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href={`/proyectos`}>Proyectos</Link>
                    </li>
                    <li>
                        <a>Item 3</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <DropdownTheme></DropdownTheme>
              
            </div>
        </div>
    );
};
