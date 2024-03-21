import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface ServiceProps {
  icon: StaticImageData;
  titleService: string;
  descriptionService: string;
}

export const Service = ({
  icon,
  titleService,
  descriptionService,
}: ServiceProps) => {
  return (
    <div className="min-w-[330px] max-w-[330px]">
      <Card>
        <CardHeader>
          <CardTitle>
            <Image src={icon} alt={titleService} height={65} />
          </CardTitle>
          <CardDescription>{titleService}</CardDescription>
        </CardHeader>
        <CardContent>{descriptionService}</CardContent>
      </Card>
    </div>
  );
};
