import React, { Component } from "react";
import sprite from "../../icons/base/folder.svg";

console.dir(Component);

class Folder extends Component {
  state = {
    isOpen: false,
    // isContentOpen: false,
  };

  toggleFolder = () => {
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };

  onHandleClick = () => {
    this.setState((prev) => ({
      isContentOpen: !prev.isContentOpen,
      isOpen: false,
    }));
  };

  render() {
    return (
      <>
        <button type='button' onClick={this.onHandleClick}>
          {this.state.isContentOpen ? "Close" : "Open"}
        </button>
     

        {this.state.isContentOpen && (
          <div className='folderWrapper' onClick={this.toggleFolder}>
            <svg className='folderIcon'>
              <use
                href={
                  sprite +
                  (this.state.isOpen ? "#icon-folder-open" : "#icon-folder")
                }
              />
            </svg>
            <span>CourseName</span>
          </div>
        )}
      </>
    );
  }
}

export default Folder;
