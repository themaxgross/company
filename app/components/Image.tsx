import type { ImageProps as RemixImageProps } from "remix-image";
import { useResponsiveImage, cloudflareImagesLoader } from "remix-image";
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
  const responsiveProps = useResponsiveImage(
    { src },
    responsive ?? [],
    options,
    [1],
    "https://leoji.company/cdn-cgi/image",
    cloudflareImagesLoader
  );

  const isHydrated = useHydrated();

  const isDev = process.env.NODE_ENV === "development";
  const useCloudflare = !isDev;

  // If src does not start with a domain, then it is a local image
  // and we need to add the domain to the src
  if (useCloudflare && src && !src.startsWith("http")) {
    src = `${domain}${src}`;
  }

  // In server mode and prior to hydration, we use a single, static image.
  // After hydration, we'll swap out the static, fixed image for a responsive image managed by Remix Image.
  // This balances the tradeoff between server-side rendering and client-side hydration and avoids issues with low-quality images remaining on the page after hydration.

  return <img data-remix-static={false} {...props} {...responsiveProps} />;
}
