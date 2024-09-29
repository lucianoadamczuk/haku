import {
  HeaderHomeContainer,
  WhatWeOfferContainer,
  WhoWeAreContainer,
} from "@/modules/home";
import { AppParams } from "@/modules/types";

export default async function PageHome({ params }: { params: AppParams }) {
  const language = params.language;
  return (
    <>
      <HeaderHomeContainer language={language} />
      <WhoWeAreContainer language={language} />
      <WhatWeOfferContainer language={language} />
    </>
  );
}
