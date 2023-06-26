import React from 'react'

export default function About(props) {


  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#343a40',
    backgroundColor: props.mode === 'dark' ? '#343a40' : 'white'
  }


  return (
    <div className='container' style={myStyle}>
      <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Analyze your text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              At TextUtils, we aim to provide you with a simple and convenient way to manipulate text. Whether you need to convert characters to uppercase or lowercase, copy text to your clipboard, or clear the text box entirely, our user-friendly tools are here to assist you.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Free to use
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              At TextUtils, we are proud to offer you a completely free text manipulation service. Our tools are designed to provide you with a simple and convenient way to convert characters to uppercase or lowercase, copy text, clear the text box, and more, without any cost to you.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Browser Compatible
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is designed to be intuitive and user-friendly. We prioritize simplicity and efficiency so that you can accomplish your text manipulation goals quickly and with ease. No complex instructions or unnecessary clutter—just the tools you need right at your fingertips.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
