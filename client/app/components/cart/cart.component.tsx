"use client";
import { Drawer, DrawerBody, DrawerFooter, DrawerOverlay, DrawerContent, DrawerCloseButton, Divider } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useApp } from "@/app/contexts/app.context";
import { theme } from "../ui/theme/theme";
import { EmptyUi } from "../empty/empty.component";
import { CardProductCart } from "./sub-components/card-product-cart.component";
import { useQuery } from "@tanstack/react-query";
import { CartApi } from "@/app/api/cart/cart.api";

export function Cart() {
  const { onCloseCart, isOpenCart, addingItem } = useApp();
const { data, refetch } = useQuery({
  queryKey: ["cart"],
  queryFn: CartApi.get,
  enabled: false, 
});

useEffect(() => {
  if (addingItem) {
    refetch();
  }
}, [addingItem, refetch]);  return (
    <>
      <Drawer size={"lg"} isOpen={isOpenCart} placement="right" onClose={onCloseCart}>
        <DrawerOverlay bg="none" backdropFilter="saturate(150%) blur(4px)" backdropInvert="50%" backdropBlur="3px" />
        <DrawerContent backgroundColor={theme.colors.secondary}>
          <DrawerCloseButton className="hover:text-custom-pink" />
          {data && data?.items.length > 0 ? (
            <>
              <DrawerBody>
                <ul className="flex flex-col gap-2 mt-12">
                  {data.items.map((product: Cart.Items, index, array) => {
                    const isLastItem = index === array.length - 1;
                    return <CardProductCart key={index} isLastItem={isLastItem} product={product} />;
                  })}
                </ul>
              </DrawerBody>
              <Divider className="shadow-xl opacity-20" />
              <DrawerFooter className="w-full flex justify-between">
                <div className="flex justify-between w-full items-center max-sm:">
                  <div className="text-xl text-custom-pink max-sm:text-base">
                    TOTAL <span className="text-custom-textColor font-medium ml-2 max-sm:ml-0">$1000</span>
                  </div>
                  {/* <LinkCheckout /> */}
                </div>
              </DrawerFooter>
            </>
          ) : (
            <div className="flex justify-center items-center h-full w-full">
              <div className="mx-4">
                <EmptyUi title="Empty product cart" message="Add new products to your cart, proceed to payment and live in style!" />
              </div>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
