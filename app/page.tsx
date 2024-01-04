"use client";
import "../components/tree.css";
import { treeData } from "@/utils/family";

const App = () => {
  return <div className="tree">{treeRendering(treeData)}</div>;
};

const treeRendering = (treeData: any) => {
  return (
    <>
      {/* <ul className="relative py-2">
        {treeData?.map((item: any) => {
          return (
            <li className={`${item.name} px-1 py-2`} key={item.id}>
              <div className="px-1">{item.text}</div>
              {item.children && item.children.length
                ? treeRendering(item.children)
                : ""}
            </li>
          );
        })}
      </ul> */}
      <div>hello this is testing project</div>
    </>
  );
};

export default App;
