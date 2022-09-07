import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../items/Header";
import check from "../assets/check.png";
import not_available from "../assets/not_available.png";
import metting from "../assets/metting.png";
import desktop_available from "../assets/desktop_available.png";
import desktop_denied from "../assets/desktop_denied.png";
import desktop_meeting from "../assets/desktop_meeting.png";

const Home = () => {
  let { workspace } = useParams();
  console.log("workspace: ", workspace);
  let navigate = useNavigate();

  const [selected, setSelected] = useState(0);
  const [selectedWorkspace, setSelectedWorkspace] = useState(0);

  useEffect(() => {
    console.log("selected: ", selected);
  }, [selected]);

  return (
    <>
      <Header />
      <div className="home-main-container">
        <div className="home-sub-container">
          <div className="home-status-title">Statut</div>
          <a className="home-status-link" onClick={() => setSelected(0)}>
            <img
              src={check}
              alt="available"
              className={selected === 0 ? "status selected" : "status"}
            />
          </a>
          <a className="home-status-link" onClick={() => setSelected(1)}>
            <img
              src={not_available}
              alt="available"
              className={selected === 1 ? "status selected" : "status"}
            />
          </a>
          <a className="home-status-link" onClick={() => setSelected(2)}>
            <img
              src={metting}
              alt="available"
              className={selected === 2 ? "status selected" : "status"}
            />
          </a>
        </div>
        <div className="home-workspace-container">
          <div className="home-workspace-sub-container">
            <div className="home-workspace-title">Workspaces</div>
            <div className="home-workspace-list">
              <div className="home-workspace-list-item">
                <a onClick={() => setSelectedWorkspace(0)}className="home-workspace-list-item-title">Workspace #1</a>
              </div>
              <div className="home-workspace-list-item">
                <a className="home-workspace-list-item-title" onClick={() => setSelectedWorkspace(1)}>Workspace #2</a>
              </div>
              <div className="home-workspace-list-item">
                <a className="home-workspace-list-item-title">Salle de pause</a>
              </div>
            </div>
          </div>
        </div>
        {selectedWorkspace === 0 ? (
        <table>
          <thead>
            <tr>
              <th></th>
              <th className="border-bottom desktop">
                <img src={desktop_available} alt="desktop" />
                <span>TEST</span>
              </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-right desktop">
                <img src={desktop_available} alt="desktop" />
                <span>AHAHHAHA</span>
              </td>
              <td></td>
              <td className="border-left desktop">
                <img src={desktop_denied} alt="desktop" />
                <span>TEST</span>
              </td>
              <td></td>
            </tr>
            <tr>
              <td className="border-right desktop">
                <img src={desktop_available} alt="desktop" />
                <span>TEST</span>
              </td>
              <td></td>
              <td className="border-left border-bottom desktop">
                <img src={desktop_available} alt="desktop" />
                <span>TEST</span>
              </td>
              <td className="border-left border-top desktop2">
                <img src={desktop_meeting} alt="desktop" />
                <span className="">Armand BLIN</span>
              </td>
            </tr>
            <tr>
              <td className="border-right desktop">
                <img src={desktop_meeting} alt="desktop" />
                <span>Armand BLIN</span>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        ) : (
          <table>
          <thead>
            <tr>
              <th></th>
              <th className="border-bottom desktop">
                <img src={desktop_available} alt="desktop" />
                <span>TEST</span>
              </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-right desktop border-bottom">
                <img src={desktop_available} alt="desktop" />
                <span>TEST</span>
              </td>
              <td></td>
              <td className="border-left desktop">
                <img src={desktop_denied} alt="desktop" />
                <span>TEST</span>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
              </td>
              <td></td>
              <td className="border-top desktop">
                <img src={desktop_available} alt="desktop" />
                <span>HEHL</span>
              </td>
              <td className="border-top desktop2">
                <img src={desktop_meeting} alt="desktop" />
                <span className="">Armand BLIN</span>
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        )}
      </div>
    </>
  );
};

export default Home;
