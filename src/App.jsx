import SideBar from "./Components/SideBar";
import Content from "./Components/Content";

export default function App() {
  return (
    <div className="flex flex-row">
      <aside className="w-1/4">
        <SideBar />
      </aside>
      <main className="w-3/4">
        <Content />
      </main>
    </div>
  );
}
