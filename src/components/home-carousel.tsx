import { Asset } from "@/gql/graphql";
import { Carousel, CarouselItem } from "@/components/carousel";
import { Button } from "./button";
import { CarouselItem as CMSCarouselItem } from "@/gql/graphql";
import { useRef, useState } from "react";
import { useAnimationFrame } from "motion/react";

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
  const [show, setShow] = useState(false);

  return (
    <Carousel className="w-full">
      {items.map((item, i) => {
        const ref = useRef<HTMLDivElement>(null);
        const [rect, setRect] = useState<undefined | DOMRect>(undefined);

        useAnimationFrame(() => {
          const r = ref?.current?.getBoundingClientRect();
          if (rect?.left !== r?.left) {
            setRect(r);
            if (!show) {
              setShow(true);
            }
          }
        });

        const showPrev = show && (rect ? rect.left === 0 : false);
        const showNext = show && (rect ? rect.left === rect.width : false);

        console.log({
          rect,
          showPrev,
          showNext,
          i,
          id: item.id,
        });

        const handleClick = () => setShow(false);

        return (
          <CarouselItem
            id={`item-${item.id}`}
            className="w-full md:w-1/2 relative"
            key={item.id}
            ref={ref}
          >
            <div
              style={{
                backgroundImage: `url(${item.image.url})`,
              }}
              className="aspect-4/5 bg-cover w-full text-center flex flex-col items-center justify-end gap-4 px-16 py-12"
            >
              <h2 className="text-5xl leading-relaxed text-base-100 text-shadow-base-content/30 text-shadow-md mx-auto max-w-3/5">
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

            {showPrev ? (
              <PrevButton
                href={`#item-${items[i - 1 < 0 ? items.length - 1 : i - 1].id}`}
                onClick={() => handleClick()}
              />
            ) : null}
            {showNext ? (
              <NextButton
                href={`#item-${items[i + 1 >= items.length ? 0 : i + 1].id}`}
                onClick={() => handleClick()}
              />
            ) : null}
          </CarouselItem>
        );
      })}
    </Carousel>
  );
}

function PrevButton({ href, onClick }: { href: string; onClick: () => void }) {
  return (
    <div className="hidden md:flex absolute bottom-1/2 left-[40px]">
      <Button
        asChild
        className="font-sans border border-1 border-base-200/25"
        size="sm"
        modifier="circle"
        onClick={onClick}
      >
        <a href={href}>❮</a>
      </Button>
    </div>
  );
}

function NextButton({ href, onClick }: { href: string; onClick: () => void }) {
  return (
    <div className="hidden md:flex absolute bottom-1/2 right-[40px]">
      <Button
        asChild
        className="font-sans border border-1 border-base-200/25"
        size="sm"
        modifier="circle"
        onClick={onClick}
      >
        <a href={href}>❯</a>
      </Button>
    </div>
  );
}
