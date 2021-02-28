<template>
  <div>
    <div class="container">
      <svg width="200 " height="200" viewBox="0 0 500 500">
        <rect x="0" y="0" width="100" height="50" fill="red" transform="translate(10, 10) rotate(30)"></rect>
      </svg>
    </div>

    <div class="container">
      <svg width="440" height="440" viewbox="0 0 440 440">
        <circle cx="220" cy="220" r="170" stroke-width="50" stroke="#D1D3D7" fill="none"></circle>
        <circle
            class="circle"
            cx="220"
            cy="220"
            r="170"
            stroke-width="50"
            stroke="#00A5E0"
            fill="none"
            transform="matrix(0 -1 1 0 0 440)"
        />
      </svg>
    </div>

    <div class="container">
      <svg class="icon" viewBox="0 0 1024 1024" width="200" height="200">
        <path class="logo"
              d="M904.464 643.216c-3.518-34.565-15.507-74.342-33.763-112.009l-2.187-4.511h-0.479c-2.161-4.615-4.545-9.142-6.701-13.236a458.729 458.729 0 0 1-3.267-6.277l-9.478-15.807c-3.675-103.406-39.045-201.026-99.69-275.051C685.91 138.732 601.164 96 510.272 96c-23.936 0-47.089 2.454-68.804 7.291-39.065 8.64-78.389 28.621-113.716 57.779-19.867 16.384-38.636 35.678-55.783 57.344-3.961 5-7.259 10.174-10.448 15.177-1.832 2.874-3.562 5.589-5.416 8.286-24.079 34.977-43.243 73.942-56.958 115.814-14.021 42.805-21.998 87.662-23.72 133.371-2.628 3.694-5.159 7.871-7.62 11.932l-1.479 2.437c-3.602 5.362-6.441 11.225-9.446 17.428-1.123 2.318-2.283 4.715-3.526 7.175l-0.058 0.118c-18.117 37.379-30.106 77.152-33.762 111.997-4.973 41.571 2.356 73.888 20.642 91.019 1.106 1.079 2.327 1.893 3.408 2.614 0.376 0.25 0.935 0.623 1.156 0.8l0.322 0.322 0.446 0.336c15.506 11.685 33.458 13.586 53.359 5.648l0.644-0.29c7.778-3.931 15.738-9.061 23.406-15.063l2.191 4.383c2.564 5.965 5.048 11.048 7.706 15.726-7.855 5.096-15.214 10.623-22.727 17.051l-0.457 0.423c-17.164 17.166-26.237 36.444-26.237 55.751 0 34.404 23.541 63.724 66.242 82.539C285.063 919.266 331.141 928 379.382 928c27.61 0 55.822-3.228 81.494-9.312 21.756-4.88 38.396-10.35 51.907-17.087 14.987 7.098 31.508 12.557 51.59 17.066 24.559 6.105 52.371 9.332 80.436 9.332 48.242 0 94.319-8.734 129.744-24.594l0.221-0.103c42.574-20.637 66.021-49.913 66.021-82.437 0-19.307-9.073-38.586-26.237-55.752-7.203-7.202-14.921-13.195-23.432-18.178 0.781-1.469 1.576-2.948 2.36-4.408 1.788-3.328 3.635-6.766 5.261-9.955a65.428 65.428 0 0 0 2.228-3.702c7.381 6.045 15.546 11.131 24.035 14.939l0.595 0.239c20.128 7.153 38.476 5.17 53.055-5.739l0.6-0.449 0.363-0.396c0.229-0.176 0.712-0.503 1.043-0.727 1.034-0.699 2.202-1.488 3.271-2.536 18.196-17.231 25.484-49.535 20.527-90.985z m-138.753 21.105l-0.741 1.905c-5.295 13.608-10.771 27.68-18.069 40.168-2.227 3.835-4.376 7.685-6.454 11.407-5.387 9.647-10.48 18.769-16.653 27.358-1.574 1.711-2.245 3.451-2.708 4.653-0.193 0.502-0.36 0.935-0.618 1.45l-0.356 0.826c-6.109 16.678 1.795 33.839 18.434 39.936 14.04 5.044 27.145 12.327 36.004 20.005 5.202 5.255 6.585 8.888 6.585 10.084 0 10.419-23.526 22.368-30.654 25.744-27.382 12.586-65.617 19.805-104.902 19.805-25.714 0-47.867-2.165-67.717-6.618-18.469-4.162-34.877-10.344-48.771-18.375-9.324-6.159-21.605-6.217-32.129-0.13l-0.3 0.182c-11.746 7.499-29.024 14.003-48.574 18.297-21.4 4.471-43.591 6.645-67.839 6.645-39.863 0-77.118-7.033-104.82-19.767-28.521-13.504-30.737-23.148-30.737-25.782 0-0.974 1.217-4.717 6.773-10.273 7.824-7.824 19.154-14.303 34.639-19.807l0.482-0.172 7.725-3.917 0.422-0.286c13.586-9.229 17.173-28.92 7.833-42.998l-0.189-0.273c-8.151-11.24-15.962-24.296-23.215-38.804-7.922-15.844-14.143-29.723-19.016-42.424-1.784-5.155-5.873-9.245-9.831-13.203l-0.536-0.536-0.626-0.426c-6.834-4.641-15.521-6.363-23.827-4.732-8.04 1.581-14.855 6.052-19.198 12.597-4.078 6.16-9.329 12.648-13.729 16.959-5.323 5.259-10.162 9.025-13.957 11.448-1.489-6.145-2.292-17.041 0.14-33.059l0.032-0.235c3.736-30.718 13.596-63.806 27.764-93.167l0.148-0.325c1.987-4.638 4.44-8.979 6.812-13.177 1.481-2.621 3.012-5.331 4.389-8.045 2.539-5.009 5.798-10.256 8.673-14.886 0.821-1.323 1.616-2.603 2.363-3.825 3.018-4.598 4.685-10.54 4.703-16.766 1.071-47.193 9.336-92.748 24.568-135.408 14.795-41.438 35.412-78.134 61.333-109.138 51.333-62.776 119.132-97.349 190.909-97.349 70.095 0 138.041 34.114 196.511 98.66 53.115 64.769 83.569 151.547 85.769 244.392 0.021 4.845 1.547 10.538 4.299 16.045l0.296 0.538c1.187 1.978 2.392 4.12 3.668 6.388 2.226 3.954 4.74 8.421 7.669 12.886l12.266 24.533h0.49c13.61 29.142 22.637 59.716 26.155 88.657 1.832 18.226 0.989 28.201-0.146 33.497-3.867-2.498-8.184-6.52-13.228-12.294l-0.428-0.452c-3.649-3.574-7.329-8.121-11.226-12.936l-1.412-1.741c-3.601-6.349-9.635-9.366-14.522-11.81l-0.639-0.285c-7.574-2.991-16.23-2.754-23.756 0.652-7.649 3.463-13.444 9.747-16.331 17.704z"></path>
      </svg>
    </div>

    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="100" height="50">
          <set attributeName="x" attributeType="XML" to="10" begin="1s"></set>
          <set attributeName="x" attributeType="XML" to="20" begin="2s"></set>
          <set attributeName="fill" attributeType="XML" to="blue" begin="3s"></set>
        </rect>
      </svg>
    </div>

    <div class="container">
      <svg width="200" height="200">
        <circle cx="0" cy="0" r="30" fill="blue" stroke="black" stroke-width="1">
          <animate attributeName="cx" attributeType="XML" from="0" to="100" dur="5s" repeatCount="2"
                   fill="freeze"></animate>
          <animate attributeName="cy" attributeType="XML" from="0" to="100" dur="5s" repeatCount="2"
                   fill="freeze"></animate>
        </circle>
      </svg>
    </div>

    <div class="container">
      <svg width="400" height="400">
        <polygon points="30 30 70 30 90 70 10 70" fill="#fcc" stroke="black">
          <animate attributeName="points" attributeType="XML" to="50 30 70 50 50 90 30 50" dur="5s" fill="freeze"
                   repeatCount="1"/>
        </polygon>
      </svg>
    </div>

    <div class="container">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect x="0" y="0" width="10" height="10" fill="red">
          <animateMotion
              path="M 10 10 L 110 10 L 110 110 L 10 110 Z"
              dur="5s"
              rotate="0"
              fill="freeze"
              repeatCount="indefinite"
          />
        </rect>
        <path id="motion-path" d="M 10 10 L 110 10 L 110 110 L 10 110 Z" fill="none" stroke="green"/>
      </svg>
    </div>

    <div class="container">
      <svg viewBox="0 0 200 200" width="200" height="200">
        <rect x="0" y="0" rx="0" ry="0" width="10" height="10" fill="red">
          <animateMotion
              id="forward-rect"
              path="M 10 10 L 110 10 L 110 110 L 10 110"
              dur="2s"
              rotate="0"
              fill="freeze"
              begin="0; backward-rect.end + 0.5s"
          />
          <animateMotion
              id="backward-rect"
              path="M 10 110 L 110 110 L 110 10 L 10 10"
              dur="2s"
              rotate="0"
              fill="freeze"
              begin="forward-rect.end + 0.5s"
          />
          <animate
              id="red-to-blue"
              attributeType="XML"
              attributeName="fill"
              begin="0; blue-to-red.end + 1s"
              from="red"
              to="blue"
              dur="2s"
              fill="freeze"
          />
          <animate
              id="blue-to-red"
              attributeType="XML"
              attributeName="fill"
              begin="red-to-blue.end + 1s"
              from="blue"
              to="red"
              dur="2s"
              fill="freeze"
          />
        </rect>
        <path d="M 10 10 L 110 10 L 110 110 L 10 110" fill="none" stroke-width="1" stroke="blue"/>
      </svg>
    </div>

    <div class="container">
      <svg viewBox="0 0 200 200" width="200" height="200">
        <g id="rect1">
          <rect x="0" y="0" rx="0" ry="0" width="100" height="100" fill="red">
            <animate
                attributeType="XML"
                attributeName="fill"
                from="red"
                to="green"
                begin="rect1.click"
                dur="2s"
                fill="freeze"
            />
          </rect>
        </g>
        <animateTransform
            attributeType="XML"
            attributeName="transform"
            type="translate"
            from="0, 0"
            to="50, 50"
            begin="rect1.click"
            dur="2s"
            fill="freeze"
        />
        <rect x="0" y="100" width="100" height="100" fill="blue">
          <animate
              attributeType="XML"
              attributeName="fill"
              from="blue"
              to="green"
              begin="rect1.click"
              dur="2s"
              fill="freeze"
          />
        </rect>
      </svg>
    </div>
  </div>
</template>
<script>
import {onMounted} from 'vue'

export default {
  name: 'SvgAnimation',
  setup(ctx) {
    onMounted(() => {
      const logo = document.getElementsByClassName('logo')[0]
      console.log(logo.getTotalLength())
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  svg {
    border: 1px solid #000;
  }
}

.circle {
  animation: circle 5s linear infinite;
}

/** css 动画 **/
@keyframes circle {
  from {
    stroke-dasharray: 0 1069;
  }
  to {
    stroke-dasharray: 1069 0;
  }
}

.logo {
  fill: none;
  stroke: #333;
  stroke-width: 5;
  animation: logo 10s linear 1 forwards;
}

/** css 动画 **/
@keyframes logo {
  0% {
    fill: #fff;
    stroke-dasharray: 0 5395;
    stroke-dashoffset: 5395;
  }
  50% {
    fill: #fff;
    stroke-dasharray: 5395 0;
    stroke-dashoffset: 0;
  }
  75% {
    fill: red;
    stroke: #fff;
  }
  100% {
    fill: blue;
    stroke: #fff;
  }
}
</style>
