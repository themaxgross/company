import type { ImageProps as RemixImageProps } from "remix-image";
import { Image as RemixImage, cloudflareImagesLoader } from "remix-image";

type ImageProps = RemixImageProps & {
  loader?: never;
  loaderUrl?: never;
};

export default function Image({ responsive, ...props }: ImageProps) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <RemixImage
      {...props}
      loader={cloudflareImagesLoader}
      responsive={isDev ? undefined : responsive}
    />
  );
}
