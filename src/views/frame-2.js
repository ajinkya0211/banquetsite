import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './frame-2.css'

const Frame2 = (props) => {
  return (
    <div className="frame2-container">
      <Helmet>
        <title>Frame-2 - exported project</title>
        <meta property="og:title" content="Frame-2 - exported project" />
      </Helmet>
      <div className="frame2-frame2">
        <img
          src="/playground_assets/rectangle1116-yht-600h.png"
          alt="Rectangle1116"
          className="frame2-rectangle1"
        />
        <div className="frame2-box">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3ec7fd7a-430a-4489-8a60-274077c04f5e/90c0ea65-180d-46cd-a2bd-6d3cba773385?org_if_sml=178642"
            alt="Box118"
            className="frame2-box1"
          />
          <button className="frame2-button">
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3ec7fd7a-430a-4489-8a60-274077c04f5e/8f44246b-9ac1-4a93-856a-356990367f7f?org_if_sml=1123"
              alt="Rectangle4I119"
              className="frame2-rectangle4"
            />
            <Link to="/frame1" className="frame2-navlink">
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3ec7fd7a-430a-4489-8a60-274077c04f5e/38865371-9a5c-4cad-88e9-415437c59e3a?org_if_sml=1723"
                alt="Rectangle5I119"
                className="frame2-rectangle5 button"
              />
            </Link>
            <span className="frame2-text">
              <span>Back</span>
            </span>
          </button>
          <div className="frame2-rectangle6">
            <img
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3ec7fd7a-430a-4489-8a60-274077c04f5e/cb7d0da5-192e-4566-8bdc-585443eb1964?org_if_sml=1563"
              alt="Rectangle6I120"
              className="frame2-rectangle61"
            />
          </div>
        </div>
        <span className="frame2-text02">
          <span>Wisercount</span>
        </span>
        <span className="frame2-text04">
          <span>Intelligent banquet hall pricing system</span>
        </span>
        <span className="frame2-text06">
          <span>
            Get accurate price recommendation for banquet halls based on time
            and location
          </span>
        </span>
        <span className="frame2-text08">
          <span>The recommended price is</span>
        </span>
        <span className="output">
          <span>Rs.</span>
        </span>
      </div>
    </div>
  )
}

export default Frame2
