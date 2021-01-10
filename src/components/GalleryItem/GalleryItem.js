export function GalleryItem({ data }) {
  return <img src={data.url} alt={data.original_filename} />;
}
