import React from "react";

type LinkedInEmbedProps = {
  url: string;
  height?: number;
  className?: string;
};

function buildEmbedSrc(url: string): string | null {
  const decoded = (() => {
    try { return decodeURIComponent(url); } catch { return url; }
  })();

  const activityMatch = decoded.match(/activity-(\d+)/);
  if (activityMatch?.[1]) return `https://www.linkedin.com/embed/feed/update/urn:li:activity:${activityMatch[1]}`;

  // Support slugs like ...-ugcPost-<id>-...
  const ugcPostSlug = decoded.match(/ugcPost-(\d+)/);
  if (ugcPostSlug?.[1]) return `https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${ugcPostSlug[1]}`;

  // Support slugs like ...-share-<id>-...
  const shareSlug = decoded.match(/share-(\d+)/);
  if (shareSlug?.[1]) return `https://www.linkedin.com/embed/feed/update/urn:li:share:${shareSlug[1]}`;

  const urnMatch = decoded.match(/urn:li:(ugcPost|share|activity):(\d+)/);
  if (urnMatch?.[1] && urnMatch?.[2]) return `https://www.linkedin.com/embed/feed/update/urn:li:${urnMatch[1]}:${urnMatch[2]}`;

  const encodedUrnMatch = decoded.match(/urn%3Ali%3A(activity|ugcPost|share)%3A(\d+)/);
  if (encodedUrnMatch?.[1] && encodedUrnMatch?.[2]) return `https://www.linkedin.com/embed/feed/update/urn:li:${encodedUrnMatch[1]}:${encodedUrnMatch[2]}`;

  // Support query param updateUrn=urn:li:activity:<id>
  const updateUrnParam = decoded.match(/updateUrn=urn:li:(activity|ugcPost|share):(\d+)/);
  if (updateUrnParam?.[1] && updateUrnParam?.[2]) return `https://www.linkedin.com/embed/feed/update/urn:li:${updateUrnParam[1]}:${updateUrnParam[2]}`;

  // Known non-embeddable content types -> fallback to link
  if (/linkedin\.com\/(pulse|newsletters|learning|events)\//.test(decoded)) return null;

  // Fallback: try to pass the original URL if it contains /posts/ or /feed/update/ (may not always work)
  if (/linkedin\.com\/.+/.test(decoded)) return null;
  return null;
}

export const LinkedInEmbed: React.FC<LinkedInEmbedProps> = ({ url, height = 600, className }) => {
  const src = buildEmbedSrc(url);

  if (!src) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
        Ver publicación en LinkedIn
      </a>
    );
  }

  return (
    <div className={className}>
      <iframe
        title="LinkedIn Post"
        src={src}
        height={height}
        width="100%"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default LinkedInEmbed;
