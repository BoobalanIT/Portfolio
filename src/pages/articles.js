import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ArticlesRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/credentials");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-dark dark:text-light">
      <p className="font-semibold text-lg">Redirecting to Credentials...</p>
    </div>
  );
}
