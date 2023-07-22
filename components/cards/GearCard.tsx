import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CharacterData } from "@/utils/hooks/useSearchCharacter";

export default function GearCard({ gear }: { gear: CharacterData["gear"] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gear</CardTitle>
        <span className="text-yellow-500">
          Equipped ilvl: {gear.item_level_equipped}
        </span>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {Object.entries(gear.items).map(([key, item]) => {
            if (item) {
              let formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
              if (key.startsWith("finger")) {
                formattedKey = "Ring" + key.slice(6);
              } else if (key.startsWith("trinket")) {
                formattedKey = "Trinket" + key.slice(7);
              }

              return (
                <div key={key}>
                  <span>{formattedKey} -</span>
                  <span> {item.name} - </span>
                  <span>ilvl {item.item_level}</span>
                </div>
              );
            }
            return null;
          })}
        </div>
      </CardContent>
    </Card>
  );
}
