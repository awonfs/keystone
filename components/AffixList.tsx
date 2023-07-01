import data from "../affix-combos.json";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function AffixList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Baseline</TableHead>
          <TableHead>2 (+7)</TableHead>
          <TableHead>3 (+14)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{row.Baseline}</TableCell>
            <TableCell>{row["2 (+7)"]}</TableCell>
            <TableCell>{row["3 (+14)"]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default AffixList;
