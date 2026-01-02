import { Carousel, CarouselItem } from "@/components/carousel";
import { Button } from "./button";
import { cn } from "@/utils/utils";

function HomeCarouselItem(props: React.ComponentProps<"div">) {
  const { className } = props;
  return (
    <CarouselItem className="w-1/2">
      <div
        className={cn(
          "aspect-4/5 bg-purple-400 w-full text-center flex flex-col items-center justify-end gap-4 px-16 py-12",
          className,
        )}
      >
        <h2 className="text-5xl leading-relaxed text-base-100 text-shadow-base-content/40 mx-auto max-w-3/5">
          Title for Carousel Item
        </h2>
        <Button className="font-sans" color="primary" size="sm">
          CTA Button
        </Button>
      </div>
    </CarouselItem>
  );
}

export function HomeCarousel() {
  return (
    <Carousel className="w-full">
      <HomeCarouselItem className="bg-purple-400" />
      <HomeCarouselItem className="bg-blue-400" />
      <HomeCarouselItem className="bg-purple-400" />
      <HomeCarouselItem className="bg-blue-400" />
    </Carousel>
  );
}
