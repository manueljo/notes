import Editor from "@/components/Editor";
import MDX from "@/components/MDX";
import SideNav from "@/components/SideNav";

export default function NotesPage() {
  return (
    <main>
      <SideNav/>
      <Editor/>
      <MDX/>
    </main>
  );
}