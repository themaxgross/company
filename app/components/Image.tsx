import type { ImageProps as RemixImageProps } from "remix-image";
import { Image as RemixImage, cloudflareImagesLoader } from "remix-image";

type ImageProps = RemixImageProps & {
  loader?: never;
  loaderUrl?: never;
};
// hardcode the domain for now
const domain = "https://leoji.company";

export default function Image({ responsive, src, ...props }: ImageProps) {
  const isDev = process.env.NODE_ENV === "development";
  const useCloudflare = !isDev;

  // If src does not start with a domain, then it is a local image
  // and we need to add the domain to the src
  if (useCloudflare && src && !src.startsWith("http")) {
    src = `${domain}${src}`;
  }

  return (
    <RemixImage
      {...props}
      src={src}
      loader={cloudflareImagesLoader}
      responsive={useCloudflare ? responsive : undefined}
    />
  );
}
