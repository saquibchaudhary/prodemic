import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditedPage = () => {
  const history = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const api = `http://localhost:3001/content${pathname}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const [data] = await response.json();
        const { content } = data;
        const div = document.querySelector(".editor");
        div.innerHTML = content;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEvolveClick = () => {
    const mainContent = document.querySelector(".main").innerHTML;
    history("/Editor", { state: { content: mainContent } });
  };
  return (
    <>
      <div className="header">
        <div className="logo">Prodemic - An positive Virus</div>
      </div>
      <div className="main">
        <button className="evolve-button" onClick={handleEvolveClick}>
          Evolve
        </button>
        <div className="editor"></div>
      </div>
    </>
  );
};

export default EditedPage;
