import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const PostCard = () => {
  return (
    // <div className="maincontainer text-black w-[300px] flex flex-col">
      <Card className="w-[420px] p-0 m-0">
        <CardHeader className="w-full p-0 m-0">
          <CardTitle className="w-full p-0 m-0">
            <div className="w-full flex flex-col gap-2">
            <Image src={'/postCard.svg'} alt="postCard" width={1000} height={1000} className="w-full h-72 rounded-xl object-cover" />
            <h1 className="px-5">Other post heading sample text..</h1>
            </div>
          </CardTitle>
          <CardDescription className="py-3 px-5">
            <div className="flex items-center justify-between">
              <p>By Writter Name</p>
              <p>23 Dec.</p>
            </div>

            <div className="content py-2">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam magni natus, est totam quia at! Tempore officiis perspiciatis sunt aliquam.
              </p>
            </div>
          </CardDescription>
        </CardHeader>

      </Card>
    // </div>
  );
};
