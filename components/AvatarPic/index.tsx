import React, { FunctionComponent } from "react";
import Image from "next/image";

interface AvatarPicProps {
  authorName: string;
  authorImgURL: string;
}
const AvatarPic: FunctionComponent<AvatarPicProps> = ({
  authorName,
  authorImgURL,
}) => {
  return (
    <Image
      layout="responsive"
      className="rounded-full"
      src={authorImgURL}
      alt={`${authorName}'s avatar pic'`}
      width="50"
      height="50"
    />
  );
};

export default AvatarPic;
