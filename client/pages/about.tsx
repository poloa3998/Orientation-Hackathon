import { useRouter } from 'next/router';

export default function About (){
    const router = useRouter();

    return(
       <>
       <main className="flex justify-center items-center h-[100vh] bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white">
          <div className="w-[50%]  items-center">
            <h1 className="font-bold text-4xl">A brief description of the project</h1>
            <p className="py-5">Solanify is a Solana-based music platform, similar to Spotify, where users can listen to and like songs using cryptocurrency, with the musicians receiving payment based on the number of likes received. </p>
            <button className="border px-3 py-2"  onClick={() => router.push("/")}>Back</button>
          </div>
       </main>
       </>
    )

}