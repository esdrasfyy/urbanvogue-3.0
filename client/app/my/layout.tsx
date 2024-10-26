import React from "react";
import { ProfilePreview } from "./sub-components/profile-preview";
import { LinkScale } from "../components/ui/links/link-scale";
import { GoChecklist } from "react-icons/go";

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
          <h2 className="font-semibold text-3xl">Payments</h2>
          <ul>
            <LinkScale content="Orders" href="/my/orders">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="Saved Cards" href="/my/saved-cards">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="Saved Address" href="/my/saved-address">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="Coupons" href="/my/coupons">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="Reimbursement" href="/my/reimbursement">
              <GoChecklist />
            </LinkScale>
          </ul>
        </section>

        <section className="w-full bg-custom-secondaryBrand shadow-md relative rounded-md flex flex-col gap-4 justify-between p-4 mt-7">
          <h2 className="font-semibold text-3xl">Privacy and Security</h2>
          <ul>
            <LinkScale content="Notifications" href="/my/notifications">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="Enable 2FA" href="/my/2fa">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="Clear Cookies" href="/my/clear-cookies">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="Disable Your Account" href="/my/disable-account">
              <GoChecklist />
            </LinkScale>
            <LinkScale content="Connections" href="/my/connections">
              <GoChecklist />
            </LinkScale>
          </ul>
        </section>

        <section className="w-full bg-custom-secondaryBrand shadow-md relative rounded-md flex flex-col gap-4 justify-between p-4 mt-7">
          <h2 className="font-semibold text-3xl">Support</h2>
          <ul>
            <LinkScale content="Live Chat" href="/support/live-chat">
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
            <LinkScale content="Install App" href="/support/install-app">
              <GoChecklist />
            </LinkScale>
          </ul>
        </section>
      </main>
      {children}
    </>
  );
}
