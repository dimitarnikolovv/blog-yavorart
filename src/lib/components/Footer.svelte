<script>
  const currentYear = new Date().getFullYear();
</script>

<footer>
  <div>
    <a href="https://www.webdevlimited.bg" aria-label="Web Dev Limited Logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-683.897 -718.273 2048 2048"
        width="50"
        height="50"
      >
        <ellipse
          style="fill: rgb(29, 35, 42); stroke: rgb(29, 35, 42);"
          cx="340.103"
          cy="305.727"
          rx="1024"
          ry="1024"
          transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -4.547473508864641e-13, -2.2737367544323206e-13)"
        />
        <polygon
          class="cls-1"
          points="921.393 -100.268 550.413 645.448 546.638 645.448 403.84 358.406 744.621 -311.958 606.928 -312.576 336.394 222.799 175.658 -100.268 45.077 -100.268 274.055 346.144 125.649 639.885 -242.551 -100.268 -373.167 -100.268 66.494 756.906 -50.672 988.796 83.572 988.408 342.362 479.33 495.521 777.938 601.513 777.938 1051.973 -100.268 921.393 -100.268"
          style="fill: rgb(255, 255, 255); transform-origin: 339.403px 338.11px;"
        />
      </svg>
    </a>
    <p>
      Изработено с <svg class="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 107.39"
        ><defs
          ><style>
            .cls-1 {
              fill: #ed1b24;
              fill-rule: evenodd;
            }
          </style></defs
        ><path
          class="cls-1"
          d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z"
        ></path></svg
      >
      от
      <br />
      <a href="https://www.webdevlimited.bg" class="link"> Уеб Дев Лимитед ООД </a>
    </p>
  </div>
  <p>All rights reserved Yavor's Art {currentYear} &copy</p>
</footer>

<style lang="scss">
  footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: var(--theme-text-color);
    min-height: 5rem;
    gap: 1rem;
    text-align: center;
    padding-block: 1rem;
    padding-inline: 1.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      & * {
        font-size: 0.8rem;
      }
    }

    .heart {
      width: 1rem;
      margin-inline: 0.25rem;
      display: inline-block;
    }

    .link {
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
