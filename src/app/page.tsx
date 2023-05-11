import Image from 'next/image'
import { AuthRequiredError } from './lib/exceptions';

// const session = null;

export default function Home() {

  // if (!session) throw new AuthRequiredError
  
  return (
    <main className="">
        This is an auth only page
    </main>
  )
}
