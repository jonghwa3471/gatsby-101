import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { graphql, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <div className="grid">
      <Layout title="Welcome to DevStickers 👋">
        {data.allContentfulStickerPack.nodes.map((sticker, index) => (
          <article key={index}>
            <GatsbyImage
              image={getImage(sticker.preview?.gatsbyImageData!)!}
              alt={sticker.name!}
            />
            <Link to={`/products/${sticker.id}`}>
              <h2>{sticker.name}</h2>
              <h4>${sticker.price}</h4>
            </Link>
          </article>
        ))}
      </Layout>
    </div>
  );
}
export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
