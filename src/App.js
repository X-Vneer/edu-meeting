import "./css/main.css";
import { useState, useEffect, createContext } from "react";
import "@csstools/normalize.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { db } from "./firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import Meetings from "./pages/Meetings";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import MeetingDetails from "./pages/MeetingDetails";
import Footer from "./components/Footer";
export const myCategories = createContext([]);

function App() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [isPending, setIspending] = useState(true);
  useEffect(() => {
    let started = false;
    const colRef = collection(db, "meeting");
    onSnapshot(colRef, (snapshot) => {
      if (!started) {
        snapshot.docs.forEach((ele) => {
          setData((pre) => {
            return [{ ...ele.data(), id: ele.id }, ...pre];
          });
        });
        setIspending(false);
      }
    });

    return () => {
      started = true;
    };
  }, []);
  const [categories, setCategories] = useState([]);
  const [categoriesIsPending, setCategoriesIsPending] = useState(true);
  useEffect(() => {
    let started = false;
    const colRef = collection(db, "categories");
    onSnapshot(colRef, (snapshot) => {
      if (!started) {
        setCategories(snapshot.docs[0].data().categories);
        setCategoriesIsPending(false);
      }
    });
    return () => {
      started = true;
    };
  }, []);
  return (
    <>
      <Navbar />
      <myCategories.Provider value={{ categories, categoriesIsPending }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route
              path="/edu-meeting"
              element={<Home data={data} isPending={isPending} />}
            ></Route>
            <Route
              path="/meetings"
              element={
                <Meetings
                  categoriesData={{ categories, categoriesIsPending }}
                  data={data}
                  isPending={isPending}
                />
              }
            ></Route>
            <Route path="/meeting-details/:id" element={<MeetingDetails />} />
          </Routes>
        </AnimatePresence>
      </myCategories.Provider>
      <Footer />
    </>
  );
}

export default App;
