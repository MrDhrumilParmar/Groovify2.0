// import { NextApiRequest, NextApiResponse } from "next";

// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { SessionContextProvider } from "@supabase/auth-helpers-react";

// import { useSupabaseClient } from "@supabase/auth-helpers-react";

// const supabaseClient = useSupabaseClient();

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//     if (req.method === "POST") {
//         const { file, path, chunkIndex, totalChunks } = req.body;

//         try {
//             const { data, error } = await supabaseClient.storage
//                 .from("songs")
//                 .upload(`${path}-chunk-${chunkIndex}`, file, {
//                     upsert: true,
//                 });

//             if (error) {
//                 return res.status(500).json({ error: "Upload failed" });
//             }

//             // Optionally handle the final step of combining chunks here

//             res.status(200).json({ data });
//         } catch (error) {
//             res.status(500).json({ error: "Upload failed" });
//         }
//     } else {
//         res.status(405).json({ error: "Method not allowed" });
//     }
// };

// export default handler;

// // import { NextApiRequest, NextApiResponse } from "next";
// // import { createClient } from "@supabase/supabase-js";

// // // Create a single supabase client for interacting with your database
// // const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// // const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
// // const supabaseClient = createClient(supabaseUrl, supabaseKey);

// // const handler = async (req: NextApiRequest, res: NextApiResponse) => {
// //     if (req.method === "POST") {
// //         const { file, path, chunkIndex, totalChunks } = req.body;

// //         try {
// //             const { data, error } = await supabaseClient.storage
// //                 .from("songs")
// //                 .upload(`${path}-chunk-${chunkIndex}`, file, {
// //                     upsert: true,
// //                 });

// //             if (error) {
// //                 return res.status(500).json({ error: "Upload failed" });
// //             }

// //             // Optionally handle the final step of combining chunks here

// //             res.status(200).json({ data });
// //         } catch (error) {
// //             res.status(500).json({ error: "Upload failed" });
// //         }
// //     } else {
// //         res.status(405).json({ error: "Method not allowed" });
// //     }
// // };

// // export default handler;

// // import { NextRequest, NextResponse } from "next/server";
// // import { createClient } from "@supabase/supabase-js";

// // const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// // const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
// // const supabaseClient = createClient(supabaseUrl, supabaseKey);

// // export async function POST(request: NextRequest) {
// //     const { file, path, chunkIndex, totalChunks } = await request.json();

// //     try {
// //         const { data, error } = await supabaseClient.storage
// //             .from("songs")
// //             .upload(`${path}-chunk-${chunkIndex}`, file, {
// //                 upsert: true,
// //             });

// //         if (error) {
// //             return NextResponse.json(
// //                 { error: "Upload failed" },
// //                 { status: 500 }
// //             );
// //         }

// //         // Optionally handle the final step of combining chunks here

// //         return NextResponse.json({ data });
// //     } catch (error) {
// //         return NextResponse.json({ error: "Upload failed" }, { status: 500 });
// //     }
// // }
