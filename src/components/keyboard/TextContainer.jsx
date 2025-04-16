export default function TextContainer({ text }) {
    return (
      <div className="flex justify-center items-center min-h-[20%] w-full mt-10 px-4">
        <pre className="w-full max-w-2xl min-h-[120px] bg-white text-center text-xl font-medium text-[#1a1a40] whitespace-pre-wrap break-words p-4 rounded-2xl shadow-md border border-gray-200 font-mono">
          {text}
        </pre>
      </div>
    );
  }
  
