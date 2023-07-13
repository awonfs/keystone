"use client";
import useAffix from "@/utils/hooks/useAffix";
import AffixList from "./AffixList";

function Affix() {
  const { data, isLoading } = useAffix();

  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <p className="mx-auto">
        {isLoading ? "Loading..." : `Current Affixes: ${data?.title}`}
      </p>
      <AffixList />
    </div>
  );
}

export default Affix;
