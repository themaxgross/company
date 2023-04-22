import type { ImageProps as RemixImageProps } from "remix-image";
import { Image as RemixImage, cloudflareImagesLoader } from "remix-image";
import { useHydrated } from "remix-utils";

type ImageProps = RemixImageProps & {
  loader?: never;
  loaderUrl?: never;
};
// hardcode the domain for now
const domain = "https://leoji.company";

export default function Image({
  responsive,
  src,
  options,

  ...props
}: ImageProps) {
  const isHydrated = useHydrated();

  const isDev = process.env.NODE_ENV === "development";
  const useCloudflare = !isDev;

  // If src does not start with a domain, then it is a local image
  // and we need to add the domain to the src
  if (useCloudflare && src && !src.startsWith("http")) {
    src = `${domain}${src}`;
  }

  if (!useCloudflare) {
    return <RemixImage {...props} src={src} responsive={undefined} />;
  }

  return (
    <RemixImage
      {...props}
      src={src}
      options={{
        ...options,
        background: undefined,
      }}
      loader={cloudflareImagesLoader}
      responsive={responsive}
    />
  );
}
