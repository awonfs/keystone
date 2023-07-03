"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Switch } from "@/components/ui/switch";
import { Star } from "lucide-react";
import { useState } from "react";

interface RecentRunsProps {
  recentRuns: [
    {
      dungeon: string | undefined;
      short_name: string | undefined;
      mythic_level: number | undefined;
      num_keystone_upgrades: number | undefined;
    }
  ];
}

function RecentRuns({ recentRuns }: RecentRunsProps) {
  const [showUntimedRuns, setShowUntimedRuns] = useState(false);

  const completedRunsOnTime = recentRuns.filter(
    (run) => run.num_keystone_upgrades && run.num_keystone_upgrades > 0
  );

  const runsToDisplay = showUntimedRuns ? recentRuns : completedRunsOnTime;

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h1>Recently timed runs</h1>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center justify-end gap-2 mb-1 w-full">
            <Switch
              checked={showUntimedRuns}
              onCheckedChange={setShowUntimedRuns}
            />
            <span>Show untimed runs</span>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dungeon</TableHead>
                <TableHead>Mythic Level</TableHead>
                <TableHead>Keystone Upgrades</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {runsToDisplay.map((run) => {
                return (
                  <TableRow key={run.dungeon}>
                    <TableCell>{run.dungeon}</TableCell>
                    <TableCell>{run.mythic_level}</TableCell>
                    <TableCell className="flex">
                      {run.num_keystone_upgrades &&
                      run.num_keystone_upgrades > 0
                        ? Array.from({
                            length: run.num_keystone_upgrades || 0,
                          }).map((_, i) => (
                            <Star className="w-4 h-4 mx-1" key={i} />
                          ))
                        : "Untimed Run"}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default RecentRuns;
