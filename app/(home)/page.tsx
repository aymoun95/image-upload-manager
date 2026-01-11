import ImageManager from "./_components/ImageManager";

export default function Home() {
  return (
    <div className=" mx-auto flex min-h-screen flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold pb-10">Upload your Files with S3 📂</h1>
      <ImageManager />
    </div>
  );
}
