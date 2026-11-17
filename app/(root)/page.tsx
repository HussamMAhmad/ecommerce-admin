import { auth } from "@clerk/nextjs/server";
import { UserButton, Show, SignInButton } from "@clerk/nextjs";
import { Suspense } from "react";
import HomePage from "@/components/home";

export default async function Home() {
  await auth.protect();
  return (
    <Suspense>
      <Show when="signed-in">
        <UserButton />
      </Show>
      <Show when="signed-out">
        <SignInButton />
      </Show>
      <HomePage />
    </Suspense>
  );
}
