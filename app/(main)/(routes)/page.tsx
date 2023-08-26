import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <div className="text-3xl font-bold text-indigo-500">
        This is protected page
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
