"use client";
import useAffix from "@/hooks/useAffix";

function Affix() {
  const { data, isLoading } = useAffix();
  return <div>{isLoading ? "Loading..." : data?.title}</div>;
}

export default Affix;
