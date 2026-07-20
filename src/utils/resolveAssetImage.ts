const imageModules = import.meta.glob("../assets/images/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const iconModules = import.meta.glob("../assets/icons/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export function resolveAssetImage(imagePath: string) {
  if (!imagePath) {
    return "";
  }

  if (imagePath.startsWith("../assets/images/")) {
    const fileName = imagePath.split("/").pop();

    if (!fileName) {
      return imagePath;
    }

    return imageModules[`../assets/images/${fileName}`] ?? imagePath;
  }

  if (imagePath.startsWith("../assets/icons/")) {
    const fileName = imagePath.split("/").pop();

    if (!fileName) {
      return imagePath;
    }

    return iconModules[`../assets/icons/${fileName}`] ?? imagePath;
  }

  return imagePath;
}