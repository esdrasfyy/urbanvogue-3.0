"use client";
import React from "react";
import { useMemo } from "react";
import { ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { TbCaretDownFilled, TbCaretUpDownFilled, TbCaretUpFilled, TbPencil, TbTrash, TbViewfinder, TbX, TbZoomInArea, TbZoomPan } from "react-icons/tb";
import { format } from "date-fns";
import { InputSelectSingle } from "@/app/components/ui/inputs/input-select";
import { useQuery } from "@tanstack/react-query";
import { Settings } from "@/app/api/settings/settings.api";

export default function AdminProduct() {
  const data = useMemo<any>(
    () => [
      { id: 1, title: "Smartphone X1", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 2, title: "Smartphone X2", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 3, title: "Smartphone X3", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 4, title: "Smartphone X4", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 5, title: "Smartphone X5", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 6, title: "Smartphone X6", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 7, title: "Smartphone X7", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 8, title: "Smartphone X8", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 9, title: "Smartphone X9", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 10, title: "Smartphone X10", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 11, title: "Smartphone X11", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 12, title: "Smartphone X12", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 13, title: "Smartphone X13", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 14, title: "Smartphone X14", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 15, title: "Smartphone X15", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 16, title: "Smartphone X16", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 17, title: "Smartphone X17", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 18, title: "Smartphone X18", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 19, title: "Smartphone X19", created_at: "2024-10-28T22:41:31.670Z" },
      { id: 20, title: "Smartphone X20", created_at: "2024-10-28T22:41:31.670Z" },
    ],
    []
  );
  const cols = useMemo<ColumnDef<Product.I>[]>(
    () => [
      {
        header: "#ID",
        accessorKey: "Id",
        cell: (row) => <h2>{row.row?.original.id}</h2>,
        size: 20,
      },
      {
        header: "Produto",
        cell: (row) => <h2>{row.row?.original.title}</h2>,
        accessorKey: "item.ItemCode",
      },
      {
        header: "Preco",
        cell: (row) => <h2>10</h2>,
        accessorKey: "Quantity",
        size: 75,
      },
      {
        header: "Vendas",
        cell: (row) => <h2>10</h2>,
        accessorKey: "Quantity",
        size: 75,
      },
      {
        header: "Estoque",
        cell: (row) => <h2>10</h2>,
        accessorKey: "Quantity",
        size: 75,
      },
      {
        header: "Marca",
        cell: (row) => <h2>10</h2>,
        accessorKey: "Quantity",
        size: 75,
      },
      {
        header: "Categoria",
        cell: (row) => <h2>10</h2>,
        accessorKey: "Quantity",
        size: 75,
      },
      {
        header: "Criacao",
        cell: (row) => <h2>{format(new Date(row.row?.original.created_at), "dd/MM/yy")}</h2>,
        accessorKey: "Date",
      },
      {
        header: "Loja",
        cell: (row) => <h1>1</h1>,
        accessorKey: "Status",
      },
    ],
    []
  );

  const initialState = {
    pagination: { pageIndex: 0, pageSize: 10 },
    sorting: [],
  };
  const [pagination, setPagination] = React.useState(initialState.pagination);
  const [sorting, setSorting] = React.useState<any>(initialState.sorting);
  const sortingDisabled = false; // Defina essa variável conforme necessário
  const pageCount = 2; // Defina o número total de páginas

  const table = useReactTable({
    data,
    columns: cols,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting: !sortingDisabled ? sorting : undefined,
      pagination,
    },
    onPaginationChange: (updater) => {
      console.log("Previous pagination:", pagination);
      const newPagination = typeof updater === "function" ? updater(pagination) : updater;
      console.log("Updated pagination:", newPagination);
      setPagination(newPagination);
    },
    initialState,
    onSortingChange: (updater) => {
      console.log("Previous sorting:", sorting);
      const newSorting = typeof updater === "function" ? updater(sorting) : updater;
      console.log("Updated sorting:", newSorting);
      setSorting(newSorting);
    },
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
    pageCount,
  });

  const { data: genders } = useQuery({
    queryFn: Settings.getGenders,
    queryKey: ["genders"],
  });

  const formattedGenders = genders?.map((gender) => ({
    value: String(gender.id),
    label: gender.name,
  }));

  const handleGender = (data: { value: string; label: string }) => {
    console.log(data);
  };

  return (
    <main className="max-w-[calc(100%-385px)] bg-custom-secondaryBrand mx-6 ml-auto rounded-md shadow-md p-3 flex flex-col gap-3 ">
      <div className="w-full bg-custom-primaryBrand p-3 rounded-md font-semibold"> {formattedGenders && <InputSelectSingle onchange={handleGender} label="gender" list={formattedGenders} />}</div>
      <div className="w-full bg-custom-primaryBrand p-3 rounded-md font-semibold">
        {table.getHeaderGroups().length > 0 && (
          <ul className="w-full flex justify-between gap-2 pr-10">
            {table.getHeaderGroups()[0].headers.map((header) => (
              <li className="w-full flex justify-between" key={header.id} onClick={header.column.getToggleSortingHandler()}>
                <span className="flex items-center gap-2">
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  <div>
                    {{
                      asc: <TbCaretUpFilled size={18} />,
                      desc: <TbCaretDownFilled size={18} />,
                    }[header.column.getIsSorted() as string] ?? <TbCaretUpDownFilled size={18} />}
                  </div>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-full">
        <div className="w-full p-3 flex flex-col gap-3 bg-custom-primaryBrand rounded-md shadow-md">
          {data.length <= 0 && (
            <span>
              <td colSpan={cols.length}>Nenhum dado encontrado</td>
            </span>
          )}
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={`flex w-full ustify-between relative border-b border-custom-tertiaryBrand pb-3`}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="w-full">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <div className="flex gap-3 absolute top-1/2 -translate-y-3/4 right-2 text-xl">
                <button>
                  <TbZoomPan />
                </button>
                <button>
                  <TbPencil />
                </button>
                <button>
                  <TbX />
                </button>
              </div>
            </tr>
          ))}
          ir voltar
        </div>
      </div>
    </main>
  );
}
