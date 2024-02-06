/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sgwrVaFYqyK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-4 px-4 md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Complete Missions, Earn Rewards!</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Complete the following missions and earn free days to enjoy our services.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="border rounded-lg p-4 space-y-2">
            <h3 className="text-lg font-bold">Watch a Video</h3>
            <p className="text-gray-500">Watch a video and earn 2 free days.</p>
            <Button className="w-full">GO</Button>
          </div>
          <div className="border rounded-lg p-4 space-y-2">
            <h3 className="text-lg font-bold">Refer Friends</h3>
            <p className="text-gray-500">Earn 2 free days when 2 friends register.</p>
            <Button className="w-full">GO</Button>
          </div>
          <div className="border rounded-lg p-4 space-y-2">
            <h3 className="text-lg font-bold">Top Up</h3>
            <p className="text-gray-500">Earn 7 free days when topping up $30.</p>
            <Button className="w-full">GO</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

