import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function BreadcrumbDemo() {
  return (
    <Breadcrumb className="font-sans">
      <BreadcrumbList className="relative z-10 border border-gray-50 shadow-md px-10 flex justify-between">
        <div className="flex items-center justify-between">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="font-semibold">
              Development
            </BreadcrumbLink>
            <Image
              src={
                "https://s.udemycdn.com/browse_components/link-bar/large-next.svg"
              }
              width={15}
              height={48}
              alt=""
              className="mr-2 ml-4"
            />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/docs/components"
              className="mx-2  text-gray-700 hover:text-[#5022c3]"
            >
              Web Development
            </BreadcrumbLink>
            <BreadcrumbLink
              href="/docs/components"
              className="mx-2  text-gray-700 hover:text-[#5022c3]"
            >
              Web Development
            </BreadcrumbLink>
            <BreadcrumbLink
              href="/docs/components"
              className="mx-2  text-gray-700 hover:text-[#5022c3]"
            >
              Web Development
            </BreadcrumbLink>
            <BreadcrumbLink
              href="/docs/components"
              className="mx-2  text-gray-700 hover:text-[#5022c3]"
            >
              Web Development
            </BreadcrumbLink>
            <BreadcrumbLink
              href="/docs/components"
              className="mx-2  text-gray-700 hover:text-[#5022c3]"
            >
              Web Development
            </BreadcrumbLink>
            <BreadcrumbLink
              href="/docs/components"
              className="mx-2  text-gray-700 hover:text-[#5022c3]"
            >
              Web Development
            </BreadcrumbLink>
            <BreadcrumbLink
              href="/docs/components"
              className="mx-2  text-gray-700 hover:text-[#5022c3]"
            >
              Web Development
            </BreadcrumbLink>
          </BreadcrumbItem>
        </div>
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 border-0">
              <BreadcrumbEllipsis className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="bg-white mt-5 mr-10 py-4 pr-48"
            >
              <BreadcrumbLink
                href="/docs/components"
                className="text-sm mx-2 text-gray-700 hover:text-[#5022c3]"
              >
                Web Development
              </BreadcrumbLink>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
