import { BaseLayout } from "layouts";
import { Gallery } from "components";

/**
 * The site homepage
 */
export function Home() {
  return (
    <BaseLayout>
      <Gallery />
    </BaseLayout>
  );
}
