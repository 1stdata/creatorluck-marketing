const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "https://a.creatorluck.io";

export interface SearchPreviewResult {
  count: number;
  preview: { thumbnailUrl: string; viewCount: number }[];
}

export async function fetchSearchPreview(
  query: string,
  type: string = "video"
): Promise<SearchPreviewResult> {
  const res = await fetch(`${BACKEND_URL}/api/youtube/search-preview`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, type }),
  });

  if (!res.ok) {
    throw new Error(`Search preview failed: ${res.status}`);
  }

  return res.json();
}
