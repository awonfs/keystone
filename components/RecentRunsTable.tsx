import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Star } from "lucide-react";
import { RecentRuns } from "@/utils/interfaces/recentRuns";

function RecentRunsTable({ recentRuns }: RecentRuns) {
  return (
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
                {run.num_keystone_upgrades && run.num_keystone_upgrades > 0
                  ? Array.from({
                      length: run.num_keystone_upgrades || 0,
                    }).map((_, i) => <Star className="w-4 h-4 mx-1" key={i} />)
                  : "Untimed Run"}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default RecentRunsTable;
