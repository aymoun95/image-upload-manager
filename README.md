# 📂 S3 Cloud Manager

A high-performance, modern, and aesthetically pleasing S3 file management system built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. This application provides a seamless interface for uploading, managing, and viewing files stored in AWS S3 or any S3-compatible storage (like MinIO, DigitalOcean Spaces, etc.).

![Banner Placeholder](https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop)

## ✨ Features

- **🚀 Instant Uploads**: Blazing fast file uploads directly to S3 with real-time progress.
- **🖼️ Image Gallery**: A beautiful grid layout to browse your uploaded images with ease.
- **🖱️ Drag & Drop**: Intuitive file selection using `react-dropzone`.
- **🗑️ Smart Deletion**: Cleanly remove files from both your UI and S3 bucket.
- **🌗 Dark Mode**: Full support for dark and light themes with smooth transitions.
- **🛡️ Secure**: Built-in validation using **Zod** and secure S3 client configuration.
- **⚡ Next.js 16 Ready**: Utilizing the latest features of Next.js and React 19 for optimal performance.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16+](https://nextjs.org/) (App Router)
- **UI Architecture**: [React 19](https://react.dev/), [Shadcn UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Storage**: AWS S3 SDK (@aws-sdk/client-s3)
- **Data Validation**: [Zod](https://zod.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- An S3-compatible storage bucket

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aymoun95/image-upload-manager
   cd image-upload-manager
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory (use `.env.example` as a template):

   ```env
   S3_ENDPOINT=your_endpoint
   S3_ACCESS_KEY_ID=your_access_key
   S3_SECRET_ACCESS_KEY=your_secret_key
   S3_REGION=your_region
   S3_BUCKET_NAME=your_bucket_name
   ```

4. **Run the development server:**

   ```bash
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** to see the app in action!

## 📂 Project Structure

- `/app`: Next.js App Router folders and routes.
- `/components`: Reusable UI components (shadcn/ui base).
- `/lib`: Core utility functions including the S3 client setup.
