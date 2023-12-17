import { auth } from "@clerk/nextjs"
import Dropzone from "@/components/dropzone";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { FileType } from "@/typing";
import TableWrapper from "@/components/table/table-wrapper";


const Dashboard = async () => {
    const { userId } = auth();

    const docResults = await getDocs(collection(db, "users", userId!, "files"));
    const skeletonFiles: FileType[] = docResults.docs.map(doc => ({
        id: doc.id,
        filename: doc.data().filename || doc.id,
        timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
        fullName: doc.data().fullName,
        downloadURL: doc.data().downloadURL,
        type: doc.data().type,
        size: doc.data().size,
    }));

    console.log(skeletonFiles)

    return (
        <div className="border-t">
            <Dropzone />

            <section className="container space-y-5">
                <h2 className="font-bold">All Files</h2>

                <div>
                    {/* TableWrapper */}
                    <TableWrapper
                        skeletonFiles={skeletonFiles}
                    />
                </div>
            </section>
        </div>
    )
}

export default Dashboard