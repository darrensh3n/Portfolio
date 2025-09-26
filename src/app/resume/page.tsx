export const metadata = {
    title: "Resume | Darren Shen",
    description: "Resume preview",
  };
  
  export default function ResumePage() {
    return (
      <main className="w-full h-[100svh] bg-slate-50 dark:bg-slate-900">
        <iframe
          src="/resume.pdf"
          className="w-full h-full"
          title="Resume PDF"
        />
      </main>
    );
  }
  