import "@/styles/globals.css"
import { Metadata, Viewport } from "next"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/providers"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: {
    default: "App Matrx",
    template: `%s - App Matrx`,
  },
  description: "A large-scale application built with Next.js and Shadcn UI",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Shadcn UI",
  ],
  authors: [
    {
      name: "Armani Sadeghi",
      url: "https://your-website.com", // Replace with your actual website
    },
  ],
  creator: "Armani Sadeghi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "App Matrx",
    description: "A large-scale application built with Next.js and Shadcn UI",
    siteName: "App Matrx",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "App Matrx",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "App Matrx",
    description: "A large-scale application built with Next.js and Shadcn UI",
    images: [siteConfig.ogImage],
    creator: "@your_twitter_handle", // Replace with your actual Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body
          className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
          )}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "contrast"]}
      >
        <div className="relative flex min-h-screen flex-col bg-background">
          {children}
        </div>
        <TailwindIndicator />
        <ThemeSwitcher />
        <Toaster />
      </ThemeProvider>
      </body>
      </html>
  )
}
