import React from "react";
import {getArtifactFolders} from "@/app/_utils/getArtifactPages";
import Link from "next/link";

const page = () => {
    const folders = getArtifactFolders();

    return (
        <main className="mx-auto max-w-5xl px-8 py-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Artifacts
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {folders.map((folder) => (
                    <li key={folder}>
                        <Link
                            href={`/artifacts/${folder}`}
                            className="block p-6 bg-white dark:bg-neutral-800 rounded-xl shadow hover:shadow-lg transition duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-white capitalize">
                                {folder.replace("-", " ")}
                            </h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                View contents of the {folder} artifact
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>

    // <main className="mx-auto max-w-[1280px] px-8 py-16">
    //     <h1 className="text-3xl font-semibold text-white mb-6 tracking-tight">
    //         Artifacts
    //     </h1>
    //     <ul>
    //         {folders.map((folder) => (
    //             <li key={folder}>
    //                 <Link href={`/artifacts/${folder}`}>{folder}</Link>
    //             </li>
    //         ))}
    //     </ul>
    // </main>
  );
};

export default page;
