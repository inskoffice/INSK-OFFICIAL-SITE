import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
  url
}) {
  const siteName = "INSK – Digital Marketing & Creative Agency";
  const defaultDescription =
    "INSK is a strategic digital marketing and creative agency offering SEO, web design, branding, and performance-driven solutions across South Asia.";

  return (
    <Helmet>
      <title>{title ? `${title} | INSK` : siteName}</title>

      <meta
        name="description"
        content={description || defaultDescription}
      />

      {keywords && (
        <meta name="keywords" content={keywords} />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={title || siteName} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content="website" />

      {url && <meta property="og:url" content={url} />}
    </Helmet>
  );
}
