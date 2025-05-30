import { BrowserRouter, Outlet, Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/tracks" replace />} />

          <Route path="tracks">
            <Route index element={<div>Tracks</div>}></Route>
            <Route path=":id" element={<div />} />
            <Route path=":id/edit" element={<div />} />
          </Route>
          <Route path="athletes">
            <Route index element={<div>Athletes</div>}></Route>
            <Route path=":id" element={<div />} />
            <Route path=":id/edit" element={<div />} />
          </Route>
          <Route path="tours">
            <Route index element={<div>Tours</div>}></Route>
            <Route path=":id" element={<div />} />
            <Route path=":id/edit" element={<div />} />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
