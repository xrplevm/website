import Link, { LinkProps } from "next/link";
import { Icons } from "./icons";

function ExternalLink(props: LinkProps & { children: React.ReactNode }): JSX.Element {
  return (
    <Link className="hover:opacity-80" target="_blank" {...props}>
      {props.children}
    </Link>
  );
}

export function Governance(): JSX.Element {
  return (
    <section className="relative h-[900px] md:h-auto md:aspect-[2/1] overflow-hidden">
      <div className="absolute inset-0 governance-grid-overlay">
        <div className="grid grid-cols-[repeat(4,1fr)_0.2fr] grid-rows-[repeat(5,1fr)_0.66fr] md:grid-cols-16 md:grid-rows-8 h-full w-full">
          <div className="ml-4 my-4 mt-8 md:mt-0 md:ml-0 md:my-0 col-span-4 row-span-1 col-start-1 row-start-1 h-[64px] md:h-auto md:col-start-2 md:row-start-2 md:col-span-6 md:row-span-1 bg-background border-[0.5px] border-white p-4 md:py-5 md:px-10">
            <p className="font-bold text-xl md:text-[40px]">Governance</p>
          </div>

          <div className="ml-4 md:m-0 col-start-1 row-start-1 mt-[96px] col-span-4 h-[344px] md:h-auto md:col-start-2 md:row-start-3 md:col-span-7 md:row-span-5 bg-background p-4 md:p-6 xl:p-8 flex flex-col gap-4 md:gap-8 border-[0.5px] border-white">
            <p className="font-bold text-sm md:text-xl">
              XRPL EVM Sidechain is open and permissionless, allowing anyone to build or participate
            </p>

            <ol className="list-decimal pl-5 text-sm md:text-base xl:text-xl ignore-marker-style">
              <li className="mb-4">Novel Proof of Authority governance with 26/32 validators</li>
              <li className="mb-4">Transparent and public proposal mechanism the community engagement</li>
              <li className="mb-4">Operational validator set with over 35 proposals passed</li>
            </ol>

            <div className="text-sm md:text-xl font-bold">
              <p>Want to become a validator?</p>
              <Link href="https://docs.xrplevm.org/docs/evm-sidechain/join-evm-sidechain-devnet/" target="_blank" className="text-primary">
                Find out how
              </Link>
            </div>
          </div>

          <div className="ml-4 md:m-0 h-[400px] md:h-auto col-start-1 row-start-3 col-span-4 md:col-start-9 md:row-start-3 md:col-span-8 md:row-span-5 bg-black border-[0.5px] border-white p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-20 items-center">
              <div className="col-span-2 md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                <ExternalLink href="https://ripple.com/">
                  <Icons.RippleLogo className="h-5 xl:h-auto" />
                </ExternalLink>
                <ExternalLink href="https://evmos.org/">
                  <Icons.EvmosLogo className="h-5 xl:h-auto" />
                </ExternalLink>
                <ExternalLink href="https://www.blockscout.com/">
                  <Icons.BlockscoutLogo className="h-5 xl:h-auto" />
                </ExternalLink>
                <ExternalLink href="https://peersyst.com/">
                  <Icons.PeersystLogo className="h-5 xl:h-auto" />
                </ExternalLink>
              </div>

              <ExternalLink href="https://xrp.cafe">
                <Icons.XrpCafeLogo className="h-5 xl:h-auto" />
              </ExternalLink>
              <ExternalLink href="https://linkpool.com/">
                <Icons.LinkpoolLogo className="h-5 xl:h-auto" />
              </ExternalLink>
              <ExternalLink href="https://catalyze-research.com/">
                <Icons.CatalyzeLogo className="h-5 xl:h-auto" />
              </ExternalLink>
              <ExternalLink href="https://www.xrpl-commons.org/">
                <Icons.CommonsLogo className="h-5 xl:h-auto" />
              </ExternalLink>
              <ExternalLink href="https://purple.markets/">
                <Icons.PurpleMarketsLogo className="h-5 xl:h-auto" />
              </ExternalLink>
              <ExternalLink href="https://kintsugi.tech/">
                <Icons.KintsugiLogo className="h-5 xl:h-auto" />
              </ExternalLink>
              <ExternalLink href="https://www.palmeradao.xyz/">
                <Icons.PalmeraLogo className="h-5 xl:h-auto" />
              </ExternalLink>
              <ExternalLink href="https://moai-finance.xyz/">
                <Icons.MoaiFinanceLogo className="h-5 xl:h-auto" />
              </ExternalLink>
              <ExternalLink href="https://sg-1.online/">
                <Icons.SG1Logo className="h-5 xl:h-auto" />
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
