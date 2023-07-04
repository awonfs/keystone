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

import { Star } from "lucide-react";

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
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h1>Recently completed dungeons</h1>
        </AccordionTrigger>
        <AccordionContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dungeon</TableHead>
                <TableHead>Mythic Level</TableHead>
                <TableHead>Keystone Upgrades</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentRuns.map((run) => {
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
