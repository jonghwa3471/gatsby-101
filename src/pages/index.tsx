import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

export default function IndexPage() {
  return (
    <Layout title="Welcome to DevStickers 👋">
      <StaticImage
        height={200}
        alt="Stickers"
        src="https://images.unsplash.com/photo-1529458600305-b5bdde535770?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </Layout>
  );
}

export const Head = () => <Seo title="Home" />;
