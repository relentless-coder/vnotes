import React from 'react';

const fabric = window.fabric;

class FreeDraw extends React.Component {
  state = {
    draw: null
  }
  componentDidMount() {
    const draw = new fabric.Canvas(this.c);
    draw.isDrawingMode = true;
    draw.freeDrawingBrush.width = 3;
    draw.freeDrawingBrush.color = "#ff0000";
    this.setState({draw});
  }
  render(){
    return <div className="drawing-area" style={{'width': '500px', 'height': '800px', 'border': '2px solid red'}}>
      <React.Fragment>
        <canvas id="canvas" ref={c => (this.c = c)} width="480px" height="780px"></canvas>
      </React.Fragment>
      </div>
  }
}

export default FreeDraw;
