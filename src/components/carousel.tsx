import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/utils";

const carouselVariants = cva("carousel", {
  variants: {
    modifier: {
      start: "carousel-start",
      center: "carousel-center",
      end: "carousel-end",
    },
    direction: {
      horizontal: "carousel-horizontal",
      vertical: "carousel-vertical",
    },
  },
});

export type CarouselProps = React.ComponentProps<"div"> &
  VariantProps<typeof carouselVariants>;

function Carousel({
  className,
  modifier = "start",
  direction = "horizontal",
  ...props
}: CarouselProps) {
  return (
    <div
      className={cn(carouselVariants({ modifier, direction, className }))}
      {...props}
    />
  );
}

export type CarouselItemProps = React.ComponentProps<"div">;

function CarouselItem({ className, ...props }: CarouselItemProps) {
  return <div className={cn("carousel-item", className)} {...props} />;
}

export { Carousel, carouselVariants, CarouselItem };
