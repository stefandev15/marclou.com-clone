import Chart from "@/components/chart";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";

export default function Card({
  name,
  income,
  description,
  discontinued,
  imageUrl,
  chart,
  acquired,
}: {
  name: string;
  income?: number;
  description: string;
  discontinued?: boolean;
  imageUrl: string;
  chart?: any;
  acquired?: boolean;
}) {
  return (
    <div className="bg-base-100 col-span-1 rounded-2xl flex flex-col h-min">
      <div className="p-6 rounded-2xl hover:scale-[1.025] hover:bg-base-300 transition-[scale_background-color] duration-300">
        <div className="flex items-center justify-between mb-1">
          <div className="flex gap-3">
            <Image
              alt="card-image"
              className="w-6 h-6"
              width={20}
              height={20}
              src={imageUrl}
            />
            <p className="font-semibold text-base-color">{name}</p>
          </div>
          <div className="flex gap-2">
            {income && (
              <div className="flex rounded-full text-xs bg-base-200 overflow-hidden text-base-color">
                <svg
                  viewBox="0 0 29 29"
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_118_3)">
                    <path
                      d="M28.8698 0H-0.000286818L-0.000201464 6.48V22.39C-0.000201464 25.9688 0.000243902 28.87 0.000243902 28.87H28.8698V22.39V6.48V0Z"
                      fill="#6772E5"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.2999 11.2001C13.2999 10.5101 13.8699 10.2001 14.7899 10.2001C16.3144 10.2331 17.8104 10.6199 19.1599 11.3301V7.24013C17.7715 6.69567 16.2911 6.42405 14.7999 6.44013C11.2399 6.44013 8.85986 8.30013 8.85986 11.4401C8.85986 16.3001 15.5399 15.5101 15.5399 17.6101C15.5399 18.4201 14.8299 18.6801 13.8599 18.6801C12.151 18.5859 10.4874 18.0964 8.99986 17.2501V21.4401C10.5156 22.0951 12.1486 22.4353 13.7999 22.4401C17.4499 22.4401 19.9699 20.6401 19.9699 17.4401C19.9999 12.2301 13.2999 13.1701 13.2999 11.2001Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_118_3">
                      <rect width="28.87" height="28.87" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span className="pl-1 pr-2">
                  {formatCurrency(income)}
                  /mo
                </span>
              </div>
            )}
            {discontinued && (
              <div className="flex rounded-full text-xs bg-red-500/75 px-2">
                Discontinued
              </div>
            )}
            {acquired && (
              <div className="flex rounded-full text-xs bg-[#3ABFF8] px-2 text-base-color">
                💰 Acquired
              </div>
            )}
          </div>
        </div>
        <p className="text-sm text-base-color/80">{description}</p>
      </div>
      {chart && <Chart />}
    </div>
  );
}
