import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

export default function Home() {
  return (
    <div className=" h-screen flex justify-center items-center text-custom-color">
      <Button>
        <CirclePlus />
        Add
      </Button>
    </div>
  );
}
