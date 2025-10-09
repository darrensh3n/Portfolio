export default function ResumePage() {
  return (
    <div className="w-screen h-screen bg-gray-100 dark:bg-gray-900">
      <iframe
        src="/resume.pdf"
        className="w-full h-full"
        style={{ border: "none" }}
        title="Darren Shen's Resume"
      />
    </div>
  );
} 