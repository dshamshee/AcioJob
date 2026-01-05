import Image from "next/image";
export const Hero = ({children}: {children: React.ReactNode})=>{

    return(
        <div className="hero w-full px-5 h-[90vh] relative">
            <Image src={'/background.svg'} alt="hero" width={1000} height={1000} className="w-full h-full rounded-xl object-cover" />
            {children}
        </div>
    )
}