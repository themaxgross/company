import type { ImgHTMLAttributes } from "react";

type ResponsiveSize = {
  maxWidth?: number;
  size: {
    width: number;
  };
};

type ImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "sizes" | "src" | "srcSet"
> & {
  options?: {
    fit?: string;
    position?: string;
  };
  responsive?: false | ResponsiveSize[];
  sizes?: string;
  src?: string;
};

const domain = "https://leoji.company";

const sizes = [200, 300, 360, 500, 720, 960, 1200, 1440, 1920, 2560];

const DEFAULT_RESPONSIVE: ResponsiveSize[] = sizes.map((width) => ({
  size: {
    width,
  },
}));

export default function Image({
  responsive = DEFAULT_RESPONSIVE,
  src,
  options,
  sizes: imageSizes = "100vw",
  ...props
}: ImageProps) {
  const isDev = process.env.NODE_ENV === "development";
  const imageUrl = src && new URL(src, domain).href;
  const widths =
    responsive === false
      ? []
      : (responsive ?? DEFAULT_RESPONSIVE).map(({ size }) => size.width);
  const srcSet =
    !isDev && imageUrl && widths.length > 0
      ? widths
          .map((width) => {
            const optionsString = [
              `width=${width}`,
              "quality=80",
              options?.fit && `fit=${options.fit}`,
              options?.position &&
                `position=${options.position.trim().replace(/\s+/g, "_")}`,
            ]
              .filter(Boolean)
              .join(",");
            return `${domain}/cdn-cgi/image/${optionsString}/${imageUrl} ${width}w`;
          })
          .join(", ")
      : undefined;

  return (
    <img
      {...props}
      sizes={srcSet ? imageSizes : undefined}
      src={isDev ? src : imageUrl}
      srcSet={srcSet}
    />
  );
}
