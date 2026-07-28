"use client";

import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

import { TableCell, TableRow } from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TutorTableRow = ({ tutor, onEdit, onDelete }) => {
  const { image, name, subject, teachingMode, HourlyFee, AvailableDays } =
    tutor;

  return (
    <TableRow className="transition-colors hover:bg-muted/40">
      {/* Photo */}

      

      {/* Name */}

      <TableCell>
        <div>
          <h3 className="font-semibold">{name}</h3>

        </div>
      </TableCell>

      {/* Subject */}

      <TableCell>
        <Badge variant="secondary">{subject}</Badge>
      </TableCell>

      {/* Teaching Mode */}

      <TableCell>
        <Badge variant={teachingMode === "Online" ? "default" : "outline"}>
          {teachingMode}
        </Badge>
      </TableCell>

      {/* Fee */}

      <TableCell className="font-semibold text-primary">
        ৳ {HourlyFee}/hr
      </TableCell>

      {/* Available */}

      <TableCell className="max-w-[180px] truncate text-muted-foreground">
        {AvailableDays}
      </TableCell>

      {/* Actions */}

      <TableCell>
        <div className="flex justify-end gap-2">
          <Button size="icon" variant="outline" onClick={() => onEdit(tutor)}>
            <FiEdit2 className="size-4" />
          </Button>

          <Button
            size="icon"
            variant="destructive"
            onClick={() => onDelete(tutor)}
          >
            <FiTrash2 className="size-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TutorTableRow;
