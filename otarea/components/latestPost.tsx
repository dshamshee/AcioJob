import Image from "next/image"

export const LatestPost = ()=>{

    return(
        <div className="mainContainer shadow-xl border-4 border-gray-200 mt-5 rounded-xl flex items-center bg-gradient-to-r from-[#f2e2d9] via-[#e8e4e1] to-[#d9e0db] justify-between gap-2 px-10 py-10">
            <div className="img rounded-2xl">
                <Image src={'/latestPost.svg'} alt="latest-post" width={1000} height={1000} className="w-full h-full object-cover rounded-2xl" />
            </div>

            <div className="text w-[700px] h-[400px] flex flex-col gap-5 text-black px-5 py-5">
                <h1 className="text-3xl font-bold">Latest post heading sample tex..</h1>
                <div className="writer flex items-center gap-2 justify-between">
                    <p>By Writter Name</p>
                    <p>23 Dec.</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A soluta adipisci velit illum, animi pariatur corrupti magnam quod id neque! Sit optio labore quod vitae possimus quia quae fugit earum hic facere sunt iusto, quaerat neque dignissimos nam, nobis dolores dolore a qui repellendus perspiciatis velit minima odio. Harum maiores consectetur veniam hic, iure quam rem totam illum ex suscipit facilis, iste exercitationem ipsa eos quae vel aliquid repudiandae rerum. Qui ut praesentium aspernatur, id impedit inventore nulla quaerat eos illo iste? Esse tenetur delectus alias ut quos quia cumque rem doloribus impedit odit natus consectetur eos accusamus aperiam dicta nam, quaerat ipsum sit asperiores repudiandae voluptas, atque dolor aspernatur earum. Expedita, odit explicabo! Sed nulla repudiandae suscipit qui. Voluptatem natus vel dolorum facilis accusantium rem impedit suscipit aliquam aperiam blanditiis fugiat illo, culpa, pariatur quasi eos sapiente? Deleniti distinctio blanditiis sed placeat odio consectetur officia nisi vel! Accusantium, porro.</p>
            </div>
        </div>
    )
}