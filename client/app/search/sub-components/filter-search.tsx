"use client";
import { MinMaxUi } from "@/app/components/ui/inputs/input-min-max";
import { useApp } from "@/app/contexts/app.context";
import { Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Select, useDisclosure } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { RiFilterLine } from "react-icons/ri";

export function FilterSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { queries } = useApp();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMin = (value: string) => {
    const realValue = parseInt(value);
    console.log(realValue);
  };
  const handleMax = (value: string) => {
    const realValue = parseInt(value);
    console.log(realValue);
  };
  return (
    <>
      <aside className="z-20 fixed border-[1px] border-custom-accentColor shadow-md bottom-5 right-5 bg-custom-tertiaryBrand/20 duration-300 ease-linear cursor-pointer hover:bg-custom-secondaryBrand rounded-full w-16 h-16 flex items-center justify-center" onClick={onOpen}>
        <RiFilterLine className="text-4xl text-custom-border-custom-accentColor" />
      </aside>
      <Drawer size={"xs"} isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay bg="none" backdropFilter="saturate(150%) blur(4px)" backdropInvert="50%" backdropBlur="3px" />
        <DrawerContent backgroundColor={"#171a1b"} textColor={"#d9d9d9"}>
          <DrawerCloseButton className="hover:text-custom-border-custom-accentColor" />
          <DrawerHeader className="shadow-snipped">Filter & Order </DrawerHeader>
          <Divider />
          <DrawerBody backgroundColor={"#171a1b"}>
            <section className="h-full flex flex-col justify-between mb-16">
              <div>
                <div>
                  <div>
                    <h4 className="text-base font-semibold mt-4 mb-2">Category</h4>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mt-5 mb-2">Brand</h4>
                  </div>
                  <h4 className="text-base font-semibold mt-5">Price</h4>
                  <div className="flex gap-5">
                    <div className="w-full">
                      <MinMaxUi type="number" label="min:" pleaceholder="min" name="min" defaultvalue={1} handleMinMax={handleMin} />
                    </div>

                    <div className="w-full">
                      <MinMaxUi type="number" label="max:" pleaceholder="max" name="max" defaultvalue={1} handleMinMax={handleMax} />
                    </div>
                  </div>
                </div>
                <h4 className="text-base font-semibold mt-5 mb-2">Order By</h4>
                <div>
                  <h4 className="text-base font-semibold mt-5 mb-2">Sizes</h4>
                </div>
                <div>
                  <h4 className="text-base font-semibold mt-5 mb-2">Colors</h4>
                </div>
              </div>
            </section>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
