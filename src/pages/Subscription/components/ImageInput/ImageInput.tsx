import React, { ChangeEvent, memo, useCallback, useEffect, useState } from "react";
import LabeledInput from "../../../../components/Forms/LabeledInput/LabeledInput";
import { Image } from "../../../../models/Play/Play";

import { Container } from "./styles";

export interface Props {
  image: Image;
  onChange?: (image: Image) => void;
  placeholderImage: string;
  placeholderCaption: string;
}

const ImageInput: React.FC<Props> = ({
  image,
  onChange,
  placeholderImage,
  placeholderCaption,
}) => {
  const [myImage, setMyImage] = useState<Image>(image);

  const updateFather = useCallback(() => {
    onChange?.(myImage);
  }, [myImage, onChange]);

  useEffect(() => {
    updateFather();
  }, [myImage, updateFather]);

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setMyImage((prev: Image) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Container>
      <LabeledInput
        id="image"
        type="text"
        placeholder={placeholderImage}
        value={myImage.image}
        onChange={onChangeHandler}
        testId="image"
      />

      <LabeledInput
        id="caption"
        type="text"
        placeholder={placeholderCaption}
        value={myImage.caption}
        onChange={onChangeHandler}
        testId="caption"
      />
    </Container>
  );
};

export default memo(ImageInput);
