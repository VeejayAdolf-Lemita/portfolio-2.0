import React from 'react'
import './cursor.css'


const Cursor = () => {
    const {
      useEffect,
      useState
    } = React;
    const [position, setPosition] = useState({
      x: 0,
      y: 0
    });
    useEffect(() => {
      addEventListeners();
      return () => removeEventListeners();
    }, []);
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
    };
    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
    const onMouseMove = e => {
      setPosition({
        x: e.pageX,
        y: e.pageY
      });
    };
    console.log(position.x);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        transform: `translate(${position.x}px, ${position.y}px)`
      },
      className: "cursor"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        transform: `translate(${position.x}px, ${position.y}px)`
      },
      className: "cursor-follower"
    }));
  };

  


  export default Cursor;