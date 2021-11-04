import React, {
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import LabeledInput from "../LabeledInput/LabeledInput";
import { Image } from "../../../models/Play/Play";
import { CameraOutline } from "@styled-icons/evaicons-outline/CameraOutline";

import { Container, FileUploadDiv, Img, Label, ErrorLabel } from "./styles";

export interface Props {
  image: Image;
  onChange?: (image: Image) => void;
  placeholderImage: string;
  placeholderCaption: string;
  errorMsg?: string;
  forceValidation?: boolean;
  maxSize?: number;
}

const ImageInput: React.FC<Props> = ({
  image,
  onChange,
  placeholderImage,
  placeholderCaption,
  errorMsg,
  forceValidation,
  maxSize,
}) => {
  const [myImage, setMyImage] = useState<Image>(image);
  const [selectedFile, setSelectedFile] = useState<string | ArrayBuffer>("");
  const [imageError, setImageError] = useState<string | null>(null);

  if (!maxSize) maxSize = 5;

  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const addImagePreview = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      reader.readAsDataURL(e.currentTarget.files[0]);
      if (e.currentTarget.files[0].size > (maxSize || 5) * 1024 * 1024) {
        setImageError(`o arquivo não deve ter mais de ${maxSize}Mb :-(`);
        setSelectedFile("");
        return;
      }
    } else {
      setImageError("se puder tentar novamente eu agradeço.");
      setSelectedFile("");
      return;
    }
    setImageError(null);

    reader.onload = (readerEvent) => {
      if (readerEvent.target && readerEvent.target.result) {
        const result = readerEvent.target.result;
        setSelectedFile(result);
        setMyImage((prev: Image) => ({ ...prev, image: result?.toString() }));
      }
    };
  };

  useEffect(() => {
    if (forceValidation && !selectedFile) setImageError("faltou anexar o arquivo");
  }, [forceValidation, selectedFile]);

  return (
    <Container>
      <input
        type="file"
        hidden
        ref={fileInputRef}
        onChange={addImagePreview}
        accept="image/*"
      />
      <Label selectedFile={selectedFile !== ""}>Poster do Espetáculo</Label>
      <FileUploadDiv onClick={() => fileInputRef?.current?.click()}>
        {selectedFile ? (
          <Img src={selectedFile.toString()} alt="Imagem selecionada" />
        ) : (
          <CameraOutline size="3rem" />
        )}
        {imageError && (
          <ErrorLabel>Vixi, algo de errado não está certo, {imageError}</ErrorLabel>
        )}
      </FileUploadDiv>

      <LabeledInput
        id="caption"
        type="text"
        placeholder={placeholderCaption}
        value={myImage.caption}
        onChange={onChangeHandler}
        testId="caption"
        required
        errorMsg={errorMsg}
        forceValidation={forceValidation}
      />
    </Container>
  );
};

export default memo(ImageInput);
