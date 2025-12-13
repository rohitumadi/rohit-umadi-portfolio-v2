import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { projects } from "@/data/constants";

import Image from "next/image";
import Link from "next/link";
import { FaCodeBranch, FaLink } from "react-icons/fa";

const page = () => {
  return (
    <>
      <h1 className="inter-var text-center text-4xl ">Projects</h1>
      <div className="w-full  grid grid-cols-1 px-4 sm:grid-cols-2  gap-10">
        {projects.map((project) => (
          <CardContainer className="inter-var" key={project.id}>
            <CardBody className="bg-gray-50v h-auto   group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem]  rounded-xl p-6 border  ">
              <CardItem translateZ="50">{project.title}</CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Link
                  href={project.liveLink || project.gitLink}
                  target="__blank"
                >
                  <Image
                    src={project.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </Link>
              </CardItem>
              <div className="flex justify-center gap-2 items-center mt-10 mb-5">
                {project.tags.map((tag) => (
                  <CardItem
                    key={tag}
                    translateZ={20}
                    as="div"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    <Badge>{tag}</Badge>
                  </CardItem>
                ))}
              </div>
              <div className="flex justify-center items-center ">
                {project.liveLink && (
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.liveLink}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <FaLink size={20} />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Link</p>
                      </TooltipContent>
                    </Tooltip>
                  </CardItem>
                )}

                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.gitLink}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <FaCodeBranch size={20} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Git Link</p>
                    </TooltipContent>
                  </Tooltip>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
};
export default page;
