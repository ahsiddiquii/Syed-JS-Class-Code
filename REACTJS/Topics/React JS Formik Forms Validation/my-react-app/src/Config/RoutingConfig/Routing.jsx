
import BasicForm from "../../Screens/BasicForm"
import AdvanceForm from "../../Screens/AdvanceForm"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicForm />} />
        <Route path="advanceform" element={<AdvanceForm/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default Routing;
