"use client"

import { ArrowRightIcon, Badge, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";


interface CardItemProps {
    imageUrl: string,
    name: string
}

export const BlogCard = ({ imageUrl, name }: CardItemProps) => {




    return (
        <Card className="min-w-full max-w-full rounded-2xl shadow-sm mb-4">
            <CardContent className="px-1 py-0">
                <div className="relative w-full h-[175px]">
                    <Image
                        src={imageUrl}
                        style={{ objectFit: 'cover' }}
                        fill
                        className="rounded-2xl py-1"
                        alt={name} />
                </div>
                <div className="px-2 pb-1">
                    <h2 className="font-semibold mt-2 overflow-hidden text-ellipsis "> {name} </h2>
                    <p className=" w-full mt-3 flex items-center gap-2 justify-end text-[#57007B] font-semibold mb-4 ">
                        Leia Mais<ArrowRightIcon size={18} />{" "}
                    </p>

                </div>

            </CardContent>
        </Card>
    )
}

