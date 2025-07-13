import { useSuspenseQuery } from "@tanstack/react-query";
import { EmailSubscribe } from "./EmailSubscribe";
import { CMSRequest } from "~/utils/cms-request";
import { FooterQuery } from "~/gql/graphql";
import { graphql } from "~/gql";
import { AnchorHTMLAttributes } from "react";
import { cn } from "~/utils/utils";

function FooterLink({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn("underline hover:opacity-75", className)} {...props} />
  );
}

export function Footer() {
  const { data } = useSuspenseQuery<FooterQuery>({
    queryKey: ["hygraph", "footer"],
    queryFn: () =>
      CMSRequest<FooterQuery>(
        graphql(`
          query Footer {
            siteInfo(where: { id: "cj97sbb83hzqw0128cva2wlrd" }) {
              footerTitle
              footerCopyright
            }
          }
        `),
      ),
  });
  console.log({ data, foo: data.siteInfo });

  return (
    <footer className="bg-base-300 text-base-900 py-16 space-y-16">
      {data.siteInfo?.footerTitle && (
        <div className="container mx-auto text-center">
          <h3 className="italic text-3xl text-base-900/60">
            {data.siteInfo.footerTitle}
          </h3>
        </div>
      )}

      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
        <div className="">
          <h4 className="text-xl text-base-900/60 pb-4 italic">
            Drop by for a class today!
          </h4>
          <div className="w-full h-0 pb-[56.25%] relative">
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.22181442122!2d-95.64194039999998!3d29.8867086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d0cdbf20aaaf%3A0xddb25e12a6d01bcd!2s15544+Ridge+Park+Dr%2C+Houston%2C+TX+77095!5e0!3m2!1sen!2sus!4v1433523478239"
            ></iframe>
          </div>
        </div>

        <div className="  md:max-xl:col-span-2 md:max-xl:px-[25%] md:max-xl:order-last ">
          <EmailSubscribe />
        </div>

        <div className=" space-y-4">
          <h4 className="text-xl text-base-900/60 pb-4 italic">
            Questions? Get in touch!
          </h4>

          <p className="space-y-2 flex flex-col text-base-900/80">
            <FooterLink href="mailto:balletandpilates@gmail.com?subject=Ballet%20and%20Pilates">
              balletandpilates@gmail.com
            </FooterLink>
            <FooterLink
              target="_blank"
              href="https://clients.mindbodyonline.com/classic/home?studioid=27108"
              title="See the class schedule"
            >
              Class Schedule
            </FooterLink>
            <FooterLink target="_blank" href="https://goo.gl/maps/Ww4x1">
              Get Directions
            </FooterLink>
            <a href="tel:+12818550255">281.855.0255</a>
            <FooterLink
              target="_blank"
              href="https://clients.mindbodyonline.com/classic/ws?studioid=27108&stype=-2&subTab=info"
            >
              Login
            </FooterLink>
            <iframe
              className="w-[200px] h-[48px] mx-[20px] border-none mt-8"
              id="getOurApp"
              allowTransparency={true}
              scrolling="no"
              src="https://clients.mindbodyonline.com/connect/appbutton"
            ></iframe>
          </p>
        </div>
      </div>

      <div className="container mx-auto text-center pt-8">
        <p className="italic text-md text-base-900/50">
          {data.siteInfo?.footerCopyright}
        </p>
      </div>
    </footer>
  );
}
