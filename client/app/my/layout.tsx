import React from "react";
import { ProfilePreview } from "./sub-components/profile-preview";
import { LinkScale } from "../components/ui/links/link-scale";
import { GoChecklist } from "react-icons/go";
import { TbBellCog } from "react-icons/tb";
import { trans } from "../libs/i18n.lib";

interface LoginLayoutProps {
  children: React.ReactNode;
}

export default function MyLayout({ children }: LoginLayoutProps) {
  return (
    <>
      {" "}
      <main className="max-w-[1250px] w-full px-2 pt-28 pb-7 mx-auto">
        <ProfilePreview />
        <section className="w-full bg-custom-secondaryBrand shadow-md relative rounded-md flex flex-col gap-4 justify-between p-4 mt-7">
          <h2 className="font-semibold text-3xl">{trans.t("payments")}</h2>
          <ul>
            <LinkScale content="orders" href="/my/orders">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="saved cards" href="/my/saved-cards">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="saved address" href="/my/saved-address">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="coupons" href="/my/coupons">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="reimbursement" href="/my/reimbursement">
              <GoChecklist />
            </LinkScale>
          </ul>
        </section>

        <section className="w-full bg-custom-secondaryBrand shadow-md relative rounded-md flex flex-col gap-4 justify-between p-4 mt-7">
          <h2 className="font-semibold text-3xl">{trans.t("privacy and security")}</h2>
          <ul>
            <LinkScale content="notifications" href="/my/notifications">
              <TbBellCog />
            </LinkScale>
            <LinkScale content="enable 2fa" href="/my/2fa">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="clear cookies" href="/my/clear-cookies">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="disable your account" href="/my/disable-account">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="connections" href="#">
              <GoChecklist />
            </LinkScale>
          </ul>
        </section>

        <section className="w-full bg-custom-secondaryBrand shadow-md relative rounded-md flex flex-col gap-4 justify-between p-4 mt-7">
          <h2 className="font-semibold text-3xl">{trans.t("support")}</h2>
          <ul>
            <LinkScale content="live chat" href="/support/live-chat">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="WhatsApp" href="/support/whatsapp">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="Email" href="/support/email">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="FAQs" href="/support/faqs">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="install app" href="/support/install-app">
              <GoChecklist />
            </LinkScale>
          </ul>
        </section>
      </main>
      {children}
    </>
  );
}
