import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BDT",
  });

  return formatter.format(price);
};

export function constructMetadata({
  title = "CaseCobra - custom phone cases",
  description = "Create your custom phone cases with ease in seconds",
  image = "/thumbnail.png",
  icons = "favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      description,
      images: [image],
      creator: "@naimulabeer",
    },
    icons,
    metadataBase: new URL("https://casecobra-ecommerce.vercel.app/"),
  };
}
