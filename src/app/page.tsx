import { Button } from '@/components/ui/button'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { redirect } from 'next/navigation'
export default async function Home() {
  const { isAuthenticated } = getKindeServerSession()

  if (await isAuthenticated()) {
    return redirect('/dashboard')
  }
  return (
    <section className="flex items-center justify-items-center bg-background h-[90vh]">
      <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <span className="w-auto px-6 py-3 rounded-full bg-secondary">
              <span className="text-sm font-medium text-primary">
                Sort youre notes
              </span>
            </span>

            <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
              Create Notes with ease
            </h1>

            <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="flex justify-center max-w-sm mx-auto mt-10">
            <RegisterLink>
              <Button size="lg" className="w-full">
                Sign Up for free
              </Button>
            </RegisterLink>
          </div>
        </div>
      </div>
    </section>
  )
}
