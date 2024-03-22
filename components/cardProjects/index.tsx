import { Separator } from "../separator";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";


interface CardProjectsProps {
  order: string;
  title: string;
  description: string;
}

export const CardProjects = ({
  order,
  title,
  description,
}: CardProjectsProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="min-w-[300px] max-w-[300px] border border-gray-300 rounded-md max-sm:w-full max-sm:h-full">
        <Card>
          <CardHeader>
            <CardTitle>
              <p className="font-bold text-base">
                <span className="bg-custom-gradient-number inline-block text-transparent bg-clip-text mr-2">
                  {order}
                </span>
                {title}
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent  >
            <p className="text-sm">{description}</p>
          </CardContent>
        </Card>
      </div>

    </div>
  );
};
