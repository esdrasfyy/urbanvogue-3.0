"use client";
import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { theme } from "@/app/components/ui/theme/theme";
import { GeneralInfoProductCreate } from "./sub-components/general-info-product-create";
import { ColorsProductCreate } from "./sub-components/colors-product-create";
import { SizesPorductCreate } from "./sub-components/sizes-product-create";
import { useState } from "react";
import { ColorProductCreateI, GeneralProductCreateI, SizesProductCreateI } from "@/app/entities/schemas.entitie";
import { useApp } from "@/app/contexts/app.context";
import { InputSubmit } from "@/app/components/ui/inputs/input-submit";

function ProductCreate() {
  const [tabIndex, setTabIndex] = useState<number>(2);
  const [colors, setColors] = useState<ColorProductCreateI[]>([]);
  const [sizes, setSizes] = useState<SizesProductCreateI[]>([]);
  const [general, setGeneral] = useState<GeneralProductCreateI | null>(null);
  const { ShowToast } = useApp();

  const handleColors = (color: ColorProductCreateI) => {
    setColors((prev) => [...prev, { ...color }]);
  };
  const removeColor = (index: number) => {
    setColors(colors.filter((_, i) => i !== index));
    ShowToast("Color removed", "success");
  };

  const nextTabIndex = () => {
    setTabIndex(tabIndex + 1);
  };
  const handleSizes = (size: SizesProductCreateI) => {
    setSizes((prev) => [...prev, { ...size }]);
  };
  const removeSize = (index: number) => {
    setSizes(sizes.filter((_, i) => i !== index));
    ShowToast("Size removed", "success");
  };
  const handleGeneralInfoProduct = (product: GeneralProductCreateI) => {
    setGeneral(product);
    ShowToast("Informacoes gerais salvas", "success");
    nextTabIndex();
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ ...general, colors, sizes });
  };

  return (
    <main className="max-w-[1250px] mx-auto px-2">
      <Tabs position="relative" variant="unstyled" isLazy index={tabIndex}>
        <TabList>
          <Tab fontSize="14px" fontWeight="600" _selected={{ color: theme.colors.accent }}>
            GENERAL
          </Tab>
          <Tab fontSize="14px" fontWeight="600" _selected={{ color: theme.colors.accent }}>
            COLORS
          </Tab>
          <Tab fontSize="14px" fontWeight="600" _selected={{ color: theme.colors.accent }}>
            SIZES
          </Tab>
        </TabList>
        <TabIndicator mt="-1.5px" height="2px" bg={theme.colors.accent} borderRadius="1px" />
        <TabPanels>
          <GeneralInfoProductCreate handleGeneralInfoProduct={handleGeneralInfoProduct} />
          <TabPanel padding="0">
            <ColorsProductCreate handleColors={handleColors} removeColor={removeColor} colors={colors} nextTabIndex={nextTabIndex} />
          </TabPanel>
          <TabPanel padding="0">
            <SizesPorductCreate handleSizes={handleSizes} removeSize={removeSize} sizes={sizes} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
}

export default ProductCreate;
