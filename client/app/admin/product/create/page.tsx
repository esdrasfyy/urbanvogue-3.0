"use client";
import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { theme } from "@/app/components/ui/theme/theme";
import { GeneralInfoProductCreate } from "./sub-components/general-product-create";
import { ColorsProductCreate } from "./sub-components/colors-product-create";
import { SizesPorductCreate } from "./sub-components/sizes-product-create";
import { useAdmin } from "@/app/contexts/admin.context";
export default function ProductCreate() {
  const { tabProductCreate, setTabProductCreate, colorsProductCreate, generalProductCreate, sizesProductCreate } = useAdmin();
  const create = () => {
    const product = { ...generalProductCreate, colors: [...colorsProductCreate] };
    console.log({ colors: colorsProductCreate, ...generalProductCreate, sizes: sizesProductCreate });
  };
  return (
    <main className="max-w-[1250px] mx-auto px-2">
      <Tabs onChange={(index) => setTabProductCreate(index)} position="relative" variant="unstyled" isLazy index={tabProductCreate}>
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
          <TabPanel padding="0">
            <GeneralInfoProductCreate />
          </TabPanel>
          <TabPanel padding="0">
            <ColorsProductCreate />
          </TabPanel>
          <TabPanel padding="0">
            <SizesPorductCreate />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <button type="button" onClick={create}>
        CREATE
      </button>
    </main>
  );
}
