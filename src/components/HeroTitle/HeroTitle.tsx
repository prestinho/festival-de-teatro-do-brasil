import React from "react";
import { imgPathProvider } from "../../services/imgPathProvider/imgPathProvider";

import { Title, Image } from "./styles";

export interface Props {
  src: string;
  title: string;
  caption: string;
  subTitle?: string;
}

const HeroTitle: React.FC<Props> = ({ src, title, caption, subTitle }) => {
  console.log(src, title, caption);
  return (
    <>
      <Title>
        {title}
        {subTitle && (
          <>
            <br />
            <a className="sub">{subTitle}</a>
          </>
        )}
      </Title>
      <Image
        bgImg={imgPathProvider.getPath(src, window.innerWidth, window.innerHeight)}
        data-testid="image"
      />
    </>
  );
};

export default HeroTitle;
