import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="p-3 pt-5  flex justify-center items-center">
      <SignIn />
    </div>
  );
}
