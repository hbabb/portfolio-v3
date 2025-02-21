import ProfilePic from "@/assets/images/ai-profile-corporate.jpg";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex w-full max-w-7xl flex-col-reverse items-center justify-between border border-green-300 md:flex-row">
      <div className="flex w-3/4 flex-col gap-4">
        <h1 className="text-4xl font-bold">Hi, I&apos;m Heath 👋</h1>
        <p>Introduction here</p>
        {/* add social links and location here */}
        {/* add availability here */}
      </div>
      <div className="w-1/4">
        <Image
          src={ProfilePic}
          alt="Profile picture"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
    </section>
  );
}
