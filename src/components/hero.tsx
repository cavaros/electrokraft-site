/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/bu6dqGlat7e
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"


export function Hero() {
  return (
    <section key="1" className="w-full py-6 md:py-12 lg:py-16 xl:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <img className="mx-auto" src="kraft.png" width="60%"></img>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Em construção.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              className={buttonVariants({ variant: "default" })}
              href="mailto:richardson@electrokraft.com.br"
            >
              Contato
              <MailIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="#"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
