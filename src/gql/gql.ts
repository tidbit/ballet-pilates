/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n          query Footer {\n            siteInfo(where: { id: \"cj97sbb83hzqw0128cva2wlrd\" }) {\n              footerTitle\n              footerCopyright\n              phoneNumber\n              email\n            }\n          }\n        ": typeof types.FooterDocument,
    "\n  query Page($page: PageType) {\n    page(where: { page: $page }) {\n      updatedAt\n      title\n      subtitle\n      masthead {\n        url\n        fileName\n      }\n      videoEmbeds\n      pageTemplate\n      pageContent {\n        html\n      }\n    }\n  }\n": typeof types.PageDocument,
    "\n  query HomePage {\n    page(where: { page: Home }) {\n      masthead {\n        id\n        url\n        handle\n        fileName\n      }\n      videoEmbeds\n    }\n    siteInfo(where: { id: \"cj97sbb83hzqw0128cva2wlrd\" }) {\n      homePageQuote\n      homePageQuoteImage {\n        id\n        fileName\n        url\n      }\n      contentBlocks {\n        icon\n        iconsize\n        title\n        linkLabel\n        url\n      }\n      carouselItems {\n        id\n        title\n        image {\n          id\n          fileName\n          url\n        }\n        buttonLabel\n        buttonLink\n      }\n      ctaCards(first: 3) {\n        id\n        title\n        description\n        link\n      }\n    }\n    pages(\n      where: { page_in: [Children_Classes, Adult_Classes, Private_Sessions] }\n    ) {\n      page\n      title\n      subtitle\n      shortDescription\n      previewImage {\n        url\n        fileName\n      }\n    }\n  }\n": typeof types.HomePageDocument,
};
const documents: Documents = {
    "\n          query Footer {\n            siteInfo(where: { id: \"cj97sbb83hzqw0128cva2wlrd\" }) {\n              footerTitle\n              footerCopyright\n              phoneNumber\n              email\n            }\n          }\n        ": types.FooterDocument,
    "\n  query Page($page: PageType) {\n    page(where: { page: $page }) {\n      updatedAt\n      title\n      subtitle\n      masthead {\n        url\n        fileName\n      }\n      videoEmbeds\n      pageTemplate\n      pageContent {\n        html\n      }\n    }\n  }\n": types.PageDocument,
    "\n  query HomePage {\n    page(where: { page: Home }) {\n      masthead {\n        id\n        url\n        handle\n        fileName\n      }\n      videoEmbeds\n    }\n    siteInfo(where: { id: \"cj97sbb83hzqw0128cva2wlrd\" }) {\n      homePageQuote\n      homePageQuoteImage {\n        id\n        fileName\n        url\n      }\n      contentBlocks {\n        icon\n        iconsize\n        title\n        linkLabel\n        url\n      }\n      carouselItems {\n        id\n        title\n        image {\n          id\n          fileName\n          url\n        }\n        buttonLabel\n        buttonLink\n      }\n      ctaCards(first: 3) {\n        id\n        title\n        description\n        link\n      }\n    }\n    pages(\n      where: { page_in: [Children_Classes, Adult_Classes, Private_Sessions] }\n    ) {\n      page\n      title\n      subtitle\n      shortDescription\n      previewImage {\n        url\n        fileName\n      }\n    }\n  }\n": types.HomePageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n          query Footer {\n            siteInfo(where: { id: \"cj97sbb83hzqw0128cva2wlrd\" }) {\n              footerTitle\n              footerCopyright\n              phoneNumber\n              email\n            }\n          }\n        "): (typeof documents)["\n          query Footer {\n            siteInfo(where: { id: \"cj97sbb83hzqw0128cva2wlrd\" }) {\n              footerTitle\n              footerCopyright\n              phoneNumber\n              email\n            }\n          }\n        "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Page($page: PageType) {\n    page(where: { page: $page }) {\n      updatedAt\n      title\n      subtitle\n      masthead {\n        url\n        fileName\n      }\n      videoEmbeds\n      pageTemplate\n      pageContent {\n        html\n      }\n    }\n  }\n"): (typeof documents)["\n  query Page($page: PageType) {\n    page(where: { page: $page }) {\n      updatedAt\n      title\n      subtitle\n      masthead {\n        url\n        fileName\n      }\n      videoEmbeds\n      pageTemplate\n      pageContent {\n        html\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HomePage {\n    page(where: { page: Home }) {\n      masthead {\n        id\n        url\n        handle\n        fileName\n      }\n      videoEmbeds\n    }\n    siteInfo(where: { id: \"cj97sbb83hzqw0128cva2wlrd\" }) {\n      homePageQuote\n      homePageQuoteImage {\n        id\n        fileName\n        url\n      }\n      contentBlocks {\n        icon\n        iconsize\n        title\n        linkLabel\n        url\n      }\n      carouselItems {\n        id\n        title\n        image {\n          id\n          fileName\n          url\n        }\n        buttonLabel\n        buttonLink\n      }\n      ctaCards(first: 3) {\n        id\n        title\n        description\n        link\n      }\n    }\n    pages(\n      where: { page_in: [Children_Classes, Adult_Classes, Private_Sessions] }\n    ) {\n      page\n      title\n      subtitle\n      shortDescription\n      previewImage {\n        url\n        fileName\n      }\n    }\n  }\n"): (typeof documents)["\n  query HomePage {\n    page(where: { page: Home }) {\n      masthead {\n        id\n        url\n        handle\n        fileName\n      }\n      videoEmbeds\n    }\n    siteInfo(where: { id: \"cj97sbb83hzqw0128cva2wlrd\" }) {\n      homePageQuote\n      homePageQuoteImage {\n        id\n        fileName\n        url\n      }\n      contentBlocks {\n        icon\n        iconsize\n        title\n        linkLabel\n        url\n      }\n      carouselItems {\n        id\n        title\n        image {\n          id\n          fileName\n          url\n        }\n        buttonLabel\n        buttonLink\n      }\n      ctaCards(first: 3) {\n        id\n        title\n        description\n        link\n      }\n    }\n    pages(\n      where: { page_in: [Children_Classes, Adult_Classes, Private_Sessions] }\n    ) {\n      page\n      title\n      subtitle\n      shortDescription\n      previewImage {\n        url\n        fileName\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;