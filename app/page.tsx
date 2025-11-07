import { redirect } from "next/navigation";

export default function RootPage() {
  // Redirect root to default locale
  redirect("/en");
}
