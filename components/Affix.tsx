"use client";
import useAffix from "@/hooks/useAffix";
import AffixList from "./AffixList";

function Affix() {
  const { data, isLoading } = useAffix();

  return (
    <div className="flex flex-col items-start gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        {isLoading ? "Loading..." : `Current affixes: ${data?.title}`}
        <AffixList />
      </div>
    </div>
  );
}

export default Affix;
