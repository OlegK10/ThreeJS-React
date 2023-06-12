import React, {useEffect, useRef, useState } from 'react';
import TopMenu from './topMenu/TopMenu';
import TitlePage from './titlePage/TitlePage';
import EducationPage from './educationPage/EducationPage';
import SkillsPage from './skills/SkillsPage';
import ExperiencePage from './experiencePage/ExperiencePage';
import './mainPage.css'
import {Canvas} from '@react-three/fiber'
import {useGLTF, Stage, useAnimations} from '@react-three/drei'

const MainPage = () => {
  const {scene, animations } = useGLTF('/robot/robot_5.glb')

  function RobotModel({ scene, animations }) {
  const { actions, names } = useAnimations(animations, scene);




    var isScroll = false;
    var multiplyEleTop = -1;
  
    function pageScroll(event) {
    const elements = document.querySelectorAll('.page');
    const canEle = document.querySelector('.canco')

    if(multiplyEleTop === -1){
      for (let i = 0; i < names.length; i++) {
        actions[names[i]].clampWhenFinished = true;
        actions[names[i]].repetitions = 0
        actions[names[i]].play()
      }

      canEle.style.right = '900px'
    }
      



    setTimeout(() => {
  
    }, 800);
  
    if (event.deltaY > 0 && !isScroll && multiplyEleTop !== -4) {
      isScroll = true;
      setTimeout(() => {
        multiplyEleTop--;
        isScroll = false;
      }, 700);
  
      elements.forEach((element) => {
        element.style.top = `calc(90vh * ${multiplyEleTop})`;
      });
  
    } else if (event.deltaY < 0 && !isScroll && multiplyEleTop !== -1) {
  
      isScroll = true;
      setTimeout(() => {
        multiplyEleTop++;
        isScroll = false;
      }, 500);
  
      elements.forEach((element) => {
        element.style.top = `calc(90vh * ${multiplyEleTop +2})`;
      });
    }
  };




  useEffect(() => {
      scene.rotation.y = Math.PI / -1.8;
      window.scrollTo(0,0)
    window.addEventListener('wheel', pageScroll);
    return () => {
      window.removeEventListener('wheel', pageScroll);
    };
  }, []); 

    return <primitive object={scene} />;
  }












  

  return (
    <div className='main'>
      <TopMenu />

      <div className="canco">

        <Canvas  className='canvas' style={{"position": "absolute"}}>
        <ambientLight  intensity={0.7} />
          <Stage  environment={null}>
          <RobotModel scene={scene} animations={animations} />
          </Stage>
        </Canvas>

      </div>

        <div className="pages">
          <TitlePage />
          <EducationPage />
          <ExperiencePage />
          <SkillsPage />
        </div>
    </div>
  );
}

export default MainPage;

