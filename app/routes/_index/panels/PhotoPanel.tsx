import Panel from "~/components/Panel";

import lensPhoto from "~/images/DSCF4326.jpeg";
import Image from "~/components/Image";
import Button from "~/components/Button";
import { HiOutlineExternalLink } from "react-icons/all";

export default function PhotoPanel() {
  return (
    <Panel className="bg-brand-primary-800 dark:bg-brand-primary-700">
      <div className="grid md:grid-cols-2 gap-4 px-4 md:px-10  mb-8 md:mb-20">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-5xl font-light font-futura text-brand-white  mb-6">
            Looking good has never been so easy.
          </h3>
          <p className="text-xl text-brand-white dark:text-brand-primary-50 mb-6">
            If your project calls for it, I can provide photography services for
            any of your needs.
          </p>
          <a
            href="https://photos.leoji.company"
            className="text-xl text-brand-white dark:text-brand-primary-50 font-raleway mt-1 mb-3"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button className="flex items-center justify-center">
              See examples of photography
              <HiOutlineExternalLink className="inline-block ml-2" />
            </Button>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={lensPhoto}
            alt="Leo with a large 200-600mm camera lens."
            className="rounded-lg"
          />
        </div>
      </div>
    </Panel>
  );
}
