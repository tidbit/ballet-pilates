import { request, gql } from "graphql-request";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

const GRAPHCMS_API =
  "https://api-us-east-1.graphcms.com/v2/ck4wh9so4ds6p01hf6c83dckl/master";
const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MTE1MTA5NTAsImF1ZCI6WyJodHRwczovL2FwaS11cy1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NrNHdoOXNvNGRzNnAwMWhmNmM4M2Rja2wvbWFzdGVyIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZWRhYmI2ZWQtZDVmOC00YWMzLWJlNTctYzc4MTdiMzhjY2FkIiwianRpIjoiY2trYmcwZmw4MXYzMzAxejAybWdyN2drNyJ9.sIZw1r-OrelPPzEXS3NO4t15tpH8FzjEu_7y3ebEPwkelUpXFVofI1-kSXtsggJ2a5nNumsNmNgdKKzccyhN_a4whd2aqPwIj3XTLURanrjDaaNF333uHDKPQP3147YcjP3-CNHV_WFm3b9pZIDinQFI3vi6Jru-Jj-ychGiEmu9Ih9loQhqJo_Tfgtw-VT4g7XWzP5zbH5flOE942JZsnnew962jsDuQUWXOxJ7bx0XIohjy3FrN8CUX-Rk7s5HXs-OPlGAZM-h9bEbm5UDz0wQlEd8AW8cmjI48IfyI_BkgqeEhQj34ksr948VsTF74XD0Cvwk-gFInwOqSSWGNmlveK_KXPcDwN2BTeFbkrmppJd1hXRzyvD78O3Nt95a75RIAfecyBJSEo82KTwiqr7h2LBnrklmIpx45l5KDEYHU5VmAuOD4gvZNAtNEagk1nmAOvFgBuQNbn8UzukhKIYfSBp5hxTE5EFmjyDwxTspQIvGNTG8Xi4JGRxlf7n_CPFUnRfjrYJLraHaQrZk5yOE24KhZCeStJC5ftLnwEwt7h6wvehTUVsRpQYCSX7MHPY2R34FNtqqmFwguPNnNpcFFslHFQW7hDnNteXVFufCmOJ1-1E3huwilarPXJdLpDi0ATWfXLOBcxVjTWYdN9cuYwkwmhqocrQ2V0mQDEM";

const homeQueryOptions = () =>
  queryOptions({
    queryKey: ["users"],
    queryFn: () => {
      const data = request(
        GRAPHCMS_API,
        gql`
          query {
            page(where: { page: Home }) {
              masthead {
                id
                url
                handle
                fileName
              }
            }
            siteInfo(where: { id: "cj97sbb83hzqw0128cva2wlrd" }) {
              homePageQuote
              homePageQuoteImage {
                id
                fileName
                url
              }
              contentBlocks {
                icon
                iconsize
                title
                linkLabel
                url
              }
            }
            pages(
              where: {
                page_in: [Children_Classes, Adult_Classes, Private_Sessions]
              }
            ) {
              page
              title
              subtitle
              shortDescription
              previewImage {
                url
                fileName
              }
            }
          }
        `,
        undefined,
        {
          authorization: `Bearer ${token}`,
        },
      );
      return data;
    },
  });

export const Route = createFileRoute("/")({
  //  loader: async ({ context: { queryClient } }) => {
  //    queryClient.prefetchQuery(homeQueryOptions());
  //  },
  component: Home,
});

function Home() {
  const { data } = useSuspenseQuery(homeQueryOptions());
  console.log({ data });

  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <div>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </div>
    </div>
  );
}
