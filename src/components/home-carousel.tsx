import { Asset } from "@/gql/graphql";
import { Carousel, CarouselItem } from "@/components/carousel";
import { Button } from "./button";
import { CarouselItem as CMSCarouselItem } from "@/gql/graphql";

function HomeCarouselItem(props: React.ComponentProps<"div">) {
  const { children } = props;
  return <CarouselItem className="w-1/2">{children}</CarouselItem>;
}

type HomeCarouselItem = Pick<
  CMSCarouselItem,
  "id" | "title" | "buttonLabel" | "buttonLink"
> & {
  image: {
    id: Asset["id"];
    fileName: Asset["fileName"];
    url: Asset["url"];
  };
};
type HomeCarouselProps = {
  items: HomeCarouselItem[];
};
export function HomeCarousel({ items }: HomeCarouselProps) {
  console.log({ items });
  return (
    <Carousel className="w-full">
      {items.map((item) => (
        <CarouselItem className="w-full md:w-1/2">
          <div
            key={item.id}
            style={{
              backgroundImage: `url(${item.image.url})`,
            }}
            className="aspect-4/5 bg-cover w-full text-center flex flex-col items-center justify-end gap-4 px-16 py-12"
          >
            <h2 className="text-5xl leading-relaxed text-base-100 text-shadow-base-content/40 mx-auto max-w-3/5">
              {item.title}
            </h2>
            <Button
              asChild
              className="font-sans border border-1 border-base-200/25"
              color="primary"
              size="sm"
            >
              <a href={item.buttonLink}>{item.buttonLabel}</a>
            </Button>
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
}
