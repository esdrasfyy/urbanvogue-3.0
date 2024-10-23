import { getGithubUrl } from "@/app/utils/get-github-url";
import { getGoogleOAuthURL } from "@/app/utils/get-google-url.util";
import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { TbBrandGithub } from "react-icons/tb";

export function OAuth() {
  return (
    <div className="flex items-center gap-4 text-3xl justify-center mt-5">
      <Link className="text-xl text-custom-textColor border border-custom-textColor p-3 rounded-full hover-effect hover-bg-text hover-text-bg" href={getGoogleOAuthURL()}>
        <FaGoogle />
      </Link>
      <button disabled className="opacity-25 text-xl text-custom-textColor border border-custom-textColor p-3 rounded-full duration-300 ease-linear">
        <FaFacebookF />
      </button>
      <Link className="text-xl text-custom-textColor border border-custom-textColor p-3 rounded-full hover-effect hover-bg-text hover-text-bg" href={getGithubUrl()}>
        <TbBrandGithub />
      </Link>
    </div>
  );
}
