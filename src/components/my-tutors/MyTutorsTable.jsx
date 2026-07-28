"use client";

import { useState } from "react";

import EmptyState from "./EmptyState";
import TutorTableRow from "./TutorTableRow";
import UpdateTutorModal from "./UpdateTutorModal";
import DeleteTutorModal from "./DeleteTutorModal";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MyTutorsTable = ({ tutors }) => {
  const [tableData, setTableData] = useState(tutors);

  const [selectedTutor, setSelectedTutor] = useState(null);

  const [updateOpen, setUpdateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  if (!tableData.length) {
    return <EmptyState />;
  }

  return (
    <>
      <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">

                <TableHead>Name</TableHead>

                <TableHead>Subject</TableHead>

                <TableHead>Teaching Mode</TableHead>

                <TableHead>Fee</TableHead>

                <TableHead>Available</TableHead>

                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {tableData.map((tutor) => (
                <TutorTableRow
                  key={tutor._id}
                  tutor={tutor}
                  onEdit={(tutor) => {
                    setSelectedTutor(tutor);
                    setUpdateOpen(true);
                  }}
                  onDelete={(tutor) => {
                    setSelectedTutor(tutor);
                    setDeleteOpen(true);
                  }}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <UpdateTutorModal
        open={updateOpen}
        setOpen={setUpdateOpen}
        tutor={selectedTutor}
        tableData={tableData}
        setTableData={setTableData}
      />

      <DeleteTutorModal
        open={deleteOpen}
        setOpen={setDeleteOpen}
        tutor={selectedTutor}
        tableData={tableData}
        setTableData={setTableData}
      />
    </>
  );
};

export default MyTutorsTable;
