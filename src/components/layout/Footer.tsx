export function Footer() {
  return (
    <footer className="mx-auto mt-auto flex w-full items-center justify-center border border-red-500 p-4">
      <p className="text-center text-sm font-bold md:text-lg">
        &copy; {new Date().getFullYear()} Heath Babb. All rights reserved.
      </p>
    </footer>
  );
}
