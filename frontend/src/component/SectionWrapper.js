import React from 'react';

const sectionWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'gray',
  paddingBottom: '1vh',
}

const headerStyle = {
  // TODO: Positioning the <p> element text to the left, this is hacky
  // Material FormControl might help the layout issues
  paddingRight: '19vw',
};

class SectionWrapper extends React.Component {
  constructor(props) {
    super(props);
    let wrapperStyle = {...sectionWrapperStyle};
    if(props.backgroundColor) {
      wrapperStyle.backgroundColor = props.backgroundColor;
    }
    this.state = {
      title: this.props.title,
      style: wrapperStyle,
    }
  }
  render() {
    return (
      <div style={this.state.style}>
        <div style={headerStyle}>
          <p>{this.state.title}</p>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default SectionWrapper;