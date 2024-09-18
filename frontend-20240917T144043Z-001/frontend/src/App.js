import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import SubmitButton from "./submit";
import CustomModal from "./modal";
import { useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [result, setResult] = useState({});
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton setModalShow={setModalShow} setResult={setResult} />
      <CustomModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={result}
      />
    </div>
  );
}

export default App;
