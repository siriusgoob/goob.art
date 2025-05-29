import type { Artwork, Project } from "./firebase";

export function serializeProjects(projects: Project[]): string {
  return JSON.stringify(projects);
}

export function deserializeProjects(json: string): Project[] {
  const arr = JSON.parse(json);

  return arr.map(
    (obj: any): Project => ({
      dates: obj.dates,
      description: obj.description,
      headerImage: obj.headerImage
        ? {
            description: obj.headerImage.description,
            title: obj.headerImage.title,
            type: obj.headerImage.type,
            url: obj.headerImage.url,
          }
        : null,
      images: obj.images.map((img: any) => ({
        description: img.description,
        title: img.title,
        type: img.type,
        url: img.url,
      })),
      links: obj.links,
      paragraphs: obj.paragraphs,
      projectId: obj.projectId,
      title: obj.title,
    })
  );
}

const getWordCount = (text: string): number => text.trim().split(/\s+/).length;

export const getReadTime = (
  text: string | string[] | undefined,
  wordsPerMinute: number = 225
): number => {
  if (!text) return 0;
  const normalizedText = Array.isArray(text) ? text.join(" ") : text;
  const words = getWordCount(normalizedText);
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};
