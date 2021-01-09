import Typography from "@material-ui/core/Typography";
import { BaseLayout } from "layouts";
import { useGetCats } from "lib";

export function Home() {
  const { data, status } = useGetCats();

  console.log("data", data);
  console.log("status", status);

  return (
    <BaseLayout>
      <Typography variant="h1">Home</Typography>
    </BaseLayout>
  );
}
