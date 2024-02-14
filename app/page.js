import { M_PLUS_Rounded_1c } from "next/font/google";
const mplus = M_PLUS_Rounded_1c({ subsets: ['latin'], weight: "700" })
export default function Home() {

  return (

    <main className=" min-h-screen  py-24 ">
      <h1 className="text-3xl font-bold" >
        <span className={mplus.className}>Diego Lopez</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo praesentium voluptatibus nemo culpa debitis, perferendis et magni optio aliquid? Nulla amet dignissimos dolorem libero veritatis atque enim architecto animi.
      </p>
    </main>

  );
}
