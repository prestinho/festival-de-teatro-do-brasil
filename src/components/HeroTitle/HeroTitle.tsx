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
  return (
    <>
      <Title>
        {title}
        {subTitle && (
          <>
            <br />
            <span className="sub">{subTitle}</span>
          </>
        )}
      </Title>
      <Image
        bgImg={imgPathProvider.getPath(src, window.innerWidth, window.innerHeight)}
        bgImgSmall={imgPathProvider.getPath(
          src,
          window.innerWidth * 0.1,
          window.innerHeight * 0.1
        )}
        data-testid="image"
      />
    </>
  );
};

export default HeroTitle;
